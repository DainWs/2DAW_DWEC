import Message from "./Message";

const AllowedServerTypes = new Map();
AllowedServerTypes.set(2, 'Connected');
AllowedServerTypes.set(1, 'Disconnected');

class ServerMessage extends Message {
    constructor(genericObject = {id: null, message: null, type: 2}) {
        super(genericObject.id, genericObject.message);
        
        this.type = 2;
        this.setType(genericObject.type);
    }

    getType() {
        return this.type;
    }

    setType(type) {
        if (AllowedServerTypes.has(type)) {
            this.type = type;
        }
    }
}
export default ServerMessage;