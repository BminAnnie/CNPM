import React from "react";

const Message = () => {
    return (
    <div>        
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
                </div>
            </div>
            <div className="chat-header">
                Collector A
                <time className="text-xs opacity-50"> 12:45</time>
            </div>
            <div className="chat-bubble chat-bubble-success">Message content</div>
            <div className="chat-footer opacity-50">
            Delivered
            </div>
        </div>
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
                </div>
            </div>
            <div className="chat-header">
                Officer X
                <time className="text-xs opacity-50"> 12:46</time>
            </div>
            <div className="chat-bubble chat-bubble-success">Message content</div>
                <div className="chat-footer opacity-50">
                Delivered
            </div>
        </div>
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
                </div>
            </div>
            <div className="chat-header">
                Collector A
                <time className="text-xs opacity-50"> 12:47</time>
            </div>
            <div className="chat-bubble chat-bubble-success">Message content</div>
        </div>
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
                </div>
            </div>
            <div className="chat-bubble chat-bubble-success">Message content</div>
        </div>
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
                </div>
            </div>
            <div className="chat-bubble chat-bubble-success">Message content</div>
            <div className="chat-footer opacity-50">
            Delivered
            </div>
        </div>


        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
                </div>
            </div>
            <div className="chat-header">
                Officer X
                <time className="text-xs opacity-50"> 12:49</time>
            </div>
            <div className="chat-bubble chat-bubble-success">Message content</div>
        </div>
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
                </div>
            </div>
            <div className="chat-header">
            </div>
            <div className="chat-bubble chat-bubble-success">Message content</div>
        </div>
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
                </div>
            </div>
            <div className="chat-header">
            </div>
            <div className="chat-bubble chat-bubble-success">Message content</div>
            <div className="chat-footer opacity-50">
                Delivered
            </div>
        </div>



        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
                </div>
            </div>
            <div className="chat-header">
                Collector A
                <time className="text-xs opacity-50"> 12:52</time>
            </div>
            <div className="chat-bubble chat-bubble-success">Message content</div>
        </div>
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
                </div>
            </div>
            <div className="chat-bubble chat-bubble-success">Message content</div>
        </div>
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
                </div>
            </div>
            <div className="chat-bubble chat-bubble-success">Message content</div>
        </div>
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
                </div>
            </div>
            <div className="chat-bubble chat-bubble-success">Message content</div>
            <div className="chat-footer opacity-50">
            Seen at 12:55
            </div>
        </div>
        <div className="flex justify-center my-96">
        <input
            class="w-full bg-gray-300 py-5 px-3 rounded-xl"
            type="text"
            placeholder="Type your message here..."
          />
          </div>
    </div>
    );
};

export default Message;
