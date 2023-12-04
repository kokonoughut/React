import { useState } from "react";
import { STOCKS } from "./constants";
import "./StockComponent.css";
const StockComponent = () => {
  const [stock, setStock] = useState(STOCKS.slice(0, 2));
  return (
    <div>
      <ul>
        {stock.map((s) => (
          // key needs to be provided for a list as during array use all the elements must be provided a unique key
          <li key={s.securityId}>
            Name: {s.securityName}
            <ul className="sublist">
              <li>Stock ID: {s.securityId}</li>
              <li>Last Traded Price: {s.lastTradedPrice}</li>
              {/* Add more details or create sublists within this nested ul */}
              <li>Symbol: {s.symbol}</li>
              {/* Add more properties as needed */}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockComponent;
