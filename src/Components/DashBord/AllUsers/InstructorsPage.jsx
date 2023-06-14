import React from "react";

const InstructorsPage = ({ instructors }) => {
  console.log(instructors);
  return (
    <div>
      <div className="text-center my-4 p-6">
        <h1 className="text-4xl uppercase font-semibold">
          Our Respected Instructors
        </h1>
      </div>
      <div className="divider"></div>
      <div className="grid lg:grid-cols-3 gap-y-6 gap-x-4 my-20">
        {instructors.map((data, index) => (
          <div key={index}>
            <div className="card w-96 glass bg-blue-100">
              <figure>
                <img src={data.photoURL} alt={data.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p>{data.className}</p>
                <p>{data.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsPage;
