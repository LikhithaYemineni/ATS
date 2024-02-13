const mongoose = require('mongoose');

//const uri = "mongodb+srv://likhithayemineni143:Waterloo@cluster0.8x4jgla.mongodb.net/CareerHunt?retryWrites=true&w=majority";

// mongoose.connect(uri,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{console.log("Connected to MongoDb")})
// .catch((err)=>{console.log(`not connected to MongoDb due to error below \n ${err}`)})

const locationSchema = new mongoose.Schema({
  locationname: {type:String},
  address: {type:String},
  jobId: {
     type: mongoose.Types.ObjectId, 
     ref: 'JobModel'
     },
});

const LocationModel = mongoose.model('Location', locationSchema);
module.exports = LocationModel;