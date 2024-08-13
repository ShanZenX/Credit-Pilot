import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { BlockPicker } from "react-color";
import { useState } from "react";
import "tippy.js/dist/tippy.css";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { DatePicker } from "../ui/Datepicker";

type FormValues = {
  UserName: string;
  CardName: string;
  CardNumber: number;
  CreditLimit: number;
  BankName: string;
  ValidUpto: Date;
  BillingCycleStart: Date;
  BillingCycleEnd: Date;
};

export default function AddCard() {
  const [selectedColor, setSelectedColor] = useState<string>("#000");

  const { register, handleSubmit, setValue } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log({ ...data, CardColor: selectedColor });
  };

  return (
    <form
      className="flex flex-col border border-black p-5 gap-4 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-5">
        <span className="flex flex-col w-[50%]">
          <Label>User Name</Label>
          <Input
            type="text"
            id="UserName"
            {...register("UserName", { required: true })}
            placeholder="User Name"
          />
        </span>
        <span className="flex flex-col w-[50%]">
          <Label className="text-slate-700">Card Name</Label>
          <Input
            type="text"
            id="CardName"
            {...register("CardName", { required: true })}
            placeholder="Card Name"
          />
        </span>
      </div>

      <div className="flex gap-5">
        <span className="flex flex-col w-[50%]">
          <Label className="text-slate-700">Card Number</Label>
          <Input
            type="number"
            id="CardNumber"
            {...register("CardNumber", { required: true})}
            placeholder="Card Number"
            maxLength={16}
            max={16}
            
          />
        </span>
        <span className="flex flex-col w-[50%]">
          <Label className="text-slate-700">Credit Limit</Label>
          <Input
            type="number"
            id="CreditLimit"
            {...register("CreditLimit", { required: true })}
            placeholder="Credit Limit"
          />
        </span>
      </div>

      <div className="flex gap-5">
        <span className="flex flex-col w-[50%]">
          <Label className="text-slate-700">Bank Name</Label>
          <Input
            type="text"
            id="BankName"
            {...register("BankName", { required: true })}
            placeholder="Bank Name"
          />
        </span>
        <span className="flex flex-col w-[50%]">
          <Label className="text-slate-700">Valid Upto</Label>
          <DatePicker onDateChange={(date) => setValue("ValidUpto", date)} />
        </span>
      </div>

      <div className="flex gap-5">
        <span className="flex flex-col w-[50%]">
          <Label className="text-slate-700">Billing Cycle Start Date</Label>
          <DatePicker onDateChange={(date) => setValue("BillingCycleStart", date)} />
        </span>
        <span className="flex flex-col w-[50%]">
          <Label className="text-slate-700">Billing Cycle End Date</Label>
          <DatePicker onDateChange={(date) => setValue("BillingCycleEnd", date)} />
        </span>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="default">Pick Card Color</Button>
            </PopoverTrigger>
            <PopoverContent>
              <BlockPicker
                color={selectedColor}
                onChange={(color) => setSelectedColor(color.hex)}
                
              />
            </PopoverContent>
          </Popover>

          <div
            className="w-10 h-10 rounded-sm shadow-md"
            style={{ backgroundColor: selectedColor }}
          ></div>
        </div>
        <Button type="submit">Save changes</Button>
      </div>
    </form>
  );
}
