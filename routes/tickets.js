var express = require('express');
var router = express.Router();
var ticketCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketCtrl.new)
router.delete('/tickets/:id', ticketCtrl.deleteTicket)
router.post('/tickets',ticketCtrl.create);


module.exports = router;
