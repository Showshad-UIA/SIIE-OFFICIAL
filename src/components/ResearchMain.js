import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ResearchMain = () => {
	return (
		<>
			<div className="lg:mx-[50px] ">
				<div className="w-50 text-2xl  font-bold cursor-pointer   text-center">
					<button className="bg-sky-700 lg:mt-5 pr-16 pb-5 pt-5 pl-16">
						<p className=" text-white  ">Higher Degree Research Candidates</p>
					</button>
				</div>
				<div className="grid lg:grid-cols-2 gap-1   sm:grid-cols-1 m-5 lg:mx-[400px]">
					<div class=" hover:bg-sky-300 bg-sky-700  ">
						<div className="mt-2 p-5">
							<div className="items-center w-full text-center ">
								<FontAwesomeIcon
									icon={faBookOpen}
									className="text-white "
								></FontAwesomeIcon>
							</div>
							<div className="">
								<a href="#">
									<h2 className=" text-xl font-bold  cursor-pointer hover:text-white  text-white text-center ">
										Forms, Policies and Guidelines
									</h2>
								</a>
							</div>
						</div>
					</div>
					<div class=" hover:bg-sky-300  bg-sky-700  ">
						<div className="mt-2 p-5">
							<div className="items-center w-full text-center ">
								<FontAwesomeIcon
									icon={faBookOpen}
									className="text-white "
								></FontAwesomeIcon>
							</div>
							<div className="">
								<a href="#">
									<h2 className=" text-xl font-bold  cursor-pointer text-white text-center p-2">
										HDR Workshops
									</h2>
								</a>
							</div>
						</div>
					</div>
					<div class=" hover:bg-sky-300 bg-sky-700 ">
						<div className="mt-2 p-5">
							<div className="items-center w-full text-center ">
								<FontAwesomeIcon
									icon={faBookOpen}
									className="text-white "
								></FontAwesomeIcon>
							</div>
							<div className="">
								<a href="#">
									{" "}
									<h2 className=" text-xl font-bold  cursor-pointer text-white text-center p-2">
										Courses
									</h2>
								</a>
							</div>
						</div>
					</div>
					<div class=" hover:bg-sky-300 bg-sky-700 ">
						<div className="mt-2 p-5">
							<div className="items-center w-full text-center ">
								<FontAwesomeIcon
									icon={faBookOpen}
									className="text-white "
								></FontAwesomeIcon>
							</div>
							<div className="">
								<a href="#">
									<h2 className=" text-xl font-bold  cursor-pointer text-white text-center p-2">
										Research Scholarships
									</h2>
								</a>
							</div>
						</div>
					</div>

					<div class=" hover:bg-sky-300 bg-sky-700 ">
						<div className="mt-2 p-5">
							<div className="items-center w-full text-center ">
								<FontAwesomeIcon
									icon={faBookOpen}
									className="text-white "
								></FontAwesomeIcon>
							</div>
							<div className="">
								<a href="#">
									<h2 className=" text-xl font-bold cursor-pointer  text-white text-center ">
										Find supervisor
									</h2>
								</a>
							</div>
						</div>
					</div>
					<div class=" hover:bg-sky-300 bg-sky-700 pb-4 ">
						<div className="mt-2 p-5">
							<div className="items-center w-full text-center">
								<FontAwesomeIcon
									icon={faBookOpen}
									className="text-white "
								></FontAwesomeIcon>
							</div>
							<div className="">
								<a href="#">
									<h2 className=" text-xl font-bold  cursor-pointer text-white text-center ">
										Frequent ask questions
									</h2>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ResearchMain;
