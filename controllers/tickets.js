const Ticket = require('../models/ticket')

module.exports={
    new: newTicket,
    create,
    deleteTicket,
}

function newTicket(req, res){
    res.render('tickets/new', {
        title: "Add a New Ticket",
        flightId: req.params.id
    })
}

function create(req,res){
    Ticket.create(req.body,function(err,ticket){
        res.redirect('/flights/' + ticket.flight);
    })
}

function deleteTicket(req, res){
    Ticket.findByIdAndDelete(req.params.id, function(err, deletedTicket){
        res.redirect('/flights/' + deletedTicket.flight)
    })
}