import React, { useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import image6 from "../../images/image6.jpg";

const Photos = () => {
  return (
    <div>
      <h2 className="text-center m-20 uppercase text-primary text-3xl font-bold  m-10">
        Some Photos of Tools
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-100">
        <figure>
          <img style={{ height: "20rem" }} src={image1} alt="" />
        </figure>

        <figure>
          <img style={{ height: "20rem" }} src={image2} alt="" />
        </figure>
        <figure>
          <img style={{ height: "20rem" }} src={image3} alt="" />
        </figure>
        <figure>
          <img style={{ height: "20rem" }} src={image4} alt="" />
        </figure>
        <figure>
          <img style={{ height: "20rem" }} src={image5} alt="" />
        </figure>
        <figure>
          <img style={{ height: "20rem" }} src={image6} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Photos;
