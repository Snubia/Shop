const Sequelize = require('sequelize');

const sequelize = new Sequelize('shop_app', 'root', 'Password', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;