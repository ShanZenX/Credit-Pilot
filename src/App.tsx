import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./components/Pages/Cards";
import Dashboard from "./components/Pages/Dashboard";
import User from "./components/Pages/User";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Cards" element={<Cards />} /> 
      <Route path="/User" element={<User />} />
    </Routes>
  );
}

export default App;
