const { User } = require('../models');

const userData = [{
    username:'Joseph',
    password: 'cliffdogg'
},
{
    username: 'Kevin',
    password: 'Kevdogg'
},
{
    username: 'Lucian',
    password: 'Blue'
}];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;