interface MailType {
    id: string,
    date: string,
    from: string,
    subject: string,
    content_review: string,
    is_read: boolean,
    is_deleted: boolean
}

export default MailType;