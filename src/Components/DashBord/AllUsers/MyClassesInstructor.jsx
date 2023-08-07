import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyClassesInstructor = () => {
  const [axiosSecure] = useAxiosSecure();

  axiosSecure.post("/classes");

  return (
    <div>
      <div className="text-center m-8 p-6 bg-blue-200">
        <h1 className="text-4xl uppercase font-semibold">My added classes</h1>
      </div>
      <div className="divider"></div>

      <div className="overflow-x-auto m-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th> Status</th>
              <th>Total Enrolled Students</th>
              <th>Feedback</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            <tr className="hover">
              <th>1</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>
                <button className="btn btn-square">EDIT</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClassesInstructor;
