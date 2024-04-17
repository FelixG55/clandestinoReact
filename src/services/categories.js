const PRODUCT_ENDPOINT = 'http://localhost:3022/api/products'

export const getCategory = () => {
  return fetch(PRODUCT_ENDPOINT)
    .then(res => res.json())
    .then(data => {
      const { countByCategory } = data
      return countByCategory
    })
}
