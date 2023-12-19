import { useContext, useEffect, useRef, useState } from "react";
import { STOCKS } from "../Constants";

import { toast } from "react-toastify";
import StockItem from "../StockItem";
import { SampleContext, useSample } from "../context/SampleContext";
import { useFormik } from "formik";
import { json } from "react-router-dom";
import { stockSchema } from "../schemas/stockSchema";

const FormikSecondComponent = ({ stocks, setStocks }) => {
  // const [stocks, setStocks] = useState(STOCKS);
  const [alertState, setAlertState] = useState(false);
  const [editState, setEditState] = useState(false);
  const [selectedStock, setSelectedStock] = useState({});
  const [searchWord, setSearchWord] = useState("");

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [securityName, setSecurityName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [securityId, setSecurityId] = useState(null);

  // console.log(STOCKS);

  const testTheProvider = useSample();

  console.log(testTheProvider);

  const formik = useFormik({
    initialValues: {
      securityName: "",
      symbol: "",
      securityId: "",
    },
    validationSchema: stockSchema,
    onSubmit: (values) => alert(JSON.stringify(values)),
  });

  useEffect(
    () =>
      setStocks(
        stocks.filter((s) =>
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

  // console.log(symbolRef, securityIdRef, securityNameRef, "check refs");

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

  console.log("check formik", formik.values, formik.errors, formik.touched);
  return (
    <div>
      <div style={{ marginTop: "15%" }}>
        <h2>Todays Stocks:</h2>
        {/* <input
          placeholder="SecurityName"
          value={securityName}
          onChange={(e) => setSecurityName(e.target.value)}
          onKeyUp={(e) =>
            e.code === "Enter" ? symbolRef.current?.focus() : void 0
          }
          ref={securityNameRef}
        /> */}
        <form>
          <label htmlFor="securityName">Security Name</label>
          <input
            id="securityName"
            name="securityName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.securityName}
          />
          <span>{formik.errors.securityName}</span>

          {/* <input
          placeholder="Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          onKeyUp={(e) =>
            e.code === "Enter" ? securityIdRef.current?.focus() : void 0
          }
          ref={symbolRef}
        /> */}
          <label htmlFor="symbol">Symbol</label>
          <input
            id="symbol"
            name="symbol"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.symbol}
          />
          <span>{formik.errors.symbol}</span>

          {/* <input
          placeholder="securityId"
          value={securityId}
          onChange={(e) => setSecurityId(e.target.value)}
          onKeyUp={handleEnterAtSecurityId}
          ref={securityIdRef}
          disabled={editState}
        /> */}
          <label htmlFor="securityId">security Id</label>
          <input
            id="securityId"
            name="securityId"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.securityId}
          />
          <span>{formik.errors.securityId}</span>

          <button
            // onClick={handleAddUpdate}
            onClick={formik.handleSubmit}
          >
            {editState ? "Update" : "Add"} Stock
          </button>
          {editState && (
            <button onClick={(e) => setEditState(false)}>Cancel</button>
          )}
        </form>
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

export default FormikSecondComponent;
