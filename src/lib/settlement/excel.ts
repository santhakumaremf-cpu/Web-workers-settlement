import * as XLSX from "xlsx";
import type { ParseResult, Worker } from "./types";

type Cell = string | number | boolean | Date | null | undefined;

function norm(c: Cell): string {
  return String(c === undefined || c === null ? "" : c)
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
function isBlank(c: Cell): boolean {
  return c === undefined || c === null || String(c).trim() === "";
}
function isNumLike(c: Cell): boolean {
  return !isBlank(c) && /^\d+(\.0+)?$/.test(String(c).trim());
}

const DISTRICTS = [
  "namakkal",
  "salem",
  "erode",
  "karur",
  "dharmapuri",
  "krishnagiri",
  "coimbatore",
  "tiruppur",
  "tirupur",
  "dindigul",
  "madurai",
  "thanjavur",
  "vellore",
  "perambalur",
  "ariyalur",
  "cuddalore",
  "villupuram",
  "kallakurichi",
  "tirupattur",
  "ranipet",
  "trichy",
  "tiruchirappalli",
  "tiruchirapalli",
  "theni",
  "tenkasi",
  "tirunelveli",
  "thoothukudi",
  "kanyakumari",
  "virudhunagar",
  "sivagangai",
  "ramanathapuram",
  "pudukkottai",
  "nagapattinam",
  "mayiladuthurai",
  "thiruvarur",
  "chengalpattu",
  "kancheepuram",
  "kanchipuram",
  "tiruvallur",
  "tiruvannamalai",
  "nilgiris",
  "chennai",
];

function looksLikeHeaderRow(cells: string[]): boolean {
  return cells.some(
    (c) =>
      /^s\.?\s*no\.?$/.test(c) ||
      /^(t|ticket|token)\.?\s*no\.?$/.test(c) ||
      c === "name" ||
      /^(emp(loyee)?|worker)\.?\s*(no|name|code)/.test(c),
  );
}

function pd(v: Cell): string {
  if (v === undefined || v === null || v === 0 || v === "" || v === "0" || v === "-")
    return "";
  const fmtD = (d: Date, utc: boolean) => {
    const dd = utc ? d.getUTCDate() : d.getDate();
    const mm = (utc ? d.getUTCMonth() : d.getMonth()) + 1;
    const yy = utc ? d.getUTCFullYear() : d.getFullYear();
    return (
      String(dd).padStart(2, "0") +
      "." +
      String(mm).padStart(2, "0") +
      "." +
      yy
    );
  };
  if (typeof v === "number") {
    if (v < 20000) return "";
    return fmtD(new Date(Math.round((v - 25569) * 86400 * 1000)), true);
  }
  if (v instanceof Date) return fmtD(v, false);
  return String(v).trim();
}

export function parseWorkbook(data: ArrayBuffer | Uint8Array): ParseResult {
  const wb = XLSX.read(data, { type: "array" });
  let sheetName = wb.SheetNames[0] ?? "";
  for (const sn of wb.SheetNames) {
    const rws = XLSX.utils.sheet_to_json<(Cell | undefined)[]>(wb.Sheets[sn], {
      header: 1,
    }).slice(0, 25);
    if (
      rws.some((rw) =>
        looksLikeHeaderRow((rw || []).map((c) => norm(c as Cell))),
      )
    ) {
      sheetName = sn;
      break;
    }
  }
  const sheet = wb.Sheets[sheetName];
  if (!sheet) throw new Error("Excel sheet காணப்படவில்லை");
  const rows = XLSX.utils.sheet_to_json<(Cell | undefined)[]>(sheet, {
    header: 1,
  });
  const range = XLSX.utils.decode_range(sheet["!ref"] || "A1");
  const rowOffset = range.s.r;

  let headerIdx = -1;
  for (let h = 0; h < Math.min(rows.length, 25); h++) {
    const cells = (rows[h] || []).map((c) => norm(c as Cell));
    if (looksLikeHeaderRow(cells)) {
      headerIdx = h;
      break;
    }
  }
  const hasHeader = headerIdx >= 0;

  let firstDataIdx = -1;
  for (let d = headerIdx + 1; d < rows.length; d++) {
    const r = rows[d] || [];
    if (isNumLike(r[0] as Cell) && (!isBlank(r[1] as Cell) || !isBlank(r[2] as Cell))) {
      firstDataIdx = d;
      break;
    }
  }
  if (firstDataIdx < 0) firstDataIdx = hasHeader ? headerIdx + 1 : 0;

  const hdrRows = hasHeader ? rows.slice(headerIdx, firstDataIdx) : [];
  const nCols = Math.max(
    range.e.c + 1,
    ...hdrRows.map((r) => (r || []).length),
    1,
  );
  const headers: string[] = [];
  for (let c = 0; c < nCols; c++) {
    headers.push(
      hdrRows
        .map((r) => norm((r || [])[c] as Cell))
        .filter(Boolean)
        .join(" "),
    );
  }

  const findCol = (patterns: RegExp[], fallback: number) => {
    if (hasHeader) {
      for (const re of patterns) {
        const idx = headers.findIndex((h) => h && re.test(h));
        if (idx >= 0) return idx;
      }
      return -1;
    }
    return fallback;
  };

  const COL = {
    sno: findCol([/^s\.?\s*no\.?$/, /^s\.?\s*no/, /^sl\.?\s*no/], 0),
    tno: findCol(
      [/^(t|ticket|token)\.?\s*no/, /^emp(loyee)?\.?\s*(no|code|id)/],
      1,
    ),
    name: findCol([/^name$/, /^(emp(loyee)?|worker)\.?\s*name/], 2),
    fa: findCol([/father|husband|address/], 3),
    phone: findCol([/mobile|phone|cell\s*no/], -1),
    gratuity: findCol([/gratu/], 20),
    compensation: findCol([/compen/], 21),
    notice: findCol([/notice/], 22),
    bonus: findCol([/bonus/], 23),
    el: findCol(
      [
        /^el\b/,
        /\bel\s*(amount|amt|encash)/,
        /earned\s*leave/,
        /leave\s*(amount|encash|salary|wages)/,
      ],
      24,
    ),
    exgratia: findCol([/ex.?gratia/], 25),
    total: findCol(
      [
        /net.*(amount|payable)/,
        /total.*settle/,
        /settle.*(amount|total)/,
        /grand\s*total/,
        /total\s*(amount|payable)/,
      ],
      26,
    ),
    rep1: findCol(
      [
        /(management|mgmt)\s*rep(resentative)?\s*-?\s*1/,
        /rep(resentative)?\s*-?\s*1\b/,
      ],
      27,
    ),
    rep2: findCol(
      [
        /(management|mgmt)\s*rep(resentative)?\s*-?\s*2/,
        /rep(resentative)?\s*-?\s*2\b/,
      ],
      28,
    ),
    agDate: findCol([/agreement\s*date/, /settlement\s*date/], 29),
    chequeNo: findCol([/cheque\s*no/, /check\s*no/], 30),
    chequeDate: findCol([/cheque\s*date/, /check\s*date/], 31),
    wit1: findCol([/witness\s*-?\s*1/], 32),
    wit2: findCol([/witness\s*-?\s*2/], 33),
    rcptDate: findCol([/receipt\s*date/], 34),
    bank: findCol(
      [/bank.*(a\/?c|acc(ount)?)/, /(a\/?c|account)\s*(no|number)/, /^bank\s*no/],
      35,
    ),
    ifsc: findCol([/ifsc/], 36),
    payDate: findCol(
      [
        /pay(ment)?\s*date/,
        /date\s*of\s*pay(ment)?/,
        /online.*date/,
        /(credit|transfer|neft|rtgs|upi).*date/,
      ],
      37,
    ),
  };
  if (COL.sno < 0) COL.sno = 0;
  if (COL.tno < 0) COL.tno = 1;
  if (COL.name < 0) COL.name = 2;
  if (COL.fa < 0) COL.fa = 3;

  const essentials: Array<[keyof typeof COL, string]> = [
    ["gratuity", "Gratuity"],
    ["compensation", "Compensation"],
    ["notice", "Notice Pay"],
    ["bonus", "Bonus"],
    ["total", "Net/Total Amount"],
    ["bank", "Bank A/c No"],
    ["ifsc", "IFSC"],
    ["payDate", "Payment Date"],
  ];
  const missingCols = hasHeader
    ? essentials.filter((e) => COL[e[0]] < 0).map((e) => e[1])
    : [];

  const getVal = (r: (Cell | undefined)[], c: number): Cell =>
    c === undefined || c === null || c < 0 ? undefined : (r[c] as Cell);
  const getStr = (r: (Cell | undefined)[], c: number): string => {
    const v = getVal(r, c);
    return isBlank(v) ? "" : String(v).trim();
  };
  const getNum = (r: (Cell | undefined)[], c: number): number => {
    const v = getVal(r, c);
    if (isBlank(v)) return 0;
    if (typeof v === "number") return v;
    const n = parseFloat(String(v).replace(/[^0-9.\-]/g, ""));
    return isNaN(n) ? 0 : n;
  };

  const cellText = (rIdx: number, cIdx: number): string => {
    if (cIdx === undefined || cIdx === null || cIdx < 0) return "";
    const cell = sheet[XLSX.utils.encode_cell({ r: rIdx + rowOffset, c: cIdx })];
    if (!cell || cell.v === undefined || cell.v === null) return "";
    if (typeof cell.v === "number") {
      if (cell.w && /^[0-9 ]+$/.test(String(cell.w).trim()))
        return String(cell.w).trim();
      return cell.v.toLocaleString("fullwide", { useGrouping: false });
    }
    return String(cell.v).trim();
  };

  const mobileRe = /^mobile\s*(no|number)?\.?\s*:?\s*/i;
  const workers: Worker[] = [];

  for (let i = firstDataIdx; i < rows.length; i++) {
    const r = rows[i];
    if (!r) continue;
    if (isBlank(getVal(r, COL.sno))) continue;
    if (isBlank(getVal(r, COL.tno)) && isBlank(getVal(r, COL.name))) continue;
    if (typeof getVal(r, COL.name) === "number") continue;

    let father = "";
    let addressLines: string[] = [];
    let phoneFromExcel = "";
    const faRaw = getVal(r, COL.fa);
    const pushLine = (txt: Cell) => {
      let t = String(txt || "").trim();
      if (!t) return;
      if (mobileRe.test(t)) {
        phoneFromExcel = t
          .replace(mobileRe, "")
          .replace(/[^0-9+ ,/]/g, "")
          .trim();
        return;
      }
      addressLines.push(t);
    };
    if (typeof faRaw === "string" && /[\r\n]/.test(faRaw)) {
      const lines = faRaw.split(/\r?\n/).map((x) => x.trim()).filter(Boolean);
      father = lines.shift() || "";
      lines.forEach(pushLine);
    } else {
      father = isBlank(faRaw) ? "" : String(faRaw).trim();
      for (let k = 1; k <= 8; k++) {
        const sub = rows[i + k];
        if (!sub) break;
        if (!isBlank(getVal(sub, COL.sno))) break;
        pushLine(getVal(sub, COL.fa));
      }
    }
    if (!phoneFromExcel && COL.phone >= 0) {
      phoneFromExcel = getStr(r, COL.phone).replace(mobileRe, "");
    }

    const cleaned: string[] = [];
    addressLines.forEach((l) => {
      const key = l.replace(/[,.\s]+$/, "").trim().toLowerCase();
      const prev = cleaned.length
        ? cleaned[cleaned.length - 1].replace(/[,.\s]+$/, "").trim().toLowerCase()
        : null;
      if (key && key !== prev) cleaned.push(l);
    });
    if (cleaned.length) {
      const lastKey = cleaned[cleaned.length - 1]
        .replace(/[,.\s]+$/, "")
        .trim()
        .toLowerCase();
      if (DISTRICTS.includes(lastKey)) {
        cleaned[cleaned.length - 1] =
          cleaned[cleaned.length - 1].replace(/[,.\s]+$/, "") + " District";
      }
    }
    addressLines = cleaned;

    const rawName = getStr(r, COL.name)
      .replace(/\s*\.\s*/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    workers.push({
      sno: getStr(r, COL.sno),
      tno: getStr(r, COL.tno),
      name: rawName,
      father,
      addressLines,
      phone: phoneFromExcel,
      gratuity: getNum(r, COL.gratuity),
      compensation: getNum(r, COL.compensation),
      noticePay: getNum(r, COL.notice),
      bonus: getNum(r, COL.bonus),
      elAmount: getNum(r, COL.el),
      exGratia: getNum(r, COL.exgratia),
      totalAmount: getNum(r, COL.total),
      rep1: getStr(r, COL.rep1),
      rep2: getStr(r, COL.rep2),
      agDate: pd(getVal(r, COL.agDate)),
      chequeNo: getStr(r, COL.chequeNo),
      chequeDate: pd(getVal(r, COL.chequeDate)),
      wit1: getStr(r, COL.wit1),
      wit2: getStr(r, COL.wit2),
      rcptDate: pd(getVal(r, COL.rcptDate)),
      bankAc: cellText(i, COL.bank),
      ifsc: cellText(i, COL.ifsc).toUpperCase(),
      payDate: pd(getVal(r, COL.payDate)),
    });
  }

  if (workers.length > 0) {
    const fw = workers[0];
    workers.forEach((w) => {
      w.rep1 = w.rep1 || fw.rep1 || "";
      w.rep2 = w.rep2 || fw.rep2 || "";
      w.agDate = w.agDate || fw.agDate || "";
      w.chequeNo = w.chequeNo || fw.chequeNo || "";
      w.chequeDate = w.chequeDate || fw.chequeDate || "";
      w.wit1 = w.wit1 || fw.wit1 || "";
      w.wit2 = w.wit2 || fw.wit2 || "";
      w.rcptDate = w.rcptDate || fw.rcptDate || "";
      w.payDate = w.payDate || fw.payDate || "";
    });
  }

  const cnt = (k: keyof Worker) => workers.filter((w) => w[k]).length;
  return {
    workers,
    missingCols,
    sheetName,
    stats: {
      bank: cnt("bankAc"),
      ifsc: cnt("ifsc"),
      payDate: cnt("payDate"),
    },
  };
}
