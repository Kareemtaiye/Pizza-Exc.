import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";

function SearchOrders() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order "
        onChange={e => setQuery(e.target.value)}
        value={query}
      />
    </form>
  );
}

export default SearchOrders;
