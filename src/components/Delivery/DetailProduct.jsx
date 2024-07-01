import React, { useContext } from "react";
import { SessionContext } from "../../context/session";
import { ProductContext } from "../../context/product";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/productsCart";


const DetailProduct = (product) => {
  const { session } = useContext(SessionContext);
  const { productE, setProductE } = useContext(ProductContext);
  const { cart, setCart } = useContext(CartContext);
  const onClickE = () => {
    setProductE(product);
  };
  const onClicA = () => {
    // Verificar si el producto ya existe en el carrito
    setProductE(product);
    const existingProduct = cart.find((p) => p.id === product.id);

    if (existingProduct) {
      // Si el producto existe, aumentar la cantidad
      const updatedCart = cart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setCart(updatedCart);
    } else {
      // Si el producto no existe, agregarlo con cantidad 1
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }
  };
  return (
    <div className="col-xl-4 col-sm-6 d-flex justify-content-around mb-5">
      <div
        className="card bg-dark mb-3 border-warning"
        style={{ maxWidth: "400px", maxHeight: "fit-content" }}
      >
        <div className="row g-0 border-warning border-bottom ">
          <div className="col-md-3">
            <img
              className="img-fluid rounded-start"
              src={product.image}
              alt={product.name}
              style={{ height: "100%" }}
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5
                className="card-title"
                style={{ color: "#FFC800", fontSize: "12px" }}
              >
                {product.name}
              </h5>
              <p
                className="card-text text-light mb-0"
                style={{ fontSize: "10px" }}
              >
                {product.description}
              </p>
              <p
                className="card-text"
                style={{ color: "#FFC800", fontSize: "10px" }}
              >
                $ {product.price}
              </p>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <a
            className="btn btn-warning m-auto mt-2"
            style={{ width: "150px" ,fontSize:'10px' }}
            onClick={onClicA}
          >
            AGREGAR PRODUCTO<i className="fas fa-shopping-bag ms-1"></i>
          </a>
        </div>
        <div className="row">
          {session.logged == true && session.admin == 1 && (
            <Link
              to="/productEdit"
              state={{product}}
              className="btn btn-warning mt-2 mb-2 m-auto"
              style={{ width: "150px",fontSize:'10px' }}
              onClick={onClickE}
            >
              EDITAR PRODUCTO
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
