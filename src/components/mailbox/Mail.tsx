import * as React from "react";
import {SyntheticEvent} from "react";
import {NavLink} from "react-router-dom";
import MailProps from "../types/MailProps";

class Mail extends React.Component<MailProps> {

    constructor(props: MailProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e: SyntheticEvent): void {
        const mail = this.props.mail;
        mail.is_read = true;
        this.props.onClick(mail);
    }

    render(): JSX.Element {

        const path = `${this.props.folder}/mail/${this.props.mail.id}`;
        const is_read = !this.props.mail.is_read ? 'unread' : '';

        return (
            <div className={`app-mail ${is_read}`}>
                <div>
                    <div className="mail-from">{this.props.mail.from}</div>
                    <div className="mail-date">{this.formatDate(this.props.mail.date)}</div>
                </div>
                <div className="mail-subject">{this.props.mail.subject}</div>
                <div className="mail-subject">{this.getContent(this.props.mail.content_review)}</div>

                <NavLink to={path} activeClassName="mail-item-active" onClick={this.handleClick}/>
            </div>
        );
    }

    private formatDate(date: string): string {
        const mail_date = new Date(date);
        return mail_date.getHours() + ':' + mail_date.getMinutes();
    }

    getContent(content: string): string {
        return content.substring(0, 50) + '...';
    }
}

export default Mail;