import { ChatProvider } from "../providers/ChatProvider";
import DataProviderContextInterface from "../providers/DataProviderContextInterface";
import { UserProvider } from "../providers/UsersProvider";
import { updateChat, updateUsers } from "./SocketEvents";

const CLASS_MAPPER = new Map();
CLASS_MAPPER.set(updateUsers, UserProvider);
CLASS_MAPPER.set(updateChat, ChatProvider);

class SocketDataProviderContext extends DataProviderContextInterface {
    setData(data) {
        this.data = data;
    }

    getData() {
        return this.data;
    }

    setProviderClass(providerClass) {
        this.providerClass = CLASS_MAPPER.get(providerClass);
    }

    getProviderClass() {
        return this.providerClass;
    }
}
export default SocketDataProviderContext;