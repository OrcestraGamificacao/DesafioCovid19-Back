const express = require('express');
const mongoose = require('mongoose');
const SchemaTest = require('./schemas/schemaTeste')
const agglomerationController = require('./controller/agglomerationController')

const router = express.Router();

router.post('/teste', (req, res) => {
    const novoNome = new SchemaTest({
      nome: req.body.nome,
      email: req.body.email
    });
  
    novoNome
      .save()
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        res.status(500).json(error);
      });
 });

 router.get('/agglomerations/send', agglomerationController.show);
 router.get('/agglomerations', agglomerationController.index);
 router.put('/agglomerations/update', agglomerationController.update);
 router.post('/agglomerations/create', agglomerationController.store);

module.exports = router;