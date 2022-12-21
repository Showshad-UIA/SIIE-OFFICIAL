import {
	faArrowUpRightFromSquare,
	faChevronRight,
	faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const HDR_Policy = () => {
	const navigate = useNavigate();
	return (
		<div className="">
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[110px] shadow mb-5">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-gray-100 lg:px-8 px-3 py-3 pb-10  ">
								{/* breadcrumb added */}

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
											<p className="text-black">
												{" "}
												Higher Degree Research Policies
											</p>
										</li>
									</ul>
									{/* breadcrumb ended */}
								</div>

								{/*HDR students Checklist */}

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="lg:px-20 px-3 text-xl text-sky-700 font-bold ">
										Higher Degree Research Policies
									</h1>
									<p className="lg:px-20 px-3 text-justify mb-5 ">
										There are a range of Sydney Islamic business school policies
										that are relevant to all higher degree research candidates.
										You must ensure that you have a clear understanding of how
										these policies apply to your candidature and your
										responsibilities as a research candidate.
									</p>
								</div>

								<div className="lg:mx-20 ">
									<div className="flex gap-1 px-2 ">
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-6 w-2  text-sky-700  "
										></FontAwesomeIcon>

										<p className="text-justify  flex ">
											<a href="/interest">
												<span className="text-sky-700 border-b-2 border-gray-400 border-dotted font-semibold  hover:text-blue-500   ">
													Conflict of Interest Policy
												</span>
											</a>
										
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												className="h-6 w-2.5 text-sky-700  "
											></FontAwesomeIcon>
											- Policy on identifying, declaring and managing conflicts
											of interest.
										</p>
									</div>

									<div className="flex gap-1  px-2">
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-9 w-2  text-sky-700  "
										></FontAwesomeIcon>

										<p className="text-justify mb-2">
											<a href="/doctorate">
												<span className="text-sky-700 border-b-2 border-gray-400 border-dotted font-semibold  hover:text-blue-500  ">
													Doctor of philosophy policy
												</span>
											</a>
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												className="h-6 w-2.5 px-1 text-sky-700  "
											></FontAwesomeIcon>
											- Policy on admission, English language requirements,
											progress reports, requirements of the degree and
											examinations.
										</p>
									</div>
									<div className="flex gap-1  px-2">
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-9 w-2  text-sky-700  "
										></FontAwesomeIcon>

										<p className="text-justify mb-2">
											<a href="">
												<span className="text-sky-700 border-b-2 border-gray-400 border-dotted font-semibold  hover:text-blue-500  ">
													Master of philosophy policy
												</span>
											</a>
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												className="h-6 w-2.5 px-1 text-sky-700  "
											></FontAwesomeIcon>
											- Policy on degrees awarded by two universities.
										</p>
									</div>
									<div className="flex gap-1  px-2">
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-9 w-2  text-sky-700  "
										></FontAwesomeIcon>

										<p className="text-justify mb-2">
											<a href="">
												<span className="text-sky-700 border-b-2 border-gray-400 border-dotted font-semibold  hover:text-blue-500  ">
													Dual Award and Joint Higher Degrees Policy
												</span>
											</a>
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												className="h-6 w-2.5 px-1 text-sky-700  "
											></FontAwesomeIcon>
											- Policy on degrees awarded by two universities.
										</p>
									</div>
									<div className="flex gap-1  px-2">
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-9 w-2  text-sky-700  "
										></FontAwesomeIcon>

										<p className="text-justify mb-2">
											<a href="">
												<span className="text-sky-700 border-b-2 border-gray-400 border-dotted font-semibold  hover:text-blue-500  ">
													Intellectual Property Policy
												</span>
											</a>
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												className="h-6 w-2.5 px-1 text-sky-700  "
											></FontAwesomeIcon>
											- The commitment to an environment in which mutual
											respect, dignity and inclusion prevail.
										</p>
									</div>
									<div className="flex gap-1  px-2">
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-9 w-2  text-sky-700  "
										></FontAwesomeIcon>

										<p className="text-justify mb-2">
											<a href="">
												<span className="text-sky-700 border-b-2 border-gray-400 border-dotted font-semibold  hover:text-blue-500  ">
													Master of Research Policy.
												</span>
											</a>
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												className="h-6 w-2.5 px-1 text-sky-700  "
											></FontAwesomeIcon>
											- Establishes the requirements and procedures for
											undertaking the Master of Research (MRes) degree
										</p>
									</div>
									<div className="flex gap-1  px-2">
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-9 w-2  text-sky-700  "
										></FontAwesomeIcon>

										<p className="text-justify mb-2">
											<a href="">
												<span className="text-sky-700 border-b-2 border-gray-400 border-dotted font-semibold  hover:text-blue-500  ">
													Research Code of Practice
												</span>
											</a>
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												className="h-6 w-2.5 px-1 text-sky-700  "
											></FontAwesomeIcon>
											- Specifically authorship, plagiarism, inculcation of good
											research practice, responsibilities to research
											candidates.
										</p>
									</div>
									<div className="flex gap-1  px-2">
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-9 w-2  text-sky-700  "
										></FontAwesomeIcon>

										<p className="text-justify mb-2">
											<a href="">
												<span className="text-sky-700 border-b-2 border-gray-400 border-dotted font-semibold  hover:text-blue-500  ">
													Research Higher Degree Appeals Procedures
												</span>
											</a>
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												className="h-6 w-2.5 px-1 text-sky-700  "
											></FontAwesomeIcon>
											- Appeal procedures; against allocation of a scholarship
											or examination result, on procedural grounds.
										</p>
									</div>
									<div className="flex gap-1  px-2">
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-9 w-2  text-sky-700  "
										></FontAwesomeIcon>

										<p className="text-justify mb-2">
											<a href="">
												<span className="text-sky-700 border-b-2 border-gray-400 border-dotted font-semibold  hover:text-blue-500  ">
													Research Higher Degree Candidature Essential Resources
													Policy
												</span>
											</a>
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												className="h-6 w-2.5 px-1 text-sky-700  "
											></FontAwesomeIcon>
											- Outlines candidate entitlements and School or Research
											Institute responsibilities in delivering resources.
										</p>
									</div>
									<div className="flex gap-1  px-2">
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-9 w-2  text-sky-700  "
										></FontAwesomeIcon>

										<p className="text-justify mb-2">
											<a href="">
												<span className="text-sky-700 border-b-2 border-gray-400 border-dotted font-semibold  hover:text-blue-500  ">
													Research Higher Degree and Research Training Program
													Scholarship Policy
												</span>
											</a>
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												className="h-6 w-2.5 px-1 text-sky-700  "
											></FontAwesomeIcon>
											- Outlines conditions of award applying to scholarship
											with stipend holders.
										</p>
									</div>

									<div className="flex gap-1  px-2">
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-9 w-2  text-sky-700  "
										></FontAwesomeIcon>

										<p className="text-justify mb-2">
											<a href="">
												<span className="text-sky-700 border-b-2 border-gray-400 border-dotted font-semibold  hover:text-blue-500  ">
													Respect and Inclusion in Learning and Working Policy
												</span>
											</a>
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												className="h-6 w-2.5 px-1 text-sky-700  "
											></FontAwesomeIcon>
											- Commitment to a working and learning environment in
											which mutual respect, dignity and inclusion prevail.
										</p>
									</div>
									<div className="flex gap-1  px-2">
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-9 w-2  text-sky-700  "
										></FontAwesomeIcon>

										<p className="text-justify mb-2">
											<a href="">
												<span className="text-sky-700 border-b-2 border-gray-400 border-dotted font-semibold  hover:text-blue-500  ">
													Student Misconduct Rule
												</span>
											</a>
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												className="h-6 w-2.5 px-1 text-sky-700  "
											></FontAwesomeIcon>
											- Definition, identification, reporting and consequences
											of student misconduct
										</p>
									</div>
									<div className="flex gap-1  px-2">
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-9 w-2  text-sky-700  "
										></FontAwesomeIcon>

										<p className="text-justify mb-2">
											<a href="">
												<span className="text-sky-700 border-b-2 border-gray-400 border-dotted font-semibold  hover:text-blue-500  ">
													Supervision of Research Candidates Policy
												</span>
											</a>
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												className="h-6 w-2.5 px-1 text-sky-700  "
											></FontAwesomeIcon>
											- Roles, responsibilities and eligibility of research
											higher degree supervisors.
										</p>
									</div>
									<div className="flex gap-1  px-2">
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-9 w-2  text-sky-700  "
										></FontAwesomeIcon>

										<p className="text-justify mb-2">
											<a href="">
												<span className="text-sky-700 border-b-2 border-gray-400 border-dotted font-semibold  hover:text-blue-500  ">
													Work Health and Safety Policy
												</span>
											</a>
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												className="h-6 w-2.5 px-1 text-sky-700  "
											></FontAwesomeIcon>
										</p>
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

export default HDR_Policy;
