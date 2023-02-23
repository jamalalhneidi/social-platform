import React from 'react';
import './Feed.css';
import Stories from "./Stories";
import Messenger from "./Messenger";
import Post from "./Post";

const Feed = () => {
    return (
        <div className={'feed'}>
            <Stories/>
            <Messenger/>
            <Post profilePic="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg"
                  message="Awesome post on CSS Animation. Loved it"
                  timestamp="1609512232424"
                  imgName="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1598295332/CSS_Animation_xrvhai.png"
                  username="Nabendu"
            />
            <Post profilePic="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg"
                  message="BookList app in Vanilla JavaScript"
                  timestamp="1509512232424"
                  imgName="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1609138312/Booklist-es6_sawxbc.png"
                  username="TWD"
            />
        </div>
    );
}

export default Feed;