// import React from "react";
import { Moon, Sun } from 'lucide-react';


import PropTypes from 'prop-types';
import "./navbar.css"

export default function Navbar(props) {





    return (
        <nav className={`navbar navbar-expand-lg navbarMode${props.mode}`}>
            {/* //  <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>  */}

            <div className="container-fluid">
                <span className={`navbar-brand ${props.mode === "dark" ? "text-white" : "text-dark"}`} href="/">
                    {props.title}
                </span>
                <button
                    className={`navbar-toggler ${props.mode === "dark" ? "toggler-dark" : "toggler-light"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon  "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <span className={`nav-link active ${props.mode === "dark" ? "text-white" : "text-dark"}`} >
                                Home
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className={`nav-link active ${props.mode === "dark" ? "text-white" : "text-dark"}`} >
                                {/* {props.about} //about section for future purpose */}
                            </span>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form> */}

                    <button onClick={props.handleToggle} title={props.toggle ? "Light Mode" : "Dark Mode"} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        {props.toggle ? <Sun color="green" title="Light Mode" size={24} /> : <Moon color="gray" title="Dark Mode" size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}
