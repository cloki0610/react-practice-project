export enum status {
  TRUE = "true",
  GOOD = "good",
  BAD = "bad",
}

export type historyType = {
  char: string;
  status: status;
};

export type cellType = {
  char: string;
  status: status | null;
};
