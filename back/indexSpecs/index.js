// // const Sequelize = require('sequelize');
// // const configDB = require('./Env_config/DataBase_models');
// // const path = require('path');
// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const Posts = require('./Models/Posts'); // on apporte chacun des models configurés pour les intégrer à la DB
// const User = require('./Models/User');  
// const Likes = require('./Models/Likes');
// const Comments = require('./Models/Comments');


// require('dotenv').config();
// console.log(process.env)

// mongoose.connect(process.env.DB_URL,
//     { useNewUrlParser: true,
//       useUnifiedTopology: true })
//     .then(() => console.log('Connexion à MongoDB réussie !'))
//     .catch(() => console.log('Connexion à MongoDB échouée !'));
//     app.use(express.json());

//     app.use((req, res, next) => {
//       res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//       res.setHeader('Access-Control-Allow-Credentials', true);
//       res.setHeader('Access-Control-Allow-Headers',"*");
//       res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//       next();
//     });

    
    

// // const loginDB = new Sequelize(configDB);
// // console.log('connecté à la base de donnée!');

// // User.init(loginDB);
// // Posts.init(loginDB);
// // Comments.init(loginDB);
// // Likes.init(loginDB);


// // module.exports = loginDB;