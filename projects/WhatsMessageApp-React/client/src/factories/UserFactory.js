import User from "../models/User";

class UserFactory {
    parseObject(userGenericObject) {
        return new User(userGenericObject);
    }

    makeUser(userJSON) {
        let genericObject = JSON.parse(userJSON);
        return (genericObject) ? new User(genericObject) : null;
    }
}
export default UserFactory;