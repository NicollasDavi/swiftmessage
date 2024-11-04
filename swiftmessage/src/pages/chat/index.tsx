import '../../App.css';
import { useState } from 'react';
import { Socket } from 'socket.io-client'; 
import Chat from '../../components/Chat/Chat';
import { useParams } from 'react-router-dom';

function ChatPage() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const socketId = useParams(socket)


  return (
    <> 
      <div>
        <Chat socket={socket} />
      </div>
    </>
  );
}

export default ChatPage;
