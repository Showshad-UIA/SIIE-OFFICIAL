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
				<div className="flex justify-between m-5 ">
					<div className="flex items-center">
						<div className="text-2xl font-bold">NEWS</div>
						<div>
							<a href="#" className="ml-3 text-sm text-blue-500">
								ALL NEWS
							</a>
						</div>
					</div>

					<div className="flex items-center ml-[50px]">
						<div className="text-2xl font-bold">EVENT</div>
						<div>
							<a href="#" className="ml-3 text-blue-500 text-sm ">
								All EVENT>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* Events component first column start here */}
			<Event></Event>
			{/* Discover component start here */}
			<Explore></Explore>
			{/* Studying at SIIE start here */}
			<SiieService></SiieService>
			{/* Additional component start here */}
			{/* <AdditionalService></AdditionalService> */}
			{/* Overview component start here */}
			{/* <Overview></Overview> */}
		</div>
	);
};

export default Home;
