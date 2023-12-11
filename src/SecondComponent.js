import { useEffect, useState } from "react";
import { STOCKS } from "./constants";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

import { toast } from "react-toastify";

const SecondComponent = () => {
  const [stocks, setStocks] = useState(STOCKS);
  const [alertState, setAlertState] = useState(false);
  const [editState, setEditState] = useState(false);
  const [selectedStock, setSelectedStock] = useState({});
  const [searchWord, setSearchWord] = useState("");

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [securityName, setSecurityName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [securityId, setSecurityId] = useState(null);

  const handlePressEnterATSecurityID = (e) => {
    if (e.code === "Enter") {
      handleAddUpdateStock(e);
      securityNameRef.current?.focus();
    }
  };
  useEffect(
    () =>
      setStocks(
        STOCKS.filter((s) =>
          [s.securityName, s.securityId, s.symbol].some((x) =>
            x.toLowerCase().includes(searchWord.toLowerCase())
          )
        )
      ),
    [searchWord]
  );

  const handleAddUpdate = (e) => {
    if (!editState) {
      setStocks([{ securityName, symbol, securityId }, ...stocks]);
      toast.success("Stock added");
    } else {
      setStocks(
        stocks.map((s) =>
          selectedStock.securityId === s.securityId
            ? { ...s, securityName, securityId, symbol }
            : s
        )
      );
      toast.success("Stock Updated");
    }
  };

  return (
    <div>
      <h2>Todays Stocks:</h2>
      <div>
        <input
          placeholder="SecurityName"
          value={securityName}
          onChange={(e) => setSecurityName(e.target.value)}
          onKeyUp={(e) => (e.code === "Enter" ? console.log("enter") : void 0)}
        />
        <input
          placeholder="Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <input
          placeholder="securityId"
          value={securityId}
          onChange={(e) => setSecurityId(e.target.value)}
        />

        <button onClick={handleAddUpdate}>
          {editState ? "Update" : "Add"} Stock
        </button>
        {editState && (
          <button onClick={(e) => setEditState(false)}>Cancel</button>
        )}
      </div>
      <div>
        <input
          placeholder="Search stock"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </div>
      <div className="stocks-container">
        {stocks.map((s, index) => (
          <div key={s.securityId} className="stocks-item">
            <span className="sn">{index + 1}</span>
            <span className="sname">{s.securityName}</span>
            <span className="symbol">{s.symbol}</span>
            <span className="sid">{s.securityId}</span>
            <span>
              <FaRegEdit
                onClick={(e) => {
                  setEditState(true);
                  setSelectedStock(s);
                  setSecurityName(s.securityName);
                  setSymbol(s.symbol);
                  setSecurityId(s.securityId);
                }}
              />
            </span>
            <span>
              <AiFillDelete
                onClick={(e) => {
                  setAlertState(true);

                  setSelectedIndex(index);
                }}
              />
            </span>
            {alertState && selectedIndex === index && (
              <div style={{ backgroundColor: "red" }}>
                Are you Sure?
                <button
                  onClick={(e) => {
                    setStocks(stocks.filter((x) => x !== s));
                    setAlertState(false);
                    toast.success("Stock Deleted");
                  }}
                >
                  Delete
                </button>
                <button onClick={(e) => setAlertState(false)}>Cancel</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondComponent;
