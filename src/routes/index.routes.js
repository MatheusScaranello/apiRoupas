import { Router } from 'express';
import roupaRoutes from "./roupa.routes.js";

const rotas = Router();

rotas.use('/roupas', roupaRoutes);
rotas.use('/roupas/:id', roupaRoutes);

rotas.get('/', (req, res) => {
    return res.status(200).send({ message: 'Servidor ok!' });
});

export default rotas;