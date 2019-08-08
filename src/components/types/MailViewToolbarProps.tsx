import MailType from "./MailType";

interface MailViewToolbarProps {
    folder: string,
    mail: MailType;
    onClick(mail: MailType): void
}

export default MailViewToolbarProps;