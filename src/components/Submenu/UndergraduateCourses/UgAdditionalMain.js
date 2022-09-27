import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import UgBankingFinanceCourseplan from "./UgBankingFinanceCourseplan";

const UgAdditionalMain = () => {
	return (
		<div div className="w-4/5 mt-10">
			<div className=" mt-10">
				<div className="flex gap-5 mb-5 ">
					<div>
						<button class="bg-red-500 w-40 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Course outcome
						</button>
					</div>
					<div className="">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
							sed totam, voluptate eveniet obcaecati nisis?
						</p>
					</div>
				</div>
				<div className="flex gap-5 mb-5">
					<div>
						<button class="bg-red-500 w-40 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Job opportunity
						</button>
					</div>
					<div className="mt-5">
						<p className=" text-medium ">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sit,
							blanditiis a officiis facere aliquam
						</p>
					</div>
				</div>
				<div className="flex gap-5 flex-col sm:flex-row">
					<div>
						<a
							href="/plan"
							className=" bg-red-500 w-40 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							Course structure
						</a>
					</div>
					<div>
						<a href="/UG.pdf" download="undergraduate course plan">
							<p>
								<span className="text-xl cursor-pointer hover:text-red-500  text-blue-500">
									Download
								</span>
							</p>
						</a>
					</div>
					{/* <div>
						<a href="/plan">
							<p>
								<span className="text-xl cursor-pointer hover:text-red-500  text-blue-500">
									Click here{" "}
								</span>
								to know about course plan
							</p>
						</a>
					</div> */}
					{/* <div className=" lg:w-full sm:w-96 p-2">
						{" "}
						<UgBankingFinanceCourseplan></UgBankingFinanceCourseplan>
					</div> */}
				</div>
				<div className="flex gap-5 mt-5 flex-col sm:flex-row">
					<div>
						<h1 className=" bg-red-500 w-40 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Entry requirements
						</h1>
					</div>
					<div>
						<a href="#">
							<p>
								<span className="text-xl cursor-pointer hover:text-red-500  text-blue-500">
									Click here{" "}
								</span>
								to know more
							</p>
						</a>
					</div>
				</div>
				<div className="flex gap-5 mt-5 flex-col  mb-5">
					<div>
						<h1 className=" bg-red-500 w-40 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							<button className="text-white">
								<a
									href="#"
									className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
								>
									<div className="">
										<p>Apply now</p>
									</div>
									<div>
										<FontAwesomeIcon
											icon={faSquareCaretRight}
										></FontAwesomeIcon>
									</div>
								</a>
							</button>
						</h1>
					</div>
					{/* <div>
						<a href="/plan">
							<p>
								<span className="text-xl cursor-pointer hover:text-red-500  text-blue-500">
									Click here{" "}
								</span>
								to know about course plan
							</p>
						</a>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default UgAdditionalMain;
