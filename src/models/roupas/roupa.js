import { v4 as uuidv4 } from "uuid"

class Roupa{
    constructor(name, preco, tamanho, tipo, quantidade, imagem){
        this.id = uuidv4()
        this.name = name;
        this.preco = preco;
        this.tamanho = tamanho;
        this.tipo = tipo;
        this.quantidade = quantidade;
        this.imagem = imagem;
    }
}

export default Roupa;