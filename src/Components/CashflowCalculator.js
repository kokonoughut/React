import { useState } from "react";

const CashFlowCalculator = () => {
  const [ratE, setRatE] = useState(10);
  const [openingBalancE, setOpeningBalancE] = useState(0);
  const [yearlyDepositS, setYearlyDepositS] = useState([1000, 1000, 1000]);
  const cashFlowCalculator = (
    rate = 10,
    openingBalance = 0,
    yearlyDeposits = [1000, 1000, 1000]
  ) =>
    yearlyDeposits.reduce(
      (a, v) => (+a + +v) * (1 + rate / 100),
      openingBalance
    );
  return (
    <div>
      <h1>Cash Flow Calculator</h1>
      <input
        id="ratE"
        value={ratE}
        onChange={(e) => setRatE(e.target.value)}
        placeholder="Rate of Interest"
        type="number"
      />
      <input
        id="openingBalancE"
        value={openingBalancE}
        onChange={(e) => setOpeningBalancE(e.target.value)}
        placeholder="Opening Balance"
        type="number"
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {yearlyDepositS.map((y, i) => (
          <input
            key={i}
            placeholder={`${i + 1} year`}
            value={y}
            onChange={(e) =>
              setYearlyDepositS(
                yearlyDepositS.map((x, j) => (j === i ? e.target.value : x))
              )
            }
          />
        ))}
        <button onClick={(e) => setYearlyDepositS([...yearlyDepositS, 0])}>
          Add Deposit
        </button>
      </div>
      <h2>{cashFlowCalculator(ratE, openingBalancE, yearlyDepositS)}</h2>
    </div>
  );
};

export default CashFlowCalculator;
