const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS','DAL','LAX','SEA']
  },
  arrival: Date,
  
},{
    timestamps: true
  
})

const flightSchema = new Schema({
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
  },{
    timestamps: true
 
})

module.exports = mongoose.model('Flight',flightSchema);
  
