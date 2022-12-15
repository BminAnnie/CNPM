import React, { useEffect, useRef, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { messages } from '../../database';
import { conversations } from '../../database';
import Chat from './Chat';
const Message = ({ conversationId }) => {
    const [myMessages, setMymessages] = useState([]);
    const myConversation = conversations.find(
        (conversation) => conversation.conversationId === conversationId
    );
    const friendAvatar = myConversation.avatar;
    const name = myConversation.name;
    const messageRef = useRef();
    const [value, setValue] = useState('');
    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    useEffect(() => {
        const myMessages = messages.filter((message) => message.conversationId === conversationId);
        setMymessages(myMessages);
    }, [conversationId]);
    const handleSubmit = () => {
        const messageSent = { message: value, me: 1, id: myMessages.length, conversationId };
        setMymessages((pre) => [...pre, messageSent]);
        setValue('');
    };
    return (
        <div>
            <p className=" w-full h-[80px] items-center justify-center text-32-48-700 hidden">
                Messenger
            </p>

            <div className="h-[calc(100vh-160px)] overflow-y-scroll hide-scroll  flex flex-col justify-end pl-3 pr-10">
                <div className="overflow-y-scroll hide-scroll">
                    {myMessages.map((message) => (
                        <div className="" key={message.id}>
                            <Chat
                                avatar={message.me ? '/images/avatar0.png' : friendAvatar}
                                name={message.me ? 'me' : name}
                                message={message.message}
                                me={message.me}
                            />
                        </div>
                    ))}
                    <div className="" ref={messageRef}></div>
                </div>
            </div>

            <div className="flex h-[80px] items-center">
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-success w-full flex-1"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) handleSubmit();
                    }}
                />
                <div
                    className="w-[80px] flex justify-center items-center cursor-pointer"
                    onClick={handleSubmit}
                >
                    <SendIcon className="text-[30px] text-lime-400" />
                </div>
            </div>
        </div>
    );
};

export default Message;
