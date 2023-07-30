import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      {/* By wraping with NoteState all the component and component children will access the NoteState directly  */}
      <NoteState>
        <Router>
          <NavBar />
          <Alert alert={alert} />
          <div className="container">
          <Routes>
            <Route path="/" exact element={<Home showAlert={showAlert}/>} />
            <Route path="/about" exact element={<About showAlert={showAlert}/>} />
            <Route path="/login" exact element={<Login showAlert={showAlert}/>} />
            <Route path="/signup" exact element={<SignUp showAlert={showAlert}/>} />
          </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
