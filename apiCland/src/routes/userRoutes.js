const express = require("express")
const userRoute = express.Router()
const userPicture = require ('../middlewares/userPictureMiddleware')
const {usuarios, usuario, writeFormLogin, writeFormRegister} = require("../controllers/usersController")

userRoute.get("/users", usuarios)
userRoute.get("/users/:id", usuario)
userRoute.post("/login",writeFormLogin)
userRoute.post("/register",userPicture.single('image'),writeFormRegister)

module.exports = userRoute