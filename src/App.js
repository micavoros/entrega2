import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path={"/"} element={<ItemListContainer/>}/>
          <Route exact path={"/category/:id"} element={<ItemListContainer/>}/>
          <Route exact path={"/item/:id"} element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
