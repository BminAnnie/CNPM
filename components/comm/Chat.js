import React from 'react';

const Chat = ({ message, avatar, name, me }) => {
    return (
        <div className={`chat ${me ? 'chat-end' : 'chat-start'} my-3`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={avatar} />
                </div>
            </div>
            <div className="chat-header ">{name}</div>
            <div className={`chat-bubble ${me ? 'chat-bubble-success' : 'chat-bubble-warning'}`}>
                {message}
            </div>
        </div>
    );
};

export default Chat;
