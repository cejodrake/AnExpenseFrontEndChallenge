import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ user }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" >Someone Care Your Money</a>
            <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/addexpense"> Add Expense  </NavLink>
                    <NavLink className="nav-item nav-link" to="/myreports"> My Reports  </NavLink>
                    <NavLink className="nav-item nav-link" to="/login"> Login   </NavLink>
                    <NavLink className="nav-item nav-link" to="/Register"> Register   </NavLink>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;
