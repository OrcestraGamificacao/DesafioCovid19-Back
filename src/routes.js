const express = require('express');
const User = require('./controllers/userController');
const router = express.Router();
const { createUserValidation, validate, updateUserValidation, deleteUserValidation, loginValidation } = require('./validator.js');

const usuario = new User();
router.post('/user/create', createUserValidation(), validate, usuario.createUser);
router.get('/user/show', usuario.showUsers);
router.get('/user/find', usuario.findUser);
router.post('/user/update', updateUserValidation(), validate, usuario.findAndUpdate);
router.delete('/user/delete', deleteUserValidation(), validate, usuario.findAndDelete);
router.post('/login',loginValidation(), validate, usuario.login); 
router.get('/autenticado', usuario.verifyJWT, usuario.showUsers); //essa é uma rota com middleware de autenticação
  
module.exports = router;