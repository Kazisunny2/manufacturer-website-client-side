import React, { useEffect, useState } from "react";
import Tool from "../Tool/Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  });

  return (
    <div className="">
      <div className="text-center ">
        <h3 className="text-primary text-2xl font-bold uppercase m-20">
          Our Tools
        </h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
