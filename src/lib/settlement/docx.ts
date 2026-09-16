// @ts-nocheck
/* Word (.docx) export — ported from Worker Settlement Generator */

export const DOCX_FONT = 'Latha';
export const DOCX_MIME = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';


export const PAPER_SIZES = {
    A4:     { css: 'A4',     w: '210mm',   h: '297mm',   margin: '15mm 12mm 20mm 15mm', label: 'A4 (210 × 297 mm)' },
    Legal:  { css: 'legal',  w: '215.9mm', h: '355.6mm', margin: '15mm 12mm 20mm 15mm', label: 'Legal (8.5 × 14 in)' },
    Letter: { css: 'letter', w: '215.9mm', h: '279.4mm', margin: '15mm 12mm 20mm 15mm', label: 'Letter (8.5 × 11 in)' }
};

// ===== Word (.docx) export — builds a real Word file from the document exactly as displayed =====
// Self-contained (tiny ZIP writer + WordprocessingML). No external library needed.
// Layout mirrors the printed PDF: same sheet size (A4 / Legal / Letter), same effective margins,
// same font scale (Chrome shrinks the 210mm layout to the printable width when printing), page number
// "பக்கம் X / N" in the footer via Word PAGE / NUMPAGES fields.
const DOCX_PAGE_MM = { A4: { w: 210, h: 297 }, Legal: { w: 215.9, h: 355.6 }, Letter: { w: 215.9, h: 279.4 } };
const DOCX_PRINT_PAD_MM = { top: 10, right: 10, bottom: 10, left: 12 };   // .a4-page padding in @media print
const DOCX_NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"';

function dxMm(mm) { return Math.round(mm / 25.4 * 1440); }
function dxEsc(s) {
    return String(s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '')
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function dxHidden(el) { return el.nodeType === 1 && getComputedStyle(el).display === 'none'; }
function dxIsBold(el) { const fw = getComputedStyle(el).fontWeight; return fw === 'bold' || fw === 'bolder' || parseInt(fw, 10) >= 600; }
function dxIsUnder(el) {
    const cs = getComputedStyle(el);
    if ((cs.textDecorationLine || cs.textDecoration || '').indexOf('underline') >= 0) return true;
    // inline "blank" fields are drawn with a bottom border in the HTML -> underline in Word
    if (/^(SPAN|B|STRONG|I|EM|U|A)$/.test(el.tagName) && cs.borderBottomStyle !== 'none' && parseFloat(cs.borderBottomWidth) > 0) return true;
    return false;
}

// ---------- XML builders ----------
function dxRunXml(text, f) {
    f = f || {};
    const rpr = '<w:rPr><w:rFonts w:ascii="' + DOCX_FONT + '" w:hAnsi="' + DOCX_FONT + '" w:eastAsia="' + DOCX_FONT + '" w:cs="' + DOCX_FONT + '"/>' +
        (f.b ? '<w:b/><w:bCs/>' : '') +
        (f.sz ? '<w:sz w:val="' + f.sz + '"/><w:szCs w:val="' + f.sz + '"/>' : '') +
        (f.u ? '<w:u w:val="single"/>' : '') +
        '<w:lang w:val="en-IN" w:bidi="ta-IN"/></w:rPr>';
    if (f.br) return '<w:r>' + rpr + '<w:br/></w:r>';
    if (f.tab) return '<w:r>' + rpr + '<w:tab/></w:r>';
    return '<w:r>' + rpr + '<w:t xml:space="preserve">' + dxEsc(text) + '</w:t></w:r>';
}
function dxPPr(p) {
    let ppr = '';
    if (p.keepNext) ppr += '<w:keepNext/>';
    if (p.keepLines) ppr += '<w:keepLines/>';
    if (p.pageBreakBefore) ppr += '<w:pageBreakBefore/>';
    if (p.tabs && p.tabs.length) ppr += '<w:tabs>' + p.tabs.map(t => '<w:tab w:val="left" w:pos="' + t + '"/>').join('') + '</w:tabs>';
    ppr += '<w:spacing w:before="' + (p.before || 0) + '" w:after="' + (p.after || 0) + '" w:line="' + (p.line || 360) + '" w:lineRule="' + (p.lineRule || 'exact') + '"/>';
    if (p.left || p.hanging || p.firstLine) {
        ppr += '<w:ind' + (p.left ? ' w:left="' + p.left + '"' : '') + (p.hanging ? ' w:hanging="' + p.hanging + '"' : '') +
               (p.firstLine ? ' w:firstLine="' + p.firstLine + '"' : '') + '/>';
    }
    if (p.jc && p.jc !== 'left') ppr += '<w:jc w:val="' + p.jc + '"/>';
    return '<w:pPr>' + ppr + '</w:pPr>';
}
function dxParaXml(runsXml, p) { return '<w:p>' + dxPPr(p || {}) + (runsXml || '') + '</w:p>'; }
// empty paragraph with an exact height (used for vertical gaps / spacer divs)
function dxSpacerXml(twips, extra) {
    const p = Object.assign({ line: Math.max(20, Math.round(twips)), lineRule: 'exact' }, extra || {});
    return '<w:p>' + dxPPr(p) + '<w:r><w:rPr><w:sz w:val="2"/><w:szCs w:val="2"/></w:rPr></w:r></w:p>';
}

// ---------- inline content ----------
function dxInlineRuns(node, fmt, out) {
    node.childNodes.forEach(ch => {
        if (ch.nodeType === 3) { out.push({ t: ch.nodeValue, b: fmt.b, u: fmt.u }); return; }
        if (ch.nodeType !== 1) return;
        if (ch.tagName === 'BR') { out.push({ br: true }); return; }
        if (dxHidden(ch)) return;
        dxInlineRuns(ch, { b: fmt.b || dxIsBold(ch), u: fmt.u || dxIsUnder(ch) }, out);
    });
    return out;
}
function dxNormalizeRuns(runs) {   // collapse whitespace like the browser, trim paragraph edges
    const res = []; let prevSpace = true;
    runs.forEach(r => {
        if (r.br) { if (res.length) res.push(r); prevSpace = true; return; }
        let t = r.t.replace(/[ \t\r\n\f]+/g, ' ');
        if (prevSpace) t = t.replace(/^ /, '');
        if (!t) return;
        res.push({ t: t, b: r.b, u: r.u });
        prevSpace = / $/.test(t);
    });
    while (res.length) {
        const last = res[res.length - 1];
        if (last.br) { res.pop(); continue; }
        last.t = last.t.replace(/ $/, '');
        if (!last.t) { res.pop(); continue; }
        break;
    }
    return res;
}

// ---------- element -> item (paragraph / table / spacer) ----------
// ctx: { scale, contentW, items }
function dxPx(ctx, v) { const n = parseFloat(v); return isNaN(n) ? 0 : Math.round(n * 15 * ctx.scale); }

function dxParaItem(el, ctx, opts) {
    opts = opts || {};
    const cs = getComputedStyle(el);
    const fontPx = parseFloat(cs.fontSize) || 17.33;
    const sz = Math.max(2, Math.round(fontPx * 1.5 * ctx.scale));
    const lhPx = parseFloat(cs.lineHeight);
    const line = isNaN(lhPx) ? Math.round(fontPx * 1.7 * 15 * ctx.scale) : Math.round(lhPx * 15 * ctx.scale);
    const ta = cs.textAlign;
    const jc = opts.jc || (ta === 'justify' ? 'both' : ta === 'center' ? 'center' : (ta === 'right' || ta === 'end') ? 'right' : 'left');
    let runs = dxNormalizeRuns(dxInlineRuns(el, { b: dxIsBold(el), u: dxIsUnder(el) }, []));
    const p = { jc: jc, line: line, lineRule: 'exact' };
    const num = el.getAttribute && el.getAttribute('data-num');
    if (num) {   // "1)" numbering drawn by CSS ::before  ->  number + tab + hanging indent
        const padLeft = dxPx(ctx, cs.paddingLeft) || 457;
        p.left = dxPx(ctx, cs.marginLeft) + padLeft;
        p.hanging = padLeft;
        p.tabs = [p.left];
        runs = [{ t: num, b: dxIsBold(el) }, { tab: true }].concat(runs);
    } else {
        const ti = dxPx(ctx, cs.textIndent);
        if (ti > 0) p.firstLine = ti;
        const ml = dxPx(ctx, cs.marginLeft) + dxPx(ctx, cs.paddingLeft);
        if (ml > 0) p.left = ml;
    }
    if (dxIsUnder(el) && dxIsBold(el)) p.keepNext = true;   // headings ("7) ஒப்பந்த ஷரத்துக்கள்", "சாட்சிகள்:-", "நகல் :-")
    if (!runs.length && !opts.allowEmpty) return null;   // empty <p> has no height in the browser either
    const runsXml = runs.map(r => r.tab ? dxRunXml('', { tab: true, sz: sz }) : r.br ? dxRunXml('', { br: true, sz: sz }) : dxRunXml(r.t, { b: r.b, u: r.u, sz: sz })).join('');
    return { kind: 'p', p: p, runs: runsXml, mt: dxPx(ctx, cs.marginTop), mb: dxPx(ctx, cs.marginBottom) };
}

// Items for the content of a table cell / flex child (returned as XML, gaps resolved locally)
function dxCellXmlContent(el, ctx, jcOverride) {
    const sub = { scale: ctx.scale, contentW: ctx.contentW, items: [] };
    const hasBlocks = Array.from(el.children).some(k => /^(P|DIV|H[1-6]|TABLE)$/.test(k.tagName));
    if (hasBlocks) Array.from(el.children).forEach(k => dxBlock(k, sub));
    else { const it = dxParaItem(el, sub, { allowEmpty: true }); if (it) sub.items.push(it); }
    if (!sub.items.length) sub.items.push({ kind: 'p', p: { line: 240, lineRule: 'exact' }, runs: '', mt: 0, mb: 0 });
    if (jcOverride) sub.items.forEach(it => { if (it.kind === 'p') it.p.jc = jcOverride; });
    // cells: ignore the outer margins of first/last item (the browser clips them to the cell box)
    sub.items[0].mt = 0; sub.items[sub.items.length - 1].mb = 0;
    return dxSerialize(sub.items);
}

function dxTableXml(colWidths, rowsXml, opts) {
    opts = opts || {};
    const total = colWidths.reduce((a, b) => a + b, 0);
    const m = opts.cellMar || { top: 0, left: 0, bottom: 0, right: 0 };
    return '<w:tbl><w:tblPr><w:tblW w:w="' + total + '" w:type="dxa"/><w:tblInd w:w="0" w:type="dxa"/>' +
        '<w:tblBorders><w:top w:val="nil"/><w:left w:val="nil"/><w:bottom w:val="nil"/><w:right w:val="nil"/><w:insideH w:val="nil"/><w:insideV w:val="nil"/></w:tblBorders>' +
        '<w:tblLayout w:type="fixed"/><w:tblCellMar><w:top w:w="' + m.top + '" w:type="dxa"/><w:left w:w="' + m.left + '" w:type="dxa"/><w:bottom w:w="' + m.bottom + '" w:type="dxa"/><w:right w:w="' + m.right + '" w:type="dxa"/></w:tblCellMar></w:tblPr>' +
        '<w:tblGrid>' + colWidths.map(w => '<w:gridCol w:w="' + w + '"/>').join('') + '</w:tblGrid>' + rowsXml + '</w:tbl>';
}
function dxTc(width, xml, o) {
    o = o || {};
    let tcpr = '<w:tcW w:w="' + width + '" w:type="dxa"/>';
    if (o.borderTop || o.borderBottom) {
        tcpr += '<w:tcBorders>' + (o.borderTop ? '<w:top w:val="single" w:sz="6" w:space="0" w:color="333333"/>' : '') +
                (o.borderBottom ? '<w:bottom w:val="single" w:sz="6" w:space="0" w:color="333333"/>' : '') + '</w:tcBorders>';
    }
    if (o.mar) tcpr += '<w:tcMar><w:top w:w="' + o.mar.top + '" w:type="dxa"/><w:left w:w="' + o.mar.left + '" w:type="dxa"/><w:bottom w:w="' + o.mar.bottom + '" w:type="dxa"/><w:right w:w="' + o.mar.right + '" w:type="dxa"/></w:tcMar>';
    tcpr += '<w:vAlign w:val="top"/>';
    return '<w:tc><w:tcPr>' + tcpr + '</w:tcPr>' + xml + '</w:tc>';
}
function dxEmptyCellXml() { return dxSpacerXml(240); }

// Flex rows (parties / representatives / signatures / receipt footer) -> border-less table.
// Left-aligned children absorb the free space after them (so text never wraps earlier than in the HTML);
// centred children keep their exact width/position.
function dxFlexRowItem(el, ctx) {
    const kids = Array.from(el.children).filter(k => !dxHidden(k));
    if (!kids.length) return null;
    const pr = el.getBoundingClientRect(), pw = pr.width || 1, W = ctx.contentW;
    const spans = kids.map(k => {
        const r = k.getBoundingClientRect();
        const ta = getComputedStyle(k).textAlign;
        return { k: k, s: Math.max(0, (r.left - pr.left) / pw), e: Math.min(1, (r.right - pr.left) / pw), jc: ta === 'center' ? 'center' : (ta === 'right' || ta === 'end') ? 'right' : null };
    });
    const cols = [], cells = []; let cursor = 0;
    spans.forEach((sp, i) => {
        const start = Math.max(sp.s, cursor);
        const gapBefore = Math.round((start - cursor) * W);
        if (gapBefore > 40) { cols.push(gapBefore); cells.push(dxTc(gapBefore, dxEmptyCellXml())); }
        let end = sp.e;
        if (!sp.jc) end = (i + 1 < spans.length) ? Math.max(sp.e, spans[i + 1].s) : 1;   // absorb free space
        const w = Math.max(150, Math.round((end - start) * W));
        cols.push(w); cells.push(dxTc(w, dxCellXmlContent(sp.k, ctx, sp.jc)));
        cursor = start + w / W;
    });
    const used = cols.reduce((a, b) => a + b, 0);
    if (W - used > 40) { cols.push(W - used); cells.push(dxTc(W - used, dxEmptyCellXml())); }
    else if (used > W) cols[cols.length - 1] -= (used - W);
    const cs = getComputedStyle(el);
    return { kind: 'tbl', xml: dxTableXml(cols, '<w:tr><w:trPr><w:cantSplit/></w:trPr>' + cells.join('') + '</w:tr>'), mt: dxPx(ctx, cs.marginTop), mb: dxPx(ctx, cs.marginBottom) };
}

// HTML <table> (amount table) -> Word table; hidden rows skipped; total-row rule lines kept
function dxHtmlTableItem(tbl, ctx) {
    const rows = Array.from(tbl.querySelectorAll('tr')).filter(r => !dxHidden(r));
    if (!rows.length) return null;
    const tw = tbl.getBoundingClientRect().width || 1, W = ctx.contentW;
    const cols = Array.from(rows[0].children).map(td => Math.round(td.getBoundingClientRect().width / tw * W));
    const diff = W - cols.reduce((a, b) => a + b, 0); if (cols.length) cols[cols.length - 1] += diff;
    const rowsXml = rows.map(r => '<w:tr><w:trPr><w:cantSplit/></w:trPr>' + Array.from(r.children).map((td, i) => {
        const cs = getComputedStyle(td);
        return dxTc(cols[i] || 1000, dxCellXmlContent(td, ctx), {
            mar: { top: dxPx(ctx, cs.paddingTop), left: dxPx(ctx, cs.paddingLeft), bottom: dxPx(ctx, cs.paddingBottom), right: dxPx(ctx, cs.paddingRight) },
            borderTop: cs.borderTopStyle !== 'none' && parseFloat(cs.borderTopWidth) > 0,
            borderBottom: cs.borderBottomStyle !== 'none' && parseFloat(cs.borderBottomWidth) > 0
        });
    }).join('') + '</w:tr>').join('');
    const cs = getComputedStyle(tbl);
    return { kind: 'tbl', xml: dxTableXml(cols, rowsXml), mt: dxPx(ctx, cs.marginTop), mb: dxPx(ctx, cs.marginBottom) };
}

function dxPush(ctx, it) { if (it) ctx.items.push(it); return it; }

function dxBlock(el, ctx) {
    if (el.nodeType !== 1 || dxHidden(el)) return;
    const tag = el.tagName;
    if (tag === 'TABLE') { dxPush(ctx, dxHtmlTableItem(el, ctx)); return; }
    if (tag === 'P' || /^H[1-6]$/.test(tag)) { dxPush(ctx, dxParaItem(el, ctx)); return; }
    if (tag === 'DIV' || tag === 'SECTION') {
        const cs = getComputedStyle(el);
        const kids = Array.from(el.children).filter(k => !dxHidden(k));
        if (!kids.length) {
            if (el.textContent.trim() === '') {   // spacer div
                const h = dxPx(ctx, cs.height);
                if (h > 0) dxPush(ctx, { kind: 'spacer', h: h, mt: dxPx(ctx, cs.marginTop), mb: dxPx(ctx, cs.marginBottom) });
                return;
            }
            dxPush(ctx, dxParaItem(el, ctx)); return;
        }
        if (cs.display === 'flex' && kids.length >= 2 && cs.flexDirection !== 'column') { dxPush(ctx, dxFlexRowItem(el, ctx)); return; }
        const hasBlocks = kids.some(k => /^(P|DIV|TABLE|H[1-6]|SECTION|UL|OL)$/.test(k.tagName));
        if (!hasBlocks) { dxPush(ctx, dxParaItem(el, ctx)); return; }
        // container: its margins collapse with the first/last child (CSS margin collapsing)
        const startLen = ctx.items.length;
        kids.forEach(k => dxBlock(k, ctx));
        if (ctx.items.length > startLen) {
            const first = ctx.items[startLen], last = ctx.items[ctx.items.length - 1];
            first.mt = Math.max(first.mt || 0, dxPx(ctx, cs.marginTop));
            last.mb = Math.max(last.mb || 0, dxPx(ctx, cs.marginBottom));
        }
        return;
    }
    dxPush(ctx, dxParaItem(el, ctx));
}

// Items -> XML. Vertical gap between two blocks = max(margin-bottom, margin-top) like CSS.
// The gap is written as "spacing after" of the previous paragraph (or "before" of a paragraph that follows a table),
// so the result is identical in Word and LibreOffice regardless of their paragraph-spacing rules.
function dxSerialize(items) {
    const out = [];
    for (let i = 0; i < items.length; i++) {
        const it = items[i], prev = items[i - 1], next = items[i + 1];
        const gapAfter = next ? Math.max(it.mb || 0, next.mt || 0) : 0;
        const gapBefore = (prev && prev.kind === 'tbl') ? Math.max(prev.mb || 0, it.mt || 0) : 0;
        if (it.kind === 'p') {
            it.p.before = gapBefore; it.p.after = (next && next.kind !== 'tbl') ? gapAfter : (next ? gapAfter : 0);
            out.push(dxParaXml(it.runs, it.p));
        } else if (it.kind === 'spacer') {
            out.push(dxSpacerXml(it.h, { before: gapBefore, after: gapAfter, pageBreakBefore: it.pageBreakBefore }));
        } else {   // table
            if (it.pageBreakBefore) out.push('<w:p>' + dxPPr({ line: 20, lineRule: 'exact' }) + '<w:r><w:br w:type="page"/></w:r></w:p>');
            out.push(it.xml);
            if (next && next.kind === 'tbl') out.push(dxSpacerXml(Math.max(gapAfter, 20)));   // Word needs a paragraph between tables
        }
    }
    return out.join('');
}

function dxFooterXml() {
    const f = { b: true, sz: 20 };
    const fld = (instr) => '<w:fldSimple w:instr=" ' + instr + ' "><w:r><w:rPr><w:b/><w:bCs/><w:sz w:val="20"/><w:szCs w:val="20"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple>';
    return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:ftr ' + DOCX_NS + '><w:p><w:pPr><w:spacing w:before="0" w:after="0" w:line="276" w:lineRule="auto"/><w:jc w:val="center"/></w:pPr>' +
        dxRunXml('பக்கம் ', f) + fld('PAGE') + dxRunXml(' / ', f) + fld('NUMPAGES') + '</w:p></w:ftr>';
}

// Build the .docx bytes for the document as it is displayed right now (current worker / current edits)
export function buildWorkerDocx(root, paperKey) {
    paperKey = paperKey || 'A4';
    root = root || document;
    const pm = DOCX_PAGE_MM[paperKey] || DOCX_PAGE_MM.A4;
    const mParts = ((typeof PAPER_SIZES !== 'undefined' && PAPER_SIZES[paperKey]) ? PAPER_SIZES[paperKey].margin : '15mm 12mm 20mm 15mm').split(/\s+/).map(parseFloat);
    const pageMar = { top: mParts[0], right: mParts[1], bottom: mParts[2], left: mParts[3] };
    // Chrome prints the full-width layout scaled down to the printable width -> same scale here
    const scale = (pm.w - pageMar.left - pageMar.right) / pm.w;
    const mar = {
        top: dxMm(pageMar.top + DOCX_PRINT_PAD_MM.top * scale), bottom: dxMm(pageMar.bottom + DOCX_PRINT_PAD_MM.bottom * scale),
        left: dxMm(pageMar.left + DOCX_PRINT_PAD_MM.left * scale), right: dxMm(pageMar.right + DOCX_PRINT_PAD_MM.right * scale),
        header: dxMm(8), footer: dxMm(pageMar.bottom / 2 + 2)
    };
    const pgW = dxMm(pm.w), pgH = dxMm(pm.h);
    const ctx = { scale: scale, contentW: pgW - mar.left - mar.right, items: [] };
    root.querySelectorAll('.a4-page').forEach((page, idx) => {
        const startLen = ctx.items.length;
        Array.from(page.children).forEach(k => dxBlock(k, ctx));
        if (idx > 0 && ctx.items.length > startLen) {
            const first = ctx.items[startLen];
            if (first.kind === 'p') first.p.pageBreakBefore = true; else first.pageBreakBefore = true;
            first.mt = 0;
        }
    });
    if (ctx.items.length) ctx.items[0].mt = 0;
    const bodyXml = dxSerialize(ctx.items);
    const sectPr = '<w:sectPr><w:footerReference w:type="default" r:id="rId3"/><w:pgSz w:w="' + pgW + '" w:h="' + pgH + '"/>' +
        '<w:pgMar w:top="' + mar.top + '" w:right="' + mar.right + '" w:bottom="' + mar.bottom + '" w:left="' + mar.left + '" w:header="' + mar.header + '" w:footer="' + mar.footer + '" w:gutter="0"/>' +
        '<w:cols w:space="708"/><w:docGrid w:linePitch="360"/></w:sectPr>';
    const documentXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document ' + DOCX_NS + '><w:body>' + bodyXml + sectPr + '</w:body></w:document>';
    const defSz = Math.round(17.33 * 1.5 * scale);
    const stylesXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles ' + DOCX_NS + '><w:docDefaults><w:rPrDefault><w:rPr>' +
        '<w:rFonts w:ascii="' + DOCX_FONT + '" w:hAnsi="' + DOCX_FONT + '" w:eastAsia="' + DOCX_FONT + '" w:cs="' + DOCX_FONT + '"/><w:sz w:val="' + defSz + '"/><w:szCs w:val="' + defSz + '"/><w:lang w:val="en-IN" w:eastAsia="en-US" w:bidi="ta-IN"/>' +
        '</w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="0" w:line="240" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>' +
        '<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>' +
        '<w:style w:type="table" w:default="1" w:styleId="TableNormal"><w:name w:val="Normal Table"/><w:uiPriority w:val="99"/><w:semiHidden/><w:tblPr><w:tblInd w:w="0" w:type="dxa"/><w:tblCellMar><w:top w:w="0" w:type="dxa"/><w:left w:w="0" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/><w:right w:w="0" w:type="dxa"/></w:tblCellMar></w:tblPr></w:style>' +
        '<w:style w:type="paragraph" w:styleId="Footer"><w:name w:val="footer"/><w:basedOn w:val="Normal"/></w:style></w:styles>';
    const settingsXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:settings ' + DOCX_NS + '><w:defaultTabStop w:val="720"/><w:characterSpacingControl w:val="doNotCompress"/><w:compat><w:compatSetting w:name="compatibilityMode" w:uri="http://schemas.microsoft.com/office/word" w:val="15"/></w:compat></w:settings>';
    const contentTypes = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
        '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>' +
        '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
        '<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>' +
        '<Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/>' +
        '<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>' +
        '<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/></Types>';
    const rels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
        '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/></Relationships>';
    const docRels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
        '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/>' +
        '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/></Relationships>';
    const wName = (root.querySelector('#w_name') || {}).textContent || '';
    const now = new Date().toISOString().replace(/\.\d+Z$/, 'Z');
    const coreXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
        '<dc:title>' + dxEsc('Settlement Agreement - ' + wName) + '</dc:title><dc:creator>Worker Settlement Generator</dc:creator>' +
        '<dcterms:created xsi:type="dcterms:W3CDTF">' + now + '</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">' + now + '</dcterms:modified></cp:coreProperties>';
    return dxZip([
        { name: '[Content_Types].xml', data: contentTypes },
        { name: '_rels/.rels', data: rels },
        { name: 'docProps/core.xml', data: coreXml },
        { name: 'word/document.xml', data: documentXml },
        { name: 'word/_rels/document.xml.rels', data: docRels },
        { name: 'word/styles.xml', data: stylesXml },
        { name: 'word/settings.xml', data: settingsXml },
        { name: 'word/footer1.xml', data: dxFooterXml() }
    ]);
}

// ---------- minimal ZIP writer (STORE, UTF-8 names) ----------
const DX_CRC = (function () { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1); t[n] = c >>> 0; } return t; })();
function dxCrc32(u8) { let c = 0xFFFFFFFF; for (let i = 0; i < u8.length; i++) c = DX_CRC[(c ^ u8[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
export function dxZip(files) {
    const enc = new TextEncoder();
    const u16 = v => [v & 255, (v >>> 8) & 255], u32 = v => [v & 255, (v >>> 8) & 255, (v >>> 16) & 255, (v >>> 24) & 255];
    const d = new Date();
    const dosTime = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1);
    const dosDate = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
    const parts = [], central = []; let offset = 0;
    files.forEach(f => {
        const name = enc.encode(f.name);
        const data = typeof f.data === 'string' ? enc.encode(f.data) : f.data;

        const crc = dxCrc32(data);
        const lh = new Uint8Array([].concat(u32(0x04034b50), u16(20), u16(0x0800), u16(0), u16(dosTime), u16(dosDate), u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0)));
        parts.push(lh, name, data);
        central.push(new Uint8Array([].concat(u32(0x02014b50), u16(20), u16(20), u16(0x0800), u16(0), u16(dosTime), u16(dosDate), u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0), u16(0), u16(0), u16(0), u32(0), u32(offset))), name);
        offset += lh.length + name.length + data.length;
    });
    const cdSize = central.reduce((s, a) => s + a.length, 0);
    const eocd = new Uint8Array([].concat(u32(0x06054b50), u16(0), u16(0), u16(files.length), u16(files.length), u32(cdSize), u32(offset), u16(0)));
    const all = parts.concat(central, [eocd]);
    const out = new Uint8Array(all.reduce((s, a) => s + a.length, 0));
    let p = 0; all.forEach(a => { out.set(a, p); p += a.length; });
    return out;
}
export function dxDownload(u8, filename, mime) {
    const blob = new Blob([u8], { type: mime || 'application/octet-stream' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = filename;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
}
export function dxSafeName(s) { return String(s || '').trim().replace(/[^A-Za-z0-9._-]+/g, '_').replace(/^_+|_+$/g, ''); }
export function dxFileNameFor(w) {
    if (!w) return 'Worker_Settlement_Template.docx';
    const tno = dxSafeName(w.tno), nm = dxSafeName(w.name);
    return 'Settlement_' + (tno ? tno + '_' : '') + (nm || 'worker') + '.docx';
}
