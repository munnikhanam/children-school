import Navber from "../components/Navber";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Footer from "../components/Footer";
const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navber />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
