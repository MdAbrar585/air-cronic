import React from 'react';
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="container">
            <nav class="slide out show navbar navbar-expand-sm navbar-light py-4 fixed-top ">
                <div class="container">
                    <a class="navbar-brand" href="/">Aircnc</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li class="nav-item"><a class="nav-link" href="/home">Host Your Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="/pricing">Host Your Experience</a></li>
                            <li class="nav-item"><a class="nav-link" href="/classes">Help</a></li>
                            <li class="nav-item"><a class="nav-link" href="/classes">Login</a></li>
                            <li class="nav-item"><a class="nav-link sign-up" href="/classes"><span>Sign up</span> </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;