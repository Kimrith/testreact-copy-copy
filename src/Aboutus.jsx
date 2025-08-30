import React from "react";
import Navbar from "./Navbar"; // ✅ Reuse your Navbar component

export default function Aboutus() {
  return (
    <div>
      {/* Navbar reused instead of duplicating */}
      <Navbar
        home="Home"
        about="About"
        services="Services"
        pricing="Pricing"
        contact="Contact"
      />

      {/* Page content */}
      <div className="pt-20 max-w-screen-xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">
          Welcome to our About page! 🎉 Here you can explain your company,
          services, and mission.
        </p>
      </div>
    </div>
  );
}
