import './App.css';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import { useState } from 'react';
import { Socket } from 'socket.io-client'; 

function App() {
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

export default App;
