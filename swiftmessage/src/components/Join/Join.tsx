import React, { useRef, useEffect } from 'react';
import { io, Socket } from "socket.io-client";

interface JoinProps {
    setV: (value: boolean) => void;
    setSocket: (value: Socket | null) => void;
}

const Join: React.FC<JoinProps> = ({ setV, setSocket }) => {
    const userNameRef = useRef<HTMLInputElement | null>(null);
    const socketRef = useRef<Socket | null>(null); 

    useEffect(() => {
        socketRef.current = io('http://localhost:3001');
        console.log('Socket conectado:', socketRef.current.id); // Adicione esta linha
    
        setSocket(socketRef.current);
    
    }, [setSocket]);
    

    const handleSubmit = () => {
        if (userNameRef.current) {
            const username = userNameRef.current.value;
            if (!username.trim()) return;
            socketRef.current?.emit('set_username', username);
            setV(true);
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getEnterKey = (e : any) => {
        if(e.key === 'Enter')
            handleSubmit()
    }


    return (
        <div>
            <h1>Join</h1>
            <input type="text" ref={userNameRef} placeholder="Nome de usuário" onKeyDown={(e) => getEnterKey(e)}/>
            <button onClick={handleSubmit}>Entrar</button>
        </div>
    );
};

export default Join;
