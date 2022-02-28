class Attachment {
    constructor(genericObject = {name: '', type: '', size: 0, src: ''}) {
        this.name = genericObject.name;
        this.type = genericObject.type;
        this.size = genericObject.size;
        this.src = genericObject.src;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getType() {
        return this.type;
    }

    setType(type) {
        this.type = type;
    }
    
    getSize() {
        return this.size;
    }

    setSize(size) {
        this.size = size;
    }

    getSrc() {
        return this.src;
    }

    setSrc(src) {
        this.src = src;
    }
}
export default Attachment;