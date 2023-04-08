import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../wizard-hat.png';
import { useDispatch } from 'react-redux';
import '../App.css';
// import SignUp from './SignUp';

function NavBar() {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-left">
        <span class="navbar-toggler-icon"></span>
        <img src={logo} title="Wizardsy Logo" width="30" height="30" class="d-inline-block align-top"/>
        <Link className="navbar-brand" to="/">Home </Link>
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
              <li><button className="dropdown-item" type="button"> Sign Up</button></li>
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

export const navForm = ({ text, style, _onClick }) => {
  const _onClickHandler = (event) => {
      event.preventDefault();
      _onClick?.(event);
  };

  return (
      <button {...style}>
          <Link href='#' onClick={_onClickHandler}>
              {text}
          </Link>
      </button>
  );
};
export default NavBar;
