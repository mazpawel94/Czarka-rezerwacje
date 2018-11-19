
const date = require('../controllers/applicationsController');
date.refresh();
date.getHour();
date.getTables();
exports.index = (req, res) => {
    date.refresh();
    res.render('reservation', {
        dateFromBase: date.records
    });
};

exports.changes = (req, res) => {
    date.refresh();
    date.getTables();
    res.render('changes', {
        formMessage: req.flash('form'),
        dateFromBase: date.records,
        tablesNow: date.tablesNow
    });
};

exports.live = (req, res) => {
    date.getHour();
    date.getTables();
    res.render('live', {
        lastUpdate: date.time.toString().replace('{', '').replace('}', '').replace('time:', '').replace("'", '').replace("'", ''),
        tablesNow: date.tablesNow
    });
}