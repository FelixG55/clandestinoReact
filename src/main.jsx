import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { SessionProvider } from './context/session.jsx';
import { ProductProvider } from './context/product.jsx';
import { CartProvider } from './context/productsCart.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <SessionProvider>
    <ProductProvider>
    <CartProvider>
      <App />
    </CartProvider>  
    </ProductProvider> 
    </SessionProvider>
  </React.StrictMode>,
)
