const express = require('express');
const app = express();
const port = 8090;

//Servir contenido estático

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('Home page');
});

app.get('/holamundo', (req, res) => {
	res.send('En su respectiva ruta');
});

app.get('/generic', (req, res) => {
	res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
	res.sendFile(__dirname + '/public/elements.html');
});

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
