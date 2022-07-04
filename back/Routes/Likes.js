const express = require('express');
const router = express.Router();

const likeCtrl = require('../Controllers/Likes');
const auth = require('../Middlewares/Auth');

router.post('/', auth, likeCtrl.createLike);
router.get("/posts/:id", auth, likeCtrl.getLike); 
router.get("/:idPost/like/:id", auth, likeCtrl.isLiked); 

module.exports = router;