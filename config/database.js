var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights',
    {useNewUrlParser:true}
);

var db =  mongoose.connection;

db.on('connected', function(){
    console.log(`connected to MongoDB at ${db.host}: ${db.port}`);
});

db.on('error', function(error){
    console.log('Something went wrong with DB', error);
})
