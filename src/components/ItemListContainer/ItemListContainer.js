import { useState, useEffect } from "react";
import { getFetch } from "../../utils/mock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getFetch
      .then((respuesta) => {
        setProductos(respuesta);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? <h2>Cargando...</h2> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
