import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/index";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./Redux/index";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
