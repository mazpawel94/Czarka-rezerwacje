
const date = require('../controllers/applicationsController');
// const records = date.records;
date.refresh();
date.getHour();
exports.index = (req, res) => {
    date.refresh();
    res.render('reservation', {
        dateFromBase: date.records
    });
};

exports.changes = (req, res) => {
    date.refresh();
    res.render('changes', {
        formMessage: req.flash('form'),
        dateFromBase: date.records
    });
};

exports.live = (req, res) => {
    date.getHour();
    res.render('live', {
        lastUpdate: date.time.toString().replace('{', '').replace('}', '').replace('time:', '').replace("'", '').replace("'", '')
    });
}