import { useEffect, useRef, useState } from "react";
import { STOCKS } from "./constants";

import { toast } from "react-toastify";
import StockItem from "./StockItem";

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

  // console.log(STOCKS);

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

  const symbolRef = useRef(null);

  const securityIdRef = useRef(null);

  const securityNameRef = useRef(null);

  console.log(symbolRef, securityIdRef, securityNameRef, "check refs");

  const handleEnterAtSecurityId = (e) => {
    if (e.code === "Enter") {
      handleAddUpdate(e);
      securityNameRef.current?.focus();
    }
  };

  const handleAddUpdate = (e) => {
    if ([securityName, symbol, securityId].some((s) => s === "")) {
      toast.warning("cant enter empty stock");
    } else {
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
          onKeyUp={(e) =>
            e.code === "Enter" ? symbolRef.current?.focus() : void 0
          }
          ref={securityNameRef}
        />
        <input
          placeholder="Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          onKeyUp={(e) =>
            e.code === "Enter" ? securityIdRef.current?.focus() : void 0
          }
          ref={symbolRef}
        />
        <input
          placeholder="securityId"
          value={securityId}
          onChange={(e) => setSecurityId(e.target.value)}
          onKeyUp={handleEnterAtSecurityId}
          ref={securityIdRef}
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
        <div className="stocks-item heading">
          <span className="sn">SN</span>
          <span className="sname">Security Name</span>
          <span className="symbol">Sym</span>
          <span className="sid"> Id</span>
        </div>
        {stocks.map((s, index) => (
          <StockItem
            key={s.securityId}
            {...{
              s,
              index,
              alertState,
              setAlertState,
              setStocks,
              setSymbol,
              setSelectedIndex,
              setEditState,
              stocks,
              selectedIndex,
              setSelectedStock,
              setSecurityId,
              setSecurityName,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondComponent;
