import { DatePicker } from "@/components/ui/Datepicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddTransactionDetails() {
  const [transactionDate, setTransactionDate] = useState<Date | null>();
  return (
    <div className="flex flex-col p-10 w-full justify-center items-center ">
      <form className="w-[70%] flex flex-col border border-black p-5 justify-evenly">

        {transactionDate?.toDateString()}
        <h1 className="font-black text-2xl p-3">Add Transaction Details</h1>

        <div className=" flex justify-evenly ">

          <div className="flex flex-col pt-[6px]">
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
            <Select >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent >
                <SelectItem value="Food">Food</SelectItem>
                <SelectItem value="Petrol">Petrol</SelectItem>
                <SelectItem value="Travel">Travel</SelectItem>
                <SelectItem value="Others">Others</SelectItem>

              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
    </div>
  );
}
