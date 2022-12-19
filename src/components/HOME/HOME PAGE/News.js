import React from "react";

import image1 from "../../../Carosel/Asset/explore 04.jpg";
import image2 from "../../../Carosel/Asset/explore 01.jpg";
import image3 from "../../../Carosel/Asset/funding.jpg";
import { useNavigate } from "react-router-dom";

const News = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="container mx-auto sm:mb-5 ">
				<div class="lg:mx-28 lg:w-[85%] md:mx-20 sm:w-full md:w-4/5 px-3 ">
					{/* News & all News components start here  */}
					<div className="flex  mt-10 mb-3">
						<div className="text-2xl font-bold ">NEWS </div>
						<p className="px-1 text-gray-500">|</p>
						<div>
							<a
								href="#"
								className="ml-[5px] text-[16px]  text-blue-500 font-bold "
							>
								ALL News
							</a>
						</div>
					</div>

					{/* Main content start here */}
					<div class="grid grid-cols-1 md:grid-cols-2 gap-10  lg:grid-cols-4 ">
						<div className="">
							<p onClick={() => navigate("/articleone")}>
								<figure>
									<img
										src={image1}
										alt="image1"
										className="lg:h-[190px] lg:w-[350px] "
									/>
								</figure>
							</p>
							<div className=" mt-3">
								<p onClick={() => navigate("/articleone")}>
									{" "}
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										What’s next for Islamic banking?
									</h2>
									<p>
										The ethical principles on which Islamic finance is based may
										bring banks{" "}
									</p>
								</p>
								<p className="text-black text-sm ">13 OCT 2022</p>
							</div>
						</div>

						<div className=" ">
							<a href="/articletwo">
								<figure>
									<img
										src={image2}
										alt="image2"
										className="lg:h-[190px] lg:w-[350px]"
									/>
								</figure>
							</a>
							<div className="mt-3">
								<p onClick={() => navigate("/articletwo")}>
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Islamic banks — too big to fail ?
									</h2>
									<p>
										Economics aside, size is also important because banking
										revolves around faith .
									</p>
								</p>
								<p className="text-black text-sm">15 OCT 2022</p>
							</div>
						</div>
						<div className=" ">
							<p onClick={() => navigate("/articletwo")}>
								<figure>
									<img
										src={image3}
										alt="image3"
										className="lg:h-[190px] lg:w-[350px]"
									/>
								</figure>
							</p>
							<div className="mt-3">
								<p onClick={() => navigate("/articlethree")}>
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Funding social expenditure
									</h2>
									<p>
										While the use of risk-sharing instruments for the funding of
										revenue
									</p>
								</p>
								<p className="text-black text-sm">17 OCT 2022</p>
							</div>
							{/* News component end here */}
						</div>

						{/* Events component start here */}
						<div class="flex justify-center text-md px-0">
							<div className="">
								<div className="flex  lg:-mt-10 mb-[80px] ">
									<div className="text-2xl font-bold lg:-mt-2 ">EVENTS</div>
									<p className="px-1 text-gray-500 lg:-mt-2">|</p>
									<div className="lg:-mt-2">
										<a
											href="#"
											className="ml-[5px] text-[16px]  text-blue-500 font-bold "
										>
											All Events
										</a>
									</div>
								</div>
								<div className="flex -mt-[65px] lg:w-full gap-3 lg:mb-6 ">
									<div className="font-bold p-1  text-white w-10 h-[50px] text-sm bg-black ">
										1-2 MAR
									</div>
									<div className=" text-justify ">
										<p onClick={() => navigate("#")}>
											<p className="text-blue-500 cursor-pointer hover:underline text-[16px]  ">
												Islamic Finance Symposium 2023
											</p>

											<p className="text-[12px] text-gray-500">
												Tuesday 1 March - Wednesday 2 March 2023
											</p>
										</p>
									</div>
								</div>
								<div className="flex lg:mt-5 w-full gap-4 mb-8">
									<div className="font-bold p-1 bg-black text-white w-10 h-[50px] text-sm ">
										13 OCT
									</div>
									<div className=" text-justify">
										<a
											href="https://humaifc.com/
"
										>
											<p className="hover:underline cursor-pointer text-blue-500  text-[16px]  ">
												Sydney Islamic Business School- Islamic Finance
												Conference 2024
											</p>
											<a></a>

											<p className="text-[12px] text-gray-500">Monday  13 October, 2024</p>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default News;
