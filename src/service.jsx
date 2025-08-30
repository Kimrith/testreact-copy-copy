import React from "react";
import { NavLink } from "react-router";
import Navbar from "./Navbar";

export default function service() {
  return (
    <>
      <Navbar
        home="Home"
        about="About"
        services="Services"
        pricing="Pricing"
        contact="Contact"
      />
    </>
  );
}
