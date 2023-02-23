import React from 'react';
import './Header.css';
import {
    Search as SearchIcon,
    Home as HomeIcon,
    Flag as FlagIcon,
    SubscriptionsOutlined as SubscriptionsOutlinedIcon,
    StorefrontOutlined as StorefrontOutlinedIcon,
    SupervisedUserCircle as SupervisedUserCircleIcon,
    Add as AddIcon,
    Forum as ForumIcon,
    NotificationsActive as NotificationsActiveIcon,
    ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material'

import {Avatar, IconButton} from '@mui/material'

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'header-left'}>
                <img src="logo192.png" alt="logo"/>
            </div>
            <div className={'header-input'}>
                <SearchIcon/>
                <input type="text" placeholder={'Search'}/>
            </div>
            <div className={'header-center'}>
                <div className={'header-option header-option--active'}>
                    <HomeIcon fontSize={'large'}/>
                </div>
                <div className={'header-option'}>
                    <FlagIcon fontSize={'large'}/>
                </div>
                <div className={'header-option'}>
                    <SubscriptionsOutlinedIcon fontSize={'large'}/>
                </div>
                <div className={'header-option'}>
                    <StorefrontOutlinedIcon fontSize={'large'}/>
                </div>
                <div className={'header-option'}>
                    <SupervisedUserCircleIcon fontSize={'large'}/>
                </div>
            </div>
            <div className={'header-right'}>
                <div className={'header-info'}>
                    <Avatar src={'https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg'}/>
                    <h4>Shfshfd</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    );
}

export default Header;