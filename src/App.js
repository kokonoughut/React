// import logo from "./logo.svg";
import { createContext, useState } from "react";
import "./App.css";
import CashFlowCalculator from "./Components/CashflowCalculator";
import FirstComponent from "./Components/FirstComponent";
import SecondComponent from "./Components/SecondComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BillingList from "./Components/BillingList";
import { STOCKS } from "./Constants";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { IoCashOutline } from "react-icons/io5";
import { AiOutlineStock } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import { LiaMoneyBillSolid } from "react-icons/lia";
import SampleProvider from "./context/SampleContext";

function App() {
  const [whatToShow, setWhatToShow] = useState("billing");

  const [stocks, setStocks] = useState(STOCKS);

  const BUTTONS = [
    {
      key: "cashflow",
      path: "/",
      title: "Cashflow",
      component: <CashFlowCalculator />,
      icon: <IoCashOutline />,
    },
    {
      key: "subjects",
      path: "/subjects",
      title: "Subjects",
      component: (
        <FirstComponent
          name="test"
          coursename="mern"
          age={22}
          subs={["mongoDB", "React", "nodejs"]}
        />
      ),
      icon: <FaList />,
    },
    {
      key: "stocks",
      path: "/stocks",
      title: "stocks",
      component: <SecondComponent stocks={stocks} setStocks={setStocks} />,
      icon: <AiOutlineStock />,
    },
    {
      key: "billing",
      path: "/billing",
      title: "BillingList",
      component: <BillingList stocks={stocks} />,
      icon: <LiaMoneyBillSolid />,
    },
  ];

  return (
    <div className="App">
      <ToastContainer />
      {/* <header className="App-header"></header> */}
      <div className="body">
        <div id="sidebar">
          {BUTTONS.map((a) => (
            <NavLink to={a.path} key={a.key} className="sidebar-option">
              {a.icon} {a.title}
            </NavLink>
          ))}
        </div>

        <div className="main-container">
          <SampleProvider>
            <Routes>
              {BUTTONS.map((a) => (
                <Route path={a.path} key={a.key} element={a.component} />
              ))}
              <Route
                path="*"
                element={
                  <div>
                    <h1>Page Not Found</h1>
                  </div>
                }
              />
            </Routes>
          </SampleProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
