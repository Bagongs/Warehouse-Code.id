import React, { useState } from "react";
import {Link} from "react-router-dom";

const Navbar = (props) => {
    const { loginStatus, loginCbHandler } = props;

    const loginHandler = () => {
        loginCbHandler(true)
    }
    const logoutHandler = () => {
        localStorage.clear()
        loginCbHandler(false)
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                <Link class="navbar-brand" href="#">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Add
                            </Link>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="/AddItem">Add Item</Link></li>
                                <li><Link class="dropdown-item" to="/AddBrand">Add Brand</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Edit
                            </Link>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="/EditItem">Edit Item</Link></li>
                                <li><Link class="dropdown-item" to="/EditBrand">Edit Brand</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                                {loginStatus ?

                                    <a
                                        className="nav-link" href="#"
                                        onClick={() => logoutHandler()} > Logout</a> :
                                    <a
                                        className="nav-link" href="#"
                                        onClick={() => loginHandler()} > Login </a>

                                }
                            </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar