import React from "react";

const Navigation = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Aircnc</a>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        <a class="nav-link text-dark">Host Your Home</a>
        <a class="nav-link text-dark">Host Your Experience</a>
        <a class="nav-link text-dark">Help</a>
        <a class="nav-link text-dark">Log in</a>
        <a class="nav-link text-dark active">Sign Up</a>

      </div>
    </nav>
  );
};

export default Navigation;
