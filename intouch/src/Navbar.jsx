import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AddMedication">Add Medication</Link>
        </li>
        <li>
          <Link to="/AddDoctor">Add Doctor</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;