var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS','DAL','LAX','SEA']
  },
  arrival: Date
})

var flightSchema = new Schema({
    airline: {
      type: String,
      required: true
    },
    flightNo: {
      type:Number,
      required:true
    },
    departs: { type: Date, 
        default: function () {
            return new Date();
          }},
    airport: {
      type: String,
      enum: ['AUS','DAL','LAX','SEA'],
      default: 'SEA'
    },
    destinations: [destinationSchema]
    
})

module.exports = mongoose.model('Flight',flightSchema);
  
