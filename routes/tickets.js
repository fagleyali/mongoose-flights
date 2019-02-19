var express = require('express');
var router = express.Router();
var ticketCtrl = require('../controllers/tickets');

router.get('/tickets/new',ticketCtrl.new);
router.post('/tickets',ticketCtrl.create);

module.exports = router;
