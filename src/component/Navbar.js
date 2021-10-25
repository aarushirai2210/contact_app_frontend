import React from "react";
export default function Navbar() {
  return (
    <div className="header">
      <h2 className="title-color title-margin">Contact App</h2>
      <nav className="nav-link">
        <a href="/">
          <i class="fa fa-home fa-lg"></i>
        </a>
        <a href="/contact_list">
          <i class="fa fa-address-book fa-lg" aria-hidden="true"></i>
        </a>
        <a href="/new_contact">
          <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
        </a>
      </nav>
    </div>
  );
}
