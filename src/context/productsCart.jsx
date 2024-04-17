import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}) {

    const [cart, setCart] = useState(()=>{
        const storedProducts = localStorage.getItem('cart')
        return (
            storedProducts ? JSON.parse(storedProducts) : []
        )
        
    });

    useEffect(() => {
        if (cart) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }else{
            localStorage.removeItem('cart');
        }
    }, [cart]);


    return(
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}