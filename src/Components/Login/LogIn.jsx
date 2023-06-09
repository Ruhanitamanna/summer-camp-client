import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Successfully logged in",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    });
    navigate(from, { replace: true });
  };

  return (
    <>
      <div>
        <h1 className="text-3xl">Please LOG in here</h1>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(handleLogIn)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-700">email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-700">password is required</p>
                  )}

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" />
                </div>
              </form>

              <div className="text-center">
                <p>
                  <small>
                    New Here?{" "}
                    <Link to="/signup">
                      <span className="text-blue-600 font-semibold underline">
                        create an account
                      </span>
                    </Link>
                  </small>
                </p>
              </div>
              <GoogleLogin></GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
