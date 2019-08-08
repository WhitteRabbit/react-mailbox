import * as React from "react";
import Sidebar from "./sidebar/Sidebar";
import {BrowserRouter as Router, Route, RouteComponentProps} from "react-router-dom"
import Mailbox from "./mailbox/Mailbox";
import MainLayout from "./layouts/MainLayout";
import MailboxLayout from "./layouts/MailboxLayout";
import MailView from "./mailbox/MailView";
import ContentContainerLayout from "./layouts/ContentContainerLayout";
import MailMatchParams from "./types/MailMatchParams";
import MailboxMatchParams from "./types/MailboxMatchParams";
import MailType from "./types/MailType";
import DataSource from "./data/DataSource";
import AppState from "./types/AppState";

export enum Routes {
    inbox = "/inbox",
    sent = "/sent",
    archive = "/archive",
}

class App extends React.Component<{}, AppState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            activePath: Routes.inbox,
            mailList: DataSource.getInbox()
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleMailClick = this.handleMailClick.bind(this);
        this.handleMailToolbarClick = this.handleMailToolbarClick.bind(this);
    }

    handleMenuClick(path: string): void {
        this.setState({
            activePath: path,
            mailList: this.getMailByPath(path)
        });
    }

    handleMailClick(mail: MailType): void {
        DataSource.updateMailData(mail);
    }

    handleMailToolbarClick(mail: MailType): void {
        DataSource.updateMailData(mail);
        this.setState({
            mailList: this.getMailByPath(this.state.activePath)
        });
    }

    getMailByPath(path: string): MailType[] {

        let mailList: MailType[] = [];
        switch (path) {
            case Routes.inbox:
                mailList = DataSource.getInbox();
                break;
            case Routes.sent:
                mailList = DataSource.getSentMail();
                break;
            case Routes.archive:
                mailList = DataSource.getArchiveMail();
                break;
            default:
                mailList = DataSource.getInbox();
        }

        return mailList;
    }

    render(): JSX.Element {
        return (
            <Router>
                <MainLayout>
                    <Sidebar onClick={this.handleMenuClick} />
                    <MailboxLayout>
                        <Route path="/:folder" render={( {match}: RouteComponentProps<MailboxMatchParams>) => (
                            <Mailbox folder={`/${match.params.folder}`} mailList={this.state.mailList} onClick={this.handleMailClick}/>
                        )} />
                    </MailboxLayout>
                    <ContentContainerLayout>
                        <Route exact path={`${this.state.activePath}/mail/:id`} render={( {match}: RouteComponentProps<MailMatchParams>) => (
                            <MailView id={match.params.id} mail={DataSource.getMailById(match.params.id)} folder={this.state.activePath} onClick={this.handleMailToolbarClick}/>
                        )} />
                    </ContentContainerLayout>
                </MainLayout>
            </Router>
        );
    }
}

export default App;