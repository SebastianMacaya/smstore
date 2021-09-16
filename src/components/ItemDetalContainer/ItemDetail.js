import React from "react";
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
          <button className="btn btn-outline-primary btn-block">volver</button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
