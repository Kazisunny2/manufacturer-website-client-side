import React from "react";

const Tool = ({ tool }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={tool.img}
          alt="Shoes"
          style={{ height: "20rem" }}
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{tool.name}</h2>
        <p className="card-text">Description: {tool.description}</p>
        <p> Minimum Order Quantity: {tool.minimum_order_quantity}</p>
        <p>Available Quantity: {tool.available_quantity}</p>
        <p>Price(Per Unit): ${tool.Price}</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
