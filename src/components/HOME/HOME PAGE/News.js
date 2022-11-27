import React from "react";
import explore1 from "../../../Carosel/Asset/finance.jpg";
import explore2 from "../../../Carosel/Asset/finance.png";
import explore3 from "../../../Carosel/Asset/news 3.jpg";

const News = () => {
	return (
		<>
			<div className="container mx-auto sm:mb-5 ">
				<div class="lg:mx-28 lg:w-[85%] md:mx-20 sm:w-full md:w-4/5 px-3 ">
					{/* News, all News  start here  */}
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

					{/* News component start here */}
					<div class="grid grid-cols-1 md:grid-cols-2 gap-10  lg:grid-cols-4 ">
						<div className="">
							<a href="/articleone">
								<figure>
									<img
										src={explore1}
										alt="image1"
										className="lg:h-[190px] lg:w-[350px] "
									/>
								</figure>
							</a>
							<div className=" mt-3">
								<a href="/articleone">
									{" "}
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										What’s next for Islamic banking?
									</h2>
									<p>
										The ethical principles on which Islamic finance is based may
										bring banks{" "}
									</p>
								</a>
								<p className="text-black text-sm ">13 OCT 2022</p>
							</div>
						</div>

						<div className=" ">
							<a href="/articletwo">
								<figure>
									<img
										src={explore2}
										alt="image3"
										className="lg:h-[190px] lg:w-[350px]"
									/>
								</figure>
							</a>
							<div className="mt-3">
								<a href="/articletwo">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Islamic banks — too big to fail ?
									</h2>
									<p>
										Economics aside, size is also important because banking
										revolves around faith .
									</p>
								</a>
								<p className="text-black text-sm">15 OCT 2022</p>
							</div>
						</div>
						<div className=" ">
							<a href="/articlethree">
								<figure>
									<img
										src={explore3}
										alt="image2"
										className="lg:h-[190px] lg:w-[350px]"
									/>
								</figure>
							</a>
							<div className="mt-3">
								<a href="/articlethree">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Funding social expenditure
									</h2>
									<p>
										While the use of risk-sharing instruments for the funding of
										revenue
									</p>
								</a>
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
										16 OCT
									</div>
									<div className=" text-justify ">
										<a href="#">
											<p className="text-blue-500  text-[16px]  hover:text-red-500">
												The knowledge of economics or economic activities and
												processes in terms of Islamic principles and teachings
											</p>
											<h1 className="text-md text-black lg:mt-1 ">
												The concept of Islamic economics
											</h1>
											<p className="text-[12px] text-gray-500">16 OCT 2022</p>
										</a>
									</div>
								</div>
								<div className="flex lg:mt-5 w-full gap-4 mb-8">
									<div className="font-bold p-1 bg-black text-white w-10 h-[50px] text-sm ">
										13 OCT
									</div>
									<div className=" text-justify">
										<a href="#">
											<p className="hover:text-red-500 text-blue-500  text-[16px]  ">
												Hudud punishments range from public lashing to publicly
												stoning to death, amputation of hands and crucifixion.
											</p>

											<p className="text-[12px] text-gray-500">13 OCT 2022</p>
										</a>
									</div>
								</div>
							</div>
						</div>
						{/* Events component end here */}
					</div>
				</div>
			</div>
		</>
	);
};

export default News;
