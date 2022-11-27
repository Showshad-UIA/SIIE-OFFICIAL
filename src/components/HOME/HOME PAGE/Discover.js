import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import image1 from "../../../Carosel/Asset/explore 04.jpg";
import image2 from "../../../Carosel/Asset/explore 01.jpg";
import image3 from "../../../Carosel/Asset/insurance.jpg";
import image4 from "../../../Carosel/Asset/explore 03.jpg";

const Discover = () => {
	return (
		<>
			<div className="container mx-auto sm:mb-5 -mt-5">
				{/* Discover component start here  */}
				<div class="lg:mx-28 lg:w-[85%] md:mx-20 sm:w-full md:w-4/5  ">
					<div className="text-2xl font-bold px-3 mb-3">DISCOVER</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-10  lg:grid-cols-4 px-3 ">
						{/* finance component start here  */}
						<div className="">
							<figure>
								<img
									src={image1}
									alt="image1"
									className="lg:h-[190px] lg:w-[350px] "
								/>
							</figure>
							<div className=" mt-3">
								<a href="#">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Islamic Finance & Banking
									</h2>
								</a>
								<p className="text-black text-md ">
									Islamic finance addresses the issue of financial inclusion
									risk-sharing
								</p>
							</div>
						</div>
						
						{/* Economics component start here  */}
						<div className=" ">
							<figure>
								<img
									src={image2}
									alt="image3"
									className="lg:h-[190px] lg:w-[350px]"
								/>
							</figure>
							<div className="mt-3">
								<a href="#">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Islamic Economics
									</h2>
								</a>
								<p className="text-black text-md">
									The Islamic body of knowledge, has emerged as a new social
								</p>
							</div>
						</div>

						{/* Insurance component start here  */}
						<div className=" ">
							<figure>
								<img
									src={image3}
									alt="image2"
									className="lg:h-[190px] lg:w-[350px]"
								/>
							</figure>
							<div className="mt-3">
								<a href="#">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Islamic Insurance
									</h2>
								</a>
								<p className="text-black text-md">
									Islam forbids transactions in which there is gharar. The
									argument..
								</p>
							</div>
						</div>

						{/* Business Law component start here  */}
						<div className=" ">
							<figure>
								<img
									src={image4}
									alt="image4"
									className="lg:h-[190px] lg:w-[350px]"
								/>
							</figure>
							<div className="mt-3">
								<a href="#">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Islamic Business Law
									</h2>
								</a>
								<p className="text-black text-md">
									Islamic commercial law, as fiqh mua'malāt constitutes
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Discover;
