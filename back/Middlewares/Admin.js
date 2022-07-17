const express = require('express');
const router = express.Router();
const max = require("../Middlewares/Limit")

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/signin', max.limiter, userCtrl.signin);
router.get('/logout', userCtrl.logout)
router.delete('/deleteUser', userCtrl.deleteAccount);
router.put('/updatepassword', userCtrl.modifyPassword);
router.put('/modifyPseudo',userCtrl.modifyPseudo);

module.exports = router;