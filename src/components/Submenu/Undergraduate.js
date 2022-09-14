import React from "react";
import Carousel from "./Carousel";

const Undergraduate = () => {
	return (
		<>
			<div className="m-5 ">
				<div className="lg:w-4/5 sm:w-4/5 mx-auto text-justify ">
					<h1 className="text-4xl  mx-auto text-justify text-black font-bold">
						How will students use the services provided by SIIE?
					</h1>
					<p className="m-auto w-full text-justify mt-5 mb-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ex
						nesciunt officiis vero aut ullam animi iure repudiandae, cumque
						dicta deleniti laboriosam adipisci a quas ipsam asperiores ipsum
						quod consequatur.Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Enim ex nesciunt officiis vero aut ullam animi iure
						repudiandae, cumque dicta deleniti laboriosam adipisci a quas ipsam
						asperiores ipsum quod consequatur
					</p>
				</div>
			</div>

			<Carousel></Carousel>
			{/* Main content start  here */}
			<div class=" grid lg:grid-cols-2 m-5 sm:grid-cols-1 gap-10">
				<div className="grid ">
					<div class="card bg-gray-200  mb-5">
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
							officiis explicabo cumque, ipsa sed rem consectetur sunt libero
							obcaecati provident maxime atque, eligendi eos reprehenderit
							aliquam error et tempora cum. Lorem ipsum dolor sit, amet
							consectetur adipisicing elit. Beatae officiis explicabo cumque,
							ipsa sed rem consectetur sunt libero obcaecati provident maxime
							atque, eligendi eos reprehenderit aliquam error et tempora cum.
						</p>
					</div>
					<div className="card bg-gray-200">
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
							officiis explicabo cumque, ipsa sed rem consectetur sunt libero
							obcaecati provident maxime atque, eligendi eos reprehenderit
							aliquam error et tempora cum. Lorem ipsum dolor sit, amet
							consectetur adipisicing elit. Beatae officiis explicabo cumque,
						</p>
					</div>
				</div>
				<div>
					<div class="card  bg-base-200 shadow-xl">
						<div class="card-body">
							<div className="bg-red-600">
								<p className="box-shadow">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Pariatur eveniet saepe voluptatem error similique tenetur ad
									voluptates, a quas delectus? Esse labore enim expedita rem,
									veritatis dolore necessitatibus ut placeat?
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Undergraduate;
