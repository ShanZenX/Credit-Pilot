import { Dialog } from "../dialog";
import CardModule from "./CardModule";
import { Button } from "@/components/ui/button";
import axios from 'axios';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Addcard from "@/components/SubPages/Addcard";
import { useEffect, useState } from "react";



export default function CardStructure() {

  const [data , setData] = useState()
    useEffect(()=>{
      axios.get("http://localhost:3000/cardData")
      .then(res =>setData(res.data))
      .catch(err=>console.log(err))
    },[])

    console.log(data)

  return (
    <div className=" mt-5 p-5 border border-black rounded-md">
      <div className=" flex justify-between">
        {" "}
        <h1 className=" font-bold text-2xl mb-4">Cards</h1>
        <Dialog >
          <DialogTrigger asChild>
            <Button variant="default">Add Card</Button>
          </DialogTrigger>
          <DialogContent className=" !w-[32%] ">
            <DialogHeader>
              <DialogTitle>Add Card</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <Addcard />
     
          </DialogContent>
        </Dialog>{" "}
      </div>
      <div className="flex flex-wrap justify-around gap-20 ">
        <CardModule />
        <CardModule />
        <CardModule />
        <CardModule />
        <CardModule />
        <CardModule />
      </div>
    </div>
  );
}
