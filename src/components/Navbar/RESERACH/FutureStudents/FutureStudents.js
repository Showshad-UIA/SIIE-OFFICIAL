import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CurrentStudentsMain from "../CurrentStudents/CurrentStudentsMain";
import FutureStudentsMain from "./FutureStudentsMain";

const FutureStudents = () => {
	return (
		<div className="">
			{/* Main content start here */}
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[100px] shadow mb-5">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-base-100 lg:px-8 px-3 py-3 pb-10  ">
								<div className=" flex text-sky-700 text-2xl font-bold cursor-pointer lg:px-20 px-3 ">
									<div>
										Graduate Research{" "}
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-6 w-2.5  "
										></FontAwesomeIcon>
									</div>
									<div className="px-2">Future Students</div>
								</div>

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="lg:px-20 px-3 text-xl text-sky-700 font-bold ">
										Future Students
									</h1>
									<p className="lg:px-20 px-3 text-justify ">
										Sydney Islamic Business School (Sydney IBS) offers courses
										programs across all disciplines within Islamic Business. The
										PhD program consists of two components– coursework and
										research. Before completing their research, Sydney IBS PhD
										candidates are required to complete 36 units of credit worth
										of coursework units, usually during their first 18 months of
										study, to assist them in completing their dissertation.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:mt-20 lg:pb-5 px-3">
						<FutureStudentsMain></FutureStudentsMain>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FutureStudents;
