import { Dialog } from "../../ui/dialog";
import CardModule from "./CardModule";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import Addcard from "@/components/Pages/Forms/Addcard";


type CardData = {
  CardHolderName: string;
  CardType: string;
  CardNumber: number;
  CreditLimit: number;
  BankName: string;
  ValidUpto: string;
  BillingCycleStart: string;
  BillingCycleEnd: string;
  cvv: string;
  cardColor: string;
};
export default function CardStructure() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/cardData")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [data, setData] = useState<CardData[]>([]);

  console.log(data);

  return (
    <div className=" mt-5 p-5 border border-black rounded-md">
      <div className=" flex justify-between">
        {" "}
        <div className="flex justify-between w-full mt-5">  <h1 className=" font-bold text-2xl mb-16 ">Cards</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Add Card</Button>
          </DialogTrigger>
          <DialogContent className=" !w-[32%] ">
            <DialogHeader>
              <DialogTitle>Add Card</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <Addcard />
          </DialogContent>
        </Dialog>{" "}</div>
      
      </div>
      <div className="flex justify-evenly flex-wrap  ">
        {data.map((card, index) => (
          <div className="w-[350px]"><CardModule
            key={index}
            bankName={card.BankName}
            cardNumber={card.CardNumber}
            cardHolderName={card.CardHolderName}
            cardType={card.CardType}
            cardColor={card.cardColor}
            textColor="#000"
          /></div>
        ))}
      </div>
    </div>
  );
}
