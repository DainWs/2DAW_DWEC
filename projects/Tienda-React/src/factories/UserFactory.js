import User from "../models/User";

class UserFactory {
    getUser(userJSON) {
        let genericObject = JSON.parse(userJSON);
        let object = new User(genericObject, genericObject.expirationTime);
        if (object.hasExpired()) {
            object = new User({}, genericObject.expirationTime);
        }
        return object;
    }
}
export default UserFactory;