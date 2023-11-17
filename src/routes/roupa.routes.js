import { getRoupas,getRoupaId,addRoupa,deleteRoupa,updateRoupa } from '../controllers/roupa.controller.js';
import { Router } from 'express';

const roupa = Router();

roupa.get('/roupas', getRoupas);
roupa.get('/roupas/:id', getRoupaId);
roupa.post('/roupas', addRoupa);
roupa.delete('/roupas/:id', deleteRoupa);
roupa.put('/roupas/:id', updateRoupa);

export default roupa;