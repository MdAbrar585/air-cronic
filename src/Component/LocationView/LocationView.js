import React, { useState } from 'react';
import './LocationView.scss';
import logo1 from '../../images/201916769776917542.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '50%'
  };
   
  const center = {
    lat: -3.745,
    lng: -38.523
  };

const LocationView = () => {
    const [map, setMap] = useState(null);
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
     
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    return (
        <div className="container">


            <div className="row">
                <div className="col-md-6">
                    <div className="location-header">
                        <p>252 stays june 01-10 guest</p>
                        <h3>Stay In Dhaka Division</h3>
                        <div className="category">
                            <p className="category-btn text-muted">Cancellation Flexibility</p>
                            <p className="category-btn text-muted">Type of Place</p>
                            <p className="category-btn text-muted">Price</p>
                            <p className="category-btn text-muted">Instant Book</p>
                        </div>
                    </div>
                    <div className="row location-view-body">
                        <div className="col-md-4 location-view-details">
                            <img src={logo1} alt="" />
                        </div>
                        <div className="col-md-8 location-pricing">
                                <h6>Light bright airy stylish apt and safe peaceful stay</h6>
                                <p className="text-muted">4 guest 2 bedrooms 2 baths <br/> with air condition Kitchen</p>
                                <p className="text-muted">Cancellation Flexibility Available</p>
                                <div className="d-flex justify-content-between pricing">
                                        <p> <span className="icon"><FontAwesomeIcon icon={faStar} /></span>4.9(20)</p>
                                        <p>$34/night <br/> <span> $160 Total</span></p>
                                </div>
                        </div>
                    </div>
                    <div className="row location-view-body">
                        <div className="col-md-4 location-view-details">
                            <img src={logo1} alt="" />
                        </div>
                        <div className="col-md-8 location-pricing">
                                <h6>Light bright airy stylish apt and safe peaceful stay</h6>
                                <p className="text-muted">4 guest 2 bedrooms 2 baths <br/> with air condition Kitchen</p>
                                <p className="text-muted">Cancellation Flexibility Available</p>
                                <div className="d-flex justify-content-between pricing">
                                        <p> <span className="icon"><FontAwesomeIcon icon={faStar} /></span>4.9(20)</p>
                                        <p>$34/night <br/> <span> $160 Total</span></p>
                                </div>
                        </div>
                    </div>
                    <div className="row location-view-body">
                        <div className="col-md-4 location-view-details">
                            <img src={logo1} alt="" />
                        </div>
                        <div className="col-md-8 location-pricing">
                                <h6>Light bright airy stylish apt and safe peaceful stay</h6>
                                <p className="text-muted">4 guest 2 bedrooms 2 baths <br/> with air condition Kitchen</p>
                                <p className="text-muted">Cancellation Flexibility Available</p>
                                <div className="d-flex justify-content-between pricing">
                                        <p> <span className="icon"><FontAwesomeIcon icon={faStar} /></span>4.9(20)</p>
                                        <p>$34/night <br/> <span> $160 Total</span></p>
                                </div>
                        </div>
                    </div>
                    <div className="row location-view-body">
                        <div className="col-md-4 location-view-details">
                            <img src={logo1} alt="" />
                        </div>
                        <div className="col-md-8 location-pricing">
                                <h6>Light bright airy stylish apt and safe peaceful stay</h6>
                                <p className="text-muted">4 guest 2 bedrooms 2 baths <br/> with air condition Kitchen</p>
                                <p className="text-muted">Cancellation Flexibility Available</p>
                                <div className="d-flex justify-content-between pricing">
                                        <p> <span className="icon"><FontAwesomeIcon icon={faStar} /></span>4.9(20)</p>
                                        <p>$34/night <br/> <span> $160 Total</span></p>
                                </div>
                        </div>
                    </div>
                    <div className="row location-view-body">
                        <div className="col-md-4 location-view-details">
                            <img src={logo1} alt="" />
                        </div>
                        <div className="col-md-8 location-pricing">
                                <h6>Light bright airy stylish apt and safe peaceful stay</h6>
                                <p className="text-muted">4 guest 2 bedrooms 2 baths <br/> with air condition Kitchen</p>
                                <p className="text-muted">Cancellation Flexibility Available</p>
                                <div className="d-flex justify-content-between pricing">
                                        <p> <span className="icon"><FontAwesomeIcon icon={faStar} /></span>4.9(20)</p>
                                        <p>$34/night <br/> <span> $160 Total</span></p>
                                </div>
                        </div>
                    </div>
                    <div className="row location-view-body">
                        <div className="col-md-4 location-view-details">
                            <img src={logo1} alt="" />
                        </div>
                        <div className="col-md-8 location-pricing">
                                <h6>Light bright airy stylish apt and safe peaceful stay</h6>
                                <p className="text-muted">4 guest 2 bedrooms 2 baths <br/> with air condition Kitchen</p>
                                <p className="text-muted">Cancellation Flexibility Available</p>
                                <div className="d-flex justify-content-between pricing">
                                        <p> <span className="icon"><FontAwesomeIcon icon={faStar} /></span>4.9(20)</p>
                                        <p>$34/night <br/> <span> $160 Total</span></p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    
                    <LoadScript
      googleMapsApiKey="AIzaSyBwr1Wru84XMz13wyB9T7aHcxGQ5rO33HM"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
                </div>
            </div>
        </div>
    );
};

export default LocationView;