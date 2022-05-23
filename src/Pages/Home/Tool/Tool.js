import React from "react";

const Tool = ({ tool }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={tool.img}
          alt=""
          style={{ height: "20rem" }}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title">{tool.name}</h2>
        <p className="card-text">Description: {tool.description}</p>
        <p> Minimum Order Quantity: {tool.minimum_order_quantity}</p>
        <p>Available Quantity: {tool.available_quantity}</p>
        <p>Price(Per Unit): ${tool.Price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
