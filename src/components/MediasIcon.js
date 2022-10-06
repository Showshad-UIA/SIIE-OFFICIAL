import React from "react";
import facebook from "../images/Facebook_F_icon.svg.png";
import twitter from "../images/twitter-rounded.png";
import youtube from "../images/YouTube-Icon-Full-Color-Logo.wine.svg";
import linkedin from "../images/Linkedin-logo-transparent-PNG.png";
import instagram from "../images/Instagram_logo_2016.svg.png";
const MediasIcon = () => {
	return (
		<div className="">
			
			<div class=" bg-blue-500  justify-center ">
				<div class="container ">
					<div>
						

						<div class="flex flex-wrap justify-start ">
							<button class="bg-blue-500 p-2  w-[30px] font-semibold text-white inline-flex items-center space-x-2 rounded">
								<img src={facebook} alt="" className="w-5" />
							</button>
							<button className="bg-blue-500 p-2  w-[30px] font-semibold text-white inline-flex items-center  rounded">
								<img src={twitter} alt="" />
							</button>
							
							<button className="bg-blue-500 p-2  w-[30px] font-semibold text-white inline-flex items-center space-x-2 rounded">
								<img src={linkedin} alt="" />
							</button>
							<button class="bg-blue-500 p-2  w-[30px] font-semibold text-white inline-flex items-center space-x-2 rounded">
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
