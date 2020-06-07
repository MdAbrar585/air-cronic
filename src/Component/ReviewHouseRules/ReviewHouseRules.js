import React from 'react';
import './ReviewHouseRules.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import TotalCard from '../TotalCard/TotalCard';

const ReviewHouseRules = (props) => {
  return (
    <div className="container-fluid">
    	<h5 style={{paddingTop: "60px", paddingLeft: "113px", paddingBottom: "60px"}}>1. Review house rules > 2. Who's Coming? > Confirm and pay</h5>
    	<div className="row">
			<div className="col-5 room-details-pl">
				<h2 style={{paddingRight: "31px"}}>Review house rules</h2>
				<h5 style={{paddingRight: "31px"}}>3 nights in Dhaka</h5>
				<div className="d-inline-flex pt-3">
					<div className="rounded bg-secondary text-white text-center date-box"><small className="font-weight-bolder">April 13</small></div>
					<div>
						<p className="nopadding text-secondary"><small className="pl-3" style={{marginRight: "100px"}}>Monday check-in</small></p>
						<p className="nopadding text-secondary"><small className="pl-3" style={{marginRight: "100px"}}>After 12.00 PM</small></p>
					</div>
					<div className="rounded bg-secondary text-white text-center date-box"><small className="font-weight-bolder">April 17</small></div>
					<div>
						<p className="nopadding text-secondary"><small className="pl-3">Thrusday check-out</small></p>
						<p className="nopadding text-secondary"><small className="pl-3">After 11.00 AM</small></p>
					</div>
				</div>
				<p className="text-secondary border-bottom pt-4 pb-4">Self check-in with building staff</p>
				<h5 style={{paddingRight: "31px", paddingBottom: "19px"}}>Things to keep in mind</h5>
				<span style={{padding: "3px", border: "1px solid #b9bdc0", fontSize: "13px"}}><FontAwesomeIcon className="text-secondary" icon={faStar} /></span> <span className="text-secondary pl-1">Entire Home</span><br /><br />
				<span style={{padding: "3px", border: "1px solid #b9bdc0", fontSize: "13px"}}><FontAwesomeIcon className="text-secondary" icon={faStar} /></span> <span className="text-secondary pl-1">Self check-in</span><br /><br />
				<span style={{padding: "3px", border: "1px solid #b9bdc0", fontSize: "13px"}}><FontAwesomeIcon className="text-secondary" icon={faStar} /></span> <span className="text-secondary pl-1">Sparkling Clean</span><br /><br />
				<span style={{padding: "3px", border: "1px solid #b9bdc0", fontSize: "13px"}}><FontAwesomeIcon className="text-secondary" icon={faStar} /></span> <span className="text-secondary pl-1">Rakibul is a Superhost</span><br /><br />
				<a href="" className="text-primary text-decoration-none font-weight-bold mt-2">Read more ......</a><br />
				<Link to="/who-coming" className="btn btn-primary mt-5" style={{marginBottom: "75px"}}>Agree and continue</Link>
			</div>
			<TotalCard></TotalCard>
		</div>
    </div>
  )
}

export default ReviewHouseRules;