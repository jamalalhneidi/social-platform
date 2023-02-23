import React from 'react';
import './SidebarRow.css';
import {Avatar} from "@mui/material";

const SidebarRow = ({src, Icon, title}) => {
    return (
        <div className={'sidebar-row'}>
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <p>{title}</p>
        </div>
    );
}

export default SidebarRow;