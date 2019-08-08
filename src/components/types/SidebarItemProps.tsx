import * as React from "react";
import SidebarMenuItem from "./SidebarMenuItem";

interface SidebarItemProps
{
    menuItem: SidebarMenuItem,
    onClick(path: string): void
}

export default SidebarItemProps;