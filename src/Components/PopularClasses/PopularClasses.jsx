import React from "react";
import useAllData from "../../hooks/useAllData";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const PopularClasses = () => {
  const [allData] = useAllData();
  const sortedData = allData.sort(
    (a, b) => b.numberOfStudents - a.numberOfStudents
  );
  return (
    <div className="m-10 ">
      <div>
        <div className="text-center m-4 p-4 bg-blue-200">
          <Fade>
            <h1 className="text-4xl uppercase font-semibold">
              popular classes
            </h1>
          </Fade>
        </div>
        <div className="divider"></div>
        <div className="grid lg:grid-cols-3 gap-4">
          {sortedData.slice(0, 6).map((data, index) => (
            <div key={index}>
              <div>
                <div className="card card-side bg-blue-100 hover shadow-xl p-4">
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
      </div>
      <div className="mx-auto ">
        <div>
          <Link to="/classes">
            <button className="btn bg-blue-600">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
