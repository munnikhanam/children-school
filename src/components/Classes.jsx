import React, { useEffect, useState } from "react";
import Class from "./Class";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(`./data.json`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <div>
      <h2 className="text-5xl text-center font-bold my-10">
        Standared Cariculam
      </h2>
      <div className="grid md:grid-cols-3 gap-5">
        {classes.map((singleClass) => (
          <Class singleClass={singleClass} key={singleClass.id} />
        ))}
      </div>
      ;
    </div>
  );
};
export default Classes;
