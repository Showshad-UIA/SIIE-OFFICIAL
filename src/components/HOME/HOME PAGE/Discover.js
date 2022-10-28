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
			<div className="container mx-auto lg:-mt-[67px]  sm:mb-5  ">
				<div class="lg:mx-28 lg:w-[85%] md:mx-20 sm:w-full md:w-4/5  ">
					<div className="text-2xl font-bold px-2">DISCOVER</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-3  lg:grid-cols-4 px-3 mt-4">
						<div class="flex justify-center text-xl lg:mb-24 md:mb-6  w-full ">
							<div className="bg-sky-700 shadow-md">
								<figure className="">
									<img src={image1} alt="image-3" className="h-[207px]" />
								</figure>

								<div className=" bg-sky-700  h-auto sm:h-[120px]">
									<a href="/finance" className="">
										<h1 className="text-[18px] text-left text-white hover:text-red-500 md:mt-4 lg:mt-1 px-2">
											Islamic Finance & Banking
										</h1>
										<p className="text-justify text-white text-[16px] mt-2 px-2 mb-1  ">
											Islamic finance addresses the issue of financial inclusion
											risk-sharing
										</p>
									</a>
								</div>
							</div>
						</div>
						<div class="flex justify-center text-xl lg:mb-24 md:mb-6  w-full ">
							<div className="bg-sky-700 shadow-md">
								<figure className="">
									<img src={image2} alt="image-2" className="h-[207px]" />
								</figure>

								<div className=" bg-sky-700  lg:h-auto md:h-auto sm:h-[120px]">
									<a href="/finance" className="">
										<h1 className="text-[18px] text-left text-white hover:text-red-500 md:mt-4 lg:mt-1 px-2">
											Islamic Economics
										</h1>
										<p className="text-justify text-white text-[16px] mt-2 px-2 mb-1 ">
											The Islamic body of knowledge, has emerged as a new social
										</p>
									</a>
								</div>
							</div>
						</div>
						<div class="flex justify-center text-xl lg:mb-24 md:mb-6 sm:mb-3 w-full ">
							<div className="bg-sky-700  ">
								<figure className="">
									<img src={image3} alt="image-3" className="h-[210px]" />
								</figure>

								<div className=" bg-sky-700  lg:h-auto md:h-auto sm:h-[120px]">
									<a href="/insurance" className="">
										<h1 className="text-[18px] text-left text-white hover:text-red-500 md:mt-4 lg:mt-1 px-2">
											Islamic Insurance
										</h1>
										<p className="text-justify text-white text-[16px] mt-2 px-2 mb-1 ">
											Islam forbids transactions in which there is gharar. The
											argument..
										</p>
									</a>
								</div>
							</div>
						</div>
						<div class="flex justify-center text-xl lg:mb-24 md:mb-6  w-full ">
							<div className="bg-sky-700 shadow-md">
								<figure className="">
									<img src={image4} alt="image-4" className="h-[210px]" />
								</figure>

								<div className=" bg-sky-700  lg:h-auto md:h-auto sm:h-[120px]">
									<a href="/business" className="">
										<h1 className="text-[18px] text-left text-white hover:text-red-500 md:mt-4 lg:mt-1 px-2">
											Islamic Business Law
										</h1>
										<p className="text-justify text-[16px] mt-2 px-2 mb-1  text-white">
											Islamic commercial law, as fiqh mua'malāt constitutes
										</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Discover;
