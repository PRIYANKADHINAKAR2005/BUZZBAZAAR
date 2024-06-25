import React from 'react';
import './Navbar.css';
import userAvatar from '../assets/avatar.jpeg'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">BUZZBAZAAR</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Wishlist</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">My Cart</a>
            </li>
          </ul>
          <form className="d-flex search-bar">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <i className="bi bi-search search-icon"></i>
          </form>
          <div className="d-flex align-items-center">
            <span className="text-white me-3">Money: $4,123,290.00</span>
            <img src={userAvatar} alt="User Avatar" className="user-avatar rounded-circle" width="40" height="40" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
