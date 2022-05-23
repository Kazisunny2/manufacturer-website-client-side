import React from "react";
import chisel from "../../images/chisel.jpg";
import drill_machine from "../../images/drill_machine.jpg";
import hammer from "../../images/hammer.jpg";
import Measuring_Tape from "../../images/Measuring_Tape.jpg";
import Pliers from "../../images/Pliers.jpg";
import wrench from "../../images/wrench.jpg";
import Tool from "../Tool/Tool";

const Tools = () => {
  const Tools = [
    {
      _id: 1,
      name: "Chisel",
      img: chisel,
      description:
        "a long-bladed hand tool with a beveled cutting edge and a plain handle that is struck with a hammer or mallet, used to cut or shape wood, stone, metal, or other hard materials",
      minimum_order_quantity: "10",
      available_quantity: "200",
      Price: "30",
    },
    {
      _id: 2,
      name: "Drill Machine",
      img: drill_machine,
      description:
        "Drilling is a technology used a long time back in our past. It basically means to create a hole by making use of a tool.",
      minimum_order_quantity: "15",
      available_quantity: "300",
      Price: "20",
    },
    {
      _id: 3,
      name: "Hammer",
      img: hammer,
      description:
        "a tool with a heavy metal head mounted at right angles at the end of a handle, used for jobs such as breaking things and driving in nails. a metal ball, typically weighing 16 pounds (7.3 kg), attached to a wire for throwing in an athletic contest.",
      minimum_order_quantity: "20",
      available_quantity: "250",
      Price: "23",
    },
    {
      _id: 4,
      name: "Measuring Tape",
      img: Measuring_Tape,
      description:
        "Use the big, numbered markings for inches. On a tape measure labeled with imperial units, the most prominent marks are usually the one-inch marks. These are typically marked by long, thin lines and fairly large numbers.",
      minimum_order_quantity: "20",
      available_quantity: "300",
      Price: "15",
    },
    {
      _id: 5,
      name: "Pliers",
      img: Pliers,
      description:
        "a deadly weapon can be identified as any firearm, knife, bludgeon, or other device, instrument, material, or substance, whether animate or inanimate, which, in the manner it is used or is intended to be used, is capable of producing death or serious bodily injury.",
      minimum_order_quantity: "10",
      available_quantity: "150",
      Price: "30",
    },
    {
      _id: 6,
      name: "Wrench",
      img: wrench,
      description:
        "A wrench or spanner is a tool used to provide grip and mechanical advantage in applying torque to turn objects—usually rotary fasteners, such as nuts and bolts—or keep them from turning.",
      minimum_order_quantity: "10",
      available_quantity: "280",
      Price: "12",
    },
  ];
  return (
    <div className="">
      <div className="text-center ">
        <h3 className="text-primary text-2xl font-bold uppercase m-20">
          Our Tools
        </h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
