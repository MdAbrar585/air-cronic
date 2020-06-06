import React from 'react';
import './LocationNavbar.scss'
const LocationNavbar = () => {
    return (
        <div className="container">
            <nav class="slide out show navbar navbar-expand-sm navbar-light py-4 fixed-top ">
                <div class="container">
                    <a class="navbar-brand" href="/">Aircnc</a>
                    <div className="location-details d-flex justify-content-center">
                            <p>Dhaka</p>
                            <p>June 01 - 10</p>
                            <p>guest</p>
                        </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">

                            <li class="nav-item"><a class="nav-link" href="/">Help</a></li>
                            <li class="nav-item"><a class="nav-link" href="/">Login</a></li>
                            <li class="nav-item"><a class="nav-link sign-up" href="/"><span>Sign up</span> </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default LocationNavbar;