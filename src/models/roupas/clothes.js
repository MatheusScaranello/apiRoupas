class Chothes {
    constructor() {
        this.clothes = [];
    }
    getAllclothes() {
        return this.clothes;
    } 
    getChother(id){
        return this.clothes.find((Chother) => Chother.id === id);
    
    }
    addRoupa(Chother) {
        this.clothes.push(Chother);
    }
    remove(id) {
        this.clothes = this.clothes.filter((Chother) => Chother.id !== id);
    }
    update(id, Chother) {
        const index = this.clothes.findIndex((Chother) => Chother.id === id);
        this.clothes[index] = Chother;
    }
}
export default Chothes;