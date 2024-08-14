import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center bg-slate-900 h-16 text-white justify-between px-4 -z-20">
      <Link to={"/"} className="text-xl font-semibold">Credit Pilot</Link>
      <div className="flex space-x-4">
      <Link to={"/"} className="hover:text-gray-300">Dashboard</Link>
        <Link to={"/Cards"} className="hover:text-gray-300">Cards</Link>
        <Link to={"/User"} className="hover:text-gray-300">Profile</Link>
      </div>
    </div>
  );
}
