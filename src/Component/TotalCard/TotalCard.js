import React from 'react';
import './TotalCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TotalCard = (props) => {
  return (
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
		    <div className="d-flex justify-content-between font-weight-bolder pt-4">
				<p className="card-text text-dark">Total</p>
				<p className="text-dark">$167</p>
		    </div>
		  </div>
		</div>
	</div>
  )
}

export default TotalCard;