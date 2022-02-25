import User from "../models/User";

class UserFactory {
    getUser() {
        return new User();
    }

    parseUser(genericObject) {
        return new User(genericObject);
    }

    parseJSONUser(userJSON) {
        let genericObject = JSON.parse(userJSON);
        return (genericObject) ? new User(genericObject) : null;
    }
}
export default UserFactory;