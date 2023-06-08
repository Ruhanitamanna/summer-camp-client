import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="lg:ml-32 mt-10 ">
      <div className="text-center">
        <Link to="/">
          {" "}
          <button className="btn btn-secondary"> Go Back to Home</button>
        </Link>
      </div>
      <br />
      <br />
      <div>
        <img
          src="https://media.istockphoto.com/id/1204713198/photo/3d-word-error-with-computer-mouse-on-chalkboard-background-3d-rendering.jpg?s=1024x1024&w=is&k=20&c=1whVhS8dIMvKBCZIGJFfjMAlE-jnMWg5lTHb47Skt2s="
          alt=""
        />
      </div>
    </div>
  );
};

export default ErrorPage;
