const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reservation', function(){
    console.log('połączenie nawiązane');
})
module.exports = mongoose;