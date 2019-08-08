import * as React from "react";
import MailViewState from "../types/MailViewState";
import MailViewProps from "../types/MailViewProps";
import MailViewToolbar from "./MailViewToolbar";
import {Routes} from "../App";


class MailView extends React.Component<MailViewProps, MailViewState> {
    render(): JSX.Element {

        if(this.props.folder !== Routes.archive && this.props.mail.is_deleted){
            return <div></div>;
        }

        return (
            <div className="mail-content">
                {this.props.folder !== Routes.archive && !this.props.mail.is_deleted && <MailViewToolbar folder={this.props.folder} mail={this.props.mail} onClick={this.props.onClick}/>}
                <div className="mail-subject">
                    {this.props.mail.subject}
                </div>
                <div className="mail-content-review">
                    {this.props.mail.content_review}
                </div>
            </div>
        );
    }
}

export default MailView;