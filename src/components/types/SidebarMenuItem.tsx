import {SidebarMenuGroup, SidebarMenuItemTitle} from "../sidebar/Sidebar";
import {Routes} from "../App";

interface SidebarMenuItem {
    id: number,
    title: keyof typeof SidebarMenuItemTitle,
    group: keyof typeof SidebarMenuGroup,
    route: Routes,
    icon: string
}

export default SidebarMenuItem;