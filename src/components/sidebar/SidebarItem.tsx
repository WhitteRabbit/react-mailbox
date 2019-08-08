import * as React from "react";
import SidebarItemProps from "../types/SidebarItemProps";
import {NavLink} from "react-router-dom";
import {SyntheticEvent} from "react";

class SidebarItem extends React.Component<SidebarItemProps> {
    constructor(props: SidebarItemProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e: SyntheticEvent): void {
        const path = e.currentTarget.getAttribute('data-folder') || '/';
        this.props.onClick(path);
    }

    render(): JSX.Element {
        return (
            <li>
                <NavLink exact to={this.props.menuItem.route} data-folder={this.props.menuItem.route}
                         activeClassName="sidebar-item-active" onClick={this.handleClick}>
                    <i className={this.props.menuItem.icon}></i>
                    {this.props.menuItem.title}
                </NavLink>
            </li>
        );
    }
}

export default SidebarItem;


