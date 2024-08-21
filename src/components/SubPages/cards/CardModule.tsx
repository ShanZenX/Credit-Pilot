import { Link } from "react-router-dom";

interface IPROPS {
  bankName: string;
  cardNumber: number;
  cardHolderName: string;
  cardType: string;
  cardColor: string
  textColor: string
}

export default function CardModule({
  bankName,
  cardNumber,
  cardHolderName,
  cardType,
  cardColor,
  textColor,
}: IPROPS) {
  return (
    <Link to={"/Cards/CardDetails"} className= " flex !text-white !bg-black flex-col min-w-[300px] w-[100%] h-[100%] min-h-[200px] rounded-lg shadow-xl border-none  hover:border-black border cursor-pointer hover:shadow-2xl hover:scale-105  transition-transform ease-in-out " style={{backgroundColor : cardColor,color:textColor}}>
      <div className="flex justify-between pt-2 mx-4">
        <h1 className="  font-semibold ">Credit.</h1>
        <h1 className=" font-semibold ">{bankName}</h1>
      </div>

      <h1 className="text-xl font-medium  pt-[110px] pl-4">
        {cardNumber}
      </h1>
      <div className="flex justify-between pb-4 mx-4 mt-6">
        <p className=" uppercase  font-medium  ">
          {cardHolderName}
        </p>
        <p className="uppercase font-medium  text-sm">
          {cardType}
        </p>
      </div>
      <div className=" bg-[#ffe344] w-16 rounded-md h-10 -mt-[160px] ml-4"></div>
    </Link>
  );
}
