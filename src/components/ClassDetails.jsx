import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const ClassDetails = () => {
  const navigate = useNavigate();
  const data = useLoaderData();

  const { classId } = useParams();
  const id = parseInt(classId);
  const classInfo = data.find((singleClassData) => singleClassData.id === id);
  const {
    class_details,
    days,
    teacher_img,
    experience,
    time,
    title,
    teacher_name,
    importance_of_learning,
    ratings,
    enrolled,
    reviews,
  } = classInfo;
  return (
    <div className="my-10">
      <div className="card card-side bg-base-100 shadow-xl  ">
        <div className="p-5 ">
          <img
            className="rounded-xl w-full h-full"
            src={teacher_img}
            alt={teacher_name}
          />
        </div>

        <div className="card-body  ">
          <h2 className="card-title text-4xl font-bold">{title}</h2>
          <h4 className="text-xl font-bold">Teacher:{teacher_name}</h4>
          <p className="text-base ">
            <span className="text-xl font-bold">Teacher's Experience:</span>
            {experience}
          </p>
          <p className=" border-b-2 border-dotted my-4"></p>
          <div>
            <p>
              <span className="font-bold underline">
                Valuable Reviews From Gardians:
              </span>
              {reviews}
            </p>
          </div>
          <p>
            <span className="text-xl font-bold">What You will Learn:</span>
            {class_details}
          </p>
          <p>
            <span className="text-xl font-bold">
              Benefits of learning this skill:
            </span>
            {importance_of_learning}
          </p>
          <div>
            <p>
              Active Days:
              <span className=" font-bold mr-3"> {days}</span>
            </p>
            <p>
              Shedule:
              <span className=" font-bold">{time}</span>
            </p>

            <p>
              AlReady enrolled:
              <span className=" font-bold"> {enrolled}</span>
            </p>
            <p>
              Ratings:
              <span className=" font-bold">{ratings}</span>
            </p>
          </div>

          <div className="card-actions ">
            <button
              onClick={() => navigate("/")}
              className="btn btn-outline btn-info text-black"
            >
              Add More Class
            </button>
            <button className="btn btn-outline btn-info text-black">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
