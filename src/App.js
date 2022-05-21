import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/Home/About/About";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
