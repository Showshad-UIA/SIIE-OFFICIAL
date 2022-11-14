import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from "../../../Carosel/Asset/PhD.jpg";
import image2 from "../../../Carosel/Asset/Masters.jpg";
import image3 from "../../../Carosel/Asset/Coursework.jpg";
import image4 from "../../../Carosel/Asset/diploma.png";
import React from "react";

const Program = () => {
	return (
		// <>
		// 	<div className="lg:mx-[150px] lg:mt-5 my-5 md:my-5 ">
		// 		<div className="w-50 text-2xl  font-bold cursor-pointer   text-center">
		// 			<button className="bg-sky-700  pr-16 pb-5 pt-5 pl-16">
		// 				<p className=" text-white  "> We Offer</p>
		// 			</button>
		// 		</div>
		// 		<div className="grid lg:grid-cols-2 gap-1  sm:grid-cols-1 m-5 lg:mx-[130px] mb-7">
		// 			<div class=" hover:bg-sky-300  bg-sky-700 p-5">
		// 				<div className="">
		// 					<div className="items-center w-full text-center ">
		// 						<FontAwesomeIcon
		// 							icon={faBookOpen}
		// 							className="text-white"
		// 						></FontAwesomeIcon>
		// 					</div>
		// 					<div className="">
		// 						<a href="/phd">
		// 							<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
		// 							Doctor of Philosophy (PhD)
		// 							</h2>
		// 						</a>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div class=" hover:bg-sky-300 bg-sky-700 p-5">
		// 				<div className="">
		// 					<div className="items-center w-full text-center ">
		// 						<FontAwesomeIcon
		// 							icon={faBookOpen}
		// 							className="text-white"
		// 						></FontAwesomeIcon>
		// 					</div>
		// 					<div className="">
		// 						<a href="/mastersreserach">
		// 							{" "}
		// 							<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
		// 							Master of Philosophy (MPhil)
		// 							</h2>
		// 						</a>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div class=" hover:bg-sky-300 bg-sky-700 p-5">
		// 				<div className="">
		// 					<div className="items-center w-full text-center">
		// 						<FontAwesomeIcon
		// 							icon={faBookOpen}
		// 							className="text-white"
		// 						></FontAwesomeIcon>
		// 					</div>
		// 					<div className="">
		// 						<a href="/masterscoursework">
		// 							<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
		// 								Master (Coursework)
		// 							</h2>
		// 						</a>
		// 					</div>
		// 				</div>
		// 			</div>

		// 			<div class=" hover:bg-sky-300 bg-sky-700 p-5">
		// 				<div className="">
		// 					<div className="items-center w-full text-center ">
		// 						<FontAwesomeIcon
		// 							icon={faBookOpen}
		// 							className="text-white"
		// 						></FontAwesomeIcon>
		// 					</div>
		// 					<div className="">
		// 						<a href="/diploma">
		// 							{" "}
		// 							<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
		// 								Graduate Diploma{" "}
		// 							</h2>
		// 						</a>
		// 					</div>
		// 				</div>
		// 			</div>

		// 		</div>
		// 	</div>
		// </>
		<>
			<div className="container mx-auto   sm:mb-5  ">
				<div class="lg:mx-28 lg:w-[84%] md:mx-20 sm:w-full md:w-4/5  ">
					<div className="text-2xl font-bold px-2">STUDYING AT SYDNEY IBS</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-3  lg:grid-cols-4 px-3 mt-4">
						<div class="flex justify-center text-xl  md:mb-6  w-full ">
							<div className="bg-sky-700 shadow-md">
								<figure className="">
									<img src={image1} alt="image-3" className="lg:h-[200px] " />
								</figure>

								<div className="">
									<a href="/phd" className="">
										<h1 className="text-[18px] text-left text-white hover:text-red-500 md:mt-4 lg:mt-1 px-2 py-5">
											Doctor of Philosophy (PhD)
										</h1>
									</a>
								</div>
							</div>
						</div>
						<div class="flex justify-center text-xl  md:mb-6  w-full ">
							<div className="bg-sky-700 shadow-md">
								<figure className="">
									<img src={image2} alt="image-2" className="lg:h-[200px]" />
								</figure>

								<div className="">
									<a href="/mastersreserach" className="">
										<h1 className="text-[18px] text-left text-white hover:text-red-500 md:mt-4 lg:mt-1 px-2 py-5">
											Master of Philosophy (MPhil)
										</h1>
									</a>
								</div>
							</div>
						</div>
						<div class="flex justify-center text-xl  md:mb-6 sm:mb-3 w-full ">
							<div className="bg-sky-700  ">
								<figure className="">
									<img src={image3} alt="image-3" className="lg:h-[200px] lg:w-[320px] " />
								</figure>

								<div className=" ">
									<a href="/masterscoursework" className="">
										<h1 className="text-[18px] text-left text-white hover:text-red-500 md:mt-4 lg:mt-1 p-5">
											Master (Coursework)
										</h1>
									</a>
								</div>
							</div>
						</div>
						<div class="flex justify-center text-xl  md:mb-6  w-full ">
							<div className="bg-sky-700 shadow-md">
								<figure className="">
									<img src={image4} alt="image-4" className="lg:h-[200px] md:h-[220px]" />
								</figure>

								<div className="md:h-[90px] ">
									<a href="/diploma" className="">
										<h1 className="text-[18px] text-left text-white hover:text-red-500 md:mt-4 lg:mt-1 px-2 py-5">
											Graduate Diploma{" "}
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

export default Program;
