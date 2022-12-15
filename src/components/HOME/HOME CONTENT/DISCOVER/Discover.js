
import React from "react";
import image1 from "../../../../Carosel/Asset/home/generic_education.png";
import image2 from "../../../../Carosel/Asset/home/costing.jpg";
import image3 from "../../../../Carosel/Asset/home/jobs.jpg";
import image4 from "../../../../Carosel/Asset/home/visa.jpg";

const Discover = () => {
	return (
		<>
			<div className="container mx-auto sm:mb-5 -mt-5">
				<div class="lg:mx-28 lg:w-[85%] md:mx-20 sm:w-full md:w-4/5  ">
					<div className="text-2xl font-bold px-3 mb-3">DISCOVER</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-10  lg:grid-cols-4 px-3 ">
						{/* Education system  */}
						<div className="">
							<figure>
								<img
									src={image1}
									alt="image1"
									className="lg:h-[190px] lg:w-[350px] "
								/>
							</figure>
							<div className=" mt-3">
								<a href="/education">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
									Education system in Australia
									</h2>
								</a>
								<p className="text-black text-md ">
								Education in Australia encompasses the sectors of early childhood education 
								</p>
							</div>
						</div>

						{/* Cost of studying */}
						<div className=" ">
							<figure>
								<img
									src={image2}
									alt="image3"
									className="lg:h-[190px] lg:w-[350px]"
								/>
							</figure>
							<div className="mt-3">
								<a href="/cost">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
									Cost of studying in Australia
									</h2>
								</a>
								<p className="text-black text-md">
								Australia is one of the best study destinations for affordable tuition fees
								</p>
							</div>
						</div>

						{/* Job prospects */}
						<div className=" ">
							<figure>
								<img
									src={image3}
									alt="image2"
									className="lg:h-[190px] lg:w-[350px]"
								/>
							</figure>
							<div className="mt-3">
								<a href="/jobs">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
									Job prospects in Australia
									</h2>
								</a>
								<p className="text-black text-md">
								Are your skills in high demand in Australia? Check below to see jobs 
								</p>
							</div>
						</div>

						{/* Post-study work visa  */}
						<div className=" ">
							<figure>
								<img
									src={image4}
									alt="image4"
									className="lg:h-[190px] lg:w-[350px]"
								/>
							</figure>
							<div className="mt-3">
								<a href="/postStudy">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
									Post-study work visa in Australia
									</h2>
								</a>
								<p className="text-black text-md">
								This visa is for international students who have recently graduated 
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
