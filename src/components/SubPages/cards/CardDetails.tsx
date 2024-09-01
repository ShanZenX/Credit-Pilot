import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardModule from "@/components/SubPages/cards/CardModule";
import ExpenseCard from "../../ui/MiniComponents/ExpenseCard";
import { HandCoins, Wallet, Calendar } from "lucide-react";
import { Outlet } from "react-router-dom";

interface CardData {
  id: string; 
  CardHolderName: string;
  CardType: string;
  CardNumber: string;
  CreditLimit: number;
  BankName: string;
  ValidUpto: string;
  BillingCycleStart: string;
  BillingCycleEnd: string;
  cvv: string;
  cardColor: string;

}

export default function CardDetails() {
  const { cardId } = useParams<{ cardId: string }>();
  const [cardData, setCardData] = useState<CardData | null>(null);

  useEffect(() => {
      fetch(`http://localhost:3000/cardData/${cardId}`)
        .then((response) => response.json())
        .then((data) => setCardData(data))
        .catch((error) => console.error("Failed to fetch card data:", error));
    },[cardId]);

console.log("Api :",cardData)
  
  if (!cardData || !cardId) return <div>Loading...</div>; 

  return (
    <div className="flex p-4 gap-5 bg-[#eaeef6] pt-20">
      <div className="w-[75%] border border-black shadow-lg bg-white shadow-[#0000005d]">
        <Outlet context={cardData} />
      </div>
      <div className="w-[25%] border bg-white border-black p-5 flex shadow-lg shadow-[#0000005d] flex-col justify-between h-[89vh]">
        <div className="h-[35%]">
          <h1 className="font-black text-2xl pb-4">Visa Credit Card</h1>
          <CardModule
          key={cardId}
            bankName={cardData.BankName}
            cardNumber={cardData.CardNumber}
            cardColor={cardData.cardColor}
            cardHolderName={cardData.CardHolderName}
            cardType={cardData.CardType}
            id={cardId} 
          />
        </div>
        <div className="flex flex-col gap-2 justify-between h-[371px]">
          <h1 className="font-black text-2xl">Expenditure Summary</h1>
          <ExpenseCard
            title="Total Amount Spent"
            amount={cardData.BankName}
            bgColor="#fff"
            Icon={HandCoins}
          />
          <ExpenseCard
            title="Available Credit Balance"
            amount={cardData.BankName}
            bgColor="#fff"
            Icon={Wallet}
          />
          <ExpenseCard
            title="Last Month's Spending"
            amount={cardData.BankName}
            bgColor="#fff"
            Icon={Calendar}
          />
        </div>
      </div>
    </div>
  );
}
