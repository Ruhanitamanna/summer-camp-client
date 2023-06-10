import { Link, useLocation, useNavigate } from "react-router-dom";
import useAllData from "../../hooks/useAllData";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const AllClasses = () => {
  const [disabled, setDisabled] = useState(false);
  const { user } = useContext(AuthContext);
  const [allData] = useAllData();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = (data) => {
    console.log(data);
    if (user && user.email) {
      const selectedClass = {
        classId: data._id,
        className: data.className,
        availableSeats: data.availableSeats,
        numberOfStudents: data.numberOfStudents,
        numberOfClasses: data.numberOfClasses,
        instructorName: data.instructorName,
        price: data.price,
        email: user.email,
      };
      fetch("http://localhost:5000/classes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class Added",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "please log in to add a class",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-semibold m-6 p-6">
          Classes to Choose From
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 my-8">
        {allData.map((data, index) => (
          <div key={index}>
            <div>
              <div className="card card-side bg-blue-200 shadow-xl">
                <figure>
                  <img className="w-36" src={data.classImage} alt="" />
                </figure>
                <div className="flex">
                  <div>
                    <div className="card-body">
                      <h2 className="card-title">{data.className}</h2>

                      <p>
                        <b>Instructor</b>: {data.instructorName}
                      </p>
                      <p>
                        <b>Available Seat</b>: {data.availableSeats}
                      </p>
                      <p>
                        <b>Price</b>: ${data.price}
                      </p>
                    </div>
                  </div>
                  <div className="p-8 mt-4">
                    {user ? (
                      <button
                        onClick={() => handleSelect(data)}
                        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                      >
                        select
                      </button>
                    ) : (
                      <button
                        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                        // disabled
                      >
                        select
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
