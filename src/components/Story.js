import React from 'react';
import './Story.css';
import {Avatar} from "@mui/material";

const Story = ({title, profileSrc, image = ''}) => {
    return (
        <div className={'story'}
             style={{backgroundImage: `url(${image})`}}>
            <Avatar className={'story-avatar'} src={profileSrc}/>
            <h4>{title}</h4>
        </div>
    );
}

export default Story;