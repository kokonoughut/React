import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import FirstComponent from "./FirstComponent";
import StockComponent from "./StockComponent";
import SecondComponent from "./SecondComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CashFlowCalculator from "./cashFlowCalculator";
function App() {
  const [whatToShow, setWhatToShow] = useState("cashflow");
  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>SEARCH STOCK</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        {/* self closing tag for only sending attributes without any children */}
        <button onClick={(e) => setWhatToShow("cashflow")}>Cashflow</button>
        <button onClick={(e) => setWhatToShow("subjects")}>Subjects</button>
        <button onClick={(e) => setWhatToShow("stocks")}>stocks</button>
        {whatToShow === "cashflow" && <CashFlowCalculator />}
        {whatToShow === "subjects" && (
          <FirstComponent
            // for string assignment we use =
            name="Test"
            courseName="Mern"
            // for number , boolean ,objects=dictionary,array we use {}
            age={22}
            isStudent={true}
            details={{ name: "abcd", bloodGroup: "A+", address: "Dhapakhel" }}
            // we can also pass function
            subjects={["mongoDB", "expressJs", "reactJs", "NodeJs"]}
            square={(x) => x * x}
          />
        )}
        {whatToShow === "stocks" && <SecondComponent />}
      </header>
    </div>
  );
}

export default App;
