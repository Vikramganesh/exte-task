const connection = require('./src/DbConnection');
const express = require('express')
const app = express()
var cors = require('cors')
const { PORT } = require('./src/Config')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const addnewmovie = require('./src/Route/movierouter')
const getallmovies = require('./src/Route/movierouter')
const deletemovie = require('./src/Route/movierouter')
const updatemovie  = require('./src/Route/movierouter')


app.use(cors())
app.use('/newmovie', addnewmovie)
app.use('/getmovies', getallmovies)
app.use('/deletemovie', deletemovie)
app.use('/updatemovie', updatemovie)


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})