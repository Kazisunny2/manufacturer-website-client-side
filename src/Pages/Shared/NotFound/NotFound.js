import React from "react";
import notFound from "../../images/notFound.jpg";

const NotFound = () => {
  return (
    <div>
      <img
        style={{ height: "885px" }}
        className="w-100"
        src={notFound}
        alt=""
      />
    </div>
  );
};

export default NotFound;
