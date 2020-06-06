import React, { useState } from 'react';
import './Dashboard.scss';
import 'moment/locale/fr.js' 
import 'rc-datepicker/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import logo1 from '../../images/201916769776917542.jpg';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [formData, setFormData] = useState({
        location: "",
        adults: 0,
        child: 0,
        babies: 0,
    });
    const {  arrival, departure, adults, child, babies } = formData;
    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    console.log(formData);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h5>Where Do You Want To Go.</h5>

                    <div className="dashboard-left">
                        <div className="location">
                            <label>Location</label> <br />
                            <input className="add-city" type="text" placeholder="Add City" />
                        </div>
                    </div>
                    <div class="row date">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 className="text-muted">Arrival</h5>
                                    <div className="date-input">
                                        <input type="date" name="arrival" value={arrival} onChange={onChangeHandler} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 className="text-muted">Departure</h5>
                                    <div className="date-input">
                                        <input type="date" name="departure" value={departure} onChange={onChangeHandler} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="guest-body">
                        <div className="guest-heading">
                            <span>Guests</span>
                            <h6>{`${adults > 0 ? adults + "Adults ," : ""} ${
                                child > 0 ? child + "child," : ""
                                } ${babies > 0 ? babies + "babies" : ""}`}</h6>
                        </div>
                        <div className="guest-list">
                            <h6>Adults</h6>
                            <div className="guest-btn">
                                <span onClick={() =>  setFormData({ ...formData, adults: adults - 1 }) }> -</span>
                                <span>{adults && adults}</span>
                                <span onClick={() => setFormData({ ...formData, adults: adults + 1 }) }> +</span>
                            </div>
                        </div>

                        <div className="guest-list">
                            <h6>
                                Child <p>Age 2-12</p>
                            </h6>

                            <div className="guest-btn">
                                <span onClick={() => setFormData({ ...formData, child: child - 1 })}>-</span>
                                <span>{child && child.toString()}</span>
                                <span onClick={() => setFormData({ ...formData, child: child + 1 })}> +</span>
                            </div>
                        </div>

                        <div className="guest-list">
                            <h6>
                                Babies <p>Younger than 2</p>
                            </h6>

                            <div className="guest-btn">
                                <span onClick={() => setFormData({ ...formData, babies: babies - 1 }) }>-</span>
                                <span>{babies && babies}</span>
                                <span onClick={() => setFormData({ ...formData, babies: babies + 1 }) }> +</span>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <Link to="/location">
                            <button className="apply-btn">APPLY</button>
                            </Link>
                        </div>
                        <div className="search-btn d-flex justify-content-center">
                            <FontAwesomeIcon icon={faSearch} /> <p>Search</p>
                        </div>

                    </div>

                </div>
                <div className="col-md-8">
                    <div className="experience-header">
                        <h5>Experience</h5>
                        <a className="see-all" href="/">see all</a>
                    </div>

                    <div class="row">
                        <div class="col-md-3">
                            <div class="card">
                                <img class="card-img-top" src={logo1} alt="" />
                                <div class="card-body">
                                    <p class="card-text"> <small>Night life-New York</small></p>
                                    <h6 class="card-title">Discover the city's party scene</h6>
                                    <p>$35 Per Person</p>
                                    <p className="star">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        65
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="card">
                                <img class="card-img-top" src={logo1} alt="" />
                                <div class="card-body">
                                    <p class="card-text"> <small>Night life-New York</small></p>
                                    <h6 class="card-title">Discover the city's party scene</h6>
                                    <p>$35 Per Person</p>
                                    <p className="star">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        65
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="card">
                                <img class="card-img-top" src={logo1} alt="" />
                                <div class="card-body">
                                    <p class="card-text"> <small>Night life-New York</small></p>
                                    <h6 class="card-title">Discover the city's party scene</h6>
                                    <p>$35 Per Person</p>
                                    <p className="star">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        65
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <img class="card-img-top" src={logo1} alt="" />
                                <div class="card-body">
                                    <p class="card-text"> <small>Night life-New York</small></p>
                                    <h6 class="card-title">Discover the city's party scene</h6>
                                    <p>$35 Per Person</p>
                                    <p className="star">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        65
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="experience-header">
                        <h5>Home</h5>
                        <a className="see-all-home" href="/">see all</a>
                    </div>

                    <div class="row">
                        <div class="col-md-3">
                            <div class="card">
                                <img class="card-img-top" src={logo1} alt="" />
                                <div class="card-body">
                                    <p class="card-text"> <small>Night life-New York</small></p>
                                    <h6 class="card-title">Discover the city's party scene</h6>
                                    <p>$35 Per Person</p>
                                    <p className="star">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        65
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="card">
                                <img class="card-img-top" src={logo1} alt="" />
                                <div class="card-body">
                                    <p class="card-text"> <small>Night life-New York</small></p>
                                    <h6 class="card-title">Discover the city's party scene</h6>
                                    <p>$35 Per Person</p>
                                    <p className="star">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        65
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="card">
                                <img class="card-img-top" src={logo1} alt="" />
                                <div class="card-body">
                                    <p class="card-text"> <small>Night life-New York</small></p>
                                    <h6 class="card-title">Discover the city's party scene</h6>
                                    <p>$35 Per Person</p>
                                    <p className="star">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        65
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <img class="card-img-top" src={logo1} alt="" />
                                <div class="card-body">
                                    <p class="card-text"> <small>Night life-New York</small></p>
                                    <h6 class="card-title">Discover the city's party scene</h6>
                                    <p>$35 Per Person</p>
                                    <p className="star">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        65
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;