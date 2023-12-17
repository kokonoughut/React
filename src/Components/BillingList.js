import { useState } from "react";
import "./Billing.css";
import Select from "react-select";
// import { STOCKS } from "../Constants";

const BillingList = ({ stocks }) => {
  const [entries, setEntries] = useState([]);

  const [particular, setParticular] = useState("");
  const [rate, setRate] = useState(0);
  const [quantity, setQuantity] = useState(1);
  // const [total, setTotal] = useState(0);

  return (
    <div>
      <h1>Billing List</h1>
      <div className="bill-container">
        <div className="bill-container-heading">
          <span className="sn">SN</span>
          <span className="particular">particular</span>
          <span className="rt">Rate</span>
          <span className="qt">Qty</span>
          <span className="total">Total</span>
        </div>
        {entries.map((a, index) => {
          return (
            <div className="bill-item">
              <span className="sn">{index + 1}</span>
              <span className="particular">{a.particular.label}</span>
              <span className="rt">{a.rate}</span>
              <span className="qt">{a.quantity}</span>
              <span className="total">{a.total}</span>
            </div>
          );
        })}
      </div>
      <div className="bill-input-container">
        <Select
          value={particular}
          options={stocks.map((s) => ({
            label: `${s.securityName} ${s.symbol}`,
            value: s.securityId,
          }))}
          onChange={(v) => setParticular(v)}
          isClearable={true}
          isDisabled={false}
        />
        {/* <select
          value={particular}
          onChange={(e) => setParticular(e.target.value)}
        >
          {stocks.map((s) => (
            <option key={s.securityId}>{s.securityName}</option>
          ))}
        </select> */}

        <input
          placeholder="Rate"
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />

        <input
          placeholder="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          onClick={(e) =>
            setEntries([
              ...entries,
              { particular, rate, quantity, total: rate * quantity },
            ])
          }
        >
          Add
        </button>
      </div>
      <div></div>
      <div>
        <p>Total = {entries.reduce((a, v) => a + v.total, 0)}</p>
      </div>
    </div>
  );
};

export default BillingList;
