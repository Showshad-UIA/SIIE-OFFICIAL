import React from "react";
import facebook from "../images/Facebook_F_icon.svg.png";
import twitter from "../images/twitter-rounded.png";
import youtube from "../images/YouTube-Icon-Full-Color-Logo.wine.svg";
import linkedin from "../images/Linkedin-logo-transparent-PNG.png";
import instagram from "../images/Instagram_logo_2016.svg.png";
const MediasIcon = () => {
	return (
		<div className="p-2 bg-sky-800 ">
			<div className="text-2xl  text-white  sm:grid-cols-1 items-center lg:grid-cols-2">
				Connect with us:
			</div>
			<div class=" p-2 bg-sky-800  justify-center">
				<div class="container ">
					<div>
						<h2 class="text-3xl font-semibold  mb-3 text-gray-700"></h2>

						<div class="flex flex-wrap justify-start gap-2">
							<button class="bg-blue-400 p-2  w-[50px] font-semibold text-white inline-flex items-center space-x-2 rounded">
								<img src={facebook} alt="" />
							</button>
							<button className="bg-sky-500 p-2  w-[50px] font-semibold text-white inline-flex items-center space-x-2 rounded">
								<img src={twitter} alt="" />
							</button>
							<button className="bg-red-500 p-2  w-[50px] font-semibold text-white inline-flex items-center space-x-2 rounded">
								<img src={youtube} alt="" />
							</button>
							<button className="bg-blue-600 p-2  w-[50px] font-semibold text-white inline-flex items-center space-x-2 rounded">
								<img src={linkedin} alt="" />
							</button>
							<button class="bg-blue-400 p-2  w-[50px] font-semibold text-white inline-flex items-center space-x-2 rounded">
								<img src={instagram} alt="" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MediasIcon;
