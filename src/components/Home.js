import React from "react";
import Program from "./HOME PAGE/Program";
import AboutSibs from "./HOME PAGE/AboutSibs";
import Discover from "./HOME PAGE/Discover";
import Banner from "./HOME PAGE/Banner";
import Explore from "./HOME PAGE/Explore";

const Home = () => {
	return (
		<div className="bg-white ">
			<Banner></Banner>
			<AboutSibs></AboutSibs>
			<Program></Program>
			<Explore></Explore>
			<Discover></Discover>
		</div>
	);
};

export default Home;
