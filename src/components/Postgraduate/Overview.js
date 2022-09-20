import React from "react";
import MainContent from "../Submenu/MainContent";
import PgMaincontent from "./PgMaincontent";
import PgRightSideBar from "./PgRightSideBar";

const Overview = () => {
	return (
		<div className=" w-full grid bg-white lg:grid-flow-col gap-4">
			<div class="  col-span-4   text-justify sm:grid-flow-row">
				<div class="rounded-none   card  ">
					<div className=" mb-5 ml-5 mt-5 sm:w-4/5 lg:w-full">
						<div className="mr-11">
							<p className="p-3  text-2xl lg:w-full  sm:text-xl sm:w-4/5  font-bold cursor-pointer hover:text-red-500 bg-sky-800 text-white">
								Faculties
							</p>
						</div>
					</div>
					<div className="m-5 w-4/5">
						<p className="  p-5">
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

					<PgMaincontent></PgMaincontent>
				</div>
			</div>

			<PgRightSideBar></PgRightSideBar>
		</div>
	);
};

export default Overview;
