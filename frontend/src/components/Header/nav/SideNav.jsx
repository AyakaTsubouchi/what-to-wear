import React from "react";

const SideNav = () => {
  return (
    <ul id="slide-out" className="sidenav">
      <li>
        <a href="/">Home</a>
        <a href="/weather">Weather</a>
        <a href="/products">Products</a>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li>
        <a className="subheader">Link</a>
      </li>
    </ul>
  );
};

export default SideNav;
