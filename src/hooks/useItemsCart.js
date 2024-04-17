import { useState, useEffect } from 'react'

const itemsCart = (cart) => {
  const [items, setItems] = useState(0)

  useEffect(() => {
    const totalQuantity = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity
    }, 0)

    setItems(totalQuantity)
  }, [cart])
  return items
}

export default itemsCart
