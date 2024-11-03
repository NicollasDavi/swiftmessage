import ChatPage from "./pages/chat";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<ChatPage/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
