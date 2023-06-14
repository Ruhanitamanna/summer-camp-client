import React, { useState } from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructers from "../PopularInstructers/PopularInstructers";
import ExtraSection from "./ExtraSection/ExtraSection";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className={`mt-8 ${isDarkMode ? "dark" : ""}`}>
      <div className="justify-end">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">DARK/LIGHT Mode</span>
            <input
              type="checkbox"
              className="toggle"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
          </label>
        </div>
      </div>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructers></PopularInstructers>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
