import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";

const Purchase = () => {
  const { id } = useParams();
  const [tool, setTool] = useState({});
  const [user, loading, error] = useAuthState(auth);

  const handleOrder = (event) => {
    event.preventDefault();
    const minimum_order_quantity = event.target.minimum_order_quantity.value;
    console.log();
  };

  useEffect(() => {
    const url = `http://localhost:5000/tool/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);
  return (
    <div className="grid grid-cols-1 gap-3 justify-items-center mt-2">
      <div className="card flex-1 w-96 bg-base-100 shadow-xl ">
        <img
          src={tool.img}
          alt=""
          style={{ height: "20rem" }}
          className="rounded-xl"
        />

        <div className="card-body text-center">
          <h2 className="card-title">{tool.name}</h2>
          <p className="card-text">Description: {tool.description}</p>
          <p> Minimum Order Quantity: {tool.minimum_order_quantity}</p>
          <p>Price(Per Unit): ${tool.Price}</p>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleOrder}
          className="grid grid-cols-1 gap-3 justify-items-center mt-2"
        >
          <input
            type="text"
            name="name"
            disabled
            value={user?.displayName || ""}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            disabled
            value={user?.email || ""}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-secondary w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
