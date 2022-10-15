import React from "react";
import Banner from "./Banner";
import Explore from "./Explore";
import SiieService from "./SiieService";
import Research from "./Research";
import Program from "./Program";
import AboutSibs from "../images/AboutSibs";
import Carosel from "../Carosel/Carosel";

const Home = () => {
	return (
		<div className="bg-white ">
			<Banner></Banner>
			<AboutSibs></AboutSibs>
			<Program></Program>
			{/* <ResearchTrial></ResearchTrial> */}

			<Explore></Explore>

			<SiieService></SiieService>
			{/* <Carosel></Carosel> */}
		</div>
	);
};

export default Home;
