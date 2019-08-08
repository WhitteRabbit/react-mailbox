import * as React from "react";
import {SyntheticEvent} from "react";
import "./MailView.css";
import MailViewToolbarState from "../types/MailViewToolbarState";
import MailViewToolbarProps from "../types/MailViewToolbarProps";

class MailViewToolbar extends React.Component<MailViewToolbarProps, MailViewToolbarState> {

    constructor(props: MailViewToolbarProps) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleReadClick = this.handleReadClick.bind(this);
    }

    handleDeleteClick(e: SyntheticEvent): void {
        const mail = this.props.mail;
        mail.is_deleted = true;
        this.props.onClick(mail);
    }

    handleReadClick(e: SyntheticEvent): void {
        const mail = this.props.mail;
        mail.is_read = !mail.is_read;
        this.props.onClick(mail);
    }

    render(): JSX.Element {
        return (
            <div className="mail-toolbar">
                <div className="toolbar-item mail-delete" onClick={this.handleDeleteClick} title="Удалить"><i
                    className="fas fa-times"></i></div>
                <div className="toolbar-item mail-is-read" onClick={this.handleReadClick}
                     title="Отметить как прочтенное">{!this.props.mail.is_read ? <i className="far fa-circle"></i> :
                    <i className="far fa-check-circle"></i>}</div>
            </div>
        );
    }
}

export default MailViewToolbar;