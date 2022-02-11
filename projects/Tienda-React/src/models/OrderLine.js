import Product from "./Product";
class OrderLine {
    constructor(genericObject = {pedidoId: null, product: new Product(), units: 1}) {
        this.id = `${genericObject.pedidoId}-${genericObject.product.id}` ;
        this.pedidoId = genericObject.pedidoId;
        this.product = genericObject.product;
        this.units = genericObject.units;
    }

    setPedidoId(pedidoId) {
        this.id = `${pedidoId}-${this.product.id}` ;
        this.pedidoId = pedidoId;
    }

    getPedidoId() {
        return this.pedidoId;
    }

    setProduct(product) {
        this.id = `${this.pedidoId}-${product.id}` ;
        this.product = product;
    }

    getProduct() {
        return this.product;
    }

    setUnits(units) {
        this.units = units;
    }

    getUnits() {
        return this.units;
    }

    addUnit() {
        this.units++;
    }

    removeUnit() {
        if ((this.units - 1) >= 1) {
            this.units--;
        }
    }

    getTotalPrice() {
        return this.product.getPrice() * this.units;
    }
}
export default OrderLine;