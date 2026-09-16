import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast, Toaster } from "sonner";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  FileSpreadsheet,
  FileText,
  FolderArchive,
  Printer,
  RotateCcw,
  Search,
  Settings2,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DocumentPages } from "@/components/document-pages";
import { parseWorkbook } from "@/lib/settlement/excel";
import { computeFill, snapshotTemplate, restoreTemplate, applyFill } from "@/lib/settlement/fill";
import { englishToTamil } from "@/lib/settlement/transliterate";
import {
  buildWorkerDocx,
  dxDownload,
  dxFileNameFor,
  dxZip,
  DOCX_MIME,
  PAPER_SIZES,
} from "@/lib/settlement/docx";
import { useSettings, useWorkers } from "@/lib/settlement/store";
import type { PaperSize } from "@/lib/settlement/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const fileRef = useRef<HTMLInputElement>(null);
  const restoreRef = useRef<HTMLInputElement>(null);
  const docRootRef = useRef<HTMLDivElement | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [searchQ, setSearchQ] = useState("");
  const [searchMsg, setSearchMsg] = useState<{ ok: boolean; text: string } | null>(
    null,
  );
  const [nameCheckOpen, setNameCheckOpen] = useState(false);
  const [pageWarn, setPageWarn] = useState(false);

  const workers = useWorkers((s) => s.workers);
  const currentIdx = useWorkers((s) => s.currentIdx);
  const fileName = useWorkers((s) => s.fileName);
  const missingCols = useWorkers((s) => s.missingCols);
  const stats = useWorkers((s) => s.stats);
  const contentEditMode = useWorkers((s) => s.contentEditMode);
  const setParsed = useWorkers((s) => s.setParsed);
  const setCurrentIdx = useWorkers((s) => s.setCurrentIdx);
  const setContentEditMode = useWorkers((s) => s.setContentEditMode);

  const common = useSettings((s) => s.common);
  const nameFixes = useSettings((s) => s.nameFixes);
  const paperSize = useSettings((s) => s.paperSize);
  const templateContent = useSettings((s) => s.templateContent);
  const setCommon = useSettings((s) => s.setCommon);
  const setNameFixes = useSettings((s) => s.setNameFixes);
  const setPaperSize = useSettings((s) => s.setPaperSize);
  const setTemplateContent = useSettings((s) => s.setTemplateContent);
  const applyNameFixesToEngine = useSettings((s) => s.applyNameFixesToEngine);
  const exportSettings = useSettings((s) => s.exportSettings);
  const importSettings = useSettings((s) => s.importSettings);

  useEffect(() => {
    applyNameFixesToEngine();
    const unsub = useSettings.persist.onFinishHydration(() => {
      useSettings.getState().applyNameFixesToEngine();
    });
    try {
      const st = document.createElement("style");
      st.textContent = '@page { @bottom-center { content: "x"; } }';
      document.head.appendChild(st);
      const rule = st.sheet?.cssRules[0] as CSSGroupingRule | undefined;
      const ok = !!(rule && "cssRules" in rule && rule.cssRules.length > 0);
      st.remove();
      setPageWarn(!ok);
    } catch {
      setPageWarn(true);
    }
    return unsub;
  }, [applyNameFixesToEngine]);

  useEffect(() => {
    document.body.classList.toggle("content-edit-mode", contentEditMode);
    return () => document.body.classList.remove("content-edit-mode");
  }, [contentEditMode]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!e.ctrlKey) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        if (currentIdx < workers.length - 1) setCurrentIdx(currentIdx + 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentIdx, workers.length, setCurrentIdx]);

  const current = workers[currentIdx] ?? null;
  const fill = useMemo(
    () => (current ? computeFill(current, common) : null),
    [current, common, nameFixes],
  );

  async function ingestFile(file: File) {
    try {
      const buf = await file.arrayBuffer();
      const result = parseWorkbook(buf);
      if (!result.workers.length) {
        toast.error("தொழிலாளர் தரவுகள் காணப்படவில்லை");
        return;
      }
      setParsed({
        workers: result.workers,
        fileName: file.name,
        missingCols: result.missingCols,
        stats: result.stats,
      });
      const n = result.workers.length;
      toast.success(`${n} தொழிலாளர்கள் ஏற்றப்பட்டனர்`, {
        description: `Bank ${result.stats.bank}/${n} · IFSC ${result.stats.ifsc}/${n} · Payment date ${result.stats.payDate}/${n}`,
      });
      if (result.missingCols.length) {
        toast.warning("சில columns கிடைக்கவில்லை", {
          description: result.missingCols.join(", "),
        });
      }
    } catch (err) {
      toast.error("Excel ஏற்ற முடியவில்லை", {
        description: err instanceof Error ? err.message : String(err),
      });
    }
  }

  function findWorker() {
    const q = searchQ.trim().toLowerCase();
    if (!q) {
      setSearchMsg({ ok: false, text: "Employee No உள்ளிடவும்" });
      return;
    }
    if (!workers.length) {
      setSearchMsg({ ok: false, text: "முதலில் Excel ஏற்றவும்" });
      return;
    }
    let idx = workers.findIndex((w) => String(w.tno).trim().toLowerCase() === q);
    if (idx < 0) idx = workers.findIndex((w) => String(w.sno).trim().toLowerCase() === q);
    if (idx < 0) {
      idx = workers.findIndex(
        (w) =>
          String(w.tno).trim().toLowerCase().includes(q) ||
          String(w.name).trim().toLowerCase().includes(q),
      );
    }
    if (idx < 0) {
      setSearchMsg({ ok: false, text: `"${q}" — தொழிலாளர் கிடைக்கவில்லை` });
      return;
    }
    setCurrentIdx(idx);
    setSearchMsg({
      ok: true,
      text: `${workers[idx].tno} — ${workers[idx].name}`,
    });
  }

  function downloadWordCurrent() {
    const root = docRootRef.current;
    if (!root) return;
    const w = current;
    dxDownload(buildWorkerDocx(root, paperSize), dxFileNameFor(w), DOCX_MIME);
  }

  function downloadWordAll() {
    const root = docRootRef.current;
    if (!root) return;
    if (!workers.length) {
      toast.error("முதலில் Excel ஏற்றவும்");
      return;
    }
    const files: Array<{ name: string; data: Uint8Array }> = [];
    const seen: Record<string, boolean> = {};
    const prev = currentIdx;
    for (let i = 0; i < workers.length; i++) {
      applyFill(root, computeFill(workers[i], common));
      let name = dxFileNameFor(workers[i]);
      if (seen[name]) name = name.replace(/\.docx$/, `_${i + 1}.docx`);
      seen[name] = true;
      files.push({ name, data: buildWorkerDocx(root, paperSize) });
    }
    if (workers[prev]) applyFill(root, computeFill(workers[prev], common));
    dxDownload(
      dxZip(files),
      "Settlement_Word_All_Workers.zip",
      "application/zip",
    );
    toast.success(`${workers.length} Word கோப்புகள் ZIP-ஆக தயாராகின`);
  }

  function saveContent() {
    const root = docRootRef.current;
    if (!root) return;
    setTemplateContent(snapshotTemplate(root));
    toast.success("மாற்றிய content சேமிக்கப்பட்டது");
  }

  function resetContent() {
    if (!confirm("Saved content-ஐ நீக்கி original-க்கு திரும்ப வேண்டுமா?")) return;
    setTemplateContent(null);
    const root = docRootRef.current;
    if (root) {
      root.innerHTML = "";
      // force remount via location — keep settings otherwise
      window.location.reload();
    }
  }

  function backupSettings() {
    const blob = new Blob([exportSettings()], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "worker-settlement-settings.json";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  async function restoreSettings(file: File) {
    try {
      const text = await file.text();
      importSettings(text);
      const root = docRootRef.current;
      const parsed = JSON.parse(text) as { templateContent?: unknown };
      if (root && Array.isArray(parsed.templateContent)) {
        restoreTemplate(root, parsed.templateContent as never);
      }
      toast.success("Settings restore ஆனது");
    } catch {
      toast.error("Settings file படிக்க முடியவில்லை");
    }
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <Toaster
        theme="light"
        position="top-center"
        toastOptions={{
          className: "font-sans",
        }}
      />

      <header className="app-chrome border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-start gap-4">
            <MillMark />
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Rasipuram · Namakkal
              </p>
              <h1 className="font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                திருவள்ளுவர் டெக்ஸ்டைல்ஸ்
              </h1>
              <p className="mt-1 max-w-xl text-sm text-muted text-pretty">
                Worker settlement desk — ID Act 1947, Sec 18(1) ஒப்பந்தம் + சர்வ
                அடக்க ரசீது. Excel உலாவியிலேயே படிக்கப்படும்; எங்கும் upload ஆகாது.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {workers.length > 0 && (
              <Badge tone="ink">
                {currentIdx + 1} / {workers.length}
              </Badge>
            )}
            {fileName && (
              <Badge tone="muted" className="max-w-48 truncate">
                {fileName}
              </Badge>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <section className="app-chrome grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <Card
            className={cn(
              "rounded-2xl",
              dragOver && "ring-2 ring-ring",
            )}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              const f = e.dataTransfer.files[0];
              if (f) void ingestFile(f);
            }}
          >
            <CardHeader>
              <CardTitle>Excel ஏற்றுக</CardTitle>
              <CardDescription>
                Header பெயர் வைத்து columns கண்டுபிடிக்கும். Father/Husband &
                Address பல வரிகளாக இருந்தாலும் சரி.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <input
                ref={fileRef}
                type="file"
                accept=".xlsx,.xls"
                className="sr-only"
                suppressHydrationWarning
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) void ingestFile(f);
                }}
              />
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex min-h-28 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-raised/60 px-4 py-6 text-center transition-colors hover:bg-raised"
              >
                <Upload className="size-5 text-primary" />
                <span className="text-sm font-medium">
                  Drop Excel here, or click to browse
                </span>
                <span className="text-xs text-muted">.xlsx / .xls · stays on this device</span>
              </button>

              <div className="flex flex-wrap gap-2">
                <Button onClick={() => fileRef.current?.click()}>
                  <FileSpreadsheet /> Excel ஏற்றுக
                </Button>
                <Button variant="success" onClick={() => window.print()}>
                  <Printer /> Print / PDF
                </Button>
                <Button variant="secondary" asChild>
                  <a href="/sample-worker-settlement.xlsx" download>
                    <Download /> Sample Excel
                  </a>
                </Button>
                <Button variant="word" onClick={downloadWordCurrent}>
                  <FileText /> Word — இந்த தொழிலாளி
                </Button>
                <Button
                  variant="word"
                  onClick={downloadWordAll}
                  disabled={!workers.length}
                >
                  <FolderArchive /> Word — எல்லோருக்கும்
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-3 rounded-lg bg-raised px-3 py-3">
                <Label htmlFor="paperSize" className="shrink-0">
                  Paper
                </Label>
                <select
                  id="paperSize"
                  value={paperSize}
                  suppressHydrationWarning
                  onChange={(e) => setPaperSize(e.target.value as PaperSize)}
                  className="h-11 rounded-md border border-border bg-surface px-3 text-sm"
                >
                  {(Object.keys(PAPER_SIZES) as PaperSize[]).map((k) => (
                    <option key={k} value={k}>
                      {PAPER_SIZES[k].label}
                    </option>
                  ))}
                </select>
                <p className="flex-1 text-xs text-muted min-w-48">
                  Print dialog-ல் paper size = {PAPER_SIZES[paperSize].label},
                  margins = Default. Footer-ல் பக்கம் எண் தானாக வரும்.
                </p>
              </div>
              {pageWarn && (
                <p className="text-xs font-medium text-warn">
                  இந்த browser-ல் CSS page-number support இல்லை. Chrome அல்லது Edge
                  131+ பயன்படுத்தவும்.
                </p>
              )}
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>பொது விவரங்கள்</CardTitle>
              <CardDescription>
                Excel-ல் column இல்லாதபோது எல்லா தொழிலாளர்களுக்கும் இதுவே. Auto-save.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              <Field
                label="நிர்வாக பிரதிநிதி 1"
                value={common.rep1}
                onChange={(v) => setCommon({ rep1: v })}
              />
              <Field
                label="நிர்வாக பிரதிநிதி 2"
                value={common.rep2}
                onChange={(v) => setCommon({ rep2: v })}
              />
              <Field
                className="sm:col-span-2"
                label="ஒப்பந்த தேதி"
                placeholder="17.09.2026"
                value={common.agDate}
                onChange={(v) => setCommon({ agDate: v })}
              />
              <Field
                label="சாட்சி 1"
                value={common.wit1}
                onChange={(v) => setCommon({ wit1: v })}
              />
              <Field
                label="சாட்சி 2"
                value={common.wit2}
                onChange={(v) => setCommon({ wit2: v })}
              />
            </CardContent>
          </Card>
        </section>

        {workers.length > 0 && (
          <section className="app-chrome mt-4">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>தொழிலாளர்</CardTitle>
                <CardDescription>
                  Ctrl + ← / → முந்தைய / அடுத்தவர். Employee No அல்லது பெயர் தேடலாம்.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex min-w-0 flex-1 gap-2">
                    <Input
                      value={searchQ}
                      onChange={(e) => setSearchQ(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") findWorker();
                      }}
                      placeholder="Employee No அல்லது பெயர்"
                    />
                    <Button variant="secondary" onClick={findWorker}>
                      <Search /> தேடு
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      disabled={currentIdx <= 0}
                      onClick={() => setCurrentIdx(currentIdx - 1)}
                      aria-label="Previous worker"
                    >
                      <ChevronLeft />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      disabled={currentIdx >= workers.length - 1}
                      onClick={() => setCurrentIdx(currentIdx + 1)}
                      aria-label="Next worker"
                    >
                      <ChevronRight />
                    </Button>
                  </div>
                </div>
                {searchMsg && (
                  <p
                    className={cn(
                      "text-sm",
                      searchMsg.ok ? "text-ok" : "text-danger",
                    )}
                  >
                    {searchMsg.text}
                  </p>
                )}
                <select
                  value={currentIdx}
                  suppressHydrationWarning
                  onChange={(e) => setCurrentIdx(Number(e.target.value))}
                  className="h-11 w-full rounded-md border border-border bg-surface px-3 text-sm"
                >
                  {workers.map((w, i) => (
                    <option key={w.tno + i} value={i}>
                      {w.tno} — {w.name}
                    </option>
                  ))}
                </select>
                {stats && (
                  <p className="text-xs text-muted">
                    Bank A/c {stats.bank}/{workers.length} · IFSC {stats.ifsc}/
                    {workers.length} · Payment date {stats.payDate}/{workers.length}
                    {missingCols.length
                      ? ` · Missing: ${missingCols.join(", ")}`
                      : ""}
                  </p>
                )}
              </CardContent>
            </Card>
          </section>
        )}

        <section className="app-chrome mt-4 grid gap-4 lg:grid-cols-2">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>பெயர் திருத்தங்கள்</CardTitle>
              <CardDescription>
                English → தமிழ். ஒரு வரிக்கு ஒன்று. Initials (D, K, R) அப்படியே இருக்கும்.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Textarea
                value={nameFixes}
                onChange={(e) => setNameFixes(e.target.value)}
                placeholder={"Gobi = கோபி\nDuraisamy = துரைசாமி\nKoneripatty = கோனேரிப்பட்டி"}
                rows={5}
              />
              <Button
                variant="secondary"
                size="sm"
                className="self-start"
                onClick={() => setNameCheckOpen((v) => !v)}
              >
                எல்லா பெயர்களும் எப்படி மாறியுள்ளன
              </Button>
              {nameCheckOpen && <NameCheckTable />}
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>ஆவணம் & settings</CardTitle>
              <CardDescription>
                Wording மாற்றி Save செய்க. வேறு கணினிக்கு Backup / Restore.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={contentEditMode ? "default" : "secondary"}
                  onClick={() => setContentEditMode(!contentEditMode)}
                >
                  <Settings2 />
                  {contentEditMode ? "Content Edit ON" : "Content Edit Mode"}
                </Button>
                <Button variant="secondary" onClick={saveContent}>
                  Content Save
                </Button>
                <Button variant="outline" onClick={resetContent}>
                  <RotateCcw /> Reset Content
                </Button>
              </div>
              {contentEditMode && (
                <p className="rounded-md bg-warn-soft px-3 py-2 text-sm text-warn">
                  ஆவண wording-ஐ நேரடியாகத் திருத்தலாம். நிலையாக வைக்க Content Save
                  அழுத்தவும்.
                </p>
              )}
              <Separator />
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" onClick={backupSettings}>
                  Settings Backup
                </Button>
                <Button
                  variant="outline"
                  onClick={() => restoreRef.current?.click()}
                >
                  Restore
                </Button>
                <input
                  ref={restoreRef}
                  type="file"
                  accept="application/json"
                  className="sr-only"
                  suppressHydrationWarning
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) void restoreSettings(f);
                    e.target.value = "";
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-8">
          <div className="app-chrome mb-4 flex items-baseline justify-between gap-3">
            <h2 className="font-display text-xl font-semibold tracking-tight">
              ஆவண முன்னோட்டம்
            </h2>
            <p className="text-xs text-muted">
              Print செய்தால் இந்த panels மறையும். இரண்டு தாள்கள் — ஒப்பந்தம், ரசீது.
            </p>
          </div>
          <div className="doc-viewport rounded-2xl bg-raised/50 px-2 py-6 sm:px-6">
            <DocumentPages
              fill={fill}
              paperSize={paperSize}
              contentEditMode={contentEditMode}
              templateContent={templateContent}
              onReady={(el) => {
                docRootRef.current = el;
              }}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  className,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={cn("flex flex-col gap-1.5", className)}>
      <span className="text-xs font-medium text-muted">{label}</span>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

function MillMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="mt-1 size-12 shrink-0 text-primary"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="46" height="46" rx="10" fill="currentColor" />
      <path
        d="M14 32V16h8.5c3.4 0 5.5 1.9 5.5 4.6 0 1.7-.8 3.1-2.2 3.9 1.7.7 2.8 2.2 2.8 4.2 0 3-2.3 5.3-6.3 5.3H14zm4.2-9.4h4c1.7 0 2.6-.8 2.6-2s-.9-2-2.6-2h-4v4zm0 7.1h4.6c1.9 0 3-.9 3-2.3s-1.1-2.3-3-2.3h-4.6v4.6z"
        fill="#faf7f1"
      />
      <circle cx="36" cy="14" r="2.2" fill="#faf7f1" />
    </svg>
  );
}

function NameCheckTable() {
  const workers = useWorkers((s) => s.workers);
  const nameFixes = useSettings((s) => s.nameFixes);
  if (!workers.length) {
    return <p className="text-sm text-muted">முதலில் Excel ஏற்றவும்.</p>;
  }
  return (
    <div className="max-h-80 overflow-auto rounded-md border border-border bg-surface">
      <table className="w-full text-sm">
        <thead className="sticky top-0 bg-raised text-left">
          <tr>
            <th className="px-3 py-2 font-medium">T.No</th>
            <th className="px-3 py-2 font-medium">English</th>
            <th className="px-3 py-2 font-medium">தமிழ்</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((w) => {
            const rows: Array<[string, string]> = [["பெயர்", w.name]];
            if (w.father) rows.push(["தந்தை/கணவர்", w.father]);
            (w.addressLines || []).forEach((a) => rows.push(["முகவரி", a]));
            return rows.map((r, i) => (
              <tr key={w.tno + i + r[0] + nameFixes} className="border-t border-border">
                {i === 0 && (
                  <td
                    rowSpan={rows.length}
                    className="px-3 py-2 align-top font-medium"
                  >
                    {w.tno || w.sno}
                  </td>
                )}
                <td className="px-3 py-2 align-top text-muted">
                  <span className="mr-1 text-xs text-subtle">{r[0]}:</span>
                  {r[1]}
                </td>
                <td className="px-3 py-2 align-top">{englishToTamil(String(r[1]))}</td>
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
}
