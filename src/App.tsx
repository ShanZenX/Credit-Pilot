import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Cards from "./components/Pages/Cards";
import Dashboard from "./components/Pages/Dashboard";
import User from "./components/Pages/User";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cards" element={<Cards />} /> 
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/User" element={<User />} />
    </Routes>
  );
}

export default App;
