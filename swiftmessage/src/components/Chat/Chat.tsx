import React, { useEffect, useRef, useState } from 'react';
import { Socket } from 'socket.io-client';

interface ChatProps {
    socket: Socket;
}

interface Message {
    author?: string;
    text: string;
}

const Chat: React.FC<ChatProps> = ({ socket }) => {
    const [messageList, setMessageList] = useState<Message[]>([]);
    const messageRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const handleReceiveMessage = (data: Message) => {
            setMessageList((current) => [...current, data]);
        };

        socket.on('receive_message', handleReceiveMessage);

        return () => {
            socket.off('receive_message', handleReceiveMessage);
        };
    }, [socket]);

    const handleSubmit = () => {
        if (messageRef.current) {
            const message = messageRef.current.value;
            if (!message.trim()) return;
            
            socket.emit('message', message);
            clearInput();
        }
    };
    

    const clearInput = () => {
        if (messageRef.current) {
            messageRef.current.value = '';
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getEnterKey = (e : any) => {
        if(e.key === 'Enter')
            handleSubmit()
    }

    return (
        <div>
            <h1>Chat</h1>
            {messageList.map((message, index) => (
                <p key={index}>{message.author ? `${message.author}:` : ''} {message.text}</p>
            ))}
            <input type="text" ref={messageRef} placeholder='Mensagem' onKeyDown={(e) => getEnterKey(e)}/>
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    );
};

export default Chat;
