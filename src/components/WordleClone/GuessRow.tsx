import { Cell } from "./Cell";
import type { GuessRowProps } from "../../interfaces/WordleTypes";

export const GuessRow = ({ row }: GuessRowProps) => {
  return (
    <tr>
      {row.map((c, i) => (
        <Cell key={`cell-${i}`} char={c.char} status={c.status} />
      ))}
    </tr>
  );
};
