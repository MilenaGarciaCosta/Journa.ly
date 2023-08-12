const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp', 'root', 'BagreBagredoSul1', {
    host: "localhost",
    port: "3308",
    dialect: 'mysql'
});
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}