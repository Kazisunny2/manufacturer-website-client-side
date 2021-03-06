import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hook/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-3xl font-bold text-purple-500">
          Welcome to Your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}

          <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Add A Review</Link>
          </li>

          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct">Add a Product</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
