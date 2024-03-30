const PRODUCT_ENDPOINT = 'http://localhost:3022/api/detail'
    
export const getProducts = () => {

   return fetch(PRODUCT_ENDPOINT)
    .then(res => res.json())
    .then(data => {
        const products = data
        return products
    })
}

