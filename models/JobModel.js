const mongoose = require('mongoose');

// const uri = "mongodb+srv://likhithayemineni143:Waterloo@cluster0.8x4jgla.mongodb.net/CareerHunt?retryWrites=true&w=majority";

//  mongoose.connect(uri,{
//      useNewUrlParser:true,
//      useUnifiedTopology:true
//  }).then(()=>{console.log("Connected to MongoDb")})
//  .catch((err)=>{console.log(`not connected to MongoDb due to error below \n ${err}`)})


const jobSchema = new mongoose.Schema({
  jobtitle: {type:String},
  jobtype: {type:String},
  noofpositions: {type:Number},
  state: {type:String},
  targethiringdate: {type:Date},
  compensationtype: {type:String},
  compensationrangefrom: mongoose.Types.Decimal128,
  compensationrangeto: mongoose.Types.Decimal128,
  jobdescription: {type:String},
  departmentId: { type: mongoose.Types.ObjectId, ref: 'DepartmentModel' },
  locationId: [{ type: mongoose.Types.ObjectId, ref: 'LocationModel' }],
});

const JobModel = mongoose.model('Job', jobSchema);
module.exports = JobModel;
