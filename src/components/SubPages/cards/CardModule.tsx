import { Nfc } from "lucide-react";

interface IPROPS {
  bankName: string;
  cardNumber: string;
  cardHolderName: string;
  cardType: string;
  cardColor: string;
id: string;
}

export default function CardModule({
  bankName,
  cardNumber,
  cardHolderName,
  cardType,
  cardColor,
  id
}: IPROPS) {



console.log(id)
  return (
    <div
      className="flex text-black tracking-[1px] flex-col min-w-[300px] w-[100%] h-[100%] min-h-[200px] rounded-xl shadow-xl border-none hover:border-black border cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform ease-in-out"
      style={{ backgroundColor: cardColor }}
    >
      <div className="flex justify-between pt-2 mx-4">
        <h1 className="font-semibold text-xl">{cardType}</h1>
        <h1 className="font-semibold text-xl">{bankName}</h1>
      </div>

      <h1 className="text-xl font-medium tracking-widest pt-[100px] pl-4">
        {cardNumber}
      </h1>
      <div className="flex justify-between pb-4 mx-4 mt-8">
        <p className="uppercase font-semibold">{cardHolderName}</p>
        <div className="uppercase font-medium flex flex-col items-center text-sm -mt-5">
          <span className="font-thin text-[8px] p-0 m-0">Valid Thru</span>
          <h1 className="tracking-[2px]">10/29</h1>
        </div>
      </div>
      <div className="bg-[#ffe344] w-16 rounded-md h-10 -mt-[170px] ml-4 grid items-center">
        <Nfc className="ml-[100px]" size={25} />
      </div>
    </div>
  );
}
