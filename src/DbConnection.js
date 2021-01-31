const mongoose = require('mongoose')
const { dbUrl, Options } = require('../src/Config')

const connection = mongoose.connect(dbUrl, Options);

connection.then(()=>{
    console.log('DataBase Connected..')
}).catch(()=>{
    console.log('Error Database not connected..')
})

module.exports = {connection}