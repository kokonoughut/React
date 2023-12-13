import { toast } from "react-toastify";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";

const StockItem = ({
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
}) => {
  return (
    <div className="stocks-item">
      <span className="sn">{index + 1}</span>
      <span className="sname">{s.securityName}</span>
      <span className="symbol">{s.symbol}</span>
      <span className="sid">{s.securityId}</span>
      <span>
        <MdOutlineEdit
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
        <FaDeleteLeft
          onClick={(e) => {
            setAlertState(true);

            setSelectedIndex(index);
          }}
        />
      </span>
      {alertState && selectedIndex === index && (
        <div className="delete-modal-container">
          <div className="modal-body">
            <p>Are you Sure?</p>
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
        </div>
      )}
    </div>
  );
};

export default StockItem;
