import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Class = ({ singleClass }) => {
  const { title, teacher_name, importance_of_learning, image, id } =
    singleClass;

  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl bg-gradient-to-b from-[#01ACFD]">
        <figure>
          <img className="w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl">{title}</h2>
          <p className="text-xl font-bold">
            <span className="text-[orange]">Teacher:</span>
            {teacher_name}
          </p>
          <p>{importance_of_learning}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link to={`/classes/${singleClass.id}`}>Learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
