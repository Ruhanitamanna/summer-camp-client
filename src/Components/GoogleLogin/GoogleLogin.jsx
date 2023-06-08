import { FaGoogle } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;

        const savedUser = {
          name: loggedInUser.displayName, // <-- Corrected property name
          email: loggedInUser.email,
        };

        // fetch("http://localhost:5000/users", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(savedUser),
        // })
        //   .then((res) => res.json())
        //   .then(() => {
        //     navigate(from, { replace: true });
        //   })
        //   .catch((error) => {
        //     console.error("Error saving user:", error);
        //   });
      })

      .catch((error) => {
        console.error("Google sign-in error:", error);
      });
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
