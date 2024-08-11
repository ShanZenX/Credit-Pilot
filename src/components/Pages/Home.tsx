import img from "@/images/card-img.png";
import { Button } from "../ui/button";
export default function Home() {
  return (
    <div className="h-[93vh]  w-full flex items-center justify-center bg-slate-600 text-white ">
      <div className="w-[55%] pl-10 gap-4 flex flex-col">
        <p className="text-5xl font-thin">Navigate Your Finances with</p>
        <p className="text-9xl font-black"> Credit Pilot</p>
        <p className="text-2xl font-thin">Smart Credit Card Management Made Easy</p>
        <div>        <Button variant={"default"}>Get Started</Button>
        </div>
      </div>
      <div className="w-[45%]">
        <img src={img} ></img>
      </div>
    </div>
  );
}
