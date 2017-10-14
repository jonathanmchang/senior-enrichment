'use strict'

const Seqeulize = require('sequelize');
// up a level and find db on line 13 of index.js
const db = require('../');

const Campus = db.define('campus', {
    name: {
        type: Seqeulize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    imageurl: {
        type: Seqeulize.STRING,
        allowNull: false 
    },
});

module.exports = Campus