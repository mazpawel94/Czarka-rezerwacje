
const date = require('../controllers/applicationsController');
// const records = date.records;
date.refresh();

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