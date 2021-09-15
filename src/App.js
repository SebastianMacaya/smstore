import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting="Hola soy Item ListContainer"></ItemListContainer>
    </>
  );
}

export default App;
