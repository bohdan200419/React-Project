import React from 'react';

import user from "../Header/user.webp";
import './Userinfo.css'
import '../../mode.css'
const UserInfo = () => {
    return (
            <div className={'user'}><img src={user} alt=""/>
            <p className={'dark'}>Bohdan</p>
            </div>
    );
};

export {UserInfo};