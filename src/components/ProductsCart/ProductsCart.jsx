import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/productsCart'
import { set } from 'react-hook-form';

function ProductsCart(product) {

      const {cart, setCart} = useContext(CartContext)

      const addItem = ()=>{
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
        }
      const removeItem = ()=>{
        const existingProduct = cart.find((p) => p.id === product.id);
        if (existingProduct) {
        // Si el producto existe, eliminar
        const updatedCart = cart.map((p) =>
          p.id === product.id && product.quantity !== 1 ? { ...p, quantity: p.quantity - 1 } : p
        );
        setCart(updatedCart);
      } 
        }  

      const deleteItem = ()=>{
        const exintingProduct = cart.find((p) => p.id === product.id);
        if (exintingProduct) {
          const updatedCart = cart.filter((p) => p.id !== product.id);
          setCart(updatedCart);
        }
      }  

  return (
    
      <>
      <div className="card mb-4 list-group">
        <ul className='list-group list-group-flush'>
          <li className='list-group-item ' style={{background:'#fffdc1'}}><h6 className='row '>Categoria</h6></li>
          <li className='list-group-item ' style={{background:'#fffdc1'}}>
          <div className="row">
            <div className="col">
                <a href="" className='link '><img className='img-fluid' style={{width:100}} src={product.image} alt="" /></a>
            </div>
            <div className="col">
                <a className='nav-link'  href=""><h6 className='row text-truncate' style={{maxWidth:'250px'}}>{product.name}</h6></a>
                <div className="row ">
                    <a className='col nav-link text-warning d-flex' href='' onClick={deleteItem}>Eliminar</a>
                    <a href="" className='col nav-link text-warning d-flex'>Comprar</a>
                </div>
            </div>
            <div className="col btn-group mt-2" style={{height:'100%'}} role="group" aria-label="counter">
              {product.quantity > 1 ? <button type="button" className="btn btn-warning" onClick={removeItem}>-</button> : <button type="button" className="btn btn-warning" onClick={removeItem} disabled >-</button>}
              <button type="button" className="btn btn-warning" disabled >{product.quantity}</button>
              <button type="button" className="btn btn-warning" onClick={addItem}>+</button>
            </div>
            <div className="col mt-3">
                <h6 >$ {Intl.NumberFormat().format(product.price)}</h6>
            </div>
          </div>
          </li>
        </ul>
      </div>
      </>
  ) 
}

export default ProductsCart