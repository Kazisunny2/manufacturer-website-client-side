import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Register from "./Pages/Login/Register/Register";
import Login from "./Pages/Login/Login/Login";
import About from "./Pages/About/About";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
