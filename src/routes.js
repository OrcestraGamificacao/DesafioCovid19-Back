const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/teste', (req, res) => {
    var db = require("./schemas/schemaTeste.js");
    var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    Users.find({}).lean().exec(
       function (e, docs) {
          res.json({ "userlist": docs });
    })
});

module.exports = router;