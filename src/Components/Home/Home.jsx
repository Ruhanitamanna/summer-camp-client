import React from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructers from "../PopularInstructers/PopularInstructers";

const Home = () => {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold">Home sweet home</h1>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructers></PopularInstructers>
    </div>
  );
};

export default Home;
