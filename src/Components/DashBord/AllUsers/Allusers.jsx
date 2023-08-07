import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import InstructorsPage from "./InstructorsPage";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Allusers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const [disabledUser, setDisabledUser] = useState([]);
  // const [instructors, setInstructors] = useState([]);

  const handleMakeAdmin = (user) => {
    fetch(
      `https://summer-camp-server-umber.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          setDisabledUser([...disabledUser, user._id]);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is Admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(
      `https://summer-camp-server-umber.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount) {
          refetch();
          setDisabledUser([...disabledUser, user._id]);
          // setInstructors([...instructors, user]);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an instructor`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const isUserDisabled = (userId) => {
    return disabledUser.includes(userId);
  };
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
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-circle btn-outline"
                      disabled={isUserDisabled(user._id)}
                    >
                      <FaUser></FaUser>
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-square btn-outline"
                      disabled={isUserDisabled(user._id)}
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
