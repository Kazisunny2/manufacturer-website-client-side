import React from "react";

const BusinessSummary = ({ businessSummary }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={businessSummary.img} alt="" style={{ height: "5rem" }} />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-center text-4xl text-bold">
          {businessSummary.count}+
        </h2>
        <p className="text-xl text-accent">{businessSummary.name}</p>
      </div>
    </div>
  );
};

export default BusinessSummary;
