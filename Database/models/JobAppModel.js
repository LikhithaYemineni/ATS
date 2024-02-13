const mongoose = require('mongoose');

// const uri = "mongodb+srv://likhithayemineni143:Waterloo@cluster0.8x4jgla.mongodb.net/CareerHunt?retryWrites=true&w=majority";

// mongoose.connect(uri,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{console.log("Connected to MongoDb")})
// .catch((err)=>{console.log(`not connected to MongoDb due to error below \n ${err}`)})

const jobAppSchema = new mongoose.Schema({

  jobId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'JobModel' },
  applicantId: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: 'User'},

  stage: {type:String},
  status: {type:String,require: true,
    enum: [ "applied", "shortlisted","accepted","rejected", "deleted", "cancelled" ],
    default: "applied",
  },

  assigned_to: {type:Number},
  interview_comments:{type:String},
});
 
const JobAppModel = mongoose.model('JobApplication', jobAppSchema);
module.exports = JobAppModel;
