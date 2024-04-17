import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [productE , setProductE] = useState(()=>{
        const product = localStorage.getItem('product');
        return product ? JSON.parse(product) : null;
    }); 

    useEffect(()=>{
        if(productE){
            localStorage.setItem('product', JSON.stringify(productE));
        } else {
            localStorage.removeItem('product');
        }
    },[productE])

    return (
        <ProductContext.Provider value={{productE, setProductE}}>
            {children}
        </ProductContext.Provider>
    )
}