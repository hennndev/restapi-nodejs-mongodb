const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    published_date: {
        type: String,
        required: true
    },
    publisher: {
        name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        }
    },
    page_count: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: null
    },
    reviews: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

const Books = mongoose.model("books", bookSchema)
module.exports = Books