const express = require('express') ;
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//init the app
const app = express();
//middleware
app.use(express.json());

// Read the host address and the port from the environment
dotenv.config({path: __dirname + '/config/.env'})


app.use('/api/user', require('./routes/user'));


//Create a server
app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`)
})
//Start server
var PORT = 3000;

//Connecting to the DB
mongoose.connect(process.env.MONGO_URI, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Connected to the DB'))
.catch(()=> console.log('Failed to connect'));


