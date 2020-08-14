const Sequelize = require('sequelize');
var sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize('shop_app', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
  });
};
module.exports = sequelize;