import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

function Item({item}) {
  return (
    <>
      <div className="card" key={item.id}>
        <img src={item.image} alt="title"></img>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div>
          <h3>price: ${item.price}</h3>
          <Link to={`item/${item.id}`} onClick={() => <Item key={item.id} />}>
            Buy
          </Link>
        </div>
      </div>
    </>
  );
}
export default Item;
