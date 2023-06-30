import { Contacto } from '../models/Contacto.js';

const guardarContacto = async (req, res)  => {
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(!nombre) {
        errores.push({'mensaje': 'Agrega tu Nombre'})
    }
    if(!correo) {
        errores.push({'mensaje': 'Tu Correo es Obligatorio'})
    }
    if(!mensaje) {
        errores.push({'mensaje': 'Un Testimonial no puede ir vacio'})
    }

    // revisar por erroes
    if(errores.length > 0 ){
        const contactos = await Contacto.findAll();

        // muestra la vista con errores
        res.render('contactos', {
            errores,
            nombre, 
            correo, 
            mensaje,
            testimoniales,
            pagina: 'Contactos'
        });
    } else {
        // almacenalo en la BD

        try {
            await Contacto.create({
                nombre, 
                correo,
                mensaje
            });

            res.redirect('/contactos');
        } catch (error) {
            console.log(error);
        }
    }

};



export {
    guardarTestimonial
}
