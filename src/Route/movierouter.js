const express = require('express');
const router = express.Router();
const { addNewMovie,UpdateMovieById, getMovies, DeleteMovieById }= require('../Controller/movieController')

router.post('', addNewMovie);
router.get('', getMovies); 
router.delete('/:id', DeleteMovieById); 
router.put('', UpdateMovieById) 


module.exports = router;