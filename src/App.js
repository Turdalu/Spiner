import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainRouter from "./compononents/MainRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
