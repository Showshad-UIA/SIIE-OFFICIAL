import React from "react";
import Banner from "./Banner";
import { injectThemes } from "daisyui/src/colors/functions";
import Event from "./Event";
import Explore from "./Explore";
import SiieService from "./SiieService";
import AdditionalService from "./AdditionalService";
import Overview from "./Overview";

const Home = () => {
	return (
		<div className="bg-gray-100">
			<Banner></Banner>;
			<div>
				<div className="flex justify-between ml-8 ">
					<div className="flex items-center">
						<div className="text-3xl font-bold">News</div>
						<div>
							<a href="#" className="ml-3 text-sm text-blue-500">
								ALL NEWS
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* Events component first column start here */}
			<Event></Event>
			<SiieService></SiieService>
			{/* Discover component start here */}
			<Explore></Explore>
			{/* Studying at SIIE start here */}
			{/* Additional component start here */}
			{/* <AdditionalService></AdditionalService> */}
			{/* Overview component start here */}
			{/* <Overview></Overview> */}
		</div>
	);
};

export default Home;
