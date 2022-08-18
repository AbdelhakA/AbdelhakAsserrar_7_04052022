const express = require('express');
const router = express.Router();

const auth = require('../Middlewares/Auth');
const multer = require('../Middlewares/multer-config');

const postCtrl = require('../Controllers/Posts');

//------------- requet GET pour TOUS LES POSTS de la database ------------

router.get('/', auth, postCtrl.getAllPosts);

// ---------------- CREER UN POST -------------------------------------

router.post('/create', auth, multer, postCtrl.createPost);

//--------------// requet GET pour UN SEUL POST de la database---------------

router.get('/:id', auth, postCtrl.getOnePost);

// -------- MODIFIER UN OBJET -----------------------------------------------

router.put('/:id', auth, multer, postCtrl.modifyPost);

// ---------------- SUPPRIMER UN OBJET -------------------------------------

router.delete('/:id', auth, postCtrl.deletePost);

module.exports = router; 