import React from 'react'
import "./Header.css"
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

export default function Header() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Dashboard Admin</span>
                </div>

                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon />
                    </div>
                    <img src="images/profile.jpg" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
