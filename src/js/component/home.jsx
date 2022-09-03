import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="row container">
			<div className="col-1"> <i class="far fa-clock"></i> </div>
			<div className="col-1">{props.hour1}:</div>
			<div className="col-1">{props.hour0} : </div>
			<div className="col-1">{props.minute1} : </div>
			<div className="col-1">{props.minute0} : </div>
			<div className="col-1">{props.second1} : </div>
			<div className="col-1">{props.second0} :</div>
		</div>
		
	);
};
export default Home; 
