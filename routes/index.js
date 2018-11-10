const express = require('express');
const router = express.Router();

const PageController = require('../controllers/pagesController');
const ApplicationController = require('../controllers/applicationsController');
router.get('/', PageController.index);
router.get('/changes', PageController.changes);
router.post('/applications', ApplicationController.normalizeData, ApplicationController.saveToBase, ApplicationController.save);

module.exports = router;
