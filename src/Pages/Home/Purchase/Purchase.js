import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const { id } = useParams();
  const [tool, setTool] = useState({});
  const [user, loading, error] = useAuthState(auth);

  const handleOrder = (event) => {
    event.preventDefault();

    const order = {
      purchaseId: tool._id,
      minimumOrder: tool.minimum_order_quantity,
      purchase: tool.name,
      customerEmail: user.email,
      Price: tool.Price,
      customerName: user.displayName,
      phone: event.target.phone.value,
      address: event.target.address.value,
    };

    fetch("https://polar-forest-02530.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          toast(`Your Order Successfully Placed`);
        } else {
        }
      });
  };

  useEffect(() => {
    const url = `https://polar-forest-02530.herokuapp.com/tool/${id}`;
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
          <p> Minimum Order Quantity: {tool.minimum_order_quantity} pieces</p>
          <p>Available Quantity: {tool.available_quantity} pieces</p>
          <p>Price(Per Unit): ${tool.Price}</p>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleOrder}
          className="grid grid-cols-1 gap-3 justify-items-center mt-2"
        >
          <input
            className="input input-bordered w-full"
            name="Minimum_Order_Quantity"
            type="number"
            placeholder="Minimum Order Quantity"
          />
          <input
            type="text"
            name="name"
            disabled
            value={user?.displayName || ""}
            className="input input-bordered w-full"
          />
          <input
            type="email"
            name="email"
            disabled
            value={user?.email || ""}
            className="input input-bordered w-full "
          />
          <input
            type="number"
            name="Price"
            disabled
            value={tool?.Price || ""}
            className="input input-bordered w-full "
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            className="input input-bordered w-full "
          />
          <input
            type="submit"
            value="Order Place"
            className="btn btn-secondary w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
