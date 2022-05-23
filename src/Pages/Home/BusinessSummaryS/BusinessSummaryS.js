import React from "react";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import BusinessSummary from "../BusinessSummary/BusinessSummary";

const BusinessSummaryS = () => {
  const BusinessSummaryS = [
    {
      _id: 1,
      name: "Customers",
      img: icon1,
      count: 100,
    },
    {
      _id: 2,
      name: "Annual revenue",
      img: icon2,
      count: `120M`,
    },
    {
      _id: 3,
      name: "Tools",
      img: icon3,
      count: `50`,
    },
    {
      _id: 4,
      name: " Reviews",
      img: icon4,
      count: `33K`,
    },
  ];
  return (
    <div>
      <div className="text-center m-20 uppercase">
        <h3 className="text-primary text-2xl font-bold  m-10">
          Business Summary
        </h3>
        <h2 className="text-accent text-4xl font-bold">
          Millions Bussiness Trust Us
        </h2>
        <h2 className="text-xl">Try to Understand Users Expectations</h2>
      </div>
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {BusinessSummaryS.map((businessSummary) => (
            <BusinessSummary
              key={businessSummary._id}
              businessSummary={businessSummary}
            ></BusinessSummary>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessSummaryS;
