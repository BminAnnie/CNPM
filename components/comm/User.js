import Image from 'next/image';
import React from 'react';
import { conversations } from '../../database';
const User = ({ conversationId, setConversationId }) => {
    return (
        <div className="h-[calc(100vh-80px)] overflow-y-scroll hide-scroll cursor-pointer">
            {conversations.map((conversation) => (
                <div
                    className={`${conversation.conversationId == conversationId && 'bg-lime-200'}`}
                    key={conversation.conversationId}
                    onClick={() => setConversationId(conversation.conversationId)}
                >
                    <div className="flex items-center mx-10 py-5 border-b-2">
                        <div className="avatar online">
                            <div className="w-10 rounded-full">
                                <Image
                                    src={conversation.avatar}
                                    alt=""
                                    width={200}
                                    height={200}
                                    className="w-[30px] h-[30px]"
                                />
                            </div>
                        </div>
                        <div className="ml-4 text-20-24-600">{conversation.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default User;
