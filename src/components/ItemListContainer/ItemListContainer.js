import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../utils/mock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();
  useEffect(() => {
    if (idCategoria) {
      getFetch
        .then((respuesta) => {
          setProductos(
            respuesta.filter((prod) => prod.category === idCategoria)
          );
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      getFetch
        .then((respuesta) => {
          setProductos(respuesta);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [idCategoria]);

  return (
    <div>
      {loading ? <h2>Cargando...</h2> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
