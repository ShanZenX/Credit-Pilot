interface IPROPS {
  title: string;
  amount: number;
  bgColor: string;
}
import { Wallet } from "lucide-react";

export default function ExpenseCard({ title, amount, bgColor }: IPROPS) {
  return (
    <div
      className="flex  rounded-lg border  items-center   border-black text-white p-3"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-1/4">
        {" "}
        <Wallet size={50} />
      </div>
      <div className="flex flex-col w-3/4 ">
        <h1 className="font-semibold text-4xl text-green-400">{amount}</h1>
      <h1 className="font-semibold text-sm ">{title}</h1>
      </div>

    </div>
  );
}
