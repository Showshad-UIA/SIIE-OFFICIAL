import React from "react";
import PhdDetails from "./Postgraduate/PhdDetails";
import ResearchMain from "./ResearchMain";
import ResearchSidebar from "./ResearchSidebar";
import ResearchTrailSidebar from "./ResearchTrailSidebar";

const ResearchTrial = () => {
	return (
		<div className="container">
			{/* <div className=" sm:w-full ">
				<div className="grid text-center  gap-44   md:grid-cols-2 sm:grid-cols-1">
					<div className=" lg:ml-[280px] text-justify m-2 lg:w-full ">
						<div className="flex  mb-5 ">
							<div className="text-3xl font-bold -mt-2">News</div>
							<div>
								<a href="#" className="ml-3 text-blue-500 text-sm ">
									All NEWS
								</a>
							</div>
						</div>
						<div className=" grid lg:grid-cols-3 gap-28 sm:grid-cols-1 ">
							<div className="card lg:w-[280px] bg-base-100 shadow-xl">
								<figure className="px-10 pt-10">
									<img
										src="https://placeimg.com/400/225/arch"
										alt="Shoes"
										className="rounded-xl"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">Shoes!</h2>
									<p>If a dog chews shoes whose shoes does he choose?</p>
									<div className="card-actions">
										<button className="btn btn-primary">Buy Now</button>
									</div>
								</div>
							</div>
							<div className="card lg:w-[280px] bg-base-100 shadow-xl">
								<figure className="px-10 pt-10">
									<img
										src="https://placeimg.com/400/225/arch"
										alt="Shoes"
										className="rounded-xl"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">Shoes!</h2>
									<p>If a dog chews shoes whose shoes does he choose?</p>
									<div className="card-actions">
										<button className="btn btn-primary">Buy Now</button>
									</div>
								</div>
							</div>
							<div className="card bg-base-100 lg:w-[280px] shadow-xl">
								<figure className="px-10 pt-10">
									<img
										src="https://placeimg.com/400/225/arch"
										alt="Shoes"
										className="rounded-xl"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">Shoes!</h2>
									<p>If a dog chews shoes whose shoes does he choose?</p>
									<div className="card-actions">
										<button className="btn btn-primary">Buy Now</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:mx-[175px] lg:ml-[210px] lg:mt-5">
						<ResearchTrailSidebar></ResearchTrailSidebar>
					</div>
				</div>
				
			</div> */}
			<div class="lg:w-[88%] md:w-full lg:mx-56">
            <div className="flex  mb-5 ">
							<div className="text-3xl font-bold -mt-2">News</div>
							<div>
								<a href="#" className="ml-3 text-blue-500 text-sm ">
									All NEWS
								</a>
							</div>
						</div>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    
					<div class="flex justify-center text-xl p-6 ">
                        
						<div className="card bg-base-100 shadow-xl">
							<figure className="px-10 pt-10">
								<img
									src="https://placeimg.com/400/225/arch"
									alt="Shoes"
									className="rounded-xl"
								/>
							</figure>
							<div className="card-body items-center text-center">
								<h2 className="card-title">Shoes!</h2>
								<p>If a dog chews shoes whose shoes does he choose?</p>
								<div className="card-actions">
									<button className="btn btn-primary">Buy Now</button>
								</div>
							</div>
						</div>
					</div>
					<div class="flex justify-center text-xl  p-6 ">
                    <div className="card bg-base-100 shadow-xl">
							<figure className="px-10 pt-10">
								<img
									src="https://placeimg.com/400/225/arch"
									alt="Shoes"
									className="rounded-xl"
								/>
							</figure>
							<div className="card-body items-center text-center">
								<h2 className="card-title">Shoes!</h2>
								<p>If a dog chews shoes whose shoes does he choose?</p>
								<div className="card-actions">
									<button className="btn btn-primary">Buy Now</button>
								</div>
							</div>
						</div>
					</div>
					<div class="flex justify-center text-xl  p-6 ">
                    <div className="card bg-base-100 shadow-xl">
							<figure className="px-10 pt-10">
								<img
									src="https://placeimg.com/400/225/arch"
									alt="Shoes"
									className="rounded-xl"
								/>
							</figure>
							<div className="card-body items-center text-center">
								<h2 className="card-title">Shoes!</h2>
								<p>If a dog chews shoes whose shoes does he choose?</p>
								<div className="card-actions">
									<button className="btn btn-primary">Buy Now</button>
								</div>
							</div>
						</div>
					</div>
					<div class="flex justify-center text-md   p-6 ">
                    <div className="">
				<div className="flex  mb-5 ">
					<div className="text-3xl font-bold">Events</div>
					<div>
						<a href="#" className="ml-3 text-blue-500 text-sm ">
							All EVENTS>
						</a>
					</div>
				</div>
				<div className="flex mt-3 w-4/5 gap-4 ">
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
				<div className="flex mt-3 w-4/5 gap-4">
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
				<div className="flex mt-3 w-4/5 gap-4">
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
	);
};

export default ResearchTrial;
