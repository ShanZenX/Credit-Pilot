
import { BlockPicker } from "react-color";
import { useState } from "react";
import "tippy.js/dist/tippy.css";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';
import { DatePicker } from '../../ui/Datepicker';
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";


type FormValues = {
  CardHolderName: string;
  CardType: string;
  CardNumber: number;
  CreditLimit: number;
  BankName: string;
  ValidUpto: Date;
  BillingCycleStart: Date;
  BillingCycleEnd: Date;
  cvv: number;
};

export default function AddCard() {
  
  
  

  const [selectedColor, setSelectedColor] = useState<string>("#000");

  const { register, handleSubmit, setValue } = useForm<FormValues>();

  const [step, setStep] = useState<number>(1);

  const prevStep = () => setStep((prev) => prev - 1);
  const nextStep = () => setStep((prev) => prev + 1);

  const onSubmit = (data: FormValues) => {
    console.log({ ...data, CardColor: selectedColor });
  };

  return (
    <form
      className="flex flex-col border border-black p-5 gap-4 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      {step === 1 && (
        <>
          {" "}
          <span className="flex flex-col ">
            <Label> Card Holder Name</Label>
            <Input
              type="text"
              id="UserName"
              {...register("CardHolderName", { required: true })}
              placeholder="User Name"
            />
          </span>
          <span className="flex flex-col">
            <Label className="text-slate-700">Card Number</Label>
            <Input
              type="number"
              id="CardNumber"
              {...register("CardNumber", { required: true })}
              placeholder="Card Number"
              maxLength={16}
            />
          </span>
          <div className="flex gap-5 ">
            <span className="flex flex-col w-[50%]">
              <Label className="text-slate-700">Valid Upto</Label>
              <DatePicker
                onDateChange={(date) => setValue("ValidUpto", date)}
              />
            </span>
            <span className=" flex flex-col w-[50%]">
              <Label className="text-slate-700">Cvv</Label>
              <Input
                type="number"
                id="cvv"
                {...register("cvv", { required: true })}
                placeholder="Cvv"
                maxLength={16}
              />
            </span>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          {" "}
          <span className="flex flex-col ">
            <Label className="text-slate-700">Bank Name</Label>
            <Input
              type="text"
              id="BankName"
              {...register("BankName", { required: true })}
              placeholder="Bank Name"
            />
          </span>
          <span className="flex flex-col">
            <Label className="text-slate-700">Credit Limit</Label>
            <Input
              type="number"
              id="CreditLimit"
              {...register("CreditLimit", { required: true })}
              placeholder="Credit Limit"
            />
          </span>
          <div className="flex gap-5">
            <span className="flex flex-col w-[50%]">
              <Label className="text-slate-700">Billing Cycle Start Date</Label>
              <DatePicker
                onDateChange={(date) => setValue("BillingCycleStart", date)}
              />
            </span>
            <span className="flex flex-col w-[50%]">
              <Label className="text-slate-700">Billing Cycle End Date</Label>
              <DatePicker
                onDateChange={(date) => setValue("BillingCycleEnd", date)}
              />
            </span>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <span className="flex flex-col w- ">
              <Label className="text-slate-700">Card Type</Label>
              <Input
                type="text"
                id="CardType"
                {...register("CardType", { required: true })}
                placeholder="Card Type"
              />
            </span>
            <div className="flex justify-between">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={"default"}  style={{backgroundColor:selectedColor}}>
                    Pick Card Color
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <BlockPicker
                    color={selectedColor}
                    onChange={(color) => setSelectedColor(color.hex)}
                  />
                </PopoverContent>
              </Popover>

              {/* <div
                className="w-full ml-5 h-10 rounded-sm shadow-md"
                style={{ backgroundColor: selectedColor }}
              ></div> */}
            </div>
          </div>
        </>
      )}

      <div className="flex justify-between">
        {step > 1 && <Button onClick={prevStep}>previous </Button>}
        {step === 2 && <Button type="submit">Save changes</Button>}
        {step < 2 && <Button onClick={nextStep}>Next </Button>}
      </div>
    </form>
  );
}
