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

    belongsTo(otherParticipants) {
        let result = false;
        console.log('belongs to');
        if (Array.isArray(otherParticipants)) {
            let myParticipants = this.participants.sort((p1, p2) => { 
                let result = (p1.id < p2.id) ? -1 : 0 ;
                return (result == 0 && (p1.id > p2.id)) ? 1 : 0 ;
            });
            console.log(myParticipants);

            let heParticipants = otherParticipants.sort((p1, p2) => { 
                let result = (p1.id < p2.id) ? -1 : 0 ;
                return (result == 0 && (p1.id > p2.id)) ? 1 : 0 ;
            });
            console.log(heParticipants);

            result = (JSON.stringify(myParticipants) === JSON.stringify(heParticipants));
            console.log(result);
        } else {
            let wasFound = this.participants.find((id) => id === otherParticipants);
            result = (wasFound != null);
            console.log(result);
        }
        return result;
    }
}
export default PrivateChat;