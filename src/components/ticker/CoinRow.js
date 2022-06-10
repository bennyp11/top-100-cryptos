import React from "react";
import './CoinRow.css';

const CoinRow = ({ coin, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>
        <img
          src={coin.image}
          alt=""
          className="img-fluid me-4"
          style={{ width: "10%" }}
        />
        <span>{coin.name}</span>
        <span>{coin.symbol}</span>
      </td>

      <td>${coin.current_price.toLocaleString()}</td>
    
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h}
      </td>
    
      <td>
        ${coin.total_volume.toLocaleString()}
      </td>
    </tr>
  );
};

export default CoinRow;