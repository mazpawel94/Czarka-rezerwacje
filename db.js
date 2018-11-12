const mongoose = require('mongoose');
//  const mongodb = require('mongodb');
//  const MongoClient = mongodb.MongoClient;

mongoose.connect('mongodb://testuser:testuser1@ds157843.mlab.com:57843/heroku_3sg9gr36', function(){
// mongoose.connect('mongodb://localhost/reservation', function(){
    console.log('połączenie nawiązane');
})
module.exports = mongoose;
// module.exports = mongodb;