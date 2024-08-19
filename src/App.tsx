import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./components/Pages/Cards";
import Dashboard from "./components/Pages/Dashboard";
import User from "./components/Pages/User";
import CardDetails from "./components/SubPages/cards/CardDetails";
import AddTransactionDetails from "./components/Pages/Forms/AddTransactionDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Cards" element={<Cards />} />
      <Route path="/User" element={<User />} />
      <Route path="/Cards/CardDetails" element={<CardDetails />} />
      <Route path="/Cards/CardDetails/AddTransaction" element={<AddTransactionDetails />} />

    </Routes>
  );
}
export default App;
