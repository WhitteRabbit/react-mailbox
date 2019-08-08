import MailType from "./MailType";

interface MailViewProps {
    id: string,
    folder: string,
    mail: MailType,
    onClick(mail: MailType): void
}

export default MailViewProps;