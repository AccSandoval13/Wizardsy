import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/cats">About</Link>
    </li>
    <li>
      <Link to="/sheeps">Today</Link>
    </li>
    <li>
      <Link to="/goats">Create</Link>
    </li>
  </div>
  );
}
export default navbar;