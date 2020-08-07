const Sequelize = require('sequelize');

const sequelize = new Sequelize('shop_app', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost',

});

module.exports = sequelize;