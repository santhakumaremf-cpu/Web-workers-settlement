import { useEffect, useRef } from "react";
import { DOCUMENT_HTML } from "@/lib/settlement/document-html";
import {
  applyFill,
  restoreTemplate,
  setContentEdit,
} from "@/lib/settlement/fill";
import { PAPER_SIZES } from "@/lib/settlement/docx";
import type { FilledDoc, PaperSize } from "@/lib/settlement/types";

type Props = {
  fill: FilledDoc | null;
  paperSize: PaperSize;
  contentEditMode: boolean;
  templateContent: Array<{ index: number; html: string }> | null;
  onReady?: (root: HTMLDivElement) => void;
};

export function DocumentPages({
  fill,
  paperSize,
  contentEditMode,
  templateContent,
  onReady,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const restored = useRef(false);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    onReadyRef.current?.(root);
    if (!restored.current && templateContent?.length) {
      restoreTemplate(root, templateContent);
      restored.current = true;
    }
  }, [templateContent]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (fill) applyFill(root, fill);
  }, [fill]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    setContentEdit(root, contentEditMode);
  }, [contentEditMode]);

  useEffect(() => {
    const sz = PAPER_SIZES[paperSize] ?? PAPER_SIZES.A4;
    document.documentElement.style.setProperty("--paper-w", sz.w);
    document.documentElement.style.setProperty("--paper-h", sz.h);
    document.documentElement.setAttribute("data-paper", paperSize);
    let st = document.getElementById("pageSizeStyle") as HTMLStyleElement | null;
    if (!st) {
      st = document.createElement("style");
      st.id = "pageSizeStyle";
      document.head.appendChild(st);
    }
    st.textContent = `@page { size: ${sz.css}; margin: ${sz.margin}; }`;
  }, [paperSize]);

  return (
    <div
      ref={(el) => {
        rootRef.current = el;
        if (el) onReadyRef.current?.(el);
      }}
      id="settlement-root"
      className="settlement-doc"
      lang="ta"
      dangerouslySetInnerHTML={{ __html: DOCUMENT_HTML }}
    />
  );
}
