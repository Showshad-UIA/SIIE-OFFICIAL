import React from "react";
import Banner from "./Banner";
import { injectThemes } from "daisyui/src/colors/functions";
import Event from "./Event";
import Explore from "./Explore";
import SiieService from "./SiieService";
import AdditionalService from "./AdditionalService";
import Overview from "./Overview";
import Research from "./Research";
import ResearchTrial from "./ResearchTrial";

const Home = () => {
	return (
		<div className="bg-gray-200">
			<Banner></Banner>;
			<ResearchTrial></ResearchTrial>
			
			{/* Events component first column start here */}
			{/* <Event></Event>
			<SiieService></SiieService> */}
			{/* Discover component start here */}
			{/* <Explore></Explore> */}
			{/* Studying at SIIE start here */}
			{/* Additional component start here */}
			{/* <AdditionalService></AdditionalService> */}
			{/* Overview component start here */}
			{/* <Overview></Overview> */}
		</div>
	);
};

export default Home;
