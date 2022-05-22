import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <Nav>
      <li>
        <Nav.Link href="/">Home</Nav.Link>
      </li>
      <li>
        <Nav.Link href="/Home#banner"> Banner</Nav.Link>
      </li>
      <li>
        <Nav.Link href="/Home#tools">Tools</Nav.Link>
      </li>
      <li>
        <Nav.Link href="/Home#business_summary">Business Summary</Nav.Link>
      </li>
      <li>
        <Nav.Link href="/reviews">Reviews</Nav.Link>
      </li>
      <li>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
      </li>
      <li>
        <Nav.Link to="/login">Login</Nav.Link>
      </li>
    </Nav>
  );
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">Tools Manufacturer</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
