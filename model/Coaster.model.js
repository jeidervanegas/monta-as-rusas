const {Schema, model} = require('mongoose')

const coasterSchema = new Schema({
    title: {
        type: String,
        description: String,
        inversion: Number,
        length: Number,
        imageUrl: String

    }
})

const Coaster = model('coaster', coasterSchema, 'coaster');

module.exports = Coaster;