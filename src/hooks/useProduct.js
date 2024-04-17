import { useEffect, useState } from 'react'
import { getProducts } from '../services/products'

export function useProduct () {
  const [products, setProducts] = useState([])

  useEffect(() => { getProducts().then(data => setProducts(data)) }, [])
  return products
}
