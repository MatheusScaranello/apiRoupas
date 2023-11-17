import roupaModel from '../models/roupas/roupa.js';
import listaRoupas from '../models/roupas/clothes.js';

const roupas = new roupaModel(listaRoupas);

export const getRoupas = (req, res) => {
    res.send(roupas.getAllRoupas());
    if (roupas.getAllRoupas().length === 0) {
        res.send('Não há itens cadastrados');
    }
};

export const getRoupaId = (req, res) => {
    const { id } = req.params;
    const roupa = roupas.getRoupa(id);
    res.send(roupa);
};

export const addRoupa = (req, res) => {
    const roupa = req.body;
    validarRoupa(req, res);
    if (validarRoupa) {
        roupas.addRoupa(roupa);
        res.send(`Roupa adicionada com sucesso. ID: ${roupa.id}`);
    }
};

export const deleteRoupa = (req, res) => {
    const { id } = req.params;
    roupas.remove(id);
    res.send(`Roupa deletada com sucesso. ID: ${id}`);
};

export const updateRoupa = (req, res) => {
    const { id } = req.params;
    const { name, preco, tamanho, tipo, quantidade, imagem } = req.body;
    const roupaAtualizada = {
        id,
        name,
        preco,
        tamanho,
        tipo,
        quantidade,
        imagem
    };
    validarRoupa(req, res);
    if (validarRoupa) {
           roupas.update(id, roupaAtualizada);
    res.send(`Roupa atualizada com sucesso. ID: ${id}`); 
    }
};

export const validarRoupa = (req, res) => {
    const { name, preco, tamanho, tipo, quantidade, imagem } = req.body;
    if (name.length < 6 || name.length > 40) {
        res.send('O nome do item deve ter no mínimo 6 caracteres e no máximo 40 caracteres');
        return false
    } else if (tipo.length > 50) {
        res.send('O tipo do item deve ser uma string com no máximo 50 caracteres');
        return false
    } else if (tamanho !== 'PP' && tamanho !== 'P' && tamanho !== 'M' && tamanho !== 'G' && tamanho !== 'GG' && tamanho !== 'XG') {
        res.send('O tamanho do item deve ser apenas as strings PP, P, M, G, GG e XG');
        return false
    } else if (quantidade < 0 || quantidade > 15000) {
        res.send('A quantidade em estoque deve ser um número inteiro positivo limitado a 15000');
        return false
    } else if (imagem.length < 6 || imagem.length > 40) {
        res.send('A imagem do item deve ser uma URL válida');
        return false
    }else if (name === '' || preco === '' || tamanho === '' || tipo === '' || quantidade === '' || imagem === '') {
        res.send('Todos os campos devem ser preenchidos');
        return false
    }  else {
        res.send('Item validado com sucesso');
        return true
    }
};
