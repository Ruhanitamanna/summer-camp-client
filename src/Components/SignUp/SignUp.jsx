import { useContext } from "react";

import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import "./SignUp.css";
import registerImg from "../../assets/images/register.jpg";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      navigate("/");
    });
  };

  return (
    <>
      <div className="bg-[registerImg]">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-50">
              <img className="w-30" src="" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-700">this field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    {...register("photoUrl", { required: true })}
                    placeholder="Photo Url"
                    className="input input-bordered"
                  />
                  {errors.photoUrl && (
                    <span className="text-red-700">Photo Url is required</span>
                  )}
                </div>
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
                      minLength: 6,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-700">password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-700">
                      password must be 6 characters
                    </p>
                  )}

                  {errors.password?.type === "pattern" && (
                    <p className="text-red-700">
                      password must have an uppercase one special character and
                      one number.
                    </p>
                  )}

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      {...register("confirmPassword", { required: true })}
                      placeholder="confirmPassword"
                      className="input input-bordered"
                    />
                    {errors.confirmPassword && (
                      <span className="text-red-700">
                        this field is required
                      </span>
                    )}
                  </div>

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign up"
                  />
                </div>
              </form>
              <div className="text-center">
                <p>
                  <small>
                    Already have an account?{" "}
                    <Link to="/login">
                      <span className="text-blue-600 font-semibold underline">
                        Log in
                      </span>
                    </Link>
                    here
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

export default SignUp;
