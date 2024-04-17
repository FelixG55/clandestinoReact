import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/buho.png";
import { SessionContext } from "../../context/session.jsx";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/productsCart.jsx";
import itemsCart from "../../hooks/useItemsCart.js";
import Loading from "../Loading.jsx";
import { ProductContext } from "../../context/product.jsx";

const Header = () => {
  const { session, setSession } = useContext(SessionContext);
  const { cart, serCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const {productE, setProductE} = useContext(ProductContext)


  const items = itemsCart(cart);

  const loading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <React.Fragment>
        {/* Navvar */}
        <nav className="navbar bg-black navbar-expand-lg">
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Brand */}
            <a href="navbar-brand" className="nav-link">
              <img src={logo} style={{ height: 60 }} />
            </a>
            {/* ToggleButton */}
            <button
              data-mdb-collapse-init
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Collapsible wrapper  */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 my-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link link-warning ms-4">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/location" className="nav-link link-warning ms-4">
                    Como llegar ?
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/delivery"
                    className="nav-link link-warning ms-4"
                    onClick={loading}
                  >
                    Delivery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/menu" className="nav-link link-warning ms-4">
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link link-warning ms-4">
                    Reservas
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-2 mb-2 mb-lg-0">
                {session.logged == false && (
                  <li className="nav-item ">
                    <Link to="/login" className="nav-link link-warning">
                      Login
                    </Link>
                  </li>
                )}
                {session.logged == false && (
                  <li className="nav-item me-1">
                    <Link to="/register" className="nav-link link-warning">
                      Sign-Up
                    </Link>
                  </li>
                )}
                <li className="nav-item m-auto me-1 position-relative">
                  <Link to="/productsCart" className="link-warning m-auto">
                    <i className="fas fa-shopping-cart" />
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning"
                      style={{ fontSize: 8 }}
                    >
                      {items}
                    </span>
                  </Link>
                </li>
                {/* Avatar */}
                {session.logged == true && (
                  <li className="nav-item dropdown accordion ">
                    <a
                      className="nav-link dropdown-toggle text-warning"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={session.image}
                        className="rounded-circle"
                        height="25"
                        width="25"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end bg-warning "
                      aria-labelledby="navbarDropdownMenuAvatar"
                    >
                      <li>
                        <a className="dropdown-item " href="#">
                          {session.user}
                        </a>
                      </li>
                      <li>
                        <Link to='/productEdit' className="dropdown-item" onClick={()=>{setProductE(null)}} href="#">
                          Crea un producto
                          <svg
                            className="ms-2 mb-2 bi bi-basket"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
                          </svg>
                        </Link >
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => setSession({ logged: false })}
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>
            {/* Collapsible wrapper  */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </React.Fragment>
    );
  }
};

export default Header;
