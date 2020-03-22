var mongoose = require('mongoose');

module.exports = {
    connect: () => {
      mongoose.Promise = global.Promise;
      const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
      };
        mongoose.connect('mongodb://127.0.0.1:27017/desafiodb', options);
    }
};