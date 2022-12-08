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
							<div className=" bg-gray-100 lg:px-8 px-3 py-3 pb-10  ">
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
											<p className="text-black"> Academic progress</p>
										</li>
									</ul>
								</div>
								{/* main content start here */}
								<div>
									<div className="  ">
										<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
										<h1 className="lg:px-20 px-3 text-xl text-sky-700 font-bold">
											Research Candidate Milestones
										</h1>

										<div className="lg:px-20 px-3 text-justify mt-3 ">
											<p>
												Sydney IBS research candidates are required to meet a
												number of progress milestones including an initial
												Annual Plan, completion of Research Integrity Training,
												Annual Plan & Reports, the Thesis Proposal Review, and
												the final Oral Presentation of your research. These
												milestones are valuable project management tools that
												can help you and your supervisor set research goals,
												reflect on your research activities, and ensure you are
												on track for successful completion of your program.
											</p>
											<p>
												Your School or Centre may require additional milestones
												such as a Mid-Year Review or completion of ethics
												requirements, or you may be required to do some
												coursework during your program, but before submitting
												your thesis. All Sydney IBS candidates are required to
												meet satisfactory academic progress. This means that
												they must meet the minimum academic performance
												requirements as established by the University and
												determined by the Delegated Authority (DA). What
												constitutes satisfactory academic progress depends on
												the level of the program or, in some circumstances,
												requirements specific to an individual program.
											</p>
											<p>
												Candidates will be notified of other requirements to
												maintain satisfactory progress. All candidates should be
												aware of the{" "}
												<span className="text-sky-700 cursor-pointer underline">
													Research Awards Rule
												</span>{" "}
												which govern all research programs at Sydney IBS.
												Candidates can log in to{" "}
												<span className="text-sky-700 cursor-pointer underline">
													ISIS
												</span>{" "}
												to see which milestones have already been completed and
												upcoming due dates and to commence a milestone report.
												Milestone reports are created as eForms, and are
												designed to be intuitive and easy to use. Upon
												submission, your milestone report will be electronically
												directed to the Chair of your supervisory pa
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
												candidates, and existing candidates that are within
												their first 2.5yrs of (full-time equivalent) their PhD
												program or 1.5yrs (full-time equivalent) of their MPhil
												program to complete and upload the Candidate Supervisor
												Agreement form (located in the 'Reference documents' box
												to the right) with their Annual Plan milestone each
												year.
											</p>
											<p className="my-2">
												This document is a dynamic document that should be
												reviewed and amended as appropriate throughout your
												candidature. It is important that the expectations of
												both the candidate and supervisor are discussed and
												documented via the eForms. The Candidate Supervisor
												Agreement matrix (located in the 'Reference documents'
												box to the right) has been designed to assist with the
												completion of the template as a framework to initiate
												conversations between the Primary Supervisor and the HDR
												candidate.
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
												undertake, with sufficient detail to allow the
												supervisory panel and Delegated Authority to assess the
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
												All Sydney IBS HDR candidates are required to complete
												the online{" "}
												<span className="text-sky-700 cursor-pointer underline">
													Research Integrity Training
												</span>{" "}
												course. This course consists of 10 short modules
												designed to introduce appropriate research conduct, and
												raise awareness to issues you are likely to encounter in
												the course of your research program. You are required to
												undertake and pass a Research Integrity Test as evidence
												of your understanding of the material. HDR candidates
												must complete the RIT milestone before they can submit
												any subsequent milestone.
											</p>
										</div>
									</div>
									<div className="lg:mx-20 border-t-2 ">
										<h1 className="text-xl text-sky-700 font-bold my-3">
											Thesis Proposal Review
										</h1>
										<p className="text-justify ">
											The Thesis Proposal Review (TPR) is a detailed thesis
											proposal, literature review, report on research activities
											since commencement, and plan for the next year. The review
											indicates the subject of your proposed research, the
											methodology to be employed (including proposed fieldwork,
											if applicable), an analysis of relevant literature, and a
											description of how your research will contribute to the
											field of study. The TPR is an excellent opportunity to get
											detailed feedback from your supervisory panel on your
											progress, as well as comprehensive advice on the
											appropriateness and feasibility of your research plans.
											Your College, School or Centre will have more information
											about the format of your TPR.
										</p>
										<p className="text-justify my-2">
											All members of the supervisory panel participate in a TPR,
											and the Chair of the Supervisory panel should include
											comments made during the meeting, and make a
											recommendation on progress in the eForm. The Delegated
											Authority approves and determines the outcome of the
											milestone.
										</p>
									</div>
									<div className="lg:mx-20 border-t-2 ">
										<h1 className="text-xl text-sky-700 font-bold my-3">
											Annual Plans and Reports
										</h1>
										<p className="text-justify">
											All HDR candidates are required to submit Annual Plans and
											Reports (AR) each year of their candidature. The Report
											helps you to reflect on your research activities during
											the past year, and provides an opportunity for you to flag
											any personal, academic or technical issues which may
											impact your research and its timely completion.
										</p>
										<p className="text-justify my-2">
											All members of the supervisory panel participate in an AR,
											and the Chair of the Supervisory panel should include
											comments made during the meeting, and make a
											recommendation on progress in the eForm, assessing against
											the previous Annual Plan. The Delegated Authority approves
											and determines the outcome of the milestone.
										</p>
									</div>
									<div className="lg:mx-20 border-t-2 ">
										<h1 className="text-xl text-sky-700 font-bold my-3">
											Oral Presentations
										</h1>
										<p className="text-justify">
											The final Oral Presentation of your research (within 12
											months of your expected thesis submission date) is an
											important part of{" "}
											<span className="text-sky-700 cursor-pointer underline">
												finishing your degree
											</span>
											. Again, your College, School or Centre will have more
											information about the format of your Oral Presentation,
											including any other oral presentations that are associated
											with other milestones such as your TPR or Mid-Year
											reviews.
										</p>
										<p className="text-justify my-2">
											The presentation is advertised within the University, and
											all members of the supervisory panel participate and make
											an evaluation. This is documented in a written report
											which is submitted in the eForm, and will be provided to
											the candidate.
										</p>
									</div>
									<div className="lg:mx-20 border-t-2 ">
										<h1 className="text-xl text-sky-700 font-bold my-3">
											Notification of Intent to Submit
										</h1>
										<p className="text-justify my-2">
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
										<p className="text-justify my-2">
											After your Notification of Intent to Submit Milestone has
											been reviewed by your Primary Supervisor, you may use the
											Thesis Submission Milestone to submit your thesis for
											examination. For information on submitting your thesis
											please refer to the{" "}
											<span className="text-sky-700 cursor-pointer underline">
												HDR Submission and Examination of Theses Procedure
											</span>{" "}
											.
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
											research activities during the past 12 months, and plan
											for the next year.
										</p>
										<p className="text-justify">
											The review indicates the subject of the proposed research,
											the methodology to be employed, an analysis of the
											relevant literature on this topic, a description of how
											the proposed research will make an original contribution
											to the field of study and where relevant, outline the
											fieldwork required or undertaken.
										</p>
										<p className="text-justify">
											All members of the supervisory panel participate in a
											Thesis Proposal Review meeting
										</p>
										<p className="text-justify my-3">
											The Chair of the supervisory panel should include comments
											made during the meeting, and make a recommendation on
											progress in the eForm. The Delegated Authority approves
											and determines the outcome of the milestone.
										</p>
									</div>
								</div>

								{/* table start here */}
								<div className="lg:mx-20 overflow-x-auto relative ">
									<table class="  border-collapse border border-black-400 ...">
										<thead className=" text-sky-700 font-bold">
											<tr>
												<th class="border border-black-2 py-4  ">
													Progression Indicator
												</th>
												<th class="border border-black-2 py-4 px-2">
													Commentary
												</th>
												<th class="border border-black-2 py-4 px-1">
													Timeframe (PhD)
												</th>
												<th class="border border-black-2 py-4 px-1">
													Timeframe (MPhil)
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="border border-black-2 px-2">
													Completion of Research Integrity Training (RIT) and
													Test
												</td>
												<td class="border border-black-2 px-2 text-justify">
													<p className="my-2">
														All HDR candidates must successfully complete the
														online RIT course before they can submit any
														subsequent milestones. Candidates will be able to
														add content to, and save later milestones, but will
														not be able to submit these until RIT is
														successfully completed.
													</p>
												</td>
												<td class="border border-black-2 px-2">3 months</td>
												<td class="border border-black-2 px-2">3 months</td>
											</tr>

											<tr>
												<td class="border border-black-2 px-2">
													First Annual Plan (AP)
												</td>
												<td class="border border-black-2 px-2 text-justify">
													<p className="my-2">
														Research plan for at least the coming year. The
														Annual Plan (AP) outlines what the candidate intends
														to undertake, with sufficient detail to allow the
														supervisory panel and Delegated Authority to assess
														the appropriateness and feasibility of the plan. The
														first AP is due three months after commencement, and
														in subsequent years at the same time as the Annual
														Report
													</p>
												</td>
												<td class="border border-black-2 px-2">3 months</td>
												<td class="border border-black-2 px-2">3 months</td>
											</tr>
											<tr>
												<td class="border border-black-2 px-2">
													If required by the DA, completion of Mid-Year Review
													(MTR)
												</td>
												<td class="border border-black-2 px-2 text-justify">
													<p className="my-2">
														All HDR candidates must successfully complete the
														online RIT course before they can submit any
														subsequent milestones. Candidates will be able to
														add content to, and save later milestones, but will
														not be able to submit these until RIT is
														successfully completed.
													</p>
												</td>
												<td class="border border-black-2 px-2">18 months</td>
												<td class="border border-black-2 px-2">18 months</td>
											</tr>
											<tr>
												<td class="border border-black-2 px-2">
													Thesis Proposal Review (TPR)
												</td>
												<td class="border border-black-2 px-2 text-justify">
													<p className="my-2">
														A detailed thesis proposal, literature review,
														report on research activities during the past 12
														months, and plan for the next year.
													</p>
													<p className="my-2">
														The review indicates the subject of the proposed
														research, the methodology to be employed, an
														analysis of the relevant literature on this topic, a
														description of how the proposed research will make
														an original contribution to the field of study and
														where relevant, outline the fieldwork required or
														undertaken.
													</p>

													<p className="my-2">
														All members of the supervisory panel participate in
														a Thesis Proposal Review meeting.
													</p>

													<p className="my-2">
														The Chair of the supervisory panel should include
														comments made during the meeting, and make a
														recommendation on progress in the eForm. The
														Delegated Authority approves and determines the
														outcome of the milestone.
													</p>
												</td>
												<td class="border border-black-2 px-2">9-12 months</td>
												<td class="border border-black-2 px-2">6-9 months</td>
											</tr>
											<tr>
												<td class="border border-black-2 px-2">
													Annual Report and Plan
												</td>
												<td class="border border-black-2 px-2 text-justify">
													<p className="my-2">
														{" "}
														Report of research activities during the past year.
														The Annual Report also provides an opportunity for a
														candidate to flag any personal, academic or
														technical problems which may impact on their
														research and its timely completion.
													</p>

													<p className="my-2">
														The Chair of the supervisory panel comments, and
														makes a recommendation on progress and a candidate
														is given the opportunity to meet and discuss the
														comments. The Delegated Authority approves and
														determines the outcome of the milestone.
													</p>

													<p className="my-2">
														Annual progress is assessed against the previous
														Annual Plan.
													</p>
												</td>
												<td class="border border-black-2 px-2">
													<p>12 months</p>
													<p>24 months</p>
													<p>36 months</p>
												</td>
												<td class="border border-black-2 px-2">-</td>
											</tr>
											<tr>
												<td class="border border-black-2 px-2">
													Completion of Research Integrity Training (RIT) and
													Test
												</td>
												<td class="border border-black-2 px-2 text-justify">
													<p className="my-2">
														All HDR candidates must successfully complete the
														online RIT course before they can submit any
														subsequent milestones. Candidates will be able to
														add content to, and save later milestones, but will
														not be able to submit these until RIT is
														successfully completed.
													</p>
												</td>
												<td class="border border-black-2 px-2">3 months</td>
												<td class="border border-black-2 px-2">3 months</td>
											</tr>
											<tr>
												<td class="border border-black-2 px-2">
													Oral Presentation
												</td>
												<td class="border border-black-2 px-2 text-justify">
													<p className="my-2">
														The Oral Presentation occurs up to 12 months before
														the intended thesis submission date.
													</p>

													<p className="my-2">
														The presentation is advertised within the
														University.
													</p>

													<p className="my-2">
														The presentation includes the major objectives,
														content, results, and conclusions of the work,
														allowing the candidate to demonstrate their work has
														an appropriate research focus, argument, and depth
														and contribution of knowledge.{" "}
													</p>

													<p className="my-2">
														Associated with the presentation, candidates submit
														a 2-5 page summary of the material to their
														supervisory panel.
													</p>

													<p className="my-2">
														The supervisory panel participate and make an
														evaluation. This is documented in a written report.
														A copy of the written report is provided to the
														candidate. The report of the panel is not provided
														to the thesis examiners.
													</p>

													<p className="my-2">
														The preparation of candidates for the oral
														presentation will occur throughout their candidature
														with similar, less formal presentations throughout
														their candidature.
													</p>
												</td>
												<td class="border border-black-2 px-2">
													12 Months before your expected submission date
												</td>
												<td class="border border-black-2 px-2">
													6 Months before your expected submission date
												</td>
											</tr>
											<tr>
												<td class="border border-black-2 px-2">
													Notification of Intent (NoI) to Submit your Thesis
												</td>
												<td class="border border-black-2 px-2 text-justify">
													<p className="my-3">
														This eForm should be used to lodge your Notification
														of Intent to Submit your thesis. In this form, you
														can:
													</p>
													<div className="mx-2">
														{" "}
														<li>
															update your thesis title, abstract and intended
															date of submission
														</li>
														<li>upload a table of contents for your thesis</li>
														<li>apply for a change of thesis format</li>
														<li>
															suggest examiners who you believe should or should
															not examine your thesis, and request that access
															to your thesis is restricted.
														</li>
													</div>
													<p className="my-3">
														Before completing this milestone you must talk to
														your Primary Supervisor and discuss your planned
														thesis submission date, thesis title, abstract,
														thesis format, confidential material and Thesis
														Access Restriction.
													</p>
												</td>
												<td class="border border-black-2 px-2">
													2-3 Months before your expected submission date
												</td>
												<td class="border border-black-2 px-2">
													2-3 Months before your expected submission date
												</td>
											</tr>
											<tr>
												<td class="border border-black-2 px-2">
													Thesis Submission
												</td>
												<td class="border border-black-2 px-2 text-justify">
													<p className="my-3">
														This eForm should be used to submit your thesis for
														examination. In this form, you can:
													</p>
													<div className="mx-2">
														<li>finalise your thesis title and abstract,</li>
														<li>
															enter your personal information as a researcher,
														</li>
														<li>
															declare you have complied with any third-party
															material restrictions on copyright and
															intellectual property, and
														</li>
														<li>upload.</li>
													</div>
													<p className="my-3">
														Before completing this milestone you must talk to
														your Primary Supervisor to ensure everything is
														complete before submitting
													</p>
												</td>
												<td class="border border-black-2 px-2">
													When you are ready to submit
												</td>
												<td class="border border-black-2 px-2">
													When you are ready to submit
												</td>
											</tr>
											<tr>
												<td class="border border-black-2 px-2">
													Thesis Corrections
												</td>
												<td class="border border-black-2 px-2 text-justify">
													<p className="my-3">
														This eForm should be used to re-submit your thesis
														with corrections and revisions as requested by the
														Associate Dean. In this form, you can:
													</p>
													<div className="mx-2">
														<li>Review the Examiner reports and comments,</li>
														<li>review your previous submission,</li>
														<li>update your thesis title and abstract, and</li>
														<li>upload a corrected thesis.</li>
													</div>
													<p className="my-3">
														Before completing this milestone you must ensure
														your Primary Supervisor, someone on your panel or
														another appropriate person has proofread your final
														thesis to ensure everything is complete before
														submitting
													</p>
												</td>
												<td class="border border-black-2 px-2">
													Up to 12 Months after notification of your result
												</td>
												<td class="border border-black-2 px-2">
													Up to 12 Months after notification of your result
												</td>
											</tr>
										</tbody>
									</table>
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
