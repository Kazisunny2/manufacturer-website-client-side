import React from "react";

const Portfolio = () => {
  return (
    <div className=" text-center text-xl ">
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
        Technological Skills: HTML, CSS, Bootstrap, Tailwind JavaScript, React,
        Nodejs, Express, Mongodb
      </h2>
      <h2 className="text-bold text-2xl text-pink-800">3 Website Link</h2>
      <p>1. https://kazi-sunny.netlify.app/</p>
      <p>2. https://product-analysis-sunny.netlify.app/</p>
      <p>3. https://independant-service-provider.web.app/</p>
    </div>
  );
};

export default Portfolio;
