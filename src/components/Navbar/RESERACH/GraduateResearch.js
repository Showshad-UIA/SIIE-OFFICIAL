import React from "react";
import { ResearchMenuLinks } from "./ResearchMenuLink";
import ResearchDetails from "./ResearchDetails";
import ResearchMain from "./GraduateResearchMain";
import GraduateResearchMain from "./GraduateResearchMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const GraduateResearch = () => {
	return (
		<div className="">
			{/* Main content start here */}
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[100px] shadow mb-5">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-base-100 lg:px-8 px-3 py-3 pb-10  ">
								<h1 className="text-sky-700 text-2xl font-bold lg:px-20 px-3 ">
									Graduate Research Center
								</h1>

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="lg:px-20 px-3 text-xl text-sky-700 font-bold ">About graduate research</h1>
									<p className="lg:px-20 px-3 text-justify ">
										Sydney Islamic Business School (Sydney IBS) offers courses
										programs across all disciplines within Islamic Business. The
										PhD program consists of two components– coursework and
										research. Before completing their research, Sydney IBS PhD
										candidates are required to complete 36 units of credit worth
										of coursework units, usually during their first 18 months of
										study, to assist them in completing their dissertation.
						 <a href=""><span className="px-2 cursor-pointer hover:underline text-sky-700 font-bold">Apply</span> </a>

									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:mt-20 lg:pb-5 px-3">
						<GraduateResearchMain></GraduateResearchMain>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GraduateResearch;
