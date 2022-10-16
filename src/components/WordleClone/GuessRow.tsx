import { cellType } from "../../interfaces/history";
import { Cell } from "./Cell";

export const GuessRow = ({ row }: { row: cellType[] }) => {
  return (
    <tr>
      {row.map((c, i) => (
        <Cell key={`cell-${i}`} char={c.char} status={c.status} />
      ))}
    </tr>
  );
};
