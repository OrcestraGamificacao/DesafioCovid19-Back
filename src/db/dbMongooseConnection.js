var mongoose = require('mongoose');

module.exports = {
    connect: () => {
      mongoose.Promise = global.Promise;
      const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
      };
        mongoose.connect('mongodb://db:27018/server', options)
        .then(result => {
            console.log('Mongo DB Conectado');
        })
        .catch(error => {
            console.log(error);
        });
    }
};