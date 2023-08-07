import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [disabled, setDIsabled] = useState();

  return (
    <div>
      <div className="text-center my-4 p-6">
        <h1 className="text-4xl uppercase font-semibold">manage classes</h1>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default ManageClasses;
