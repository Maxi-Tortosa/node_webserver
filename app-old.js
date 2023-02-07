const http = require('http');

http
	.createServer((req, res) => {
		// console.log(req);
		// res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
		// res.writeHead(200, { 'Content-Type': 'text/plain' });
		// res.writeHead(200, { 'Content-Type': 'application/csv' });
		// const persona = { id: 'Maxi', nombre: '1' };
		// res.write(JSON.stringify(persona));
		// res.write('id; nombre;\n');
		// res.write('1; max;\n');
		// res.write('2; maru;\n');
		// res.end();

		res.write('Hola mundo');
		res.end();
	})
	.listen(8080);

console.log('Escuchando el puerto', 8080);
