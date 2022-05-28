import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });
  return (
    <div>
      <div className="text-center ">
        <h3 className="text-primary text-2xl font-bold uppercase m-20">
          Customers Reviews
        </h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
