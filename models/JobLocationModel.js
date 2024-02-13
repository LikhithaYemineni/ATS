const mongoose = require('mongoose');

// const uri = "mongodb+srv://likhithayemineni143:Waterloo@cluster0.8x4jgla.mongodb.net/CareerHunt?retryWrites=true&w=majority";

// mongoose.connect(uri,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{console.log("Connected to MongoDb")})
// .catch((err)=>{console.log(`not connected to MongoDb due to error below \n ${err}`)})

const jobLocationSchema = new mongoose.Schema({
  jobId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'JobModel' },
  locationId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'LocationModel' },
});

const JobLocationModel = mongoose.model('JobLocation', jobLocationSchema);
module.exports = JobLocationModel;