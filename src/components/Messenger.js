import React, {useState} from 'react';
import './Messenger.css';
import {Avatar, Input} from "@mui/material";
import {InsertEmoticon, PhotoLibrary, Videocam} from "@mui/icons-material";

const Messenger = () => {
    const [input, setInput] = useState('');
    const [image, setImage] = useState(null);
    const handleChange = e => {
        if (e.target.files[0])
            setImage(e.target.files[0]);
    }
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className={'messenger'}>
            <div className={'messenger-top'}>
                <Avatar src={'https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg'}/>
                <form>
                    <input type="text"
                           className={'messenger-input'}
                           placeholder={"What's on your mind?"}
                           value={input}
                           onChange={e => setInput(e.target.value)}/>
                    <Input type={'file'} className={'messenger-fileSelector'}
                           onChange={handleChange}/>
                    <button onClick={handleSubmit} type={'submit'}>Hidden</button>
                </form>
            </div>
            <div className={'messenger-bottom'}>
                <div className={'messenger-option'}>
                    <Videocam style={{color: 'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className={'messenger-option'}>
                    <PhotoLibrary style={{color: 'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className={'messenger-option'}>
                    <InsertEmoticon style={{color: 'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default Messenger;