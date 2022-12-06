import { faAngleRight, faHouse } from "@fortawesome/free-solid-svg-icons";
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
import payment from "../../../../../../src/Policy Files/Fees Payment .docx";
import tuition from "../../../../../../src/Policy Files/Monitoring Tuition Fees .doc";
import studentFees from "../../../../../../src/Policy Files/Incidental Student Fees .doc";
import nonAwardCourse from "../../../../../../src/Policy Files/Non-Award Course Fees .doc";
import refundFees from "../../../../../../src/Policy Files/Refund of Tuition Fees.doc";
import articulation from "../../../../../../src/Policy Files/Courses Articulation Policy.doc";
import experimental from "../../../../../../src/Policy Files/Courses Experiential Learning Policy.doc";
import undergraduate from "../../../../../../src/Policy Files/Courses Undergraduate Policy.doc";
import dissertation from "../../../../../../src/Policy Files/Courses Coursework Dissertation Policy.doc";
import thesis from "../../../../../../src/Policy Files/Courses Research Thesis Policy.doc";
import transition from "../../../../../../src/Policy Files/Courses Transition.doc";
import cUnits from "../../../../../../src/Policy Files/Coursework Units .doc";
import assessment from "../../../../../../src/Policy Files/Assessment Policy.doc";
import assessmentSpecial from "../../../../../../src/Policy Files/Assessment Special .doc";
import progress from "../../../../../../src/Policy Files/Academic Progress Policy.doc";
import academicAssessment from "../../../../../../src/Policy Files/Academic Assessment Policy .doc";
import apeal from "../../../../../../src/Policy Files/Review and apeal.doc";
import lecture from "../../../../../../src/Policy Files/Lecture Capture Policy.doc";
import prize from "../../../../../../src/Policy Files/Prizes Policy.doc";
import award from "../../../../../../src/Policy Files/Establishment and Award of Scholarships Policy.doc";
import complaints from "../../../../../../src/Policy Files/Student Complaint Resolution Policy.doc";
import selt from "../../../../../../src/Policy Files/SELT Policy.doc";
import summerSchool from "../../../../../../src/Policy Files/Summer School Policy.doc";
import researchPreparations from "../../../../../../src/Policy Files/Research Preparation Policy.doc";
import researchTraining from "../../../../../../src/Policy Files/Training Program Scholarships Policy.doc";
import researchPolicy from "../../../../../../src/Policy Files/Courses Research Thesis Policy-2.doc";
import candidates from "../../../../../../src/Policy Files/Examination of Higher Degree .doc";
import graduateResearch from "../../../../../../src/Policy Files/Graduate Research Training Policy.doc";
import doctorates from "../../../../../../src/Policy Files/Higher Doctorates Policy.doc";
import intellectual from "../../../../../../src/Policy Files/Intellectual Property Policy.doc";
import certifications from "../../../../../../src/Policy Files/Courses Award Certification Policy.doc";

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

									{/* Fees and charges part start here */}

									<div className="lg:mx-20 ">
										<a
											href={payment}
											download
											className="text-xl text-sky-700 font-bold mt-5 border-b-2"
										>
											<h2>Fees and charges</h2>
										</a>
										<div className="flex mt-3  gap-2">
											<div>
												<FontAwesomeIcon
													icon={faAngleRight}
													className="h-4 w-4   "
												></FontAwesomeIcon>
											</div>
											<div>
												<a
													href={tuition}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>
														Fees: Payment and refund of tuition fees for
														domestic postgraduate students
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
													href={tuition}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>
														Fees: Setting, amending and monitoring tuition fees
														for domestic postgraduate students
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
													href={studentFees}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>Incidental Student Fees and Charges</p>
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
													href={nonAwardCourse}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>Non-Award Course Fees for Domestic Students</p>
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
													href={refundFees}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>
														Refund of Tuition Fees for International Students
													</p>
												</a>
											</div>
										</div>
									</div>

									{/* Coursework courses part added here */}

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
												<a
													href={articulation}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													Courses - Articulation
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
													href={experimental}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p> Courses - Experiential Learning</p>
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
													href={undergraduate}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>Courses - Undergraduate</p>
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
													href={dissertation}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>Courses - Coursework Dissertation</p>
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
													<p>Courses - Postgraduate coursework</p>
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
													href={thesis}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>Courses - Research Thesis</p>
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
													href={transition}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>
														Courses - Transition Arrangements (Undergraduate)
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
													href={cUnits}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>Coursework Units Policy</p>
												</a>
											</div>
										</div>
									</div>

									{/* assessment part added here */}

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
												<a
													href={assessment}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>Assessment</p>
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
													href={assessmentSpecial}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>Assessment: Special Consideration</p>
												</a>
											</div>
										</div>
									</div>

									{/* Academic performance added here */}

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
												<a
													href={progress}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>
														Academic Progress (other than in courses
														administered by the Graduate Research School)
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
													href={academicAssessment}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>
														Review and Appeal of Academic Decisions Relating to
														Students
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
													href={apeal}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>
														Review and Appeal of Academic Decisions for Courses
														managed by the Graduate Research School
													</p>
												</a>
											</div>
										</div>
									</div>

									{/* Student learning part added here */}

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
												<a
													href={lecture}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>Lecture Capture</p>
												</a>
											</div>
										</div>
									</div>

									{/* Recognising Student Academic Excellence added here */}

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
												<a
													href={prize}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>Prizes</p>
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
													href={award}
													download
													className="text-sky-700 cursor-pointer hover:underline "
												>
													<p>Establishment and Award of Scholarships</p>
												</a>
											</div>
										</div>
									</div>

									{/* Complaints part added here */}

									<div className="lg:mx-20 ">
										<h1 className="text-xl text-sky-700 font-bold mt-5 border-b-2">
											Student Complaint
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
													href={complaints}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													Student Complaint Resolution
												</a>
											</div>
										</div>
									</div>

									{/* Student Conduct and Discipline added here */}

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
												<a
													href=""
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>Statute No. 17: Student Discipline</p>
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
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>Regulations for student conduct and discipline</p>
												</a>
											</div>
										</div>
									</div>

									{/* Student Feedback on Teaching added here */}

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
												<a
													href={selt}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>Student Experience of Learning and Teaching</p>
												</a>
											</div>
										</div>
									</div>

									{/* Teaching Period added here */}

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
												<a
													href=""
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>Structure of the Academic Year</p>
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
													href={summerSchool}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													Summer School
												</a>
											</div>
										</div>
									</div>

									{/* Higher degree by research added here */}

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
												<a
													href={researchPreparations}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>Adequate Research Preparation</p>
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
													href={researchTraining}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>
														Australian Government Research Training Program
														Scholarships
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
													href={researchPolicy}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>Courses: Research Thesis</p>
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
													href={candidates}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>
														Examination of Higher Degree by Research Candidates
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
													href={graduateResearch}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p> Graduate Research Training</p>
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
													href={doctorates}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>Higher Doctorates</p>
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
													href={intellectual}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p> Intellectual Property</p>
												</a>
											</div>
										</div>
									</div>

									{/* Graduations part added here */}

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
												<a
													href=""
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p>Graduations: Academic Dress</p>
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
													href={certifications}
													download
													className="text-sky-700 cursor-pointer hover:underline"
												>
													<p> Certification for Award Courses</p>
												</a>
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
