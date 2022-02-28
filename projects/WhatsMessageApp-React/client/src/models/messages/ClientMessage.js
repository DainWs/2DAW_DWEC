import AttachmentFactory from "../../factories/AttachmentFactory";
import Attachment from "./attachment/Attachment";
import Message from "./Message";

class ClientMessage extends Message {
    constructor(genericObject = {id: null, userUid: null, message: null, attachment: null}) {
        super(genericObject.id, genericObject.message);
        this.userUid = (genericObject.userUid) ? genericObject.userUid : -1;
        this.setAttachments(genericObject.attachment);
    }

    getUserUid() {
        return this.userUid;
    }
    
    setUserUid(userUid) {
        this.userUid = userUid;
    }

    getAttachments() {
        return this.attachment;
    }

    setAttachments(attachments) {
        this.attachment = new AttachmentFactory().parseAttachments(attachments);
    }
}
export default ClientMessage;