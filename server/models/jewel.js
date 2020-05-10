var mongoose = require('mongoose')
var Schema = mongoose.Schema
var jewelSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Preencha um nome para o produto'],
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    imageURI: {
        type: String,
        required: true
    },
    tags: [{
        type: String,
        required: true
    }]
})

module.exports = mongoose.model('Jewel', jewelSchema)