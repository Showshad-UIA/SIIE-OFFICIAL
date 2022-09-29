import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { data } from "./ImageSlider";
import "../CSS/explore.css";
const Explore = () => {
	return (
		<div>
			<div className="mt-5 lg:w-full sm:w-4/5 explore bg-gray-300 py-8">
				<div className="p-5 text-2xl text-blue-500 font-bold">DISCOVER</div>
				<div className="pl-7  gap-3 grid lg:grid-cols-4 sm:grid-cols-1">
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
								{/* <button className=" bg-red-700 w-10 mt-7 h-6"></button> */}
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
				</div>
			</div>
		</div>
	);
};

export default Explore;
