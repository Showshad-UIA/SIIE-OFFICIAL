import React from "react";
import Carousel from "./Carousel";
import "../../CSS/explore.css";

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

			<div className=" w-full grid lg:grid-flow-col gap-4">
				<div class="  col-span-4 lg:mt-[-60px]   text-justify sm:grid-flow-row">
					<div class="rounded-none   card  ">
						<div className="bg-white ">
							<a href="#">
								<p className="p-5 text-2xl font-bold cursor-pointer hover:text-red-500">
									Come and see us! Our undergraduate open day is on 16 september
									>
								</p>
							</a>
							<p className="font-xl m-5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Molestias iusto numquam officia enim corporis quisquam accusamus
								corrupti! Natus praesentium veritatis accusamus eius dolorum
								temporibus tempora, mollitia soluta, aliquam modi eum.
							</p>
						</div>
						<div className="m-5 w-4/5">
							<p className="bg-gray-200  p-5">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
								harum praesentium laudantium neque vero ratione tempora quidem
								eos. Eveniet culpa rem ullam blanditiis dolore omnis, autem
								consectetur nobis dicta officiis! Lorem ipsum dolor sit amet
								consectetur, adipisicing elit. Ipsa harum praesentium laudantium
								neque vero ratione tempora quidem eos. Eveniet culpa rem ullam
								blanditiis dolore omnis, autem consectetur nobis dicta officiis!
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
								harum praesentium laudantium neque vero ratione tempora quidem
								eos. Eveniet culpa rem ullam blanditiis dolore omnis, autem
								consectetur nobis dicta officiis! Lorem ipsum dolor sit amet
								consectetur, adipisicing elit. Ipsa harum praesentium laudantium
								neque vero ratione tempora quidem eos. Eveniet culpa rem ullam
								blanditiis dolore omnis, autem consectetur nobis dicta officiis!
							</p>
						</div>
						<div className="m-5 w-4/5">
							<p className="bg-gray-200 p-5">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
								harum praesentium laudantium neque vero ratione tempora quidem
								eos. Eveniet culpa rem ullam blanditiis dolore omnis, autem
								consectetur nobis dicta officiis! Lorem ipsum dolor sit amet
								consectetur, adipisicing elit. Ipsa harum praesentium laudantium
								neque vero ratione tempora quidem eos. Eveniet culpa rem ullam
								blanditiis dolore omnis, autem consectetur nobis dicta officiis!
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
								harum praesentium laudantium neque vero ratione tempora quidem
								eos. Eveniet culpa rem ullam blanditiis dolore omnis, autem
								consectetur nobis dicta officiis! Lorem ipsum dolor sit amet
								consectetur, adipisicing elit. Ipsa harum praesentium laudantium
								neque vero ratione tempora quidem eos. Eveniet culpa rem ullam
								blanditiis dolore omnis, autem consectetur nobis dicta officiis!
							</p>
						</div>
					</div>
				</div>

				<div class="bg-gray-200   col-span-1">
					<p className="p-10 bg-red-700 text-black">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
						eveniet saepe voluptatem error similique tenetur ad voluptates, a
						quas delectus? Esse labore enim expedita rem, veritatis dolore
						necessitatibus 
					</p>
					<div className="mt-5 bg-gray-200 mb-5">
						<p className="p-10 bg-blue-700 text-white">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Undergraduate;
