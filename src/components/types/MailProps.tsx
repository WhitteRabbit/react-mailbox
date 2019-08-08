import MailType from "./MailType";
import * as React from "react";

interface MailProps {
    folder: string,
    mail: MailType;
    onClick(mail: MailType): void
}

export default MailProps;