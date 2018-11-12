const mongoose = require('mongoose');
//  const mongodb = require('mongodb');
//  const MongoClient = mongodb.MongoClient;
const url = process.env.MONGODB_URI || 'mongodb://localhost/reservation';
mongoose.connect(url, function(){
// mongoose.connect('mongodb://localhost/reservation', function(){
    console.log('połączenie nawiązane');
})
module.exports = mongoose;
// module.exports = mongodb;