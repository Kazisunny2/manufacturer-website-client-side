import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel id="banner" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          style={{ height: "600px" }}
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="normal-case text-xl">Soldering Iron</h3>
          <p>
            A soldering iron supplies the heat that melts the solder. It
            consists of a tip, which you apply to the metal parts you want to
            solder together, and an insulated handle so that you can hold the
            iron. There are several variations of soldering irons
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "600px" }}
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="normal-case text-xl">Drill Machine</h3>
          <p>
            Drilling Machine device for producing holes in hard substances. The
            drill is held in a rotating spindle and is fed into the workpiece,
            which is usually clamped in a vise resting on a table.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "600px" }}
          className="d-block w-100 "
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="normal-case text-xl">Pliers</h3>
          <p>
            Pliers are made in various shapes and sizes and for many uses. Some
            are used for gripping something round like a pipe or rod, some are
            used for twisting wires, and others are designed to be used for a
            combination of tasks including cutting wire.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
