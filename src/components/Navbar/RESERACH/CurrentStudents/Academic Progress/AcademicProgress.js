import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AcademicProgress = () => {
	return (
		<div className="">
			{/* Main content start here */}
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[100px] shadow mb-5">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-base-100 lg:px-8 px-3 py-3 pb-10  ">
								<div className=" flex text-sky-700 text-md font-bold  lg:px-20 px-3 ">
									<div>
										<a href="/">
											<FontAwesomeIcon
												icon={faHouse}
												className="h-6 w-4 px-1  "
											></FontAwesomeIcon>
										</a>
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-6 w-2 px-1  "
										></FontAwesomeIcon>
									</div>
									<div>
										Graduate Research{" "}
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-4 w-2 px-1  "
										></FontAwesomeIcon>
									</div>
									<div className="px-2">
										<a href="/current">
											<p className="cursor-pointer hover:underline">
												Current Students
											</p>
										</a>
									</div>

									<FontAwesomeIcon
										icon={faChevronRight}
										className="h-6 w-2 px-1  "
									></FontAwesomeIcon>
									<div className="px-2">
										<p className="">Academic progress</p>
									</div>
								</div>

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="lg:px-20 px-3 text-2xl text-sky-700 font-bold ">
										Research Candidate Milestones
									</h1>
									<h1 className="lg:px-20 my-5 text-sky-700 text-xl">
										Milestone eForm via ISIS
									</h1>
									<div className="lg:px-20 px-3 text-justify ">
										<p>
											ANU research candidates are required to meet a number of
											progress milestones including an initial Annual Plan,
											completion of Research Integrity Training, Annual Plan &
											Reports, the Thesis Proposal Review, and the final Oral
											Presentation of your research. These milestones are
											valuable project management tools that can help you and
											your supervisor set research goals, reflect on your
											research activities, and ensure you are on track for
											successful completion of your program.
										</p>
										<p>
											Your College, School or Centre may require additional
											milestones such as a Mid-Year Review or completion of
											ethics requirements, or you may be required to do some
											coursework during your program, but before submitting your
											thesis.
										</p>
										<p>
											All ANU candidates are required to meet satisfactory
											academic progress. This means that they must meet the
											minimum academic performance requirements as established
											by the University and determined by the Delegated
											Authority (DA). What constitutes satisfactory academic
											progress depends on the level of the program or, in some
											circumstances, requirements specific to an individual
											program.
										</p>
										<p>
											Candidates will be notified of other requirements to
											maintain satisfactory progress. All candidates should be
											aware of the Research Awards Rule which govern all
											research programs at ANU.
										</p>
										<p>
											Candidates can log in to ISIS to see which milestones have
											already been completed and upcoming due dates and to
											commence a milestone report. Milestone reports are created
											as eForms, and are designed to be intuitive and easy to
											use. Upon submission, your milestone report will be
											electronically directed to the Chair of your supervisory
											pa
										</p>
									</div>
								</div>
								<div className="lg:mx-20 my-5 ">
									<h1 className="text-xl text-sky-700 font-bold  ">
										Candidate Supervisor Agreement
									</h1>
									<div className=" text-justify ">
										<p className="my-2">
											From August 2020 it is compulsory for all new HDR
											candidates, and existing candidates that are within their
											first 2.5yrs of (full-time equivalent) their PhD program
											or 1.5yrs (full-time equivalent) of their MPhil program to
											complete and upload the Candidate Supervisor Agreement
											form (located in the 'Reference documents' box to the
											right) with their Annual Plan milestone each year.
										</p>
										<p className="my-2">
											This document is a dynamic document that should be
											reviewed and amended as appropriate throughout your
											candidature. It is important that the expectations of both
											the candidate and supervisor are discussed and documented
											via the eForms. The Candidate Supervisor Agreement matrix
											(located in the 'Reference documents' box to the right)
											has been designed to assist with the completion of the
											template as a framework to initiate conversations between
											the Primary Supervisor and the HDR candidate.
										</p>
									</div>
								</div>
								<div className="lg:mx-20 border-t-2">
									<h1 className="text-xl text-sky-700 font-bold my-3">
										Annual Plan
									</h1>
									<div className=" text-justify">
										<p className="my-2">
											Your initial Annual Plan is due 3 months after
											commencement. The Plan should outline what you intend to
											undertake, with sufficient detail to allow the supervisory
											panel and Delegated Authority to assess the
											appropriateness and feasibility of the plan. After your
											first Annual Plan your subsequent annual plans will be
											part of your Annual Report.
										</p>
									</div>
								</div>
								<div className="lg:mx-20 border-t-2">
									<h1 className="text-xl text-sky-700 font-bold my-3">
										Research Integrity Training
									</h1>
									<div className=" text-justify">
										<p className="my-2">
											All ANU HDR candidates are required to complete the online
											Research Integrity Training course. This course consists
											of 10 short modules designed to introduce appropriate
											research conduct, and raise awareness to issues you are
											likely to encounter in the course of your research
											program. You are required to undertake and pass a Research
											Integrity Test as evidence of your understanding of the
											material. HDR candidates must complete the RIT milestone
											before they can submit any subsequent milestone.
										</p>
									</div>
								</div>
								<div className="lg:mx-20 border-t-2 ">
									<h1 className="text-xl text-sky-700 font-bold my-3">
										Thesis Proposal Review
									</h1>
									<p className="text-justify">
										The Thesis Proposal Review (TPR) is a detailed thesis
										proposal, literature review, report on research activities
										since commencement, and plan for the next year. The review
										indicates the subject of your proposed research, the
										methodology to be employed (including proposed fieldwork, if
										applicable), an analysis of relevant literature, and a
										description of how your research will contribute to the
										field of study. The TPR is an excellent opportunity to get
										detailed feedback from your supervisory panel on your
										progress, as well as comprehensive advice on the
										appropriateness and feasibility of your research plans. Your
										College, School or Centre will have more information about
										the format of your TPR.
									</p>
									<p className="text-justify">
										All members of the supervisory panel participate in a TPR,
										and the Chair of the Supervisory panel should include
										comments made during the meeting, and make a recommendation
										on progress in the eForm. The Delegated Authority approves
										and determines the outcome of the milestone.
									</p>
								</div>
								<div className="lg:mx-20 border-t-2 ">
									<h1 className="text-xl text-sky-700 font-bold my-3">
										Annual Plans and Reports
									</h1>
									<p className="text-justify">
										All HDR candidates are required to submit Annual Plans and
										Reports (AR) each year of their candidature. The Report
										helps you to reflect on your research activities during the
										past year, and provides an opportunity for you to flag any
										personal, academic or technical issues which may impact your
										research and its timely completion.
									</p>
									<p className="text-justify">
										All members of the supervisory panel participate in an AR,
										and the Chair of the Supervisory panel should include
										comments made during the meeting, and make a recommendation
										on progress in the eForm, assessing against the previous
										Annual Plan. The Delegated Authority approves and determines
										the outcome of the milestone.
									</p>
								</div>
								<div className="lg:mx-20 border-t-2 ">
									<h1 className="text-xl text-sky-700 font-bold my-3">
										Oral Presentations
									</h1>
									<p className="text-justify">
										The final Oral Presentation of your research (within 12
										months of your expected thesis submission date) is an
										important part of finishing your degree. Again, your
										College, School or Centre will have more information about
										the format of your Oral Presentation, including any other
										oral presentations that are associated with other milestones
										such as your TPR or Mid-Year reviews.
									</p>
									<p className="text-justify">
										The presentation is advertised within the University, and
										all members of the supervisory panel participate and make an
										evaluation. This is documented in a written report which is
										submitted in the eForm, and will be provided to the
										candidate.
									</p>
								</div>
								<div className="lg:mx-20 border-t-2 ">
									<h1 className="text-xl text-sky-700 font-bold my-3">
										Notification of Intent to Submit
									</h1>
									<p className="text-justify">
										2-3 months prior to your intended submission date, you
										should complete a Notification of Intent (NoI) to submit
										your thesis milestone eForm. This eForm also allows you to
										change your thesis details, change your working thesis
										format, and apply for Thesis Access Restrictions. Before
										completing this milestone you must talk to your Primary
										Supervisor and discuss your thesis submission details.
									</p>
								</div>
								<div className="lg:mx-20 border-t-2 ">
									<h1 className="text-xl text-sky-700 font-bold my-3">
										Thesis Submissionmit
									</h1>
									<p className="text-justify">
										After your Notification of Intent to Submit Milestone has
										been reviewed by your Primary Supervisor, you may use the
										Thesis Submission Milestone to submit your thesis for
										examination. For information on submitting your thesis
										please refer to the HDR Submission and Examination of Theses
										Procedure.
									</p>
								</div>
								<div className="lg:mx-20 border-t-2 ">
									<h1 className="text-xl text-sky-700 font-bold my-3">
										Thesis Corrections
									</h1>
									<p className="text-justify">
										You may be asked to make specified corrections to your
										thesis following your examination. If you choose to make
										these corrections to your thesis, a Thesis Corrections
										Milestone will be created for you to complete
									</p>
									<p className="text-justify">
										A detailed thesis proposal, literature review, report on
										research activities during the past 12 months, and plan for
										the next year.
									</p>
									<p className="text-justify">
										The review indicates the subject of the proposed research,
										the methodology to be employed, an analysis of the relevant
										literature on this topic, a description of how the proposed
										research will make an original contribution to the field of
										study and where relevant, outline the fieldwork required or
										undertaken.
									</p>
									<p className="text-justify">
										All members of the supervisory panel participate in a Thesis
										Proposal Review meeting
									</p>
									<p className="text-justify">
										The Chair of the supervisory panel should include comments
										made during the meeting, and make a recommendation on
										progress in the eForm. The Delegated Authority approves and
										determines the outcome of the milestone.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AcademicProgress;
