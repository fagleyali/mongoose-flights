var Ticket = require('../models/ticket')

module.exports={
    new: newTicket,
    create
}

function newTicket(req, res){
    Ticket.find({},function(err,tickets){
        res.render('tickets/new',{
            title: "Add Ticket",
            tickets});
    })
}

function create (req,res){
    Ticket.create(req.body,function(err,ticket){
        res.redirect('/tickets/new');
    })
}