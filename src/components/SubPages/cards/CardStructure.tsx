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
import AddCard from "../../Pages/Forms/AddCard";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";

type CardData = {
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
    <div className="  flex justify-center pt-10 bg-[#eaeef6] ">
      <div>
        <div className=" flex justify-center p-5">
          {" "}
          <div className="flex justify-between w-[80%] mt-5">
            {" "}
            <h1 className=" font-bold text-3xl text-[#4746f4] ">My Cards</h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default">Add Card</Button>
              </DialogTrigger>
              <DialogContent className=" !w-[32%] ">
                <DialogHeader>
                  <DialogTitle>Add Card</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <AddCard />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex justify-evenly flex-wrap   ">
          {data.map((card) => (
            <div key={card.id}  className="w-[80%]  flex p-5 m-5 justify-evenly  h-[270px] mb-5 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] bg-[#fff]">
              <Link to={`/cards/${card.id}`}  className=" w-1/3 flex items-center" > 
                <CardModule
                  key={card.id}
                  bankName={card.BankName}
                  cardNumber={card.CardNumber}
                  cardHolderName={card.CardHolderName}
                  cardType={card.CardType}
                  cardColor={card.cardColor}
                  id={card.id}
                />
          
              </Link>
              <div className="flex w-1/3 justify-evenly">
                <div className="flex flex-col justify-evenly  px-5  shadow-inner    bg-[#ffffff]  w-11/12 border-black border">
                  <h1 className="font-extrabold text-2xl">
                    My Total Spending{" "}
                  </h1>
                  <Slider disabled={true} defaultValue={[33]}  max={100} step={1} />
                  <div>
                    {" "}
                    <p className="font-extrabold text-xl text-[#4746f4]">
                      $ 2342289
                    </p>
                    <p className="font-extralight text-[#00000070]">
                      $ 3232323 Available Balance
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-1/3 flex-col h-full justify-evenly gap-4 text-black">
                <div className="   p-3 bg-white   h-1/2 items-center flex flex-col justify-center border-black border">
                  <p className="font-extrabold text-2xl text-[#4746f4]">
                    $ 23232
                  </p>
                  <h1 className="font-extralight">Last Month Savings </h1>
                </div>
                <div className="   bg-white  p-3  h-1/2 items-center flex flex-col justify-center border-black border">
                  <p className="font-extrabold text-2xl text-[#4746f4]">
                    $ 23232
                  </p>
                  <h1 className="font-extralight ">Last Month Spend </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
