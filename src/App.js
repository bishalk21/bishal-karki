import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./components/HomePage.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
