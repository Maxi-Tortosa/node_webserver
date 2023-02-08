const express = require('express');
var hbs = require('hbs');

const app = express();
const port = 8090;

//Setear handlebars

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estático

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home', { titulo: 'Curso node', nombre: 'Maximiliano Tortosa' });
});

app.get('/elements', (req, res) => {
	res.render('elements', {
		titulo: 'Curso node',
		nombre: 'Maximiliano Tortosa',
	});
});

app.get('/generic', (req, res) => {
	res.render('generic', {
		titulo: 'Curso node',
		nombre: 'Maximiliano Tortosa',
	});
});

// app.get('/holamundo', (req, res) => {
// 	res.send('En su respectiva ruta');
// });

// app.get('/generic', (req, res) => {
// 	res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements', (req, res) => {
// 	res.sendFile(__dirname + '/public/elements.html');
// });

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
