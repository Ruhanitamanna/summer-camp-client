import React, { useContext, useState } from "react";
import useAllData from "../../hooks/useAllData";
import { AuthContext } from "../../Providers/AuthProviders";

const AllInstructors = () => {
  const { user } = useContext(AuthContext);
  const [allData] = useAllData();
  return (
    <div>
      <div className="text-center my-4 p-6">
        <h1 className="text-4xl uppercase font-semibold">
          Our Respected Instructors
        </h1>
      </div>
      <div className="divider"></div>
      <div>
        <div className="grid lg:grid-cols-3 gap-y-6 gap-x-4 my-20 ">
          {allData.map((data, index) => (
            <div key={index}>
              <div>
                <div className="card w-96 glass bg-blue-100">
                  <figure>
                    <img src={data.instructorImage} alt="car!" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data.instructorName}</h2>
                    <p>{data.className}</p>
                    <p>{user?.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllInstructors;
