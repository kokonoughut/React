import { useState } from "react";
import { STOCKS } from "./constants";

const StockComponent = () => {
  const [stock, setStock] = useState(STOCKS);
  return (
    <div>
      <ul>
        {stock.map((s) => (
          // key needs to be provided for a list as during array use all the elements must be provided a unique key
          <li key={s.securityId}>{s.securityName}</li>
        ))}
      </ul>
    </div>
  );
};

export default StockComponent;
