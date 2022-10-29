import React from "react";
import Program from "../HOME/HOME PAGE/Program";
import AboutSibs from "../HOME/HOME PAGE/AboutSibs";
import Discover from "../HOME/HOME PAGE/Discover";
import Banner from "../HOME/HOME PAGE/Banner";
import News from "./HOME PAGE/News";


const Home = () => {
	return (
		<div className="bg-white ">
			{/* Home page pages added  here */}
			<Banner></Banner>
			<AboutSibs></AboutSibs>
			<Program></Program>
			<News></News>
			<Discover></Discover>
		</div>
	);
};

export default Home;
