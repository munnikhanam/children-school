import React from "react";
import Banner from "../components/Banner";
import Classes from "../components/Classes";
import bgimg from "../assets/bg.png";
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="bg-center bg-cover bg-classes py-5">
        <div>
          <Classes />
        </div>
      </div>
    </div>
  );
};

export default Home;
