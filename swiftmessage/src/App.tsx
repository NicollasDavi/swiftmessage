import ChatPage from "./pages/chat";
import JoinPage from "./pages/join";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
   <Router>
    <Routes>
      <Route path="/chat/{socket}" element={<ChatPage/>}></Route>
      <Route path="/" element={<JoinPage/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
