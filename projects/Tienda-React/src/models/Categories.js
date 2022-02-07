class Categories {
    static TEXTILES = new Categories(0, 'Textiles');
    static FURNITURE = new Categories(1, 'Furniture');
    static LEATHER = new Categories(2, 'Leather');

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getId() {
        return this.id;
    }
    
    getName() {
        return this.name;
    }

    static getById(id) {
        let result = this.TEXTILES;
        switch (id) {
            case this.FURNITURE.getId():
                result = this.FURNITURE;
                break;
            case this.LEATHER.getId():
                result = this.LEATHER;
                break;
        }
        return result;
    }
}

export default Categories;