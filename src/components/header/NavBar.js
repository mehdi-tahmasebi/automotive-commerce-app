import React from "react";

export default function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🚙</span>
      <h1>Auto Commerce</h1>
    </div>
  );
}
