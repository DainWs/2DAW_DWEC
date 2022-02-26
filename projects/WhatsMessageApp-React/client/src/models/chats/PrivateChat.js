import { sortParticipants } from "../../factories/ChatFactory";
import Chat from "./Chat";

class PrivateChat extends Chat {
    constructor(genericObject = { id: '', participants: [], messages: [] }) {
        super(genericObject.id);
        this.participants = [];
        this.setMessages(genericObject.messages);
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
        let finded = this.participants.find((id) => id == participantId);
        console.log('hasParticipant');
        console.log(finded);
        return (finded);
    }

    belongsTo(otherParticipants) {
        let result = false;
        console.log('belongs to');
        if (Array.isArray(otherParticipants)) {
            let myParticipants = JSON.stringify(this.participants);
            let heParticipants = JSON.stringify(sortParticipants(otherParticipants));
            result = myParticipants === heParticipants;
        }
        return result;
    }
}
export default PrivateChat;