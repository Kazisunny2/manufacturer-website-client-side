import React from "react";
import Banner from "../Banner/Banner";
import BusinessSummaryS from "../BusinessSummaryS/BusinessSummaryS";
import Contact from "../Contact/Contact";
import Photos from "../Photos/Photos";
import Reviews from "../Reviews/Reviews";
import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummaryS></BusinessSummaryS>
      <Reviews></Reviews>
      <Contact></Contact>
      <Photos></Photos>
    </div>
  );
};

export default Home;
