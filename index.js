import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
const app = express();

//Conectar a la base de datos
db.authenticate()
	.then(()=>console.log('BD CONECTADA'))
	.catch(error=> console.log('error'));


//definir puerto
const port = process.env.PORT || 4000;

//Habilitar Pug
app.set('view engine','pug');

//Obtener año actual
app.use((req, res, next) => {
	const year = new Date();

	res.locals.actualYear = year.getFullYear();
	res.locals.nombreSitio= "Metalurgica Buenos Aires";
	return next();

});

//Agregar body parser para leer los datos del formulario

app.use(express.urlencoded({extended:true}));

//Definir carpeta public
app.use(express.static('public'));

//agregar router
app.use('/',router);

app.listen(port, ()=>{
	console.log(`SERVIDOR OK PUERT ${port}`)
