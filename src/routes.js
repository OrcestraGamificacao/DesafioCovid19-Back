const express = require('express');
const User = require('./controllers/userController');
const router = express.Router();


const usuario = new User();
router.post('/user/create', usuario.createUser);
router.get('/user/show', usuario.showUsers);
router.get('/user/find', usuario.findUser);
router.post('/user/update', usuario.findAndUpdate);
router.delete('/user/delete', usuario.findAndDelete);
router.post('/login', usuario.login); 
router.get('/autenticado', usuario.verifyJWT, usuario.showUsers); //essa é uma rota com middleware de autenticação
  
module.exports = router;