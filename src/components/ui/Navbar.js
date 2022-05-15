import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate(
            '/login',
            {
                replace: true
            }
        )
    }

    const handleActive = ( { isActive } ) => {
        return 'nav-item nav-link' + ( isActive ? ' active' : '' );
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={ handleActive }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={ handleActive }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={ handleActive }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info"> Maxi </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}