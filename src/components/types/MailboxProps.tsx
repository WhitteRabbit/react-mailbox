import * as React from "react";
import MailType from "./MailType";

interface MailboxProps {
    folder: string,
    mailList: MailType[],
    onClick(mail: MailType): void
}

export default MailboxProps;