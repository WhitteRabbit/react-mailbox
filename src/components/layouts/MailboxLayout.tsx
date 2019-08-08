import * as React from "react";
import "../mailbox/Mailbox.css";

class MailboxLayout extends React.Component {

    render(): JSX.Element {
        return (
            <div className="app-mailbox-container">
                {this.props.children}
            </div>
        );
    }
}

export default MailboxLayout;