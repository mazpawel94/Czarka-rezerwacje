const mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_blbg8v1d:mqt4qpfkpned9r9mnk189v8f84@ds063439.mlab.com:63439/heroku_blbg8v1d', function(){
    console.log('połączenie nawiązane, url: ', process.env.MONGODB_URI);
})
module.exports = mongoose;