const express = require('express');
const router = express.Router();
const handlers = require('../handlers/games.js');


router.route('/')
    .get(handlers.getAllGames)
    .post(handlers.createGame);

router.route('/:id')
     .get(handlers.getOneGame)
     .put(handlers.updateOneGame)
     .delete(handlers.deleteOneGame);

module.exports = router;
