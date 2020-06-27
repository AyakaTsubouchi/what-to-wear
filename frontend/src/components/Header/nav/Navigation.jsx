import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import NavLink from "./NavLinks";
import SideNav from "./SideNav";

const Navigation = () => {
  useEffect(() => {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }, []);
  return (
    <>
      <nav>
        <div className="nav-wrapper bg-primary">
          <a href="#!" className="mainColor">
            What To wear
          </a>
          <a href="#" className="sidenav-trigger" data-target="slide-out">
            <i className="material-icons mainColor">menu</i>
          </a>
          <div className="right flex">
            <i className="material-icons right">cloud_queue</i>

            <div className="temp">
              <div className="">max:20</div>
              <div className="col-12">min:10</div>
            </div>
          </div>
          {/* <ul className="right hide-on-med-and-down">
            <NavLink linkname="Home" />
            <NavLink linkname="Weather" link="/weather" />
            <NavLink linkname="Products" link="/products" />
            <NavLink linkname="Login" />
          </ul> */}
        </div>
      </nav>

      <SideNav />
    </>
  );
};

export default Navigation;
