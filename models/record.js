const db = require('../db');
const record = db.model('Reservation', {
    'date': {type: String, required: true},
    'hour': {type: String, required: true},
    'name': {type: String, required: true},
    'table': {type: String, required: true},
    'amount': {type: Number, required: true},

});

const tables = db.model('tableLive', {
    'japanese': {type: Boolean, require: true},
        'smallIndian':{type: Boolean, require: true},
        'bigIndian': {type: Boolean, require: true},
        'rightChinese': {type: Boolean, require: true},
        'base': {type: Boolean, require: true},
        'rightRattan': {type: Boolean, require: true},
        'leftChinese': {type: Boolean, require: true},
        'board': {type: Boolean, require: true},
        'leftRattan': {type: Boolean, require: true},
        'time': {type: String, require: true}
});

exports.record = record;
exports.tablesLive = tables;