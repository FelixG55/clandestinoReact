
const DB = require("../database/models")
const bcrypt = require('bcrypt');

const usuarios = (req, res)=>{
DB.User.findAll()
    .then( (users)=>{
         res.json({
            count: users.length,
            users: users.map(user=>{
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    detail: "/api/users/"+ user.id
                }
            })
         })
    })
}
const usuario = (req, res)=> {
    DB.User.findByPk(req.params.id)
    .then( (user)=>{
     res.json(user)
    })
}

const writeFormLogin =  (req, res) => {
        
    console.log(req.body);
    const errors = req.body.errors
        if (errors == 0 ) {
            console.log(1);
        DB.User.findAll({
            where: {email: req.body.email}
        }).then(userToLogin => {
            console.log(userToLogin);
            if (userToLogin.length > 0) {
                let okPassword = bcrypt.compareSync(req.body.passwordLog,userToLogin[0].password);
                if (okPassword) {
                    const resp = {
                        logged : true,
                        image : `${req.protocol}://${req.get('host')}${userToLogin[0].image}`,
                        admin : userToLogin[0].admin
                    } 
                    return res.json(resp)
                }else{
                    const resp ={
                        logged : false,
                    } 
                    return res.json(resp)
                }
            }
        })
    }
}

const writeFormRegister = (req, res) => {
    console.log(req.body);
    const errors = req.body.errors
    console.log(req.body);
    console.log(errors);
    if (errors == 0 ) {
        let newImage = req.file ? req.file.filename : '';
        if(newImage.length > 0 ){
          image = `/images/users/${newImage}`;
        }else{
          image = `/images/users/defaultAvatar.jpg`
        };
        DB.User.findAll({   
            where: {email: req.body.email} 
        }).then(userInDB =>{
            console.log(userInDB);
            if (userInDB.length > 0) {
                return res.json('registered')
            }else{
                let cryptPassword = bcrypt.hashSync(req.body.password,10);
                DB.User.create({
                    name: req.body.name,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: cryptPassword,
                    image: image
                })
                return res.json('Not registered')
            }
        })
    }
};

module.exports = {
    usuarios,
    usuario,
    writeFormLogin, 
    writeFormRegister
}