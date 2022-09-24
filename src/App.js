import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/index";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
