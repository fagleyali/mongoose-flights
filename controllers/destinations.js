var Flight = require('../models/Flight');

module.exports = {
    create
}; 

function create (req, res){
    Flight.findById(req.params.id,function(err, flight){
        
        flight.destinations.push();
        
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`);
            console.log(`here is the flight ${flight.destinations.length}`);
        })
    })
    
}