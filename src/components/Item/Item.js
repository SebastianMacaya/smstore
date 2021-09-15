import React from "react";
import ItemCount from "../ItemCount/ItemCount";
const Item = ({ producto }) => {
  const onAdd = () => {
    alert("Has agregado un producto");
  };
  return (
    <>
      <div key={producto.id} className="card w-50 mt-3">
        <div className="card-header">{producto.name}</div>
        <div className="card-body">
          <img src={producto.foto} alt="producto" />
        </div>
        <div className="card-footer">
          <button className="btn btn-outline-primary btn-block">
            Detalles
          </button>
          <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
        </div>
      </div>
    </>
  );
};

export default Item;
