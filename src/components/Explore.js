import React from "react";
import explore1 from "../Carosel/Asset/explore-2.jpg"
import explore2 from "../Carosel/Asset/explore-2.jpg"
import explore3 from "../Carosel/Asset/explore-3.png"
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
				<div class="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-4  mt-5">
					<div class="flex justify-center text-xl mb-24  pr-5 w-full  ">
						<div className="card shadow-md">
							<figure className="">
								<img
									src={explore1}
									alt="image"
									className=""
								/>
							</figure>

							<div className="">
								<button className=" text-sm  p-2 w-full">
									<a href="/undergraduate"><h1 className="text-left font-bold text-black">Oxford Professor Ketan Patel appointed as Chief Scientist at Cancer Research UK</h1>
									<p className="text-left text-gray-500 py-2">13/10/2022</p></a>
								</button>
							</div>
						</div>
					</div>
					<div class="flex justify-center text-xl mb-24 pr-5 w-full ">
						<div className="card shadow-md">
							<figure className="">
								<img
									src={explore2}
									alt="Shoes"
									className=""
								/>
							</figure>

							<div className="">
								<button className=" p-2 text-sm  w-full">
									<a href="/undergraduate"><h1 className="text-left font-bold text-black">Oxford Professor Ketan Patel appointed as Chief Scientist at Cancer Research UK</h1>
									<p className="text-left text-gray-500 py-2">13/10/2022</p></a>
								</button>
							</div>
						</div>
					</div>
					<div class="flex justify-center text-xl mb-24 pr-5 w-full ">
						<div className="card  shadow-md">
							<figure className="">
								<img
									src={explore3}
									alt="Shoes"
									className=""
								/>
							</figure>

							<div className="">
								<button className=" p-2 text-sm  w-full">
									<a href="/undergraduate"><h1 className="text-left font-bold text-black">Oxford Professor Ketan Patel appointed as Chief Scientist at Cancer Research UK</h1>
									<p className="text-left text-gray-500 py-2">13/10/2022</p></a>
								</button>
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
								<div className="flex -mt-8 lg:w-full gap-4 mb-8 px-3">
									<div className="font-bold  text-white w-10 h-[50px] text-sm bg-black ">
										SEP 09
									</div>
									<div className=" text-justify">
										<a href="#">
											<p className="text-blue-500 font-bold text-sm">
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Voluptate..
											</p>
											<h1 className="text-md">The headline of these content</h1>
											<p className="text-md">09 SEP 2022</p>
										</a>
									</div>
								</div>
								<div className="flex mt-3 w-full gap-4 mb-8 px-3">
									<div className="font-bold  bg-black text-white w-10 h-[50px] text-sm ">
										SEP 10
									</div>
									<div className=" text-justify">
										<a href="#">
											<p className="text-blue-500 font-bold text-sm">
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Voluptate..
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
