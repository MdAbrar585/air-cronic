import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RoomDetails = (props) => {
  return (
    <div className="container-fluid">
    	<div className="row pb-5">
    		<div className="col-6 nopadding">
    			<img className="img-fluid" src={require("./images/RoomDetails_1.jpeg")} style={{height: "500px", width: "100%"}} alt="RoomDetails" />
    		</div>
    		<div className="col-6 nopadding">
    			<img className="img-fluid" src={require("./images/RoomDetails_2.jpeg")} style={{height: "500px", width: "100%"}} alt="RoomDetails" />
    		</div>
    	</div>

    	<div className="row">
			<div className="col-5 room-details-pl">
				<div className="d-inline-flex">
					<h2 style={{paddingRight: "31px"}}>Light bright airy stylish apt & safe peaceful stay</h2>
					<img className="mt-1" src={require("./images/user_img.jpg")} style={{width: "15%", borderRadius: "50%"}} alt=""/>
				</div>
				<p className="text-secondary pt-2">Dhaka, Bangladesh</p>
				<pre className="text-secondary border-bottom pb-2">4 guests  2 bedrooms  2 beds  2 baths</pre>
				<FontAwesomeIcon className="text-secondary" icon={faStar} /> <span className="text-secondary pl-1">Entire Home</span>
				<p className="text-secondary pl-4">You'll have the condominium to yourself</p>
				<FontAwesomeIcon className="text-secondary" icon={faStar} /> <span className="text-secondary pl-1">Self check-in</span>
				<p className="text-secondary pl-4">You can check in with the doorman</p>
				<FontAwesomeIcon className="text-secondary" icon={faStar} /> <span className="text-secondary pl-1">Sparkling Clean</span>
				<p className="text-secondary pl-4">10 recent guests said this place was sparkling Clean</p>
				<FontAwesomeIcon className="text-secondary" icon={faStar} /> <span className="text-secondary pl-1">Rakibul is a Superhost</span>
				<p className="text-secondary border-bottom pb-3 pl-4">Superhosts are experienced, highly rated hosts who are commited to providing great stays for guests.</p>
				<p className="text-secondary text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos perferendis quod itaque cumque est ipsa doloribus voluptas odit, earum mollitia molestiae minus maiores quasi vel saepe quaerat explicabo sapiente eaque.Lorem ipsum dolor sit amet.</p>
				<p className="text-secondary text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos perferendis quod itaque cumque est ipsa doloribus voluptas odit, earum mollitia molestiae minus maiores quasi vel saepe quaerat explicabo sapiente eaque.Lorem ipsum dolor sit amet.</p>
				<p className="text-secondary text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos perferendis quod itaque cumque est ipsa doloribus voluptas odit.</p>
				<a href="" className="text-primary text-decoration-none font-weight-bold">Read more about the space ......</a>
				<p className="font-weight-bolder mt-5" style={{margin: "0"}}>Reviews</p>
				<FontAwesomeIcon className="text-secondary" icon={faStar} /><p className="d-inline pl-1" style={{paddingBottom: "300px"}}><small className="font-weight-bold">4.9/<span className="font-weight-normal">(20 reviews)</span></small></p>
			</div>
			<div className="col-3 pl-5">
				<div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "29rem"}}>
				  <div className="card-body">
				    <h6 className="card-title font-weight-bold pb-2">$34/<span className="font-weight-normal">night</span></h6>
				    <h6 className="card-title font-weight-bold pb-3"><FontAwesomeIcon className="text-secondary mr-1" icon={faStar} />4.9/<span className="font-weight-normal">(20 reviews)</span></h6>
				    <h6 className="pt-2">Dates</h6>
				    <div className="rounded box font-weight-bold">
				    	<p><pre className="font-weight-bold text-dark ml-2 mt-2" style={{fontSize: "15px"}}>4/13/2020            ->             4/17/2020</pre></p>
				    </div>
				    <h6 className="pt-2">Guests</h6>
				    <div className="rounded box"><p className="font-weight-bold text-dark ml-2 mt-2" style={{fontSize: "15px"}}>3 guests</p></div>
				    <div className="d-flex justify-content-between text-secondary border-bottom pt-4">
				    	<p className="card-text">$34 * 4 nights</p>
						<p className="">$136</p>
				    </div>
				    <div className="d-flex justify-content-between text-secondary border-bottom pt-4">
				    	<p className="card-text">Cleaning Fee</p>
						<p className="">$10</p>
				    </div>
				    <div className="d-flex justify-content-between text-secondary border-bottom pt-4">
				    	<p className="card-text">Service Fee</p>
						<p className="">$21</p>
				    </div>
				    <div className="d-flex justify-content-between font-weight-bolder border-bottom pt-4">
						<p className="card-text text-dark">Total</p>
						<p className="text-dark">$167</p>
				    </div>
				    <Link to="/review-house-rules" className="btn btn-primary mt-5">Reserve</Link>
				    <p className="text-secondary text-center pt-3">You won't be changed yet</p>
				  </div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default RoomDetails;