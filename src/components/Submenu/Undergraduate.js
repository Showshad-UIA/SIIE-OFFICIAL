import React from "react";
import "../../CSS/explore.css";
import SearchBar from "./SearchBar";
import MainContent from "./MainContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import UgFaq from "./UgFaq";
import Sidebar from "./Sidebar";

const Undergraduate = () => {
	return (
		<div className="mt-7">
			{/* Main content start  here */}

			<div className=" w-full grid bg-white lg:grid-flow-col gap-4">
				<div class="  col-span-4   text-justify sm:grid-flow-row">
					<div class="rounded-none   card  ">
						<div className="bg-white  ">
							<div className="items-center  flex">
								<div>
									<p className="p-3  ml-5 text-4xl  font-bold cursor-pointer hover:text-red-500 bg-sky-800 text-white">
										COME AND JOIN US! OUR UNDERGRADUATE PROGRAM
									</p>
								</div>
								{/* <div>
									<FontAwesomeIcon
										icon={faArrowRight}
										className=" text-gray-300 w-16  mt-[5px] h-[80px]"
									></FontAwesomeIcon>
								</div> */}
							</div>
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

						<SearchBar></SearchBar>
						<MainContent></MainContent>
						<UgFaq></UgFaq>
					</div>
				</div>

				<Sidebar></Sidebar>
			</div>
		</div>
	);
};

export default Undergraduate;
