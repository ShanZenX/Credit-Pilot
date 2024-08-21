import { DataTable } from "@/components/Pages/datatable/Datatable";
import { Button } from "../../ui/button";
import { columns } from "../../Pages/datatable/columns";
import CardModule from "@/components/SubPages/cards/CardModule";
import ExpenseCard from "../../ui/MiniComponents/ExpenseCard";
import { HandCoins } from "lucide-react";
import { Wallet } from "lucide-react";
import { Calendar } from "lucide-react";
import { Link } from 'react-router-dom';

export default function CardDetails() {
  const data = [
      {
        id: "1",
        MerchantName: "Walmart",
        TransactionAmount: 75.25,
        Category: "Groceries",
        TransactionDate: "2024-08-01",
      },
      {
        id: "2",
        MerchantName: "ExxonMobil",
        TransactionAmount: 50.10,
        Category: "Petrol",
        TransactionDate: "2024-08-03",
      },
      {
        id: "3",
        MerchantName: "Amazon",
        TransactionAmount: 120.99,
        Category: "Online Shopping",
        TransactionDate: "2024-08-05",
      },
      {
        id: "4",
        MerchantName: "Starbucks",
        TransactionAmount: 8.50,
        Category: "Food",
        TransactionDate: "2024-08-06",
      },
      {
        id: "5",
        MerchantName: "Delta Airlines",
        TransactionAmount: 350.00,
        Category: "Travel",
        TransactionDate: "2024-08-07",
      },
      {
        id: "6",
        MerchantName: "Best Buy",
        TransactionAmount: 200.75,
        Category: "Electronics",
        TransactionDate: "2024-08-08",
      },
      {
        id: "7",
        MerchantName: "Shell",
        TransactionAmount: 60.00,
        Category: "Petrol",
        TransactionDate: "2024-08-09",
      },
      {
        id: "8",
        MerchantName: "McDonald's",
        TransactionAmount: 15.30,
        Category: "Food",
        TransactionDate: "2024-08-10",
      },
      {
        id: "9",
        MerchantName: "Target",
        TransactionAmount: 95.40,
        Category: "Groceries",
        TransactionDate: "2024-08-11",
      },
      {
        id: "10",
        MerchantName: "Netflix",
        TransactionAmount: 13.99,
        Category: "Subscription",
        TransactionDate: "2024-08-12",
      },
    ];
    

  return (
    <div className="flex p-4 gap-5 bg-[#ffffff] pt-20">
      <div className="w-[75%] border border-black shadow-lg shadow-[#0000005d]">
        <div className="flex justify-between p-5">
          <h1 className="font-bold text-2xl"> Card Statement</h1>
          <Button><Link to={"/Cards/CardDetails/AddTransaction"}>Add Statement</Link></Button>
        </div>
        <DataTable columns={columns} data={data}  />
      </div>
      <div className="w-[25%] border border-black p-5 flex shadow-lg shadow-[#0000005d] flex-col justify-between h-[89vh]">
        <div className="h-[35%]">
          <h1 className="font-black text-2xl pb-4"> Visa Credit Card </h1>

          <CardModule
            bankName="SBI"
            cardNumber={1234567891234567}
            cardColor="#000"
            cardHolderName="Shanmugaraj"
            cardType="Visa"
            textColor="#fff"
            
          />
        </div>
        <div className="flex flex-col gap-2 justify-between h-[371px]">
          <h1 className="font-black text-2xl"> Expenditure Summary </h1>
          <ExpenseCard
            title="Total Amount Spent"
            amount={12345}
            bgColor="#fff"
            Icon={HandCoins}
          />
          <ExpenseCard
            title="Available Credit Balance"
            amount={122222}
            bgColor="#fff"
            Icon={Wallet}
          />
          <ExpenseCard
            title="Last Month's Spending"
            amount={12345}
            bgColor="#fff"
            Icon={Calendar}
          />
        </div>
      </div>
    </div>
  );
}
