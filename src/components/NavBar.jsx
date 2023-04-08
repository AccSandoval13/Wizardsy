import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../wizard-hat.png';
import './NavBar.css';
import { useDispatch } from 'react-redux';
import store from '../store/store';





function NavBar() {
  const dispatch = useDispatch();

  function handleCreateClick() {
    dispatch(showSignup());
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="https://www.flaticon.com/free-icons/wizard-hat" title="Wizardsy Logo" />
        <Link className="navbar-brand" to="/">Home</Link>
      </div>
      <div className="navbar-right">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/today">Today</Link>
          </li>

          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Create
            </button>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><button className="dropdown-item" type="button">Today</button></li>
              <li><button className="dropdown-item" type="button" onClick={handleCreateClick}>Sign Up</button></li>
              <li><hr className="dropdown-divider" /></li>
              <li><button className="dropdown-item" type="button">Something else here</button></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
