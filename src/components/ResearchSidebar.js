import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ResearchSidebar = () => {
	return (
		<div className=" bg-white mb-10">
			<div class="  bg-white ">
				<div className=" bg-gray-200 sm:w-full  ">
					<div className="  ">
						<h1 className="text-medium mb-5 text-start font-bold p-2  pr-5 pt-10 pb-3 border-b-2 border-t-4 border-black    text-blue-500">
							SEE ALSO
						</h1>
					</div>
					<div className="text-medium pl-2 pb-3">
						<div>
							<a
								href="#"
								className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
								</div>
								<div>
									<a href="/phdeconomics">
										<p>Higher Degree Research Policies</p>
									</a>
								</div>
							</a>
						</div>
						<div>
							<a
								href="#"
								className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
								</div>
								<div>
									<a href="/phdfinance">
										<p>Research Integrity and Ethics</p>
									</a>
								</div>
							</a>
						</div>
						<div>
							<a
								href="#"
								className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
								</div>
								<div>
									<a href="/phdinsurance">
										{" "}
										<p>HDR Policies</p>
									</a>
								</div>
							</a>
						</div>
						<div className="mb-10">
							<a
								href="#"
								className="flex gap-5   cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
								</div>
								<div>
									<a href="/phdbusinesslaw">
										<p>HDR Candidate Handbook 2023</p>
									</a>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResearchSidebar;
