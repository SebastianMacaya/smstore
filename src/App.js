import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetalContainer/ItemDetailContainer";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
      <ItemDetailContainer></ItemDetailContainer>
    </>
  );
}

export default App;
