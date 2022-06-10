import "./Api.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { TableCoins } from "./ticker/TableCoins.js";

export function Api() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&id=wonderland&sparkline=false"
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
    <header>TOP 100 CRYPTO CURRENCIES</header>
    <input
          type="text"
          placeholder="Search a Coin"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />
      <div className="row">

        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}
