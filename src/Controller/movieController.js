const MovieSchema = require('../../src/Model/movieModel');
const mongoose = require('mongoose')
const Movie = mongoose.model('Movie', MovieSchema)


const addNewMovie = (req,res) => {
    console.log(req.body);
    let result = Movie.create({movieTitle: req.body.movieTitle, movieRating: req.body.movieRating, movieReview: req.body.movieReview, movieReleaseYear: req.body.movieReleaseYear})
     result.then(() => {res.send(result), console.log(result)});
     result.catch(err => res.send(err));  
}

async function getMovies(req,res) {
    result = await Movie.find()
    res.send(result)
}

async function UpdateMovieById(req,res) {
    data = req.body;
    result = await Movie.updateOne({_id:data._id},{$set:{movieRating: req.body.movieRating, movieReview: req.body.movieReview}});
    res.send(result);
}

async function DeleteMovieById(req,res) {
    id = req.params.id;
    console.log(id);
    result = await Movie.deleteOne({_id:id});
    res.send(result);
}

module.exports =  {addNewMovie, getMovies,UpdateMovieById, DeleteMovieById } 