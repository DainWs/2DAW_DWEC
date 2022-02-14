import OrderLine from "./OrderLine";
class Order {
    constructor(genericObject = {userUID: '', orderLines: [], date: Date.now()}) {
        console.log(genericObject.date);
        this.id = `${genericObject.userUID}-${genericObject.date}`;
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
        let tempOrderLine = new OrderLine();
        tempOrderLine.setPedidoId(this.id);
        tempOrderLine.setProduct(product);
        return this.hasOrderLine(tempOrderLine);
    }

    addOrderLine(orderLine) {
        if (!(orderLine instanceof OrderLine)) {
            orderLine = new OrderLine(orderLine);
        }
        
        if (this.hasOrderLine(orderLine)) {
            orderLine.id = this.orderLines.push(orderLine);
        }
    }

    hasOrderLine(orderLine) {
        let coincidences = this.orderLines.find( 
            (value) => value.equalsProduct(orderLine) 
        );
        return (coincidences == undefined)
    }

    updateOrderLine(orderLine) {
        this.orderLines[orderLine.id] = orderLine;
    }

    getOrders() {
        return this.orderLines;
    }

    removeOrderLine(orderLineId) {
        delete this.orderLines[orderLineId];
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
        this.id = `${userUID}-${this.date}`;
    }

    getUserID() {
        return this.userUID;
    }
}
export default Order;