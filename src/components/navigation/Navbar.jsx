import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <img className="navbar-brand " src="./images/logoOpentify.png" width="80" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">
                <i class="fa-solid fa-house"></i> Inicio
              </Link>
              <Link className="nav-link" to="/buscar">
                <i class="fa-solid fa-magnifying-glass"></i> Buscar
              </Link>
              <Link className="nav-link" to="/favoritos">
                <i class="fa-solid fa-bookmark"></i> Favoritos
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
