const Record = require('../models/record');
const render = require('../controllers/pagesController');

exports.refresh = () => {
    Record.find({},{_id: 0, name:0, __v: 0}, function(err,records) {
        if(err) console.log("coś się zepsuło");
        else
        {
             exports.records = records;
        }
    });

}


exports.save = (req, res) => {
    req.flash('form', `Rezerwacja na nazwisko ${req.body.last_name} zostala zapisana`); 
    res.redirect('/changes');
};

exports.normalizeData = (req, res, next) => {
    const nameArr = req.body.name.split(' ');
    req.body.first_name = nameArr[0];
    req.body.last_name = nameArr[nameArr.length - 1];
    next();
}

exports.saveToBase = (req, res, next) => {
    const newRecord = new Record({
        'date': req.body.day,
        'hour': req.body.hour,
        'name': req.body.name,
        'table': req.body.table,
        'amount': req.body.numberPeople
    });
    newRecord.save(function (err) {
        if (err) {
            return next(err);
        }
    });
    next();
}

