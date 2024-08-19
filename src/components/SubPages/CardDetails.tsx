import { DataTable } from "@/components/Pages/datatable/Datatable";
import { Button } from "../ui/button";
import { columns } from "../Pages/datatable/columns";
import CardModule from "@/components/SubPages/cards/CardModule";
import ExpenseCard from "../ui/MiniComponents/ExpenseCard";
export default function CardDetails() {
  const data = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@ele.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];

  return (
    <div className="flex p-4 gap-5 bg-[#ffffff]">
      <div className="w-[75%] border border-black">
        <div className="flex justify-between p-5">
          <h1 className="font-bold text-2xl">Credit Card Statement</h1>
          <Button>Add Statement</Button>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
      <div className="w-[25%] border border-black p-5">
        <div>
          <CardModule
            bankName="SBI"
            cardNumber={1234567891234567}
            cardColor="#000"
            cardHolderName="Shanmugaraj"
            cardType="Visa"
            textColor="#fff"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1> Expenditure Summary </h1>
          <ExpenseCard
            title="Total Amount Spent"
            amount={12345}
            bgColor="#000"
          />
          <ExpenseCard
            title="Available Credit Balance"
            amount={122222}
            bgColor="#000"
          />
          <ExpenseCard
            title="Last Month's Spending"
            amount={12345}
            bgColor="#000"
          />
        </div>
      </div>
    </div>
  );
}
