var Flight = require('../models/flight');
var Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show

}

function show(req, res){
    Flight.findById(req.params.id,function(err,flight){
        Ticket.find({flight: req.params.id}, function(err, foundTickets){
            res.render('flights/show',{title: 'Flight Details', flight, foundTickets});
        })
    })
}

function index(req, res){
    Flight.find().sort({departs: 1}).exec(function(err,flight){
        res.render('flights/index',{title:"All Flights", flight})
    })
}

function newFlight(req, res){
    res.render('Flights/new',{ title: 'Add Flight' });
}
function create(req,res){
    var flight = new Flight(req.body);
    flight.save(function(err){
        if(err) return res.render('flights/new',{title:'Add Flight'});
        res.redirect(`/flights/${flight._id}`);
        console.log(flight);
        // res.redirect('/flights');
    })
}

