import {
	faAngleRight,
	faArrowRight,
	faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import rights from "../../../../../../src/Policy Files/Student Rights.doc";
import academics from "../../../../../../src/Policy Files/Academics.doc";
import guidelines from "../../../../../../src/Policy Files/Guidelines .doc";
import admissionCoursework from "../../../../../../src/Policy Files/Admission Coursework.doc";
import courseworkUnits from "../../../../../../src/Policy Files/Coursework Units .doc";
import internationalStudent from "../../../../../../src/Policy Files/International Student.doc";
import enrolment from "../../../../../../src/Policy Files/Student Enrolment .doc";
import ruleWaiver from "../../../../../../src/Policy Files/Rule Waiver.doc";

const Policies = () => {
	return (
		<div className="">
			{/* Main content start here */}
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[100px] shadow mb-5">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-base-100 lg:px-8 px-3 py-3 pb-10  ">
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
								</div>

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-1"></h1>

									<p className="lg:mx-20  text-justify text-xl text-sky-700 font-bold mt-5 border-b-2">
										Student Rights and Responsibilities
									</p>
									<div className="flex lg:mx-20 gap-2 mt-3">
										<div>
											<FontAwesomeIcon
												icon={faAngleRight}
												className="h-4 w-4   "
											></FontAwesomeIcon>
										</div>
										<div>
											<a
												href={rights}
												download
												className="text-sky-700 cursor-pointer hover:underline"
											>
												<p>Student Rights and Responsibilities</p>
											</a>
										</div>
									</div>
									<div className="lg:mx-20 ">
										<h1 className="text-xl text-sky-700 font-bold mt-5 border-b-2">
											Ethical Scholarship
										</h1>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<a
													href={academics}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>Academic Integrity</p>
												</a>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<a
													href={guidelines}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>Guidelines for the Editing of Research Theses</p>
												</a>
											</div>
										</div>
									</div>
									<div className="lg:mx-20 ">
										<h1 className="text-xl text-sky-700 font-bold mt-5 border-b-2">
											Admission and enrolment
										</h1>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<a
													href={admissionCoursework}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>Admission: Coursework</p>
												</a>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<a
													href={courseworkUnits}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>Coursework Units Policy</p>
												</a>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<a
													href={internationalStudent}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													International Student Mobility (Outbound)
												</a>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<a
													href=""
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>
														Institutional Collaborative Student Pathways (ICSP)
													</p>
												</a>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<a
													href={enrolment}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>Student Enrolment policy</p>
												</a>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<a
													href={ruleWaiver}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>Rule Waiver Policy</p>
												</a>
											</div>
										</div>
									</div>
									<div className="lg:mx-20 ">
										<h1 className="text-xl text-sky-700 font-bold mt-5 border-b-2">
											Fees and charges
										</h1>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Fees: Payment and refund of tuition fees for domestic
													postgraduate students
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline ">
													Fees: Setting, amending and monitoring tuition fees
													for domestic postgraduate students
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline ">
													Incidental Student Fees and Charges
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline ">
													Non-Award Course Fees for Domestic Students
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline ">
													Refund of Tuition Fees for International Students
												</p>
											</div>
										</div>
									</div>
									<div className="lg:mx-20 ">
										<h1 className="text-xl text-sky-700 font-bold mt-5 border-b-2">
											Coursework courses
										</h1>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Courses - Articulation
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline ">
													Courses - Experiential Learning
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline ">
													Courses - Undergraduate
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline ">
													Courses - Coursework Dissertation
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline ">
													Courses - Postgraduate coursework
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline ">
													Courses - Research Thesis
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline ">
													Courses - Transition Arrangements (Undergraduate)
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline ">
													Coursework Units Policy
												</p>
											</div>
										</div>
									</div>
									<div className="lg:mx-20 ">
										<h1 className="text-xl text-sky-700 font-bold mt-5 border-b-2">
											Assessment
										</h1>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Assessment
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline ">
													Assessment: Special Consideration
												</p>
											</div>
										</div>
									</div>
									<div className="lg:mx-20 ">
										<h1 className="text-xl text-sky-700 font-bold mt-5 border-b-2">
											Academic performance
										</h1>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Academic Progress (other than in courses administered
													by the Graduate Research School)
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline ">
													Review and Appeal of Academic Decisions Relating to
													Students
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline ">
													Review and Appeal of Academic Decisions for Courses
													managed by the Graduate Research School
												</p>
											</div>
										</div>
									</div>
									<div className="lg:mx-20 ">
										<h1 className="text-xl text-sky-700 font-bold mt-5 border-b-2">
											Student Learning
										</h1>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Lecture Capture
												</p>
											</div>
										</div>
									</div>
									<div className="lg:mx-20 ">
										<h1 className="text-xl text-sky-700 font-bold mt-5 border-b-2">
											Recognising Student Academic Excellence
										</h1>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Prizes
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline ">
													Establishment and Award of Scholarships
												</p>
											</div>
										</div>
									</div>
									<div className="lg:mx-20 ">
										<h1 className="text-xl text-sky-700 font-bold mt-5 border-b-2">
											Complaints
										</h1>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Student Complaint Resolution
												</p>
											</div>
										</div>
									</div>
									<div className="lg:mx-20 ">
										<h1 className="text-xl text-sky-700 font-bold mt-5 border-b-2">
											Student Conduct and Discipline
										</h1>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Statute No. 17: Student Discipline
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Regulations for student conduct and discipline
												</p>
											</div>
										</div>
									</div>
									<div className="lg:mx-20 ">
										<h1 className="text-xl text-sky-700 font-bold mt-5 border-b-2">
											Student Feedback on Teaching
										</h1>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Student Experience of Learning and Teaching
												</p>
											</div>
										</div>
									</div>
									<div className="lg:mx-20 ">
										<h1 className="text-xl text-sky-700 font-bold mt-5 border-b-2">
											Teaching Period
										</h1>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Structure of the Academic Year
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Summer School
												</p>
											</div>
										</div>
									</div>
									<div className="lg:mx-20 ">
										<h1 className="text-xl text-sky-700 font-bold mt-5 border-b-2">
											Higher degree by research
										</h1>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Adequate Research Preparation
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Australian Government Research Training Program
													Scholarships
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Courses: Research Thesis
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Examination of Higher Degree by Research Candidates
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Graduate Research Training
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Higher Doctorates
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Intellectual Property
												</p>
											</div>
										</div>
									</div>
									<div className="lg:mx-20 ">
										<h1 className="text-xl text-sky-700 font-bold mt-5 border-b-2">
											Graduations
										</h1>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Graduations: Academic Dress
												</p>
											</div>
										</div>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<p className="text-sky-700 cursor-pointer hover:underline">
													Certification for Award Courses
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
		</div>
	);
};

export default Policies;
