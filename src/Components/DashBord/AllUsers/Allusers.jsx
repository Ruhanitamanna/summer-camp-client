import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaUser, FaUsers } from "react-icons/fa";

const Allusers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = (id) => {};

  const handleMakeInstructor = (id) => {};

  return (
    <div>
      <div className="text-center my-4 p-6">
        <h1 className="text-4xl uppercase font-semibold">Manage users</h1>
      </div>
      <div className="divider"></div>

      <div className="m-8 p-4 bg-blue-200">
        <h3 className="text-4xl">Total Users : {users.length} </h3>
      </div>
      <div className="overflow-x-auto m-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th> Make Admin</th>
              <th> Make Instructor</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="hover">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-circle btn-outline"
                    >
                      <FaUser></FaUser>
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructre" ? (
                    "instructer"
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user._id)}
                      className="btn btn-square btn-outline"
                    >
                      <FaUsers></FaUsers>
                    </button>
                  )}
                </td>
              </tr>
            ))}

            {/* row 3 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
