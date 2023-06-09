import React from "react";
import useAllData from "../../hooks/useAllData";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const [allData] = useAllData();
  console.log(allData);
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-4">
        {allData.slice(0, 6).map((data, index) => (
          <div key={index}>
            <div>
              <div className="card card-side bg-blue-100 shadow-xl">
                <figure>
                  <img src={data.classImage} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data.className}</h2>
                  <p>
                    <b>Price</b>: ${data.price}
                  </p>
                  <p>
                    <b>Instructor</b>: {data.instructorName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto">
        <Link to="/classes">
          <button className="btn btn-secondary">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularClasses;
