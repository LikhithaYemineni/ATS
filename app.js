const express = require('express');
const mongoose = require('mongoose');
const app = express();

const JobModel = require('./models/JobModel');
const JobAppModel = require('./models/JobAppModel');
const UserModel = require('./models/UserModel');
const LocationModel = require('./models/LocationModel');
const JobLocationModel = require('./models/JobLocationModel');
const DepartmentModel = require('./models/DepartmentModel');



const uri = "mongodb+srv://likhithayemineni143:Waterloo@cluster0.8x4jgla.mongodb.net/CareerHunt?retryWrites=true&w=majority";

mongoose.connect(uri,{
       useNewUrlParser:true,
       useUnifiedTopology:true
   }).then(()=>{console.log("----Connected to MongoDb----")})
   .catch((err)=>{console.log(`not connected to MongoDb due to error below \n ${err}`)})

app.get('/', (req, res) => {
  res.send('Welcome to Career Hunt - Job Portal');
});



const port = process.env.PORT || 5558
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});