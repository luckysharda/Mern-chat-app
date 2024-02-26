import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" />
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={ChatPage} />
      {/* <Route path="/chats" /> */}
    </div>
  );
}

export default App;
