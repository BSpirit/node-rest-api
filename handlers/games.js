const db = require('../models/index.js');


exports.createGame = async (req, res) => {
    try {
        let newGame = await db.Game.create(req.body);
        return res.status(201).json({
            message: "Game created",
            newGame
        });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            message: 'Could not create game',
            error: err
        });
    }
};

exports.getAllGames = async (req, res) => {
    try {
        let games = await db.Game.find(req.query);
        return res.send(games);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Could not get games',
            error: err
        });
    }
};

exports.getOneGame = async (req, res) => {
    try {
        let game = await db.Game.findById(req.params.id);
        if (!game)
            return res.sendStatus(404);
        return res.send(game);
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: 'Could not get game',
            error: err
        });
    }
};

exports.updateOneGame = async (req, res) => {
    try {
        await db.Game.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true }
        );
        return res.sendStatus(200);
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: 'Could not update game',
            error: err
        });
    }
};

exports.deleteOneGame = async (req, res) => {
    try {
        await db.Game.findByIdAndRemove(req.params.id);
        return res.sendStatus(200);
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: 'Could not delete game',
            error: err
        });
    }
};
