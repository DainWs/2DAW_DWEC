import OrderLine from "./OrderLine";
class Order {
    constructor(genericObject = {userUID: '', orderLines: [], date: Date.now()}) {
        this.id = genericObject.date;
        this.userUID = genericObject.userUID;
        this.date = genericObject.date;
        this.orderLines = [];
        for (let orderLine of genericObject.orderLines) {
            this.addOrderLine(orderLine);
        }
    }

    addProduct(product) {
        let orderLine = new OrderLine();
        orderLine.setPedidoId(this.id);
        orderLine.setProduct(product);
        orderLine.setUnits(1);
        this.orderLines[orderLine.id] = orderLine;
    }

    hasProduct(product) {
        let coincidences = this.orderLines.find( 
            (value) => value.equalsProduct(product)
        );
        return !(coincidences == undefined);
    }

    addOrderLine(orderLine) {
        if (!(orderLine instanceof OrderLine)) {
            orderLine = new OrderLine(orderLine);
        }
        
        if (!this.hasOrderLine(orderLine)) {
            orderLine.id = (this.orderLines.push(orderLine) - 1);
        }
    }

    hasOrderLine(orderLine) {
        return this.hasProduct(orderLine.getProduct());
    }

    updateOrderLine(orderLine) {
        this.orderLines[orderLine.id] = orderLine;
    }

    getOrders() {
        return this.orderLines;
    }

    removeOrderLine(orderLineId) {
        this.orderLines.splice(orderLineId, 1);
    }

    getTotalPrice() {
        let totalPrice = 0;
        for (let orderLine in this.orderLines) {
            totalPrice += orderLine.getTotalPrice();
        }
        return totalPrice;
    }

    setUserUID(userUID) {
        this.userUID = userUID;
    }

    getUserID() {
        return this.userUID;
    }
}
export default Order;