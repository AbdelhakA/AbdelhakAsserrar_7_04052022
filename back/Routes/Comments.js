const express = require('express');
const router = express.Router();

const auth = require('../Middlewares/Auth');
const admin = require('../Middlewares/Admin');
const commentCtrl = require('../Controllers/Comments');

router.get('/', auth, admin, commentCtrl.getAllRemarks);
router.delete('/:id', auth, admin, commentCtrl.deleteRemark);
router.post('/', auth, admin, commentCtrl.createRemark);
router.get('/authTest', auth);


module.exports = router;