import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaTtrabajos, 
    paginaContcto, 
    paginaDetalleObra 
} from '../controllers/paginasController.js';

import { guardarContacto } from '../controllers/contactosController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/trabajos', paginaTrabajos);

router.get('/trabajos/:slug', paginaDetalleObra);

router.get('/contactos', paginaContactos);


// Cuando Lleno el form
router.post('/contactos', guardarContactos);


export default router;
