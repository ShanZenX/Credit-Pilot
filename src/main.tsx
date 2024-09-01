import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/ui/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>

    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<span>Loading...</span>}>
        <App />
      </Suspense>
    </BrowserRouter>

  </StrictMode>
);
