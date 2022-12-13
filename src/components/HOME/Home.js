import React from "react";
import Program from "../HOME/HOME PAGE/Program";
import AboutSibs from "../HOME/HOME PAGE/AboutSibs";
import Discover from "../HOME/HOME PAGE/Discover";
import Banner from "../HOME/HOME PAGE/Banner";
import News from "./HOME PAGE/News";
import Study from "./HOME PAGE/Living Sydney/Study";

const Home = () => {
	return (
		<div className="bg-gray-100 ">
			{/* Home page components  */}
			<Banner></Banner>
			<AboutSibs></AboutSibs>
			<News></News>
			<Discover></Discover>
			<Program></Program>
			<Study></Study>
		</div>
	);
};

export default Home;
