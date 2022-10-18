import React from "react";
import explore1 from "../Carosel/Asset/explore 12.jpg";
import explore2 from "../Carosel/Asset/explore 10.jpg";
import explore3 from "../Carosel/Asset/explore 11.jpg";
const Explore = () => {
	// 		dots: true,
	// 		infinite: false,
	// 		speed: 500,
	// 		slidesToShow: 4,
	// 		slidesToScroll: 4,
	// 		initialSlide: 0,
	// 		responsive: [
	// 			{
	// 				breakpoint: 1024,
	// 				settings: {
	// 					slidesToShow: 3,
	// 					slidesToScroll: 3,
	// 					infinite: true,
	// 					dots: true,
	// 				},
	// 			},
	// 			{
	// 				breakpoint: 600,
	// 				settings: {
	// 					slidesToShow: 2,
	// 					slidesToScroll: 2,
	// 					initialSlide: 2,
	// 				},
	// 			},
	// 			{
	// 				breakpoint: 480,
	// 				settings: {
	// 					slidesToShow: 1,
	// 					slidesToScroll: 1,
	// 				},
	// 			},
	// 		],
	// 	};
	return (
		<>
			<div className="container mx-auto ">
				<div class="lg:mx-28 lg:w-[92%] md:mx-20 sm:w-full md:w-4/5  ">
					<div className="flex px-2">
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
					<div class="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-4  px-3 mt-4">
						<div class="flex items-center text-xl lg:mb-24   w-full  ">
							<div className="shadow-md bg-sky-700">
								<figure className="">
									<img src={explore1} alt="image" className="w-full lg:h-[220px]" />
								</figure>
								<div className=" bg-sky-700  lg:h-auto md:h-auto">
									<a href="#" className="">
										<h1 className="text-[18px]  text-justify text-white lg:mt-1 px-2 hover:text-red-500">
											Islam has strong guidance on being honest and 
											integrity in all walks of life.
										</h1>
										<p className="text-left text-gray-300 text-sm mb-3  px-2 lg:mt-6">
											13 OCT 2022
										</p>
									</a>
								</div>
							</div>
						</div>
						<div class="flex items-center text-xl lg:mb-24  w-full ">
							<div className="shadow-md bg-sky-700">
								<figure className="">
									<img src={explore2} alt="image 2" className="w-full lg:h-[220px] md:h-auto" />
								</figure>

								<div className=" bg-sky-700  lg:h-auto md:h-[112px]">
									<a href="#" className="">
										<h1 className="text-[18px]  text-justify text-white lg:mt-1 px-2 hover:text-red-500">
											Banking in Islam refers to a system of banking that
											complies with Islamic law
										</h1>
										<p className="text-left text-gray-300 text-sm mb-3 px-2 lg:mt-6">
											15 OCT 2022
										</p>
									</a>
								</div>
							</div>
						</div>
						<div class="flex justify-center text-xl lg:mb-24 md:mb-12  w-full ">
							<div className="bg-sky-700  ">
								<figure className="">
									<img src={explore3} alt="image3" className="w-full lg:h-[220px]" />
								</figure>

								<div className=" bg-sky-700  lg:h-auto md:h-auto sm:h-[150px]">
									<a href="#" className="">
										<h1 className="text-[18px] px-2 text-white hover:text-red-500">
											Impact of Islamic insurance
										</h1>
										<p className="text-[16px]  text-justify text-white lg:mt-2 px-2 ">
											Islamic insurance is a term used form of insurance based
											on principles of mutuality
										</p>
										
									</a>
								</div>
							</div>
						</div>
						<div class="flex justify-center text-md px-0">
							<div className="">
								<div className="flex  lg:-mt-12 mb-[80px] ">
									<div className="text-2xl font-bold ">EVENTS</div>
									<p className="px-1 text-gray-500">|</p>
									<div>
										<a
											href="#"
											className="ml-[5px] text-[16px]  text-blue-500 font-bold "
										>
											All Events
										</a>
									</div>
								</div>
								<div className="flex -mt-16 lg:w-full gap-3 lg:mb-6 ">
									<div className="font-bold p-1  text-white w-10 h-[50px] text-sm bg-black ">
									16 OCT
									</div>
									<div className=" text-justify">
										<a href="#">
											<p className="text-blue-500  text-[16px]  hover:text-red-500">
											The knowledge of economics or economic activities and processes in terms of Islamic principles and teachings
											</p>
											<h1 className="text-md text-black lg:mt-3 ">The concept of Islamic economics</h1>
											<p className="text-[12px] text-gray-500 mb-2">16 OCT 2022</p>
										</a>
									</div>
								</div>
								<div className="flex lg:mt-8 w-full gap-4 mb-8">
									<div className="font-bold p-1 bg-black text-white w-10 h-[50px] text-sm ">
									13 OCT
									</div>
									<div className=" text-justify">
										<a href="#">
											<p className="hover:text-red-500 text-blue-500  text-[16px]  ">
											Hudud punishments range from public lashing to publicly stoning to death, amputation of hands and crucifixion.
											</p>
											<h1 className="text-md text-black mt-3">
											Sharia law punishments
											</h1>
											<p className="text-[12px] text-gray-500">13 OCT 2022</p>
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

export default Explore;
