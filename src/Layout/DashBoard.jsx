import React from "react";
import {
  FaEtsy,
  FaHome,
  FaWallet,
  FaBookmark,
  FaPeopleGroup,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu my-8 px-4 py-10 w-80 h-full gap-4 bg-blue-200 text-base-content">
            <div className="text-center">
              <h3 className="text-2xl uppercase">Crafty</h3>
              <p className="uppercase">summer Camp</p>
            </div>
            {/* Sidebar content here */}
            <li>
              <NavLink to="myclasses">
                {" "}
                <FaBookmark></FaBookmark> My Selected Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="enrolled">
                <FaEtsy></FaEtsy> My Enrolled Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="history">
                {" "}
                <FaWallet></FaWallet>Payment History
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                {" "}
                <FaHome></FaHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructors">
                {" "}
                <FaPeopleGroup></FaPeopleGroup>Instructors
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                {" "}
                <FaHome></FaHome>Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
