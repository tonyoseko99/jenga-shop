import React, { useEffect, useState } from "react";
import Items from "./Items";

function Home() {
  const [items, setItems] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const url = "https://tonyoseko99.github.io/json-api/db.json";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setItems(response));
  }, []);

  useEffect(() => {
    setSearchItems(items);
  }, [items]);

  return (
    <div className="container">
      <div className="input">
        <input
          id="search-input"
          type="text"
          placeholder="search..."
          onChange={(e) => {
            let query = items.filter((item) =>
              item.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            console.log("search", query);
            setSearchItems(query);
          }}
        />
      </div>

      <div className="card-container">
        {searchItems.map((item) => {
          return <Items item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
export default Home;
