import React from 'react';
import './ConfirmAndPay.scss';
import Payment from '../Payment/Payment';
import TotalCard from '../TotalCard/TotalCard';

const ConfirmAndPay = (props) => {
  return (
    <div className="container-fluid">
    	<h5 style={{paddingTop: "60px", paddingLeft: "113px", paddingBottom: "60px"}}>1. Review house rules > 2. Who's Coming? > Confirm and pay</h5>
    	<div className="row">
			<div className="col-5 room-details-pl">
				<h4 className="text-secondary pb-3" style={{paddingRight: "31px"}}>Payment Selection</h4>
				<Payment></Payment>
			</div>
			<TotalCard></TotalCard>
		</div>
    </div>
  )
}

export default ConfirmAndPay;