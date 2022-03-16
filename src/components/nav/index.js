import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Chris Hues: Web Designer & Writer</Link>

          <button className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
          aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

            <li className="nav-item">
                <Link className="nav-link" to="web-design">Web Design</Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Writing
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="journalism">Journalism</Link></li>
                  <li><Link className="dropdown-item" to="creative">Creative Writing</Link></li>
                  <li><Link className="dropdown-item" to="magazines">Magazines</Link></li>

                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">Contact</Link>
              </li>



            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Nav;
