import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/productsCart'

function ResumeCart({cart}) {

    return (
    <div className="col-4 ">
              <div className="card list-group m-auto" style={{width:'20rem'}}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" style={{background:'#fffdc1'}}  >Resumen compra</li>
                  <li className="list-group-item" style={{background:'#fffdc1',height:'100%'}}>
                        <div className="row mb-1">
                          Productos
                        </div>
                      {cart.map((product)=>{
                        if (product.quantity) {
                          return (
                            
                            <div className="row m-1" key={`cart${product.id}`}>
                              <div className="col m-auto text-truncate">
                                {product.name}
                              </div>
                              <div className="col m-auto">
                                {product.quantity} unid
                              </div>
                              <div className="col m-auto">
                                $ {Intl.NumberFormat().format(product.price * product.quantity)}
                              </div>
                            </div>
                          )
                        }
                      })}
                      <div className="row mt-3">
                        <div className="col-3 text-start fw-bold">
                          Total
                        </div>
                        <div className="col-8 text-end ms-3 fw-bold">
                          $ {Intl.NumberFormat().format(cart.reduce((acc, product)=> acc + product.price * product.quantity, 0))}
                        </div>
                      </div>
                  </li>
                </ul>
              </div>
            </div>
  )
}

export default ResumeCart