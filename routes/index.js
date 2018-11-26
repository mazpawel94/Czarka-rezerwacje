const express = require('express');
const router = express.Router();

const PageController = require('../controllers/pagesController');
const ApplicationController = require('../controllers/applicationsController');
router.get('/', PageController.index);
router.get('/changes', PageController.changes);
router.get('/reservations', PageController.reservation);
router.get('/live', PageController.live);
router.post('/applications', ApplicationController.normalizeData, ApplicationController.saveToBase, ApplicationController.save);
router.post('/setTable', ApplicationController.setFreeTable, ApplicationController.confirmUpdate);

module.exports = router;
