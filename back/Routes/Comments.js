const express = require('express');
const router = express.Router();

const auth = require('../Middlewares/Auth');
const admin = require('../Middlewares/Admin');
const commentCtrl = require('../Controllers/Comments');

router.get('/', auth, admin, commentCtrl.getAllReactions);
router.delete('/:id', auth, admin, commentCtrl.deleteReaction);
router.post('/create', auth, admin, commentCtrl.createReaction);
router.get('/authTest', auth);


module.exports = router;