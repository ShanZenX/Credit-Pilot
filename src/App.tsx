import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";

const CardStructure = React.lazy(
  () => import("./components/SubPages/cards/CardStructure")
);
const Dashboard = React.lazy(() => import("./components/Pages/Dashboard"));
const CardDetails = React.lazy(
  () => import("./components/SubPages/cards/CardDetails")
);
const User = React.lazy(() => import("./components/Pages/User"));
const AddTransactionDetails = React.lazy(
  () => import("./components/Pages/Forms/AddTransactionDetails")
);
import TransactionTable from "./components/SubPages/cards/TransactionTable";

function App() {
  return (
<Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="cards" element={<CardStructure />} />
  <Route path="cards/:cardId" element={<CardDetails />}>
    <Route path="add-transaction" element={<AddTransactionDetails />} />
    <Route path="" element={<TransactionTable />} />
  </Route>
  <Route path="User" element={<User />} />
</Routes>


  );
}
export default App;
