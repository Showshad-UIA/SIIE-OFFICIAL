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
import Program from "./Program";
import AboutSibs from "../images/AboutSibs";
import HomeResearch from "./HomeResearch";
import Carosel from "../Carosel/Carosel";

const Home = () => {
	return (
		<div className="bg-white">
			{/* <Banner></Banner> */}
			<AboutSibs></AboutSibs>
			<Program></Program>
			<ResearchTrial></ResearchTrial>
			{/* <ResearchTrial></ResearchTrial> */}
			<Explore></Explore>
			{/* <HomeResearch></HomeResearch> */}
			
			{/* Events component first column start here */}
			{/* <Event></Event> */}
			<SiieService></SiieService>
			<Carosel></Carosel>
			{/* Discover component start here */}
			
			{/* Studying at SIIE start here */}
			{/* Additional component start here */}
			{/* <AdditionalService></AdditionalService> */}
			{/* Overview component start here */}
		</div>
	);
};

export default Home;
