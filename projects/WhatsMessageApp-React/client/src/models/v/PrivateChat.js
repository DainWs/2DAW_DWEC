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

    belongsTo(user) {
        let result = false;
        if (Array.isArray(this.participants)) {
            result = this.participants.find((participantId) => { participantId === user.id; });
        }
        return result;
    }
}
export default PrivateChat;