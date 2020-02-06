const mongoose = require('mongoose');


const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 350,
    },
    editor: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 250,
    },
    categories: {
        type: [String],
        required: true,
        enum: ['adventure', 'action', 'multiplayer', 'race', 'role games', 'simulation', 'shooting', 'sports', 'strategy'],
        validate: {
            validator: function(array) {
                return array && array.length >= 1;
            }
        }
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    releaseDate: {
        type: Date,
        default: new Date().toJSON().split("T")[0],
    },
    isAwardWinner: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Game', gameSchema);
