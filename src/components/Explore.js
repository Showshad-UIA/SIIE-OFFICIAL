import React from "react";
import explore1 from "../Carosel/Asset/explore .jpg";
import explore2 from "../Carosel/Asset/explore4.jpg";
import explore3 from "../Carosel/Asset/explore3.jpg";
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
				<div class="lg:mx-28 lg:w-[85%] md:mx-20 sm:w-full md:w-4/5  ">
					<div className="flex ">
						<div className="text-xl font-bold ">NEWS</div>
						<div>
							<a
								href="#"
								className="ml-[5px] text-sm  text-blue-500 font-bold "
							>
								ALL NEWS
							</a>
						</div>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-4   mt-5">
						<div class="flex justify-center text-xl mb-24  pr-5 w-full  ">
							<div className="shadow-md bg-sky-700">
								<figure className="">
									<img src={explore1} alt="image" className="" />
								</figure>
								<div className=" bg-sky-700  lg:h-[100px] md:h-[112px]">
									<a href="#" className="">
										<h1 className="text-md text-justify text-white lg:mt-2 px-2">
										Mentorship is the influence, guidance, or direction 
										</h1>
										<p className="text-left text-gray-300 text-sm mb-3 px-2 lg:mt-3">13/10/2022</p>
									</a>
								</div>
								
							</div>
						</div>
						<div class="flex justify-center text-xl mb-24 pr-5 w-full ">
							<div className="shadow-md bg-sky-700">
								<figure className="">
									<img src={explore2} alt="Shoes" className="" />
								</figure>

								<div className=" bg-sky-700  lg:h-[115px] md:h-[112px]">
									<a href="#" className="">
										<h1 className="text-md text-justify text-white lg:mt-2 px-2">
											A study group is a small group of people 
										</h1>
										<p className="text-left text-gray-300 text-sm mb-3 px-2 lg:mt-3">14/10/2022</p>
									</a>
								</div>
							</div>
						</div>
						<div class="flex justify-center text-xl mb-24 pr-5 w-full ">
							<div className="bg-sky-700  shadow-md">
								<figure className="">
									<img src={explore3} alt="Shoes" className="" />
								</figure>

								<div className=" bg-sky-700  lg:h-[100px] md:h-[112px] sm:h-[150px]">
									<a href="#" className="">
										<h1 className="text-md  text-justify text-white lg:mt-2 px-2">
										All students who want to apply overseas to study. 
										</h1>
										<p className="text-left text-gray-300 text-sm mb-3 px-2 lg:mt-3">13/10/2022</p>
									</a>
								</div>
							</div>
						</div>
						<div class="flex justify-center text-md pr-5">
							<div className="">
								<div className="flex  lg:-mt-10 mb-16 ">
									<div className="text-xl font-bold ">EVENTS</div>
									<div>
										<a
											href="#"
											className="ml-[5px] text-sm  text-blue-500 font-bold "
										>
											ALL EVENTS
										</a>
									</div>
								</div>
								<div className="flex -mt-12 lg:w-full gap-4 lg:mb-6 px-3">
									<div className="font-bold  text-white w-10 h-[50px] text-sm bg-black ">
										SEP 09
									</div>
									<div className=" text-justify">
										<a href="#">
											<p className="text-blue-500 font-bold text-sm">
												An exceptional education, to carry out world-leading
												research, and to make significant contributions to
												society
											</p>
											<h1 className="text-md">The headline of these content</h1>
											<p className="text-md">09 SEP 2022</p>
										</a>
									</div>
								</div>
								<div className="flex lg:mt-8 w-full gap-4 mb-8 px-3">
									<div className="font-bold  bg-black text-white w-10 h-[50px] text-sm ">
										SEP 10
									</div>
									<div className=" text-justify">
										<a href="#">
											<p className="text-blue-500 font-bold text-sm">
												The English language for many people around the world
												through the dictionaries and other books
											</p>
											<h1 className="text-md">The headline of these content</h1>
											<p className="text-md">10 SEP 2022</p>
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
