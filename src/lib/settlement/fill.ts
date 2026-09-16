import type { CommonDetails, FilledDoc, FilledTerm, TermKey, Worker } from "./types";
import { englishToTamil } from "./transliterate";
import { fmt, numToTamilWords } from "./tamil-words";

const TERM_DEFS: Array<{
  key: TermKey;
  rowId: string;
  valId: string;
  lblId: string;
}> = [
  { key: "bonus", rowId: "row_bonus", valId: "t_bonus", lblId: "lbl_bonus" },
  { key: "gratuity", rowId: "row_gratuity", valId: "t_gratuity", lblId: "lbl_gratuity" },
  {
    key: "compensation",
    rowId: "row_compensation",
    valId: "t_compensation",
    lblId: "lbl_compensation",
  },
  { key: "noticePay", rowId: "row_notice", valId: "t_notice", lblId: "lbl_notice" },
  { key: "elAmount", rowId: "row_el", valId: "t_el", lblId: "lbl_el" },
  { key: "exGratia", rowId: "row_exgratia", valId: "t_exgratia", lblId: "lbl_exgratia" },
];

const ALPHAS = ["a)", "b)", "c)", "d)", "e)", "f)"];

export function computeFill(w: Worker, common: CommonDetails): FilledDoc {
  const tamName = englishToTamil(w.name);
  const dispName =
    w.tno && tamName ? `${w.tno} - ${tamName}` : tamName || w.tno || "";

  const agDate = w.agDate || common.agDate || "";
  const payDate = w.payDate || w.chequeDate || "-----------------";

  const taLines = (w.addressLines || [])
    .map((a) =>
      englishToTamil(String(a))
        .replace(/\s*,\s*/g, ", ")
        .replace(/[,\s]+$/, "")
        .trim(),
    )
    .filter((a) => a !== "");
  const lastPart = (l: string) => l.split(",").pop()?.trim() ?? "";
  const uniqLines = taLines.filter(
    (l, i) => i === 0 || (l !== taLines[i - 1] && l !== lastPart(taLines[i - 1])),
  );

  const terms: FilledTerm[] = [];
  let dispCount = 0;
  for (const t of TERM_DEFS) {
    const value = Number(w[t.key]) || 0;
    const visible = value !== 0;
    terms.push({
      ...t,
      value,
      visible,
      letter: visible ? ALPHAS[dispCount++] ?? "" : "",
    });
  }

  const total =
    parseFloat(String(w.totalAmount)) ||
    terms.reduce((s, t) => s + (t.value || 0), 0);

  const NB = "\u00A0";
  let bankDisp = "________";
  if (w.bankAc && w.ifsc) bankDisp = `${w.bankAc} (IFSC${NB}:${NB}${w.ifsc})`;
  else if (w.bankAc) bankDisp = w.bankAc;
  else if (w.ifsc) bankDisp = `________ (IFSC${NB}:${NB}${w.ifsc})`;

  return {
    rep1: w.rep1 || common.rep1 || "",
    rep2: w.rep2 || common.rep2 || "",
    dispName,
    address: uniqLines.join(", "),
    phone: w.phone || "",
    terms,
    total,
    words: numToTamilWords(total),
    bankDisp,
    payDate,
    agDate,
    wit1: w.wit1 || common.wit1 || "",
    wit2: w.wit2 || common.wit2 || "",
    rcptDate: w.rcptDate || w.payDate || agDate || "",
  };
}

function setText(root: ParentNode, id: string, text: string) {
  const el = root.querySelector("#" + id);
  if (el) el.textContent = text;
}

export function applyFill(root: ParentNode, fill: FilledDoc | null) {
  if (!fill) return;
  setText(root, "rep1", fill.rep1);
  setText(root, "rep2", fill.rep2);
  setText(root, "w_name", fill.dispName);
  setText(root, "w_full_address", fill.address);
  setText(root, "w_phone_label", fill.phone ? "கைபேசி எண் :" : "");
  setText(root, "w_phone", fill.phone);
  for (const t of fill.terms) {
    const row = root.querySelector("#" + t.rowId) as HTMLElement | null;
    if (row) row.style.display = t.visible ? "" : "none";
    setText(root, t.lblId, t.letter);
    setText(root, t.valId, fmt(t.value));
  }
  setText(root, "t_total", fmt(fill.total));
  setText(root, "t_words", fill.words);
  setText(root, "t_total2", fmt(fill.total));
  setText(root, "t_total2_words", fill.words);
  setText(root, "bank_ac", fill.bankDisp);
  setText(root, "r_bank_ac", fill.bankDisp);
  setText(root, "pay_date", fill.payDate);
  setText(root, "r_pay_date", fill.payDate);
  setText(root, "ag_date", fill.agDate);
  setText(root, "wit1", fill.wit1);
  setText(root, "wit2", fill.wit2);
  setText(root, "r_name", fill.dispName);
  setText(root, "r_amount", fmt(fill.total));
  setText(root, "r_amount_words", fill.words);
  setText(root, "rcpt_date", fill.rcptDate);
}

export const EDITABLE_TEMPLATE_SELECTOR = [
  ".doc-title",
  ".party-label-left",
  ".party-mgmt",
  ".company-address p",
  ".rep-left p",
  ".underline-text",
  ".para",
  ".para-no-indent",
  ".terms-title",
  ".terms-table td:first-child",
  ".terms-table .total-row td:first-child",
  ".amount-words-line",
  ".sign-box p",
  ".witness-section h4",
  ".copies-section p",
  ".receipt-title",
  ".receipt-body p",
  ".receipt-footer p",
].join(", ");

export function templateElements(root: ParentNode): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(EDITABLE_TEMPLATE_SELECTOR));
}

export function snapshotTemplate(root: ParentNode): Array<{ index: number; html: string }> {
  return templateElements(root).map((el, i) => ({ index: i, html: el.innerHTML }));
}

export function restoreTemplate(
  root: ParentNode,
  data: Array<{ index: number; html: string }> | null,
) {
  if (!data) return;
  const els = templateElements(root);
  data.forEach((item) => {
    if (els[item.index]) els[item.index].innerHTML = item.html;
  });
}

export function setContentEdit(root: ParentNode, on: boolean) {
  templateElements(root).forEach((el, i) => {
    el.classList.add("template-editable");
    el.dataset.templateIndex = String(i);
    el.setAttribute("spellcheck", "false");
    el.setAttribute("contenteditable", on ? "true" : "false");
  });
}
