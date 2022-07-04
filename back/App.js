const express = require('express');
const app = express();
const postRoutes = require('./Routes/Posts');
const userRoutes = require('./Routes/User');
const commentRoutes = require('./Routes/Comments');
const likeRoutes = require('./Routes/Likes')
const path = require('path');

// require('dotenv').config()

//connexion avec la base de données
require('./index');

// mongoose.connect(process.env.DB_URL,
//   { useNewUrlParser: true,
//     useUnifiedTopology: true })
//   .then(() => console.log('Connexion à MongoDB réussie !'))
//   .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Headers',"*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/posts', postRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;