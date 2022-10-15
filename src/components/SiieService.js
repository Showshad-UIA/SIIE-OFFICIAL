import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import image1 from "./../Carosel/Asset/image 8 (2).jpg";
import image2 from "./../images/image-4.png";
import image3 from "./../images/Image 2.jpg";
import image4 from "./../images/Finance.png";

const SiieService = () => {
	return (
		<>
			<div className="container mx-auto lg:-mt-[66px] ">
				<div class="lg:mx-28 lg:w-[85%] md:mx-20 sm:w-full md:w-4/5  ">
					<div className="text-xl font-bold ">DISCOVER</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-2  lg:grid-cols-4  mt-5">
					<div class="flex justify-center text-xl lg:mb-24 md:mb-6 pr-5 w-full ">
							<div className="bg-sky-700 shadow-md">
								<figure className="">
									<img src={image1} alt="Shoes" className="" />
								</figure>

								<div className=" bg-sky-700  lg:h-[60px] md:h-[100px] sm:h-[120px]">
									<a href="/finance" className="">
										<h1 className="text-md text-left text-white md:mt-4 lg:mt-8 px-2">
											Islamic Finance & Banking
										</h1>
										
									</a>
								</div>
							</div>
						</div>
						<div class="flex justify-center text-xl lg:mb-24 md:mb-6 pr-5 w-full ">
							<div className="bg-sky-700 shadow-md">
								<figure className="">
									<img src={image2} alt="Shoes" className="" />
								</figure>

								<div className=" bg-sky-700  lg:h-[60px] md:h-[100px] sm:h-[120px]">
									<a href="/economics" className="">
										<h1 className="text-md text-left text-white md:mt-4 lg:mt-8 px-2">
											Islamic Economics
										</h1>
										
									</a>
								</div>
							</div>
						</div>
						<div class="flex justify-center text-xl lg:mb-24 md:mb-6 sm:mb-3 pr-5 w-full ">
							<div className="bg-sky-700  shadow-md">
								<figure className="">
									<img src={image3} alt="Shoes" className="" />
								</figure>

								<div className=" bg-sky-700  lg:h-[60px] md:h-[100px] ">
									<a href="/insurance" className="">
										<h1 className="text-md text-justify text-white md:mt-4 lg:mt-8 px-2  ">
										Islamic Insurance
										</h1>
										
									</a>
								</div>
							</div>
						</div>
						<div class="flex justify-center text-xl lg:mb-24 md:mb-6 pr-5 w-full ">
							<div className="bg-sky-700 shadow-md">
								<figure className="">
									<img src={image4} alt="Shoes" className="" />
								</figure>

								<div className=" bg-sky-700  lg:h-[60px] md:h-[100px]">
									<a href="#" className="">
										<h1 className="text-md text-justify text-white lg:mt-8 md:mt-4 px-2">
											Islamic Business Law
										</h1>
										
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

export default SiieService;
