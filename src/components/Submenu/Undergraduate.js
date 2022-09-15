import React from "react";
import Carousel from "./Carousel";
import "../../CSS/explore.css";
import SearchBar from "./SearchBar";
import MainContent from "./MainContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import UgFaq from "./UgFaq";
import Sidebar from "./Sidebar";

const Undergraduate = () => {
	return (
		<>
			<div className="m-5 bg-white ">
				<div className=" sm:w-4/5  text-justify ">
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

			<div className=" w-full grid bg-white lg:grid-flow-col gap-4">
				<div class="  col-span-4 lg:mt-[-60px]   text-justify sm:grid-flow-row">
					<div class="rounded-none   card  ">
						<div className="bg-white  ">
							<a href="#">
								<div className="items-center  flex">
									<div>
										<p className="p-5 text-4xl  font-bold cursor-pointer hover:text-red-500">
											Come and see us! Our undergraduate open day is on 16
											september
										</p>
									</div>
									<div>
										<FontAwesomeIcon
											icon={faArrowRight}
											className=" text-gray-300 w-16  pt-5 h-16"
										></FontAwesomeIcon>
									</div>
								</div>
							</a>
							<p className="font-xl m-5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
						<SearchBar></SearchBar>
						<MainContent></MainContent>
						<UgFaq></UgFaq>
					</div>
				</div>

				<Sidebar></Sidebar>
			</div>
		</>
	);
};

export default Undergraduate;
