import React from 'react';
import './Post.css';
import {Avatar} from "@mui/material";
import {AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp} from "@mui/icons-material";

const Post = ({profilePic, message, timestamp, imgName, username}) => {
    return (
        <div className={'post'}>
            <div className={'post-top'}>
                <Avatar src={profilePic} className={'post-avatar'}/>
                <div className={'post-top-info'}>
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </div>
            <div className={'post-bottom'}>
                <p>{message}</p>
            </div>
            {
                imgName ? (
                    <div className={'post-image'}>
                        <img src={imgName} alt="Posts"/>
                    </div>
                ) : (
                    console.log('no imgae')
                )
            }
            <div className={'post-options'}>
                <div className={'post-option'}>
                    <ThumbUp/>
                    <p>Like</p>
                </div>
                <div className={'post-option'}>
                    <ChatBubbleOutline/>
                    <p>Comment</p>
                </div>
                <div className={'post-option'}>
                    <NearMe/>
                    <p>Share</p>
                </div>
                <div className={'post-option'}>
                    <AccountCircle/>
                    <ExpandMoreOutlined/>
                </div>
            </div>
        </div>
    );
}

export default Post;