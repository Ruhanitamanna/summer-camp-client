import React from "react";
import { FaHome, FaWallet } from "react-icons/fa";
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
          <ul className="menu my-8 p-4 w-80 h-full gap-4 bg-blue-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink to="myclasses">My Selected Classes</NavLink>
            </li>
            <li>
              <NavLink>My Enrolled Classes</NavLink>
            </li>
            <li>
              <NavLink>
                {" "}
                <FaWallet></FaWallet>Payment History
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
