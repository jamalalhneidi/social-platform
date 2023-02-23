import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import {
    Chat,
    EmojiFlags,
    ExpandMoreOutlined,
    LocalHospital,
    People,
    Storefront,
    VideoLibrary
} from "@mui/icons-material";

const Sidebar = () => {
    return (
        <div className={'sidebar'}>
            <SidebarRow title={'nosfns'}
                        src={'https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg'}/>
            <SidebarRow title={'COVID-19 Information Center'} Icon={LocalHospital}/>
            <SidebarRow title={'Pages'} Icon={EmojiFlags}/>
            <SidebarRow title={'Friends'} Icon={People}/>
            <SidebarRow title={'Messanger'} Icon={Chat}/>
            <SidebarRow title={'Marketplace'} Icon={Storefront}/>
            <SidebarRow title={'Videos'} Icon={VideoLibrary}/>
            <SidebarRow title={'More'} Icon={ExpandMoreOutlined}/>
        </div>
    );
}

export default Sidebar;