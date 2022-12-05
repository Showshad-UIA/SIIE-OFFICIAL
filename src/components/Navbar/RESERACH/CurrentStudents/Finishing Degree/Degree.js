import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Degree = () => {
	return (
		<div className="container mx-auto lg:mb-16 lg:mt-7 ">
			<div className="lg:mx-[100px] shadow lg:pb-5">
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
							<p className="text-black"> Finishing your degree</p>
						</li>
					</ul>
				</div>

				<div>
					<div className="  ">
						<h1 className=" mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
						<h1 className="lg:px-20 px-3 text-xl text-sky-700 font-bold ">
							Submitting a thesis
						</h1>

						<div className="lg:px-20 px-3 text-justify ">
							<p className="border-b-2 pb-5">
								The ultimate milestone for any higher degree research (HDR)
								student is submitting the final thesis. The thesis is a
								significant piece of research and is the culmination of years of
								work, collaboration, and discovery. However, finalising your HDR
								program involves more than submitting your thesis. It is
								important you and your supervisor are both familiar with the
								examination and administrative processes around finishing your
								degree.
							</p>
						</div>
						{/* the main content start here */}
						<article>
							<div className="lg:px-20 px-3 text-justify ">
								<h1 className="text-xl text-sky-700 font-bold mt-3">
									Notification of intent to submit
								</h1>
								<p>
									Prior to your thesis submission, you must complete a
									Notification of Intent to Submit milestone. This milestone
									type is available alongside your other HDR Milestone eForms.
									It is recommended you complete your Nomination of Intent to
									Submit 2-3 months prior to you intended submission date.
									Before submission, make sure you have completed the
									<span className="text-sky-700 hover:underline cursor-pointer">
										{" "}
										Notification of Intent to Submit Student Checklist
									</span>
								</p>
								<p className="mt-2">
									Accompanying the release of the new Notification of Intent to
									Submit Milestone, a series of support videos are available as
									guidance for students and staff. The first video is an
									overview of the process, and the subsequent videos provide
									more detail on the three sections of the eForm workflow
								</p>
								<p className="my-3 text-sky-700 hover:underline cursor-pointer">
									Overview Video
								</p>
								<p className="text-sky-700 hover:underline cursor-pointer border-b-2 pb-5">
									Video A - Notification of Intent to Submit - Candidate and
									Primary Supervisor
								</p>
							</div>

							<div className="lg:px-20 px-3 text-justify ">
								<h1 className="text-xl text-sky-700 font-bold mt-3">
									Thesis submission
								</h1>
								<p>
									The HDR Submission and Examination of Theses Procedure
									provides comprehensive information on many aspects of the
									thesis submission and examination process, including:
								</p>

								<div className="my-3">
									<li>
										{" "}
										The process which you must follow to submit your thesis;
									</li>
									<li>The format your thesis must be submitted in;</li>
									<li>
										Requirements for the different types of these accepted under
										the{" "}
										<span className="text-sky-700 hover:underline cursor-pointer ">
											Research Awards Rules
										</span>
										.
									</li>
								</div>

								<p className="mt-2">
									You can now submit your thesis using the Thesis Submission
									milestone. This milestone type is available alongside your
									other HDR Milestone eForms once your Notification of Intent to
									Submit milestone has been reviewed by your Primary Supervisor.
								</p>
								<p className="mt-2">
									Some academic areas have additional requirements for the
									submission of a thesis. Students should confirm such
									requirements with their supervisor.
								</p>
								<p className="mt-2">
									Some students with research scholarships are also eligible for
									a thesis allowance that contributes to the cost of thesis
									production (such as printing and editing costs). Students
									should look at the conditions of award supplied at the time of
									scholarship offer, or contact their local HDR Administrator
									for more information.
								</p>
								<p className="mt-2">
									Students using professional editing services should
									familiarise themselves with the{" "}
									<span className="text-sky-700 hover:underline cursor-pointer">
										Editing of Theses Guideline
									</span>{" "}
									. A good place to start to find a suitable editor is the{" "}
									<span className="text-sky-700 hover:underline cursor-pointer">
										Canberra Society of Editors
									</span>
									.
								</p>
								<p className="my-3 ">
									A series of support videos are available for guidance for
									students and staff. The following video steps through
									completing the Thesis Submission milestone eform:
								</p>
								<p className="text-sky-700 hover:underline cursor-pointer border-b-2 pb-5">
									Thesis Submission Candidate support video
								</p>
							</div>

							<div className="lg:px-20 px-3 text-justify ">
								<h1 className="text-xl text-sky-700 font-bold mt-3">
									Thesis examination
								</h1>
								<p>
									The thesis examination itself is undertaken by at least two
									nominated expert reviewers with international standing in the
									relevant academic field(s). Students may be invited to suggest
									or comment on the suitability of possible examiners, but must
									not participate in the final decision about the examiners.
								</p>
								<p>
									Examiners are required to recommend one of the following
									outcomes:
								</p>

								<div className="my-3">
									<li>That the student be granted the award;</li>
									<li>
										That the student be granted the award subject to corrections
										or revisions required by the examiners in the thesis to be
										made to the satisfaction of the Delegated Authority in the
										copy intended for deposit with the University Library;
									</li>
									<li>
										that the student be permitted to submit a revised thesis for
										re-examination;
									</li>
									<li>that the student be failed.</li>
									<p>
										Once your thesis has been examined, you will be notified of
										the examiners' recommendations.{" "}
									</p>
									<h1 className="text-xl font-bold text-sky-700 mt-2">
										The Postgraduate Research Experience Questionnaire (PREQ),
										and why you should complete it!
									</h1>
									<p className="border-b-2 pb-5">
										After you submit your thesis you will receive an invitation
										to complete the PREQ. This survey collects information about
										your experience of your HDR program and is used to improve
										HDR programs and activities across ANU. Keep an eye on your
										inbox for your invitation.
									</p>
								</div>
							</div>
							<div className="lg:px-20 px-3 text-justify ">
								<h1 className="text-xl text-sky-700 font-bold mt-3">
									Preparing for post-HDR life
								</h1>
								<p>
									After submission, some HDR students experience 'the submission
									cliff'. After working incredibly hard, it can be hard to know
									what to do with yourself once the thesis is out of your life!
								</p>
								<p>
									Here are some quick resources that can help you prepare for
									your own transition:
								</p>

								<div className="my-3 border-b-2 pb-5">
									<li>
										The ANU Careers Centre offers a{" "}
										<span
											className="
											text-sky-700
											cursor-pointer
											hover:underline"
										>
											range of services
										</span>
										for HDR students transitioning into the workforce;
									</li>
									<li>
										Thesis Whisperer{" "}
										<span className="text-sky-700 cursor-pointer hover:underline">
											blog post
										</span>{" "}
										on how to prepare yourself and how to handle the transition;
									</li>
									<li>
										Check out what{" "}
										<span className="text-sky-700 cursor-pointer hover:underline">
											ANU Alumni
										</span>{" "}
										have been doing after graduation for some inspiration.
									</li>

									<p className=""></p>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Degree;
