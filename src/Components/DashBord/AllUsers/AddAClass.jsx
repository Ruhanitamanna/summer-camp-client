import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Key;

const AddAClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const img_hosting_Url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("image", data.classImage[0]);

    fetch(img_hosting_Url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const { className, availableSeats, price, instructor, email } = data;
          const newClass = {
            className,
            availableSeats,
            price: parseFloat(price),
            instructor,
            email,
            classImage: imgUrl,
          };

          console.log(newClass);
          axiosSecure.post("/classes", newClass).then((data) => {
            console.log(" showing new class", data.data);
            if (data.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });

    // console.log(data);
    // console.log(errors);
    // console.log(img_hosting_token);
  };

  return (
    <div className="m-4 p-4 ">
      <div>
        <div className="text-center m-4 p-4 bg-blue-200">
          <Fade>
            <h1 className="text-4xl uppercase font-semibold">
              add a class to the list
            </h1>
          </Fade>
        </div>
        <div className="divider"></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-2">
          <div>
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              className="m-2 p-2 border"
              type="text"
              placeholder="Class Name"
              {...register("className", { required: true, maxLength: 80 })}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              className="m-2 p-2 border"
              type="file"
              placeholder="Class Image"
              {...register("classImage", { required: true, maxLength: 80 })}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              className="m-2 p-2 border"
              type="text"
              placeholder="Instructor Name"
              value={`${user?.displayName}`}
              {...register("instructor", {
                required: true,
                maxLength: 80,
              })}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              className="m-2 p-2 border"
              type="text"
              placeholder="Instructor Name"
              value={`${user?.email}`}
              {...register("email", { required: true, maxLength: 80 })}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              className="m-2 p-2 border"
              type="text"
              placeholder="Available Seats"
              {...register("availableSeats", { required: true, maxLength: 80 })}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              className="m-2 p-2 border"
              type="text"
              placeholder="Price"
              {...register("price", { required: true, maxLength: 80 })}
            />
          </div>
        </div>

        {/* <input
          className="m-2 p-2 border"
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <br />
        <input
          className="m-2 p-2 border"
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <br />
        <input
          className="m-2 p-2 border"
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <br />
        <input
          className="m-2 p-2 border"
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />{" "}
        <br />
        <input
          className="m-2 p-2 border"
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <br />
        {/* <select
          className="m-4 p-4 border"
          {...register("Title", { required: true })}
        >
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select> */}
        {/* <input
          {...register("Developer", { required: true })}
          type="radio"
          value="Yes"
        />
        <input
          {...register("Developer", { required: true })}
          type="radio"
          value="No"
        /> */}

        <div className="mx-auto">
          <input className="btn btn-primary" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddAClass;
