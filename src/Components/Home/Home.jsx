import React, { useState } from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructers from "../PopularInstructers/PopularInstructers";
import ExtraSection from "./ExtraSection/ExtraSection";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`mt-8 bg-gray-100 ${darkMode ? "dark:bg-gray-900" : ""}`}>
      <div className="justify-end">
        <button
          className=" ml-4 btn btn-circle btn-outline "
          onClick={() => setDarkMode(!darkMode)}
        >
          D
        </button>
        <br />
        <br />
      </div>
      <div className={`text-black ${darkMode ? "dark:text-white" : ""}`}>
        <Banner></Banner>
        <PopularClasses></PopularClasses>
        <PopularInstructers></PopularInstructers>
        <ExtraSection></ExtraSection>
      </div>
    </div>
  );
};

export default Home;
