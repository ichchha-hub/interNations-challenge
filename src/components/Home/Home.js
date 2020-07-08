import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <h1>User Management System</h1>
      <aside>
        <ul className="menu vertical-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/users/create">Create Users</Link>
          </li>
          <li>
            <Link to="/groups">Groups</Link>
          </li>
          <li>
            <Link to="/groups/create">Create Groups</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Home;
