import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/index";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./Redux/index";
import GamePage from './page/Game Page'
import "./index.css";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app/:title" element={<GamePage />} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
