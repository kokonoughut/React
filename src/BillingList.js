import { useRef, useState } from "react";
// import { STOCKS } from "./constants";
import Select from "react-select";

const BillingList = ({ stocks }) => {
  const [entries, setEntries] = useState([]);
  const [particular, setParticular] = useState();
  const [rate, setRate] = useState("");
  const [quantity, setQuantity] = useState(10);
  const rateRef = useRef(null);
  const quantityRef = useRef(null);
  const addRef = useRef(null);

  const handlePressEnterAtQuantity = (e) => {
    if (e.code === "Enter") {
      setEntries([
        ...entries,
        { id: entries.length + 1, particular, rate, quantity },
      ]);
      quantityRef.current?.focus();
    }
  };

  const handleStockChange = (selectedOption) => setParticular(selectedOption);

  return (
    <div>
      <h1> Billing List</h1>
      <div className="bill-container">
        <span className="sn">SN</span>
        <span className="par">Particulars</span>
        <span className="rate">Rate</span>
        <span className="qty">Qty</span>
        <span className="total">Total</span>

        {entries.map((a, index) => (
          <div className="entry-item" key={a.id}>
            <span>{index + 1}</span>
            <span>{a.particular}</span>
            <span>{a.rate}</span>
            <span>{a.quantity}</span>
            <span>{a.rate * a.quantity}</span>
          </div>
        ))}
        <div className="bill-input-container">
          <span></span>
          <Select
            className="parti"
            options={stocks.map((s) => ({
              label: `${s.securityName} ${s.symbol} ${s.securityId}`,
              value: s.symbol,
            }))}
            value={particular}
            onChange={handleStockChange}
          ></Select>

          <input
            id="rate"
            name="rate"
            placeholder="Enter rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            ref={rateRef}
            onKeyUp={(e) =>
              e.code === "Enter" ? quantityRef.current?.focus() : void 0
            }
          />

          <input
            id="quantity"
            name="quantity"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            ref={quantityRef}
            onKeyUp={handlePressEnterAtQuantity}
          />

          <button
            ref={addRef}
            id="add"
            onClick={(e) =>
              setEntries([
                ...entries,
                {
                  id: entries.length + 1,
                  particular: particular.value,
                  rate,
                  quantity,
                },
              ])
            }
          >
            Add Entry
          </button>
        </div>
        <div>
          <p>Total : {entries.reduce((a, v) => a + v.rate * v.quantity, 0)}</p>
        </div>
        {/* <p>Total:{entries.reduce((a, v) => a + (v.rate * v.quantity, 0))}</p> */}
      </div>
    </div>
  );
};
export default BillingList;
