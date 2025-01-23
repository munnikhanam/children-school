import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Navber = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="font-bold text-2xl btn-warning">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="font-bold text-2xl">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/facilities" className="font-bold text-2xl">
          Facilities
        </NavLink>
      </li>
      <li>
        <NavLink to="/admission" className="font-bold text-2xl">
          Admission
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      {/* daisy navber */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost ">
            <img src={logo} alt="" />
            <span className="text-3xl font-bold">School</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn  btn-outline btn-warning">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
