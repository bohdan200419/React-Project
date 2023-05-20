import React from 'react';

import user from "../Header/user.webp";
import './Userinfo.css'
import '../../mode.css'
const UserInfo = () => {
    return (
            <div className={'user'}><img src={user} alt=""/>
            <p className={'dark'}>Yura</p>
            </div>
    );
};

export {UserInfo};