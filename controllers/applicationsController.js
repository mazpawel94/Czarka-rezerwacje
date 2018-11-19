const RecordsFromBase = require('../models/record');
const render = require('../controllers/pagesController');
const Record = RecordsFromBase.record;
const freeTable = RecordsFromBase.tablesLive;

exports.refresh = () => {
    Record.find({},{_id: 0, name:0, __v: 0}, function(err,records) {
        if(err) console.log("coś się zepsuło");
        else
        {
             exports.records = records;
        }
    });

}

exports.getHour = () => {
    freeTable.find({}, {_id: 0, japanese: 0,
    smallIndian:0,
    bigIndian: 0,
    rightChinese: 0,
    base: 0,
    rightRattan: 0,
    leftChinese: 0,
    board: 0,
    leftRattan: 0, __v: 0},function(err,records) {
        if(err) console.log("coś się zepsuło");
        else
        {
             exports.time = records;
        }
    });
}

exports.getTables = () => {
    freeTable.find({},{_id: 0, __v: 0, time: 0}, function(err,records) {
        if(err) console.log("coś się zepsuło");
        else
        {
             exports.tablesNow = records;
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


exports.setFreeTable = (req, res, next) => {

    freeTable.findById('5be9dba30603fc1ff43d85b3', function (err, update) {
        if (err) return handleError(err);
      const date = Date().toLocaleString().split(' ')[4];
        update.set({
            'japanese': req.body.japanese,
            'smallIndian': req.body.smallIndian,
            'bigIndian': req.body.bigIndian,
            'rightChinese': req.body.rightChinese,
            'base': req.body.base,
            'rightRattan': req.body.rightRattan,
            'leftChinese': req.body.leftChinese,
            'board': req.body.board,
            'leftRattan': req.body.leftRattan,
            'time': date
        });
        update.save(function (err) {
        if (err) {
            return next(err);
        }
    });
    next();});

}

exports.confirmUpdate = (req, res) => {
    req.flash('form', `Stan sali uaktualniony`); 
    res.redirect('/changes');
}

