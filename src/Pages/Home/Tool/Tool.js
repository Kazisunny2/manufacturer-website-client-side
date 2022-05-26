import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const {
    _id,
    img,
    name,
    description,
    minimum_order_quantity,
    available_quantity,
    Price,
  } = tool;
  const navigate = useNavigate();

  const navigateToToolDetail = (id) => {
    navigate(`/tool/${id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt=""
          style={{ height: "20rem" }}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Description: {description}</p>
        <p> Minimum Order Quantity: {minimum_order_quantity} pieces</p>
        <p>Available Quantity: {available_quantity} pieces</p>
        <p>Price(Per Unit): ${Price}</p>
        <div className="card-actions">
          <Link to={`/purchase/${tool._id}`}>
            <button
              onClick={() => navigateToToolDetail(_id)}
              className="btn btn-primary "
            >
              Purchase
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
