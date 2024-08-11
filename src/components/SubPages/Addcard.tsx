import { Button } from "../ui/button";
import { DatePicker } from "../ui/Datepicker";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Addcard() {
  return (
    <div className="flex flex-col border border-black p-5  gap-4 rounded-md">
      <h1 className="font-bold text-2xl ">Add Card</h1>
      <div className="flex justify-between gap-4">
        <div className="w-full">
          {" "}
          <Label className="  text-slate-700">User Name</Label>
          <Input type="text" id="userName" placeholder="User Name" />
        </div>
        <div className="w-full">
          {" "}
          <Label className="  text-slate-700">Card Name</Label>
          <Input type="text" id="cardName" placeholder="Card Name" />
        </div>
        <div className="w-full">
          <Label className="  text-slate-700">Card Number</Label>
          <Input type="number" id="cardNumber" placeholder="Card Number" />
        </div>
      </div>
      <div className="flex gap-4 ">
        <div className="w-full">
          <Label className="  text-slate-700">Card Number</Label>
          <Input type="number" id="creditLimit" placeholder="Credit Limit" />
        </div>
        <div className=" ">
          <Label className="  text-slate-700">Valid Upto</Label> <DatePicker />
        </div>
        <div>
        <Label className="  text-slate-700">Billing Cycle Start Date</Label>
          <DatePicker /> 
        </div>
        <div>
        <Label className="  text-slate-700">Billing Cycle End Date</Label>
          <DatePicker /> 
        </div>
        <Button className="self-end bg-green-600 hover:bg-green-600">Save</Button>
      </div>
    </div>
  );
}
