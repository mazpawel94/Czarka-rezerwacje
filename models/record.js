const db = require('../db');
const record = db.model('Reservation', {
    'date': {type: String, required: true},
    'hour': {type: String, required: true},
    'name': {type: String, required: true},
    'table': {type: String, required: true},
    'amount': {type: Number, required: true},

});

module.exports = record;