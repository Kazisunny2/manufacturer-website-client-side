import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home/Home";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login/Login";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
