import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Redirect to splash on first load
const hasVisitedSplash = sessionStorage.getItem("hasVisitedSplash");
if (!hasVisitedSplash && window.location.pathname === "/") {
  sessionStorage.setItem("hasVisitedSplash", "true");
  window.location.href = "/splash";
}

createRoot(document.getElementById("root")!).render(<App />);
