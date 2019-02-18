var Flight = require('../models/Flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show

}

function show(req, res){
    Flight.findById(req.params.id,function(err,flight){
        if(err){
            res.redirect('/',{title: 'All Flights'})
        }
        res.render('flights/show',{title: 'Flight Details',flight} )
        
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
        console.log(flight);
        res.redirect('/flights');
    })
}