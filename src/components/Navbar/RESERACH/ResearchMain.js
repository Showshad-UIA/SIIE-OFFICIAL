import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ResearchMain = () => {
	return (
		<div className="lg:mx-auto mt-8">
			<div className="w-50 text-2xl  font-bold cursor-pointer   text-center">
				<button className="bg-sky-700  pr-16 pb-5 pt-5 pl-16">
					<p className=" text-white  ">Overview</p>
				</button>
			</div>
			<div className="grid lg:grid-cols-2 gap-1  sm:grid-cols-1 m-5 lg:mx-24 mb-11">
				<div class=" hover:bg-sky-300  bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="#">
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
								Forms, Policies and Guidelines
								</h2>
							</a>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-300 bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="#">
								{" "}
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
								HDR Workshops
								</h2>
							</a>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-300 bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="#">
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
								Courses
								</h2>
							</a>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-300 bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="#">
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
								Research Scholarships
								</h2>
							</a>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-300 bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="#">
								{" "}
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
								Find supervisor
								</h2>
							</a>
						</div>
					</div>
				</div>

				<div class=" hover:bg-sky-300 bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="#">
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
								Frequent ask questions
								</h2>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResearchMain;
