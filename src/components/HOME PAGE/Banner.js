import React from "react";

import slider1 from "../../Carosel/Asset/mosque.jpg";
import slider3 from "../../Carosel/Asset/slider.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
	faCircle,
	faCircleDot,
} from "@fortawesome/free-solid-svg-icons";
const Banner = () => {
	return (
		<div>
			<div className="carousel w-full relative h-[430px] ">
				<div
					id="item2"
					className="carousel-item w-full   bg-cover"
					style={{ backgroundImage: `url(${slider1})` }}
				>
					<div className=" text-black w-full my-auto  flex  justify-items-center content-center "></div>
					<div className="flex  my-[400px] py-2 gap-2 px-2">
						<a href="#item1" className="">
							<FontAwesomeIcon
								icon={faCircle}
								className=" text-white hover:text-sky-700"
							></FontAwesomeIcon>
						</a>
						<a href="#item2" className="w-[-100px] ">
							<FontAwesomeIcon
								icon={faCircle}
								className=" text-white hover:text-sky-700"
							></FontAwesomeIcon>
						</a>
					</div>
				</div>
				
				<div
					id="item3"
					className="carousel-item w-full   bg-cover"
					style={{ backgroundImage: `url(${slider3})` }}
				>
					
					<div className=" text-black w-full my-auto  flex  justify-items-center content-center ">
						
					</div>
					<div className="flex  my-[400px] py-2 gap-2 px-2">
						<a href="#item1" className="">
							<FontAwesomeIcon
								icon={faCircle}
								className=" text-white hover:text-sky-700"
							></FontAwesomeIcon>
						</a>
						<a href="#item2" className="w-[-100px] ">
							<FontAwesomeIcon
								icon={faCircle}
								className=" text-white hover:text-sky-700"
							></FontAwesomeIcon>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
