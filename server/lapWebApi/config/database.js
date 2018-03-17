let mongoose = require('mongoose');

const uriBD = process.env.MONGODB_URI;

module.exports = function () {

  mongoose.set('debug', true);
  mongoose.Promise = global.Promise;
  mongoose.connection.openUri(uriBD);
  mongoose.connection.on('connected', function () {
    console.log('Mongoose! Connect in ' + uriBD);
  });

  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose! Disconnect of ' + uriBD);
  });

  mongoose.connection.on('error', function (erro) {
    console.log('Mongoose! Erro na conexão: ' + erro);
  });

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log('Mongoose! Disconnect from finish the application.');
      // 0 indica que a finalização ocorreu sem erros
      process.exit(0);
    });
  });
}