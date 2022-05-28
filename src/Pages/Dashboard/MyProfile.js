import React from "react";

const MyProfile = () => {
  return (
    <div className=" text-xl ">
      <h2>
        <span className="text-bold text-2xl text-pink-800">Name:</span> Kazi
        Shaidul Islam Sunny
      </h2>
      <h2>
        <span className="text-pink-800 text-bold text-2xl">
          Email address:{" "}
        </span>
        saidul.bit@gmail.com
      </h2>
      <h2>
        <span className="text-bold text-2xl text-pink-800">
          Educational background:{" "}
        </span>
        BSc in EEE and Msc in Communication Systems and Networks (Running)
      </h2>
      <h2>
        <span className="text-bold text-2xl text-pink-800">
          Technological Skills:
        </span>
        HTML, CSS, Bootstrap, Tailwind JavaScript, React, Nodejs, Express,
        Mongodb
      </h2>
    </div>
  );
};

export default MyProfile;
