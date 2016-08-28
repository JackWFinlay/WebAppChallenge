// server.js
//===================================
// Dependencies
const express = require('express');
const router = express.Router();
// / Dependencies
//===================================

router.get('/challenge', function (req, res) {
    var challenge = {
        frontend: 'Angular 2',
        backend: 'NodeJS',
        database: 'MongoDB'
    };
    res.json(challenge);
});