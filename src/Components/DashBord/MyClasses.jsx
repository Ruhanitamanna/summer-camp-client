import React from "react";
import useClass from "../../hooks/useClass";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyClasses = () => {
  const [item, refetch] = useClass();

  const total = item.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (raw) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classes${raw._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="text-center my-4 p-6">
        <h1 className="text-4xl uppercase font-semibold">
          Classes that i Chosen{" "}
        </h1>
      </div>
      <div className="divider"></div>
      <div className="p-8">
        <div className="flex justify-between p-8 bg-blue-100">
          <h3 className="text-3xl">Total class : {item.length}</h3>
          <h3 className="text-3xl">Total price :${total}</h3>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th className="text-end">class</th>
                  <th className="text-end"> Class Name</th>
                  <th className="text-end"> Available Seats</th>
                  <th className="text-end"> price</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {item.map((raw, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={raw.classImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">{raw.className}</td>
                    <td className="text-end">{raw.availableSeats}</td>
                    <td className="text-end">${raw.price}</td>
                    <th>
                      <button
                        onSubmit={() => handleDelete(raw)}
                        className="btn btn-ghost btn-sm"
                      >
                        <FaTrash></FaTrash>
                      </button>
                    </th>
                    <th>
                      <button className="btn btn-ghost bg-blue-200 btn-sm">
                        Pay
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
