import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const MyOrders = ({ refetch }) => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleDelete = (email) => {
    fetch(`https://polar-forest-02530.herokuapp.com/order?=${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Order:${user.CustomerEmail}is Deleted.`);
          refetch();
        }
      });
  };

  useEffect(() => {
    if (user) {
      fetch(`https://polar-forest-02530.herokuapp.com/order?=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/login");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h2>My Orders: {orders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Tool</th>
              <th>Payment</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{a.customerName}</td>
                <td>{a.customerEmail}</td>
                <td>{a.purchase}</td>
                <td>
                  {a.Price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs btn-success ">Pay</button>
                    </Link>
                  )}
                  {a.Price && a.paid && (
                    <span className="text-success ">Paid</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user.email)}
                    className="btn btn-error "
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
