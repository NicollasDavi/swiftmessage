import '../../App.css';
import { useState } from 'react';
import { Socket } from 'socket.io-client'; 
import Chat from '../../components/Chat/Chat';
import Join from '../../components/Join/Join';

function ChatPage() {
  const [v, setV] = useState<boolean>(false);
  const [socket, setSocket] = useState<Socket | null>(null);

  return (
    <> 
      <div>
      {v && socket ? <Chat socket={socket} /> : <Join setV={setV} setSocket={setSocket} />}
      </div>
    </>
  );
}

export default ChatPage;
