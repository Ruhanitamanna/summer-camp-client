import React from "react";
import { Fade } from "react-awesome-reveal";

const ExtraSection = () => {
  return (
    <div>
      <div className="text-center m-4 p-4 bg-blue-200">
        <Fade>
          <h1 className="text-4xl uppercase font-semibold">
            fun activities at the summer Camp
          </h1>
        </Fade>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default ExtraSection;
