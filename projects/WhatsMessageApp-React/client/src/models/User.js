const AllowedImagesId = new Map();
AllowedImagesId.set(1, 'Image One');
AllowedImagesId.set(2, 'Image Two');
AllowedImagesId.set(3, 'Image Three');
AllowedImagesId.set(4, 'Image Four');
AllowedImagesId.set(5, 'Image Five');
AllowedImagesId.set(6, 'Image Six');

const AllowedStatesId = new Map();
AllowedStatesId.set(2, 'Connected');
AllowedStatesId.set(1, 'Disconnected');

class User {
    constructor(genericObject = {id: null, name: '', pendingMessages: [], imageId: AllowedImagesId.keys()[1], state: AllowedStatesId.get(2)}) {
        this.id = (genericObject.id) ? genericObject.id : new Date().getTime();
        this.name = (genericObject.name) ? genericObject.name : `User_${new Date().getTime()}`;

        this.state = AllowedStatesId.keys()[2];
        this.setState(genericObject.state);

        this.imageId = AllowedImagesId.keys()[1];
        this.setImageId(genericObject.imageId);

        this.pendingMessages = [];
        this.setPendingMessages(genericObject.pendingMessages);
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getPendingMessages() {
        return this.pendingMessages;
    }

    setPendingMessages(pendingMessages) {
        if (Array.isArray(pendingMessages)) {
            this.pendingMessages = pendingMessages;
        }
    }

    getImageId() {
        return this.imageId;
    }

    setImageId(imageId) {
        if (AllowedImagesId.has(imageId)) {
            this.imageId = imageId;
        }
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        if (AllowedStatesId.has(newState)) {
            this.state = newState;
        }
    }

    equals(otherUser) {
        return (this.id === otherUser.id);
    }
}
export default User;
export { AllowedImagesId, AllowedStatesId };