const express = require("express");
const app = express();

let port = process.env.port || 3001;

app.get("/", function(req,res){
	res.send("Functioning")
})

app.listen(port, function(){
	console.log("Backend is running on port "+port)
});