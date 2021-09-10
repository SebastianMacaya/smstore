import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount.js/ItemCount";
function App() {
  const onAdd = () => {
    alert("Has agregado un producto");
  };
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting="Hola soy Item ListContainer"></ItemListContainer>
      <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
    </>
  );
}

export default App;
