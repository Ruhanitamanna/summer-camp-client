import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="lg:ml-32 mt-10 ">
      <div className="text-center">
        <Link to="/">
          {" "}
          <button className="btn btn-primary"> Back to Home</button>
        </Link>
      </div>
      <br />
      <br />
      <div>
        <img
          src="https://media.istockphoto.com/id/155597883/photo/error-message.jpg?s=1024x1024&w=is&k=20&c=APjhO7yi6cnJ7s_SOKSEGxmyklrbBwUjxLhFXDJVIkQ="
          alt=""
        />
      </div>
    </div>
  );
};

export default ErrorPage;
