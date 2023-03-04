const Sequelize = require('sequelize');

const sequelize = new Sequelize('book-appointment','root','Shubh@099',{
    dialect: 'mysql',
    host:'localhost'
})

module.exports = sequelize;