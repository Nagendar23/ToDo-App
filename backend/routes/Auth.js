const { Router } = require('express');
const { signup, signin, logout } = require('../controller/AuthController');

const authRouter = Router();

authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
authRouter.post('/logout', logout);

module.exports = authRouter;
