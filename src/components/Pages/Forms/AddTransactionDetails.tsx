import { DatePicker } from "@/components/ui/Datepicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CirclePlus } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type FormValues = {
  MerchantName: string;
  TransactionAmount: number;
  Category: string;
  TransactionDate: Date | null;
};

export default function AddTransactionDetails() {
  const { register, handleSubmit, setValue, reset } = useForm<FormValues>();
  const [transactionDate, setTransactionDate] = useState<Date | null>(null);
  const [formValues, setFormValues] = useState<FormValues[] | null>(null);

  const onSubmit = (data: FormValues) => {
    const formData = {
      ...data,
      TransactionDate: transactionDate,
    };
    setFormValues((prevValues) =>
      prevValues ? [...prevValues, formData] : [formData]
    );
    console.log("Form Values:", formData);
    reset();
    setTransactionDate(null);
  };

  const onUpdateTransaction = () => {
    console.log(formValues);
  };
  return (
    <div className="flex flex-col p-10 w-full justify-center items-center  ">
      <div className=" rounded-lg border-none p-5 w-[70%] shadow-2xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col  justify-evenly"
        >
          <h1 className="font-black text-2xl p-3">Add Transaction Details</h1>

          <div className="flex justify-evenly">
            <div className="flex flex-col pt-[6px] w-[200px]">
              <Label>Transaction Date</Label>
              <DatePicker onDateChange={(date) => setTransactionDate(date)} />
            </div>
            <div>
              <Label>Merchant Name</Label>
              <Input
                {...register("MerchantName", { required: true })}
                placeholder="Merchant Name"
                type="text"
              />
            </div>
            <div>
              <Label>Transaction Amount</Label>
              <Input
                {...register("TransactionAmount", { required: true })}
                placeholder="Enter Amount"
                type="number"
              />
            </div>
            <div>
              <Label>Category</Label>
              <Select onValueChange={(value) => setValue("Category", value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Food">Food</SelectItem>
                  <SelectItem value="Petrol">Petrol</SelectItem>
                  <SelectItem value="Travel">Travel</SelectItem>
                  <SelectItem value="Others">Others</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button type="submit">
                <CirclePlus size={30} />
              </Button>
            </div>
          </div>
          <div className="m-5">
            <Table className="border border-black">
              <TableHeader className="border border-black">
                <TableRow className="bg-black !text-white border-black hover:bg-black">
                  <TableHead className="text-white">Transaction Date</TableHead>
                  <TableHead className="text-white">Merchant Name</TableHead>
                  <TableHead className="text-white">
                    Transaction Amount
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Category
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {formValues && formValues.length > 0 ? (
                  formValues.map((data, index) => (
                    <TableRow
                      className="border border-black hover:bg-[#00000019]"
                      key={index}
                    >
                      <TableCell className="font-medium">
                        {data.TransactionDate?.toLocaleDateString()}
                      </TableCell>
                      <TableCell>{data.MerchantName}</TableCell>
                      <TableCell>{data.TransactionAmount}</TableCell>
                      <TableCell className="text-right">
                        {data.Category}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">
                      No transactions found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </form>
        <div className="flex justify-end p-5">
          <Button type="button" onClick={onUpdateTransaction}>
            <Link to={"/Cards/CardDetails"}> Update</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
