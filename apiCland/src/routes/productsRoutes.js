const express = require("express")
const productRoute = express.Router()
const productPicture = require("../middlewares/productPicture")
const {products, product, editProduct,createProduct, lastProduct, detailProducts,sales} = require("../controllers/productsControllers")

productRoute.get("/products", products)
productRoute.get("/products/last", lastProduct)
productRoute.get("/products/:id", product)
productRoute.get("/detail", detailProducts)
productRoute.get("/sales", sales)
productRoute.put("/products", productPicture.single('image'), editProduct)
productRoute.post("/products", productPicture.single('image'), createProduct)
module.exports = productRoute