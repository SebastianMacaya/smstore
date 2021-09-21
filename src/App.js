import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetalContainer/ItemDetailContainer";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer></ItemListContainer>
          </Route>
          <Route path="/categoria/:idCategoria" component={ItemListContainer} />
          <Route path="/detalle/:id" exact>
            <ItemDetailContainer></ItemDetailContainer>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
