import Attachment from "../models/messages/attachment/Attachment";

class AttachmentFactory {
    parseAttachments(attachments) {
        var instance = this;
        var parsedAttachments = [];
        if (Array.isArray(attachments)) {
            attachments.forEach((genericObject, index) => {
                let attachment = genericObject;
                if (!(genericObject instanceof Attachment)) {
                    attachment = instance.parseAttachment(genericObject);
                }
                parsedAttachments.splice(index, 0, attachment);
            });
        }
        return parsedAttachments;
    }

    parseAttachment(genericObject) {
        return new Attachment(genericObject);
    }
}
export default AttachmentFactory;