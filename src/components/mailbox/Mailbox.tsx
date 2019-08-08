import * as React from "react";
import Mail from "./Mail";
import MailboxState from "../types/MailboxState";
import MailboxProps from "../types/MailboxProps";

class Mailbox extends React.Component<MailboxProps, MailboxState> {

    render(): JSX.Element {

        let mailList = this.props.mailList;

        let list = mailList.map((mail) =>
           <Mail folder={this.props.folder} key={mail.id} mail={mail} onClick={this.props.onClick} />
        );

        return (
            <div className="app-mailbox">
                {list}
            </div>
        );
    }
}

export default Mailbox;