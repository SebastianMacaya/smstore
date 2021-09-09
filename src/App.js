import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount.js/ItemCount";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting="Hola soy Item ListContainer"></ItemListContainer>
      <ItemCount></ItemCount>
    </>
  );
}

export default App;
