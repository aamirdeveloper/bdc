const express = require('express');
const userController = require("../controllers/user.controller");
const loginController = require("../controllers/login.controller");

const router = express.Router();

router.post('/login', loginController.login);
// router.post('/check-login-status', loginController.check_login_status);
// router.get('/get-login-status', loginController.get_login_status);
router.get('/logout', loginController.logout);

router.post('/change-password', loginController.change_password)
/*----------------------------------------------------------*/
router.get('/dashboard', userController.index);

module.exports= router;