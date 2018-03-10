const express = require('express');
//Morgan is used for logging request details. 
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Out of the variables.js variables, this points out to each unique variable declared here in the {}
//const {PORT, SUCCESSMSG, DATABASEURL} = require('./variables');


//import all the routes
const blogPostsRouter = require('./blogPostsRouter');

//to start the routing
const app = express();



//HOW TO CONNECT TO THE DATABASE
//mongodb --> mongolab string
//connect to mongolab
mongoose.connect('mongodb://ola:admin@ds231228.mlab.com:31228/blogthinkful');
mongoose.Promise = global.Promise;
//Retrives database connected at the moment
let db = mongoose.connection;
//FEEDBACK THAT THE DB IS OK:
//on error
db.on('error', console.error.bind(console, 'Connection error:'));
//means everything is running correctly
db.once('open', function () { console.log('Connected to a database') });




const jsonParser = bodyParser.json();



//Morgan supports a handful of pre-defined logged formats with 
//well-know names/structures. combined, common, dev, short, tiny.
//That string is telling morgan which log format you'd like it to use. 
app.use(morgan('common'));



// you need to import `blogPostsRouter` router and route
// requests to HTTP requests to `/blog-posts` to `blogPostsRouter`
app.use('/blog-posts', blogPostsRouter);



//start listening to the server
//node
//two parameters = (# is the port(local server)  , a callback function);

app.listen(3434,() => {
	console.log('server running');
})


/*
app.listen(PORT, () => {
  console.log(`${SUCCESSMSG} in port ${PORT}`);
});
*/

