const express = require('express');
const router = express.Router();

const auth = require('../Middlewares/Auth');
const multer = require('../Middlewares/multer-config');

const postCtrl = require('../Controllers/Posts');

router.get('/', auth, postCtrl.getAllPosts);
router.post('/create/', auth, multer, postCtrl.createPost);
router.get('/:id', auth, postCtrl.getOnePost);
router.put('/:id', auth, multer, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);

module.exports = router;