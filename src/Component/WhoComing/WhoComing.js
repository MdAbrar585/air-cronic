import React from 'react';
import './WhoComing.scss';
import { Link } from "react-router-dom";
import TotalCard from '../TotalCard/TotalCard';

const WhoComing = (props) => {
  return (
    <div className="container-fluid">
    	<h5 style={{paddingTop: "60px", paddingLeft: "113px", paddingBottom: "60px"}}>1. Review house rules > 2. Who's Coming? > Confirm and pay</h5>
    	<div className="row">
			<div className="col-5 room-details-pl">
				<h2 style={{paddingRight: "31px"}}>Traveling for work</h2>
				<div className="d-inline-flex">
					<p className="font-weight-normal" style={{paddingRight: "287px", paddingTop: "37px"}}>Say hello to your host</p>
					<img className="mt-1" src={require("./images/user_img.jpg")} style={{width: "15%", borderRadius: "50%"}} alt=""/>
				</div>
				<form>
					<div class="form-group">
				    	<label for="textarea">Let Rakibul know a little about yourself and why you're coming</label>
				    	<textarea class="form-control" type="text" id="textarea" rows="5" placeholder="Write something ....."></textarea>
				    </div>
				</form>
				<Link to="/confirm-and-pay" className="btn btn-primary mt-5" style={{marginBottom: "75px"}}>Continue</Link>
			</div>
			<TotalCard></TotalCard>
		</div>
    </div>
  )
}

export default WhoComing;