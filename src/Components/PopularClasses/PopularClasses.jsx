import React from "react";
import useAllData from "../../hooks/useAllData";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const [allData] = useAllData();
  const sortedData = allData.sort(
    (a, b) => b.numberOfStudents - a.numberOfStudents
  );
  return (
    <div className="mt-10 mx-auto">
      <div className="text-center my-4 p-6">
        <h1 className="text-4xl uppercase font-semibold">Popular classes </h1>
      </div>
      <div className="divider"></div>
      <div className="grid lg:grid-cols-3 gap-4">
        {sortedData.slice(0, 6).map((data, index) => (
          <div key={index}>
            <div>
              <div className="card card-side bg-blue-100 shadow-xl">
                <figure>
                  <img src={data.classImage} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data.className}</h2>
                  <p>
                    <b>Students</b>
                    {data.numberOfStudents}
                  </p>
                  <p>
                    <b>Instructor</b>: {data.instructorName}
                  </p>
                  <p>
                    <b>Price</b>: ${data.price}
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
