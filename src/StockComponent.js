// Importing necessary modules from React
import { useState } from "react";
import { STOCKS } from "./constants"; // Importing the STOCKS constant from an external file
import "./StockComponent.css"; // Importing styles for the StockComponent

// Functional component definition for StockComponent
const StockComponent = () => {
  // State variables using the useState hook
  const [stocks, setStocks] = useState(STOCKS); // State for all stocks
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term entered by the user
  const [filteredStocks, setFilteredStocks] = useState([]); // State for stocks filtered based on the search term

  // Function to filter stocks based on a search term
  const searchStock = (word, arr) =>
    // Using the filter method to create a new array with stocks that match the search term
    arr.filter((x) =>
      // Checking if the lowercase securityId of each stock includes the lowercase search term
      x.securityId.toLowerCase().includes(word.toLowerCase())
    );

  // Event handler for the search button click
  const handleSearch = () => {
    // Calling the searchStock function with the current search term and the original list of stocks
    const filtered = searchStock(searchTerm, stocks);

    // Updating the state with the filtered list of stocks
    setFilteredStocks(filtered);
  };

  // JSX code for rendering the component
  return (
    <div>
      {/* Input field for entering the security ID */}
      <input
        className="search-bar"
        placeholder="Enter security ID"
        onChange={(e) => setSearchTerm(e.target.value)} // Updating the search term state on input change
      />
      {/* Button for triggering the search */}
      <button className="button" onClick={handleSearch}>
        Search
      </button>
      {/* List to display the filtered stocks */}
      <ul>
        {/* Mapping through the filtered stocks and rendering individual stock information */}
        {filteredStocks.map((s) => (
          <li key={s.securityId}>
            {/* Displaying stock information */}
            Name: {s.securityName}
            {/* Nested list for additional details */}
            <ul className="sublist">
              <li>Stock ID: {s.securityId}</li>
              <li>Last Traded Price: {s.lastTradedPrice}</li>
              <li>Symbol: {s.symbol}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exporting the StockComponent as the default export
export default StockComponent;
