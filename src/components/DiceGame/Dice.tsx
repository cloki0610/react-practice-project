import type { DiceProps } from "../../interfaces/DashType";

export const Dice = ({ diceNum }: DiceProps) => {
    return (
        <div className="mx-auto border-4 border-white rounded-[20px] w-[140px] h-[140px] overflow-hidden">
            <div className="flex justify-center items-center w-full h-full text-[32px] text-center select-none">
                {diceNum}
            </div>
        </div>
    );
};
