'use strict'

const Sequelize = require('sequelize');
// go up one level and look at db on line 13 of index.js
const db = require('../');

const Student = db.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        isUnique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
});

module.exports = Student