const express = require("express")
const cors = require('cors')
const app  = express()

app.use(cors());
const port = process.env.PORT || 3022
// app.set("view engine", "ejs")n
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/images', express.static('public/images'));
app.use('/videos', express.static('public/videos'));

const usersRoutes = require ("./routes/userRoutes.js") 
const productsRoutes = require ("./routes/productsRoutes.js") 

app.use("/api", productsRoutes)
app.use("/api",usersRoutes)
app.listen(port, () => console.log(`Se esta corriendo el servidor ${port}`) )