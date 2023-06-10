import React from "react";
import reactLogo from "../assets/react.svg";
function Navbar() {
  return (
    <nav className="nav-bar">
      <img src={reactLogo} />
      <h3 className="facts">CryptoCurrency Tracker</h3>
      <h4 className="course">Created By Allotey Ngeke</h4>
    </nav>
  );
}

export default Navbar;
