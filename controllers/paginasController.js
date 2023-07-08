import { Obra } from '../models/Obras.js';
import { Contacto } from '../models/Contacto.js';

const paginaInicio = async (req, res) => {
    
    const promises = [];

    promises.push(Obra.findAll({
        limit: 3
    }));

    promises.push(Contacto.findAll({
        limit: 3
    }));


    try {
        // pasar al promise
        const resultado =  await Promise.all(promises);

        console.log(resultado[0])

        res.render('inicio', {
            obras : resultado[0],
            contactos: resultado[1],
            clase : 'home',
            page: 'Inicio',
        })
    } catch (error) {
        console.log(error);
    }

}

const paginaNosotros = (req, res) => { 
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaObras = async  (req, res) => { 
    // Consultar BD 
    const obras = await Obra.findAll();
    
    res.render('obras', {
        pagina: 'Nuestras obras', 
        obras,
    });
}

const paginaContactos =  async (req, res)  => {
     
    try {
        const contactos = await Contacto.findAll();
        res.render('contactos', {
            pagina: 'Contactos', 
	    contactos	
        })
    } catch (error) {
        console.log(error);
    }
}

// Muestra un viaje por su slug
const paginaDetalleObra = async (req, res) => {

   const { slug } = req.params;

    try {
        const obra = await Obra.findOne( { where : { slug } });

        res.render('obra', {
  
		pagina: 'Detalle obra', 
                obra
    })
    } catch (error) {
   console.log(error);
    }
//	console.log(req.params);
}

export {
    paginaInicio, 
    paginaNosotros,
    paginaObras, 
    paginaContactos,
    paginaDetalleObra
}
