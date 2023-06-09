import { Link } from "react-router-dom";
import useAllData from "../../hooks/useAllData";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const AllClasses = () => {
  const [disabled, setDisabled] = useState(false);
  const { user } = useContext(AuthContext);
  const [allData] = useAllData();

  return (
    <div className="grid lg:grid-cols-2 gap-4">
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
                    <Link to="/">
                      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                        select
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                      disabled
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
  );
};

export default AllClasses;
