export type Worker = {
  sno: string;
  tno: string;
  name: string;
  father: string;
  addressLines: string[];
  phone: string;
  gratuity: number;
  compensation: number;
  noticePay: number;
  bonus: number;
  elAmount: number;
  exGratia: number;
  totalAmount: number;
  rep1: string;
  rep2: string;
  agDate: string;
  chequeNo: string;
  chequeDate: string;
  wit1: string;
  wit2: string;
  rcptDate: string;
  bankAc: string;
  ifsc: string;
  payDate: string;
};

export type CommonDetails = {
  rep1: string;
  rep2: string;
  agDate: string;
  wit1: string;
  wit2: string;
};

export type PaperSize = "A4" | "Legal" | "Letter";

export type ParseResult = {
  workers: Worker[];
  missingCols: string[];
  sheetName: string;
  stats: {
    bank: number;
    ifsc: number;
    payDate: number;
  };
};

export type TermKey =
  | "bonus"
  | "gratuity"
  | "compensation"
  | "noticePay"
  | "elAmount"
  | "exGratia";

export type FilledTerm = {
  key: TermKey;
  rowId: string;
  valId: string;
  lblId: string;
  value: number;
  visible: boolean;
  letter: string;
};

export type FilledDoc = {
  rep1: string;
  rep2: string;
  dispName: string;
  address: string;
  phone: string;
  terms: FilledTerm[];
  total: number;
  words: string;
  bankDisp: string;
  payDate: string;
  agDate: string;
  wit1: string;
  wit2: string;
  rcptDate: string;
};
