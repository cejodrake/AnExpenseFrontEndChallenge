import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ user, email }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" >An Expense Tracker</a>
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


                    {!user && (
                        <React.Fragment>
                            <NavLink className="nav-item nav-link" to="/login"> Login   </NavLink>
                            <NavLink className="nav-item nav-link" to="/Register"> Register   </NavLink>
                        </React.Fragment>
                    )}

                    {
                        user && (
                            <React.Fragment>
                                <NavLink className="nav-item nav-link" to="/newexpense"> Add Expense  </NavLink>
                                <NavLink className="nav-item nav-link" to="/report"> My Reports  </NavLink>
                                <NavLink className="nav-item nav-link" to="/profile">
                                    Welcome {email}
                                </NavLink>

                                <NavLink className="nav-item nav-link" to="/logout" >
                                    Logout
                                </NavLink>
                            </React.Fragment>
                        )
                    }
                </div>

            </div>
        </nav>
    );
};

export default NavBar;
