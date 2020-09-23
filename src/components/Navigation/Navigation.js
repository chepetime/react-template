import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div style={{ display: "flex" }}>
      <div>Logo</div>

      <nav>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li style={{ padding: "0 2rem" }}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
