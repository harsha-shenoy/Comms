import React from 'react'
import '../static/css/Header.css'
import Avatar from '@material-ui/core/Avatar';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <Avatar 
                alt= "{user?.displayName}"
                className="header__avatar" 
            />
            <TimelapseIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input className="" placeholder="Search" />
            </div>
            <div className="header__right">
                <HelpIcon />
            </div>
        </div>
    )
}

export default Header
