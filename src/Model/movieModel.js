const mongoose = require('mongoose');
const MovieSchema  = new mongoose.Schema({
    movieTitle: String,
    movieRating: Number,
    movieReview: String,
    movieReleaseYear: Number
})

module.exports = MovieSchema