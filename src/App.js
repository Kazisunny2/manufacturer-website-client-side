import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home/Home";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>
        <Route
          path="/Purchase"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
