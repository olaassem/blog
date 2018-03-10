//will contain all the variables that we will use in our app

//1. create variables file
//2. ask the value of the variable we have to make it available
//if you see uppercase, means it is from the "config file" here called "variable.js"- makes it readable



//port is a 4 - digit number
//8080 in case 
//process.env.PORT  is an environmental variable THAT IS DEFINED!!
//. if the env port is undefined it will display '8080'
exports.PORT =  process.env.PORT || 8080;

exports.SUCCESSMSG = "Server running successfully";

exports.DATABASEURL = "mongodb://Ola:adminadmin@ds155278.mlab.com:55278/testmongo";