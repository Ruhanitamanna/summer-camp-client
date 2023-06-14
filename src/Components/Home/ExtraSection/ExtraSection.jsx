import React from "react";
import { Fade } from "react-awesome-reveal";

const ExtraSection = () => {
  return (
    <div className="my-20 mx-30">
      <div className="text-center m-4 p-4 bg-blue-200">
        <Fade>
          <h1 className="text-4xl uppercase font-semibold">
            fun activities at the summer Camp
          </h1>
        </Fade>
      </div>
      <div className="divider"></div>

      <div className="mx-auto">
        <div className="carousel carousel-end rounded-box p-100 gap-4 ">
          <div className="carousel-item ">
            <img
              src="https://media.istockphoto.com/id/505936431/photo/children-having-sack-race-in-field.webp?s=1024x1024&w=is&k=20&c=tijMv8JcpOrcPH4TE4LMomc8NVwEeYruwORlnopW4rM="
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1471978857/photo/summer-camp-and-activities-for-kids.jpg?s=1024x1024&w=is&k=20&c=gbqInRvp0u6UuTuT2HlKcH9YMk78gjDCnrAtc_x2WIc="
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1370052429/photo/smiling-asian-girl-birdhouse-painting.jpg?s=1024x1024&w=is&k=20&c=eiAc-nbKsKFrJtZYk95zwG0pF6a0zcWKrf2PChHUGAo="
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1407154364/photo/fun-in-the-garden-kids-playing-in-colorful-hammock.jpg?s=1024x1024&w=is&k=20&c=YMbA3ZWzxvOGPZ2MpVhHrUGW5cb_0uBQvBSIM-MR6pY="
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1188829286/photo/two-boys-enjoying-kayaking-on-lake.jpg?s=1024x1024&w=is&k=20&c=3kt-Ty0JNu4XZWzN2E3JHYSwzhDQMA2uThkmg8mjVJI="
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1301652998/photo/wha-did-you-find-in-your-net.jpg?s=1024x1024&w=is&k=20&c=txKSFplwV-zO-hsTCDzFnqOp2b7WbWAWZ4Ic6lE5Dc0="
              className="rounded-box"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
