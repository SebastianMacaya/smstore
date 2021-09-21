import React from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  return (
    <>
      <div key={item.id} className="card w-50 mt-3">
        <div className="card-header">{item.name}</div>
        <div className="card-body">
          <img src={item.foto} alt="producto" />
        </div>
        <h3>${item.price}</h3>
        <div className="card-footer">
          <Link to="/">
            <button className="btn btn-outline-primary btn-block">
              volver
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
