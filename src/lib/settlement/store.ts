import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CommonDetails, PaperSize, Worker } from "./types";
import { parseNameFixes } from "./name-fixes";
import { setUserNameFixes } from "./transliterate";

const EMPTY_COMMON: CommonDetails = {
  rep1: "",
  rep2: "",
  agDate: "",
  wit1: "",
  wit2: "",
};

type TemplateSnap = Array<{ index: number; html: string }>;

type SettingsState = {
  common: CommonDetails;
  nameFixes: string;
  paperSize: PaperSize;
  templateContent: TemplateSnap | null;
  setCommon: (patch: Partial<CommonDetails>) => void;
  setNameFixes: (text: string) => void;
  setPaperSize: (size: PaperSize) => void;
  setTemplateContent: (data: TemplateSnap | null) => void;
  applyNameFixesToEngine: () => void;
  exportSettings: () => string;
  importSettings: (json: string) => void;
  resetSettings: () => void;
};

export const useSettings = create<SettingsState>()(
  persist(
    (set, get) => ({
      common: { ...EMPTY_COMMON },
      nameFixes: "",
      paperSize: "A4",
      templateContent: null,
      setCommon: (patch) =>
        set((s) => ({ common: { ...s.common, ...patch } })),
      setNameFixes: (text) => {
        set({ nameFixes: text });
        const maps = parseNameFixes(text);
        setUserNameFixes(maps.words, maps.phrases);
      },
      setPaperSize: (size) => set({ paperSize: size }),
      setTemplateContent: (data) => set({ templateContent: data }),
      applyNameFixesToEngine: () => {
        const maps = parseNameFixes(get().nameFixes);
        setUserNameFixes(maps.words, maps.phrases);
      },
      exportSettings: () => {
        const s = get();
        return JSON.stringify(
          {
            version: 1,
            common: s.common,
            nameFixes: s.nameFixes,
            paperSize: s.paperSize,
            templateContent: s.templateContent,
          },
          null,
          2,
        );
      },
      importSettings: (json) => {
        const d = JSON.parse(json) as Partial<{
          common: CommonDetails;
          nameFixes: string;
          paperSize: PaperSize;
          templateContent: TemplateSnap | null;
        }>;
        set({
          common: { ...EMPTY_COMMON, ...(d.common || {}) },
          nameFixes: d.nameFixes || "",
          paperSize: d.paperSize || "A4",
          templateContent: d.templateContent ?? null,
        });
        const maps = parseNameFixes(d.nameFixes || "");
        setUserNameFixes(maps.words, maps.phrases);
      },
      resetSettings: () => {
        set({
          common: { ...EMPTY_COMMON },
          nameFixes: "",
          paperSize: "A4",
          templateContent: null,
        });
        setUserNameFixes({}, []);
      },
    }),
    {
      name: "workerSettlementSettings_v1",
      partialize: (s) => ({
        common: s.common,
        nameFixes: s.nameFixes,
        paperSize: s.paperSize,
        templateContent: s.templateContent,
      }),
    },
  ),
);

type WorkersState = {
  workers: Worker[];
  currentIdx: number;
  fileName: string;
  missingCols: string[];
  stats: { bank: number; ifsc: number; payDate: number } | null;
  contentEditMode: boolean;
  setParsed: (opts: {
    workers: Worker[];
    fileName: string;
    missingCols: string[];
    stats: { bank: number; ifsc: number; payDate: number };
  }) => void;
  setCurrentIdx: (idx: number) => void;
  setContentEditMode: (on: boolean) => void;
  clearWorkers: () => void;
};

export const useWorkers = create<WorkersState>()((set) => ({
  workers: [],
  currentIdx: 0,
  fileName: "",
  missingCols: [],
  stats: null,
  contentEditMode: false,
  setParsed: ({ workers, fileName, missingCols, stats }) =>
    set({
      workers,
      fileName,
      missingCols,
      stats,
      currentIdx: 0,
    }),
  setCurrentIdx: (idx) => set({ currentIdx: idx }),
  setContentEditMode: (on) => set({ contentEditMode: on }),
  clearWorkers: () =>
    set({
      workers: [],
      currentIdx: 0,
      fileName: "",
      missingCols: [],
      stats: null,
    }),
}));
