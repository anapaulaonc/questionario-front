import React from 'react';
import create_quest_icon from '../../assets/create-quest-icon.svg';
import notification_icon from '../../assets/notification-icon.svg';
import profile_icon from '../../assets/profile-icon.svg';
import './NavBar.css';

// faltou criar rotas !!

class NavBar extends React.Component {
    render() {
        return(
            <div className="NavBar">
                <div className="icons"><img src={profile_icon}></img></div>
                <div className="icons"><img src={create_quest_icon}></img></div>
                <div className="icons"><img src={notification_icon}></img></div>
            </div>
        );
    }
}

export default NavBar;