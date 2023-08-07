import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const EnrolledClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  useEffect(() => {
    axiosSecure.get("/payments").then((res) => {
      console.log(res.data);
      setEnrolledClasses(res.data);
    });
  }, []);
  //  const classes = enrolledClasses.map(class=> class)

  return (
    <div className="m-6 p-6">
      <div className="text-center my-4 p-6">
        <h1 className="text-4xl uppercase font-semibold">
          My enrolled classes
        </h1>
      </div>
      <div className="divider"></div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-blue-200">
              <th></th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Available Seats</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {enrolledClasses.map((classItem, index) => (
              <tr key={classItem.id} className=" p-2 bg-base-200">
                <th>{index + 1}</th>
                <td>{classItem.className}</td>
                <td>{classItem.price}</td>
                <td>{classItem.availableSeat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
