import React, { useContext, useState } from "react";
import useAllData from "../../hooks/useAllData";
import { AuthContext } from "../../Providers/AuthProviders";

const AllInstructors = () => {
  const [disabled, setDisabled] = useState(false);
  const { user } = useContext(AuthContext);
  const [allData] = useAllData();
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {allData.map((data, index) => (
        <div key={index}>
          <div>
            <div className="card w-96 glass">
              <figure>
                <img src={data.instructorImage} alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.instructorName}</h2>
                <p>{data.className}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllInstructors;
