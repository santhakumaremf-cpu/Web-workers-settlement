export type NameFixMaps = {
  words: Record<string, string>;
  phrases: Array<[RegExp, string]>;
};

export function parseNameFixes(text: string): NameFixMaps {
  const words: Record<string, string> = {};
  const phrases: Array<[RegExp, string]> = [];
  String(text || "")
    .split(/\r?\n/)
    .forEach((line) => {
      const m = line.match(
        /^\s*([A-Za-z][A-Za-z .'-]*?)\s*(?:=|:|=>|->|→)\s*(.+?)\s*$/,
      );
      if (!m) return;
      const en = m[1].replace(/\s+/g, " ").trim().toLowerCase();
      const ta = m[2].trim();
      if (!en || !ta) return;
      if (en.includes(" ")) {
        phrases.push([
          new RegExp(
            "\\b" + en.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b",
            "gi",
          ),
          ta,
        ]);
      } else {
        words[en] = ta;
      }
    });
  return { words, phrases };
}
