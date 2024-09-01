import { BlockPicker } from "react-color";
import { useState } from "react";
import "tippy.js/dist/tippy.css";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DatePicker } from "../../ui/Datepicker";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Link } from "react-router-dom";

type FormValues = {
  CardHolderName: string;
  CardType: string;
  CardNumber: number; 
  CreditLimit: number;
  BankName: string;
  ValidUpto: string;
  BillingCycleStart: string;
  BillingCycleEnd: string;
  cvv: number;
  cardColor: string;
};

export default function AddCard() {
  const [selectedColor, setSelectedColor] = useState<string>("#000");
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<FormValues>();
  const [step, setStep] = useState<number>(1);

  const prevStep = () => setStep((prev) => prev - 1);
  const nextStep = () => setStep((prev) => prev + 1);

  const onSubmit = (data: FormValues) => {

    const formattedData = { ...data,cardColor: selectedColor} 
    axios.post("http://localhost:3000/cardData", formattedData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
      console.log({ ...data, cardColor: selectedColor })
      console.log(formattedData)
      reset()
      
  };

  return (
    <form
      className="flex flex-col border border-black p-5 gap-4 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      {step === 1 && (
        <>
          <span className="flex flex-col">
            <Label>Card Holder Name</Label>
            <Input
              type="text"
              id="CardHolderName"
              {...register("CardHolderName", { required: true })}
              placeholder="Card Holder Name"
            />
            {errors.CardHolderName && <span className="text-red-500">Card Holder Name is required.</span>}
          </span>
          <span className="flex flex-col">
            <Label className="text-slate-700">Card Number</Label>
            <Input
              type="number" 
              id="CardNumber"
              {...register("CardNumber", { required: true, maxLength: 16})}
              placeholder="Card Number"
            />
            {errors.CardNumber && <span className="text-red-500">Card Number is required and must be 16 digits.</span>}
          </span>
          <div className="flex gap-5">
            <span className="flex flex-col w-[50%]">
              <Label className="text-slate-700">Valid Upto</Label>
              <DatePicker onDateChange={(date) => setValue("ValidUpto", date)} />
              {errors.ValidUpto && <span className="text-red-500">Valid Upto date is required.</span>}
            </span>
            <span className="flex flex-col w-[50%]">
              <Label className="text-slate-700">CVV</Label>
              <Input
                type="number"
                id="cvv"
                {...register("cvv", { required: true, maxLength: 3 })}
                placeholder="CVV"
              />
              {errors.cvv && <span className="text-red-500">CVV is required and must be up to 3 digits.</span>}
            </span>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <span className="flex flex-col">
            <Label className="text-slate-700">Bank Name</Label>
            <Input
              type="text"
              id="BankName"
              {...register("BankName", { required: true })}
              placeholder="Bank Name"
            />
            {errors.BankName && <span className="text-red-500">Bank Name is required.</span>}
          </span>
          <span className="flex flex-col">
            <Label className="text-slate-700">Credit Limit</Label>
            <Input
              type="number"
              id="CreditLimit"
              {...register("CreditLimit", { required: true })}
              placeholder="Credit Limit"
            />
            {errors.CreditLimit && <span className="text-red-500">Credit Limit is required.</span>}
          </span>
          <div className="flex gap-5">
            <span className="flex flex-col w-[50%]">
              <Label className="text-slate-700">Billing Cycle Start Date</Label>
              <DatePicker onDateChange={(date) => setValue("BillingCycleStart", date)} />
              {errors.BillingCycleStart && <span className="text-red-500">Billing Cycle Start Date is required.</span>}
            </span>
            <span className="flex flex-col w-[50%]">
              <Label className="text-slate-700">Billing Cycle End Date</Label>
              <DatePicker onDateChange={(date) => setValue("BillingCycleEnd", date,) } />
              {errors.BillingCycleEnd && <span className="text-red-500">Billing Cycle End Date is required.</span>}
            </span>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <span className="flex flex-col w-full">
              <Label className="text-slate-700">Card Type</Label>
              <Input
                type="text"
                id="CardType"
                {...register("CardType", { required: true })}
                placeholder="Card Type"
              />
              {errors.CardType && <span className="text-red-500">Card Type is required.</span>}
            </span>
            <div className="flex justify-between">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={"default"} style={{ backgroundColor: selectedColor }}>
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
            </div>
          </div>
        </>
      )}

      <div className="flex justify-between">
        {step > 1 && <Button type="button" onClick={prevStep}>Previous</Button>}
        {step === 2 && <Button type="submit"><Link to={"/Cards"}> Save Changes</Link></Button>}
        {step < 2 && <Button type="button" onClick={nextStep}>Next</Button>}
      </div>
    </form>
  );
}
