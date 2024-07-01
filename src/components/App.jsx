import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Location from "./Location/Location";
import Delivery from "./Delivery/Delivery";
import Menu from "./Menu/Menu";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ProductEdit from "./ProductEdit/ProductEdit";
import Cart from "./ProductsCart/Cart";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper" className="container-fluid text-center bg-black p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productEdit" element={<ProductEdit />} />
          <Route path="/productsCart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
