const PORT = 3000

const dbUrl = 'mongodb://localhost/moviedb'

const Options = {useNewUrlParser: true, useUnifiedTopology: true }

module.exports = { PORT, dbUrl, Options }