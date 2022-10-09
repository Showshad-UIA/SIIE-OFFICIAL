import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { data } from "./ImageSlider";
import "../CSS/explore.css";
const Explore = () => {
	return (
		<div className="container">
			<div className="lg:ml-[170px]">
				<div className="text-3xl text-blue-500 font-bold">
					Discover Islamic Business
				</div>
				{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
					<div class=" w-4/5 bg-gray-300   cursor-pointer hover:scale-105 ease-in-out duration-300 ">
						<figure>
							<img
								src="https://placeimg.com/400/225/arch"
								className=""
								alt="Shoes"
							/>
						</figure>
						<div class="">
							<h2 className="hover:text-red-500 mt-2 text-lg font-bold">
								Lorem ipsum dolor sit amet consectetur .
							</h2>
							<a href="#">
								<p className="text-justify ">
									consecteturadipisicing elit. Natus odit tenetur, ullam
									consequuntur aperiam explicabo facere consequuntur aperiam
									explicabo facere
								</p>
							</a>
							<div class="card-actions justify-start">
								
							</div>
						</div>
					</div>
					<div class=" w-4/5 bg-gray-300  cursor-pointer hover:scale-105 ease-in-out duration-300 ">
						<figure>
							<img
								src="https://placeimg.com/400/225/arch"
								alt="Shoes"
								className="w-[500px]"
							/>
						</figure>
						<div class="">
							<h2 className="hover:text-red-500 mt-2 text-lg font-bold">
								Lorem ipsum dolor sit amet consectetur .
							</h2>
							<a href="#">
								<p className="text-justify ">
									consecteturadipisicing elit. Natus odit tenetur, ullam
									consequuntur aperiam explicabo facere consequuntur aperiam
									explicabo facere
								</p>
							</a>
						</div>
					</div>
					<div class=" w-4/5 bg-gray-300 cursor-pointer hover:scale-105 ease-in-out duration-300 ">
						<figure>
							<img
								src="https://placeimg.com/400/225/arch"
								alt="Shoes"
								className=""
							/>
						</figure>
						<div class="">
							<h2 className="hover:text-red-500 mt-2 text-lg font-bold">
								Lorem ipsum dolor sit amet consectetur .
							</h2>
							<a href="#">
								<p className="text-justify ">
									consecteturadipisicing elit. Natus odit tenetur, ullam
									consequuntur aperiam explicabo facere consequuntur aperiam
									explicabo facere
								</p>
							</a>
						</div>
					</div>
					<div class=" w-4/5 bg-gray-300 cursor-pointer hover:scale-105 ease-in-out duration-300 ">
						<figure>
							<img src="https://placeimg.com/400/225/arch" alt="Shoes" />
						</figure>
						<div class="">
							<h2 className="hover:text-red-500 mt-2 text-lg font-bold">
								Lorem ipsum dolor sit amet consectetur .
							</h2>
							<a href="#">
								<p className="text-justify ">
									consecteturadipisicing elit. Natus odit tenetur, ullam
									consequuntur aperiam explicabo facere consequuntur aperiam
									explicabo facere
								</p>
							</a>
						</div>
					</div>
				</div> */}

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md-full gap-2 ">
					<div class="flex justify-center text-xl p-6 bg-gray-100 ">
						<div className="card bg-base-100 shadow-xl cursor-pointer hover:scale-105 ease-in-out duration-300 ">
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
					<div class="flex justify-center text-xl  p-6 bg-gray-100">
						<div className="card bg-base-100 shadow-xl cursor-pointer hover:scale-105 ease-in-out duration-300 ">
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
					<div class="flex justify-center text-xl  p-6 bg-gray-100">
						<div className="card bg-base-100 shadow-xl cursor-pointer hover:scale-105 ease-in-out duration-300 ">
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
					<div class="flex justify-center text-xl  p-6 bg-gray-100">
						<div className="card bg-base-100 shadow-xl cursor-pointer hover:scale-105 ease-in-out duration-300 ">
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
			</div>
		</div>
	);
};

export default Explore;
