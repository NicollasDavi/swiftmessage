import React from 'react'
import Join from '../../components/Join/Join'
import { useState } from 'react';
import { Socket } from 'socket.io-client'; 

const JoinPage = () => {
    const [v, setV] = useState<boolean>(false);
    const [socket, setSocket] = useState<Socket | null>(null);

  return (
    <Join setV={setV} setSocket={setSocket} />
  )
}

export default JoinPage