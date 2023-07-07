import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaObras, 
    paginaContactos, 
    paginaDetalleObra
} from '../controllers/paginasController.js';

import { guardarContactos } from '../controllers/contactosController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/obras', paginaObras);

router.get('/obras/:slug', paginaDetalleObra);

router.get('/contactos', paginaContactos);


// Cuando Lleno el form
router.post('/contactos', guardarContactos);


export default router;
