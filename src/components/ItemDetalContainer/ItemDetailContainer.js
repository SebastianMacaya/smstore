import React from "react";
import { useState, useEffect } from "react";
import { getFetchUno } from "../../utils/mock";
import ItemDetail from "./ItemDetail";
const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  useEffect(() => {
    getFetchUno.then((resp) => setItem(resp));
  }, []);
  return (
    <>
      <ItemDetail item={item}></ItemDetail>
    </>
  );
};
export default ItemDetailContainer;
