import React from "react";
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
		<div className="container mx-auto lg:mb-12">

			<div class="lg:mx-28 md:mx-20  sm:w-full lg:w-[85%]  md:w-4/5">
				<div className="flex -mt-[-40px] ">
					<div className="text-2xl font-bold text-blue-500 ">
					</div>
					<button className="bg-sky-700 my-5  pr-16 pb-5 pt-5 pl-5 w-full text-left">
					<p className=" text-white text-xl  font-bold ">NEWS</p>
				</button>
					<div>
						<a href="#" className="ml-[5px] text-blue-500  text-2xl font-bold ">
							
						</a>
					</div>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 sm:w-full ">
					<div class="flex justify-center text-xl pr-5 w-full ">
						<div className="card bg-base-100 shadow-md">
							<figure className="px-5 pt-10">
								<img
									src="https://placeimg.com/400/225/arch"
									alt="Shoes"
									className=""
								/>
							</figure>
							<div className="mt-5 p-3 text-justify items-center">
 								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Blanditiis perspiciatis nobis aliquam quas dignissimos
									adipisci nam quidem,Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Blanditiis perspiciatis nobis aliquam quas
									dignissimos adipisci nam quidem,
								</p>
							</div>
						</div>
					</div>
					<div class="flex justify-center text-xl  pr-5">
						<div className="card bg-base-100 shadow-xl">
							<figure className="px-10 pt-10">
								<img
									src="https://placeimg.com/400/225/arch"
									alt="Shoes"
									className=""
								/>
							</figure>
							<div className="mt-5 p-3 text-justify items-center">
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Blanditiis perspiciatis nobis aliquam quas dignissimos
									adipisci nam quidem,Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Blanditiis perspiciatis nobis aliquam quas
									dignissimos adipisci nam quidem,
								</p>
							</div>
						</div>
					</div>
					<div class="flex justify-center text-xl  pr-5">
						<div className="card bg-base-100 shadow-xl">
							<figure className="px-10 pt-10">
								<img
									src="https://placeimg.com/400/225/arch"
									alt="Shoes"
									className=""
								/>
							</figure>
							<div className="mt-5 p-3 text-justify items-center">
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Blanditiis perspiciatis nobis aliquam quas dignissimos
									adipisci nam quidem,Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Blanditiis perspiciatis nobis aliquam quas
									dignissimos adipisci nam quidem,
								</p>
							</div>
						</div>
					</div>
					<div class="flex justify-center text-md pr-5 -mt-12">
						<div className="">
							<div className="flex  mb-5 ">
								<div className="-mt-[16px] mb-10">
									<a
										href="#"
										className="ml-3  font-bold text-white text-xl "
									>
										All NEWS
									</a>
								</div>
							</div>
							<div className="flex mt-2 w-4/5 gap-4 mb-8 ">
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
							<div className="flex mt-3 w-4/5 gap-4 mb-8">
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
							<div className="flex mt-3 w-4/5 gap-4 ">
								<div className="font-bold  text-white bg-black text-md w-10 h-[50px]  ">
									SEP 12
								</div>
								<div className=" text-justify">
									<a href="#">
										<p className="text-blue-500 font-bold  text-md">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Voluptate..
										</p>
										<h1 className="text-sm">The headline of these content</h1>
										<p className="text-sm">12 SEP 2022</p>
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
