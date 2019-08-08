import * as React from "react";
import SidebarState from "../types/SidebarState";
import SidebarItem from "./SidebarItem";
import './Sidebar.css';
import DataSource from "../data/DataSource";
import SidebarProps from "../types/SidebarProps";

export enum SidebarMenuItemTitle {
    Inbox,
    Calendar,
    Sent,
    Archive,
}

export enum SidebarMenuGroup {
    Main,
    Folder,
}

class Sidebar extends React.Component<SidebarProps, SidebarState> {

    constructor(props: SidebarProps) {

        super(props);

        this.state = {
            menuItems: []
        };
    }

    componentDidMount(): void {

        this.setState({
            menuItems: DataSource.getSidebarMenuItems()
        });
    }

    getMainItems() {
        return this.state.menuItems.map((item) =>
            (item.group === "Main") && <SidebarItem key={item.id} menuItem={item} onClick={this.props.onClick}/>
        );
    }

    getFolderItems() {
        return this.state.menuItems.map((item) =>
            (item.group === "Folder") && <SidebarItem key={item.id} menuItem={item} onClick={this.props.onClick}/>
        );
    }

    render() {
        return (
            <aside id="sidebar">
                <ul>
                    {this.getMainItems()}
                    <span className="menu-title">Folders</span>
                    {this.getFolderItems()}
                </ul>
            </aside>
        );
    }
}

export default Sidebar;


