import React from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructers from "../PopularInstructers/PopularInstructers";
import ExtraSection from "./ExtraSection/ExtraSection";

const Home = () => {
  return (
    <div className="mt-8">
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructers></PopularInstructers>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
