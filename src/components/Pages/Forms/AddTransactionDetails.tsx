import { DatePicker } from "@/components/ui/Datepicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function AddTransactionDetails() {
  const [transactionDate, setTransactionDate] = useState<Date | null>();
  return (
    <div className="flex flex-col p-10 w-full ">
      <h1 className="font-black text-2xl">Add Transaction Details</h1>
      <form>
        {transactionDate?.toDateString()}
        <div className="flex  ">
          <div>
            <Label> Transaction Date</Label>
            <DatePicker onDateChange={(date) => setTransactionDate(date)} />
          </div>
          <div>
            <Label> Merchant Name</Label>
            <Input type="text"></Input>
          </div>
          <div>
            <Label>Transaction Amount</Label>
            <Input type="number"></Input>
          </div>
          <div>
            <Label> Category</Label>
            <Input type="text"></Input>
          </div>
        </div>
      </form>
    </div>
  );
}
