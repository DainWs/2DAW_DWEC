import { sortParticipants } from "../../factories/ChatFactory";
import Chat from "./Chat";

class PrivateChat extends Chat {
    constructor(genericObject = { id: '', participants: [], messages: [], writingUsers: [] }) {
        super(genericObject.id);
        this.participants = [];
        this.setMessages(genericObject.messages);
        this.setWritingUsers(genericObject.writingUsers);
        this.setParticipants(genericObject.participants);
    }

    setParticipants(participants) {
        if (Array.isArray(participants)) {
            this.participants = participants;
        }
    }

    getParticipants() {
        return this.participants;
    }

    hasParticipant(participantId) {
        return this.participants.find((id) => id == participantId);
    }

    belongsTo(otherParticipants) {
        let result = false;
        if (Array.isArray(otherParticipants)) {
            let myParticipants = JSON.stringify(this.participants);
            let heParticipants = JSON.stringify(sortParticipants(otherParticipants));
            result = myParticipants === heParticipants;
        }
        return result;
    }
}
export default PrivateChat;