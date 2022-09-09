import "./App.scss";
import { HomePage } from "./components/HomePage.js";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function App() {
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
