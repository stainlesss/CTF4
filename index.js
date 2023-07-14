const express = require('express');
const fs = require('fs');
var port = 80;
const app = express();

app.get('/', (req,res) => {
	
	res.send('test');
});


app.get('/check/:hash', (req,res) => {
	
	var hash = req.params.hash.toUpperCase();

	if (hash === "A6710435BF7F84D0693EBD9DBA447E32F745B9B6C0D3703DABBBCACA4CE4B7EA")
	{
		fs.readFile('response.txt', 'utf8', (err, data) => {
			if (err) {
			  res.send(err.message);
			  return;
			}
			res.json(JSON.parse(data));
		  });
	}else {
		res.send("<h1> Try again! </h1>");
	}
});



app.listen(port, () => {
	
	console.log(`Started listening at PORT : ${port}`);
	
});

