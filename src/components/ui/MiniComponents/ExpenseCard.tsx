import { LucideIcon } from "lucide-react";

interface IPROPS {
  title: string;
  amount: number;
  bgColor: string;
  Icon: LucideIcon;
}

export default function ExpenseCard({ title, amount, bgColor, Icon }: IPROPS) {
  return (
    <div
      className="flex  rounded-lg border  items-center   border-black text-white p-3 "
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-1/4 flex justify-center -ml-2">
        <Icon size={35}  />
      </div>
      <div className="flex flex-col w-3/4 ">
        <h1 className="font-semibold text-3xl text-green-400">{amount}</h1>
        <h1 className="font-semibold text-base ">{title}</h1>
      </div>
    </div>
  );
}
