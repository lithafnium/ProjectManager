import React from 'react'
import { SidebarNav, NavItem, NavItemList, Logo } from './Styles'
import MaterialIcon, { colorPalette } from 'material-icons-react';

const Sidebar = () => {
    return (
        <SidebarNav>
            <Logo><h2>TIMELINR</h2></Logo>
            <NavItemList>
                <NavItem>
                    <span className="nav-icon">
                        <MaterialIcon icon="timeline" color='#92a1d5' />
                    </span>
                    TIMELINE
                </NavItem>
                <NavItem>
                    <span className="nav-icon">
                        <MaterialIcon icon="dashboard" color='#92a1d5' />
                    </span>
                    BOARD
                </NavItem>
                <NavItem>
                    <span className="nav-icon">
                        <MaterialIcon icon="calendar_today" color='#92a1d5' />
                    </span>
                    CALENDAR
                </NavItem>
            </NavItemList>
        </SidebarNav>
    )
}

export default Sidebar