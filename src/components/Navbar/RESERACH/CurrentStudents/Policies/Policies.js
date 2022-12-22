import { faAngleRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Policies = () => {
	return (
		<div className="">
			{/* Main content start here */}
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[100px] shadow mb-5">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-gray-100 lg:px-8 px-3 py-3 pb-10  ">
								{/* Breadcrumb added */}

								<div className="text-md breadcrumbs md:px-6   lg:mx-[55px] ">
									<ul className="text-sky-700 ">
										<li>
											<a href="/">
												<FontAwesomeIcon
													icon={faHouse}
													className="h-6 w-4 px-1  "
												></FontAwesomeIcon>
											</a>
										</li>
										<li>
											<p>Graduate Research</p>
										</li>
										<li>
											<a href="/current"> Current students</a>
										</li>
										<li>
											<p className="text-black">Policies and Procedures</p>
										</li>
									</ul>

									{/* breadcrumb ended */}
								</div>

								{/* All policies doc file added here */}

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-1"></h1>

									{/* Student Rights */}

									<h1 className="lg:mx-20  text-justify text-xl text-sky-700  mt-2">
										Policies and Procedures
									</h1>
									<div className="lg:mx-20 ">
										<h2 className="font-bold my-2">
											Know the name of the document you are looking for?
										</h2>
										<p>
											Following is a master list (in alphabetical order, by
											title) of all policies and procedures. Jump to the
											relevant part of the alphabet by clicking an alphabetical
											character in the fast find index below. Each alphabetic
											grouping of documents is headed with the relevant letter
											of the alphabet, next to which you will find a "view
											summary descriptions" link. If you are not sure you have
											found the right policy, click this link to view the
											summary descriptions. These may help you determine if the
											document is the one you are after.
										</p>
									</div>

									{/* pagination added  */}

									<div className="btn-group gap-4 lg:mx-20 text-sky-700 my-2">
										<p>Index:</p>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-a">A</a>
										</button>
										<button className="cursor-pointer hover:underline ">
											B
										</button>
										<button className="cursor-pointer hover:underline ">
											C
										</button>
										<button className="cursor-pointer hover:underline ">
											D
										</button>
										<button className="cursor-pointer hover:underline ">
											E
										</button>
										<button className="cursor-pointer hover:underline ">
											F
										</button>
										<button className="cursor-pointer hover:underline ">
											G
										</button>
										<button className="cursor-pointer hover:underline ">
											H
										</button>
										<button className="cursor-pointer hover:underline ">
											I
										</button>
										<button className="cursor-pointer hover:underline ">
											J
										</button>
										<button className="cursor-pointer hover:underline ">
											K
										</button>
										<button className="cursor-pointer hover:underline ">
											L
										</button>
										<button className="cursor-pointer hover:underline ">
											M
										</button>
										<button className="cursor-pointer hover:underline ">
											N
										</button>
										<button className="cursor-pointer hover:underline ">
											O
										</button>
										<button className="cursor-pointer hover:underline ">
											P
										</button>
										<button className="cursor-pointer hover:underline ">
											Q
										</button>
										<button className="cursor-pointer hover:underline ">
											R
										</button>
										<button className="cursor-pointer hover:underline ">
											S
										</button>
										<button className="cursor-pointer hover:underline ">
											T
										</button>
										<button className="cursor-pointer hover:underline ">
											W
										</button>
										<button className="cursor-pointer hover:underline ">
											X
										</button>
										<button className="cursor-pointer hover:underline ">
											Y
										</button>
										<button className="cursor-pointer hover:underline ">
											Z
										</button>
									</div>

									{/* Ethical Scholarship */}

									<div className="lg:mx-20 ">
										<div id="group-a">
											<p className="my-2">A (View Summary Descriptions)</p>
											{/* Policy from index - A  */}
											<p className=" text-sky-700  border-y-2 border-gray-300 bg-white">
												Academic Appeals Procedures
											</p>
											<p className=" text-sky-700  mt-2 border-y-2 border-gray-300 ">
												Academic Development Program (ADP) Policy
											</p>
											<p className=" text-sky-700  mt-2  bg-white">
												Academic Development Program (ADP) Procedures
											</p>
											<p className=" text-sky-700  mt-2 border-y-2 border-gray-300 ">
												Academic Governance Policy
											</p>
											<p className=" text-sky-700  mt-2  bg-white">
												Academic Programs Advisers Policy
											</p>
											<p className=" text-sky-700  mt-2 border-y-2 border-gray-300 ">
												Academic Promotions Policy
											</p>
											<p className=" text-sky-700  mt-2  bg-white">
												Academic Records Issuance Policy
											</p>
											<p className=" text-sky-700  mt-2 border-y-2 border-gray-300 ">
												Academic Staff Agreement 2023
											</p>
											<p className=" text-sky-700  mt-2  bg-white">
												Acceptable Use of Digital Services Policy
											</p>
											<p className=" text-sky-700  mt-2 border-y-2 border-gray-300 ">
												Accident, Injury, Incident, Hazard Reporting and
												Investigation Policy
											</p>
											<p className=" text-sky-700  mt-2  bg-white">
												Additional Work Policy
											</p>
											<p className=" text-sky-700  mt-2 border-y-2 border-gray-300 ">
												Admissions and Welfare (International Students Under 18
												Years) Procedures
											</p>
											<p className=" text-sky-700  mt-2  bg-white">
												Admissions Policy
											</p>
											<p className=" text-sky-700  mt-2 border-y-2 border-gray-300 ">
												After Hours Access and Safety Policy
											</p>
											<p className=" text-sky-700  mt-2 border-y-2 border-gray-300 bg-white">
												Alcohol and Drug Control Policy
											</p>
											<p className=" text-sky-700  mt-2 border-y-2 border-gray-300 ">
												Appointment By Invitation Policy
											</p>
											<p className=" text-sky-700  mt-2 border-y-2 border-gray-300 bg-white">
												Articulation Pathways Policy
											</p>
											<p className=" text-sky-700  mt-2 border-y-2 border-gray-300 ">
												Assessment Policy
											</p>
											<p className=" text-sky-700  mt-2 border-y-2 border-gray-300 bg-white">
												Asset Management Policy
											</p>
											<p className=" text-sky-700  mt-2 border-y-2 border-gray-300 ">
												Associate Degree Course Advisory Committee Policy
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Policies;
