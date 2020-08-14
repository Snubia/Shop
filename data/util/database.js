const Sequelize = require('sequelize');
var sequelize;

if (process.env.JAWSDB_URL) {
  console.log('11111111111111111111111111111');
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  console.log('1111111111111111111111111111188888888888888888');
  sequelize = new Sequelize('shop_app', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost',
  });
}
module.exports = sequelize;
