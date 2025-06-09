import { Link } from "react-router-dom";
import SearchOrders from "../features/order/SearchOrders";

function Header() {
  return (
    <header className="border-b border-stone-200 bg-yellow-600 p-4">
      <Link to="/"> Pizza Exc.</Link>

      <SearchOrders />

      <p>Kareem</p>
    </header>
  );
}

export default Header;
