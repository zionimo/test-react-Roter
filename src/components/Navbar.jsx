import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home </NavLink>
      <NavLink to="about">about </NavLink>
      <NavLink to="product">product</NavLink>
    </div>
  );
};

export default Navbar;
