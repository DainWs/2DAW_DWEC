import Order from "../models/Order";

class OrderFactory {
    getOrder(userUID, orderJSON = null) {
        let object = new Order();
        if (orderJSON != null) {
            object = new Order(JSON.parse(orderJSON));
        }

        if (userUID != null) {
            object.setUserUID(userUID);
        }
        return object;
    }
}
export default OrderFactory;