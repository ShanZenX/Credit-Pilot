import { Label } from "../ui/label";
// import { Button } from "../ui/button";
import { DatePicker } from "../ui/Datepicker";
import { Input } from "../ui/input";
// import { Label } from "../ui/label";
import { BlockPicker } from "react-color";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Button } from "../ui/button";
export default function Addcard() {
  const [selectedColor, serSelectedColor] = useState<string>("#fff");

  return (
    <form className="flex flex-col border border-black p-5  gap-4 rounded-md">
      <div className="flex gap-5">
        <span className="flex flex-col w-[50%]">
          <Label>User Name</Label>
          <Input type="text" id="userName" placeholder="User Name" />
        </span>
        <span className="flex flex-col w-[50%]">
          <Label className="  text-slate-700">Card Name</Label>
          <Input type="text" id="cardName" placeholder="Card Name" />
        </span>
      </div>

      <div className="flex gap-5">
        <span className="flex flex-col w-[50%]">
          <Label className="  text-slate-700">Card Number</Label>
          <Input type="number" id="cardNumber" placeholder="Card Number" />
        </span>
        <span className="flex flex-col w-[50%]">
          <Label className="  text-slate-700">Credit Limit</Label>
          <Input type="number" id="creditLimit" placeholder="Credit Limit" />
        </span>
      </div>
      <div className="flex gap-5">
        <span className="flex flex-col w-[50%]">
          <Label className="  text-slate-700">Bank Name</Label>
          <Input type="number" id="bankName" placeholder="Bank Name" />
        </span>
        <span className="flex flex-col w-[50%]">
          <Label className="  text-slate-700">Valid Upto</Label>
          <DatePicker />
        </span>
      </div>
      <div className="flex gap-5">
        <span className="flex flex-col w-[50%]">
          <Label className="  text-slate-700">Billing Cycle Start Date</Label>
          <DatePicker />
        </span>
        <span className="flex flex-col w-[50%]">
          <Label className="  text-slate-700">Billing Cycle End Date</Label>
          <DatePicker />
        </span>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
        <Tippy
          placement={"bottom"}
          interactive={true}
          content={
            <BlockPicker
              color={selectedColor}
              onChange={(color) => serSelectedColor(color.hex)}
            />
          }
        >
          <Button >Choose Color</Button>
        </Tippy>
        <div className={`w-10 h-10  `} style={{backgroundColor: selectedColor}}></div>
        </div>
        <Button type="submit">Save changes</Button>

      </div>
    </form>
  );
}

{
  /* <div className="flex justify-between gap-4">
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
<div className="flex justify-between  ">
<div className="w-[400px]">
  <Label className="  text-slate-700">Card Number</Label>
  <Input type="number" id="creditLimit" placeholder="Credit Limit" />
</div>
<div className=" ">
  <Label className="  text-slate-700">Valid Upto</Label>
   <DatePicker />
</div>
<div className="w-[200px]">
  <Label className="  text-slate-700">Billing Cycle Start Date</Label>
  <DatePicker />
</div>
<div className="w-[200px]">
  <Label className="  text-slate-700">Billing Cycle End Date</Label>
  <DatePicker />
</div>
<Button className="self-end bg-green-600 hover:bg-green-600">
  Save
</Button>
</div> */
}
