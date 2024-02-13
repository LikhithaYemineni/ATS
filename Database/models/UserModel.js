const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");


// const uri = "mongodb+srv://likhithayemineni143:Waterloo@cluster0.8x4jgla.mongodb.net/CareerHunt?retryWrites=true&w=majority";

// mongoose.connect(uri,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{console.log("Connected to MongoDb")})
// .catch((err)=>{console.log(`not connected to MongoDb due to error below \n ${err}`)})

const userSchema = new mongoose.Schema({
  firstname: {type:String,require:true},
  lastname: {type:String,require:true},
  email: {type:String,require:true,
          unique:true},
  mobilenumber: {type:Number},
  password: {type:String,
             require:true,
             minlength:8},
  gender: {type:String},
  address: {type:String},
  resume: {type:String},
  usertype: {type: String,
    enum: ["applicant","recruiter"],
    required: true,},
  jobId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobModel'
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
      next();
  }
  this.password = await bcrypt.hash(this.password, 10)
});


const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
