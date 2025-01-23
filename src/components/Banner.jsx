import React from "react";
import banner from "../assets/hero-kids.png";
const Banner = () => {
  return (
    <div>
      <div className="flex items-center justify-between shadow-xl">
        <div className="card-body text-left">
          <h2 className="text-5xl font-bold">
            <span className="text-[#FEA301] my-2"> Empowering</span>
            <br />
            <span className="text-[#111111]">students from small</span>
            <br />
            <span className="text-[#01ACFD] my-2"> age towards vision</span>
          </h2>
          <p className="text-[#111111] w-7/12 my-5 ">
            With the courage, Confidence, Creativity and Compassion to make
            their Unique Contribution in a Diverse and Dynamic World.
          </p>

          <div className="card-actions my-5">
            <button className="bg-[#111111] text-white px-12 py-3 rounded-lg font-bold ">
              Enroll Now
            </button>
          </div>
        </div>
        <figure>
          <img src={banner} alt="Movie" />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
