import React from "react";
import {
  FaEtsy,
  FaHome,
  FaWallet,
  FaBookmark,
  FaPersonBooth,
  FaUserCircle,
  FaContao,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const DashBoard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();

  if (isAdminLoading || isInstructorLoading) {
    return (
      <div>
        <span className="loading loading-bars loading-xs"></span>
      </div>
    );
  }

  let content;
  if (isAdmin) {
    content = (
      <>
        <li>
          <NavLink to="myclasses">
            <FaHome></FaHome> Admin Home
          </NavLink>
        </li>
        <li>
          <NavLink to="enrolled">
            <FaContao></FaContao> Manage Classes
          </NavLink>
        </li>
        <li>
          <NavLink to="allUsers">
            <FaUserCircle></FaUserCircle> Manage Users
          </NavLink>
        </li>
      </>
    );
  } else if (isInstructor) {
    content = (
      <>
        <li>
          <NavLink to="myclasses">
            <FaHome></FaHome> Instructor Home
          </NavLink>
        </li>
        <li>
          <NavLink to="enrolled">
            <FaUsers></FaUsers> Total Enrolled Students
          </NavLink>
        </li>
        <li>
          <NavLink to="history">
            <FaWallet></FaWallet> Payment History
          </NavLink>
        </li>
      </>
    );
  } else {
    content = (
      <>
        <li>
          <NavLink to="allUsers">
            <FaUserCircle></FaUserCircle> Manage Users
          </NavLink>
        </li>
        <li>
          <NavLink to="myclasses">
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
            <FaWallet></FaWallet> Payment History
          </NavLink>
        </li>
      </>
    );
  }

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
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

            {content}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructors">
                <FaPersonBooth></FaPersonBooth> Instructors
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes"> Classes</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

// import React from "react";
// import {
//   FaEtsy,
//   FaHome,
//   FaWallet,
//   FaBookmark,
//   FaPersonBooth,
//   FaUserCircle,
//   FaContao,
//   FaUsers,
// } from "react-icons/fa";
// import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
// import useInstructor from "../hooks/useInstructor";

// const DashBoard = () => {
//   const isAdmin = true;

//   return (
//     <div>
//       <div className="drawer lg:drawer-open">
//         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content flex flex-col  ">
//           {/* Page content here */}
//           <Outlet></Outlet>
//           <label
//             htmlFor="my-drawer-2"
//             className="btn btn-primary drawer-button lg:hidden"
//           >
//             Open drawer
//           </label>
//         </div>
//         <div className="drawer-side">
//           <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

//           <ul className="menu my-8 px-4 py-10 w-80 h-full gap-4 bg-blue-200 text-base-content">
//             <div className="text-center">
//               <h3 className="text-2xl uppercase">Crafty</h3>
//               <p className="uppercase">summer Camp</p>
//             </div>
//             {/* {isAdmin?(<></>): (isInstructor?<></>): (isStudent?<></>)} */}

//             {isAdmin ? (
//               <>
//                 {" "}
//                 <li>
//                   <NavLink to="myclasses">
//                     {" "}
//                     <FaHome></FaHome> Admin Home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="enrolled">
//                     <FaContao></FaContao>Manage Classes
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="allUsers">
//                     {" "}
//                     <FaUserCircle></FaUserCircle>Manage Users
//                   </NavLink>
//                 </li>
//               </>
//             ) : isInstructor ? (
//               <>
//                 <li>
//                   <NavLink to="myclasses">
//                     {" "}
//                     <FaHome></FaHome>Instructor home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="enrolled">
//                     <FaUsers></FaUsers> Total Enrolled Students
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="history">
//                     {" "}
//                     <FaWallet></FaWallet>Payment History
//                   </NavLink>
//                 </li>
//               </>
//             ) : isStudent ? (
//               <>
//                 <li>
//                   <NavLink to="myclasses">
//                     {" "}
//                     <FaHome></FaHome> Students Home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="myclasses">
//                     {" "}
//                     <FaBookmark></FaBookmark> My Selected Classes
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="enrolled">
//                     <FaEtsy></FaEtsy> My Enrolled Classes
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="history">
//                     {" "}
//                     <FaWallet></FaWallet>Payment History
//                   </NavLink>
//                 </li>
//               </>
//             ) : null}

//             <div className="divider"></div>
//             <li>
//               <NavLink to="/">
//                 {" "}
//                 <FaHome></FaHome>Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/instructors">
//                 {" "}
//                 <FaPersonBooth></FaPersonBooth> Instructors
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/classes"> Classes</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashBoard;
