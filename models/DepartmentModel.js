const mongoose = require('mongoose');
// const uri = "mongodb+srv://likhithayemineni143:Waterloo@cluster0.8x4jgla.mongodb.net/CareerHunt?retryWrites=true&w=majority";

// mongoose.connect(uri,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{console.log("Connected to MongoDb")})
// .catch((err)=>{console.log(`not connected to MongoDb due to error below \n ${err}`)})

const departmentSchema = new mongoose.Schema({
  name: {type: String, require: true,
          enum:["Computer Science","Information Technology","Cloud Computing","Data Science", "AI","ML"]
        },
  jobId: { type: mongoose.Schema.Types.ObjectId, 
         ref: 'JobModel' },
});

const DepartmentModel = mongoose.model('Department', departmentSchema);
module.exports = DepartmentModel;