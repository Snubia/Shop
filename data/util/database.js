const Sequelize = require('sequelize');
require('dotenv').config();
var sequelize;
const JAWSDB =
  'mysql://xq41muiqops11r29:s5fz7x2t9iz1zd6c@rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/qfooekrkvoba9t8x';
console.log(process.env.JAWSDB_URL);
if (process.env.JAWSDB_URL) {
  console.log('11111111111111111111111111111');
} else if (JAWSDB) {
  console.log('workwoekosjsbsdhfkjbjsgvfjvjEfvjfdvadvjfdahbfdkjh');
  sequelize = new Sequelize({
    host: 'rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'xq41muiqops11r29',
    password: 's5fz7x2t9iz1zd6c',
    database: 'qfooekrkvoba9t8x',
    dialect: 'mysql',
    port: '3306',
  });
} else {
  console.log('1111111111111111111111111111188888888888888888');
  sequelize = new Sequelize('shop_app', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost',
  });
}
module.exports = sequelize;
