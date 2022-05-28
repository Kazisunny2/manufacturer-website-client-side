import React from "react";

const Review = ({ review }) => {
  const { Description, Rating } = review;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <p className="card-text">Description: {Description}</p>
        <p>Rating: {Rating} star</p>
      </div>
    </div>
  );
};

export default Review;
