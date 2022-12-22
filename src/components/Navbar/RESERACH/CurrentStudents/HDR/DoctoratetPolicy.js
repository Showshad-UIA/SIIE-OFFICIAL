import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DoctoratePolicy = () => {
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
											<a href="/hdr"> Higher Degree Research Policies</a>
										</li>
										<li>
											<p className="text-black">Doctorate Policy</p>
										</li>
									</ul>
									{/* breadcrumb ended */}
								</div>

								{/*HDR students Checklist */}

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="lg:px-20 px-3 text-xl text-sky-700 font-bold text-center ">
										DOCTORATE POLICY
									</h1>
								</div>
								<div className=" lg:px-20 ">
									<div className="container mx-auto  ">
										<div className="grid grid-cols-1 mb-6 lg:grid-cols-1">
											<div className="w-full  py-2 text-justify" id="section-1">
												<div className="text-black border-b-2 border-black">
													<h1 className="font-bold text-xl text-sky-700 mt-3">
														SECTION 1 - PURPOSE AND CONTEXT
													</h1>
													<div id="part A" className="text-justify ">
														<p className="my-2 text-justify">
															(1) Western Sydney University is committed to
															undertaking and developing robust research
															activities, which includes research higher degree
															training and studies. The University fosters
															excellence in the development of future research
															leaders in cutting edge technologies and methods
														</p>
														<p className="mb-2">
															(2) This document establishes University policy
															for the academic governance of the doctoral
															degrees of Doctor of Philosophy, including PhDs
															with named discipline areas. Professional
															Doctorates (including Doctor of Education, Doctor
															of Cultural Research, Doctor of Creative Arts and
															Doctor of Business Administration) and named
															doctorates (including Doctor of Medicine and
															Doctor of Philosophy (Political and Social
															Thought)). It includes the procedures regarding
															the administration and management of candidates
															including admission, matters related to enrolment
															and progression, examination and graduation
														</p>
														<p className="mb-2">
															(3) This policy does not cover doctoral degrees by
															publication or higher doctorates such as the
															Doctor of Letters and Doctor of Science.
														</p>
														<p className="mb-2">
															(4) This policy should be read in conjunction with
															the{" "}
															<span className="text-sky-700 cursor-pointer hover:underline">
																Academic Appeals Procedures
															</span>{" "}
															,{" "}
															<span className="text-sky-700 cursor-pointer hover:underline">
																Conflict of Interest Policy
															</span>{" "}
															,{" "}
															<span className="text-sky-700 cursor-pointer hover:underline">
																{" "}
																Dual Award and Joint Research Higher Degrees
																Policy
															</span>
															,{" "}
															<span className="text-sky-700 cursor-pointer hover:underline">
																Student Misconduct Rule
															</span>
															,{" "}
															<span className="text-sky-700 cursor-pointer hover:underline">
																Research Higher Degree Candidature Essential
																Resources Policy
															</span>
															,{" "}
															<span className="text-sky-700 cursor-pointer hover:underline">
																Research Higher Degree and Research Training
																Program Scholarship Policy
															</span>
															,{" "}
															<span className="text-sky-700 cursor-pointer hover:underline">
																Student Code of Conduct, Supervision of Research
																Candidates Policy
															</span>
															, and the{" "}
															<span className="text-sky-700 cursor-pointer hover:underline">
																Schedule of Higher Degree by Research (HDR)
																Delegations
															</span>{" "}
															.
														</p>
													</div>
												</div>
											</div>

											{/* Section 2 added here */}

											<div
												className="w-full  py-2 text-justify"
												id="section-2  "
											>
												<div className="border-b-2 border-black   text-black ">
													<h1 className="font-bold text-xl text-sky-700">
														SECTION 2 - DEFINITIONS
													</h1>

													<h2 className="py-3 ">
														(5) Definitions for the purpose of this policy are:
													</h2>

													<p className="mb-2">
														(a) A Doctorate - is a research higher degree at
														Level 10 of the Australian Qualifications Framework
														(AQF), of which at least two-thirds of the study
														must be undertaken as independent research and
														includes the PhD and Professional Doctorates and
														named PhDs.
													</p>
													<p className="mb-1">
														(b) A Research Training Scheme candidate is a
														candidate funded under the Commonwealth Research
														Training Scheme that provides eligible higher degree
														research students with an entitlement to a HECS
														exemption for the duration of an accredited higher
														degree research course.
													</p>
													<p className="mb-1">
														(c) The Dean is the Dean of a University School
													</p>
													<p className="mb-1">
														(d) The Director, Research Institute is the Director
														of a University Research Institute. The HDR Director
														is the relevant Director (e.g. Director, HDR or
														Director, Research and HDR) as determined by the
														Dean, or an equivalent role as determined by the
														Director, Research Institute.
													</p>
													<p className="mb-1">
														{" "}
														(e) The School or Institute Research and Higher
														Degrees Committee is the relevant School Research
														and Higher Degrees Committee, or the equivalent
														committee for an Institute as determined by the
														Director, Research Institute in consultation with
														the Deputy Vice-Chancellor and Vice-President,
														Research, Enterprise and International.
													</p>
													<p className="my-2">
														(f) Examinable work - this comprises one or more of
														the following, as specified for a particular degree:
														thesis, exegesis, overarching statement,
														dissertation, portfolio.
													</p>
													<p className="mb-1">
														(g) Specialist Medical Qualification - refers to a
														qualification awarded following completion of a
														specialist medical education and training program
														offered by an organisation whose programs are
														accredited by the Australian Medical Council.
													</p>
													<p className="mb-1">
														(i) Common examples (among many) are:
													</p>

													<div className="lg:px-5 px-2">
														<li>
															Fellowship of the Royal Australasian College of
															Physicians (FRACP)
														</li>
														<li>
															Fellowship of the Royal Australian College of
															General Practitioners (FRACGP)
														</li>
														<li>
															Fellowship of the Royal Australasian College of
															Surgeons (FRACS)
														</li>
														<li>
															Fellowship of the Royal College of Pathologists of
															Australasia (FRCPA)
														</li>
													</div>
													<p className="my-2 pb-2">
														(h) Candidate means a student enrolled in a
														doctorate degree program (also called a higher
														degree by research (HDR)).
													</p>
												</div>
											</div>

											{/* section-3 added here  */}
											<div className="w-full  py-2 text-justify" id="section-3">
												<div className="text-black border-b-2 border-black  ">
													<h1 className="font-bold text-xl text-sky-700">
														SECTION 3 - POLICY STATEMENT
													</h1>

													<div>
														<p className="mb-1">
															(6) A Doctorate is awarded in recognition of
															original, independent and successful research of
															international standard in the relevant discipline.
															A Doctoral candidate should make a substantial
															original contribution to knowledge in the form of
															new knowledge or significant and original
															adaptation, application and interpretation of
															existing knowledge. These outcomes may be based on
															a comprehensive critical review of literature,
															empirical research, creative work or other
															systematic approach embedded in a field or
															discipline, and/or they may be based on advanced
															and sustained critical reflection and analysis of
															professional theory and practice. (From "Framework
															for Best Practice in Doctoral Education in
															Australia" Council of Australian Deans and
															Directors of Graduate Studies March 2005)
														</p>

														<p className="mb-1 pb-3">
															(7) The Research Studies Committee will approve a
															Schedule of Delegations specifying the tasks that
															may be undertaken by an HDR Director on behalf of
															the relevant School or Institute Research and
															Higher Degrees Committee, with reporting to the
															next meeting of that Committee. This Schedule will
															be an Associated Document to this Policy, and will
															also include a list of delegations and
															responsibilities under this Policy that are held
															by the School or Institute Research and Higher
															Degrees Committee, the Research Studies Committee,
															and the Dean or Director, Research Institute.
														</p>
													</div>
												</div>
											</div>

											<div
												className="w-full  py-2 text-justify"
												id="section-4 "
											>
												<div className="border-b-2 border-black ">
													<div className="text-black ">
														<h1 className="font-bold text-xl text-sky-700">
															SECTION 4 - PROCEDURES
														</h1>

														{/* Part A added  */}

														<h2 className="font-bold  text-black my-2 text-lg">
															Part A - Admission
														</h2>
														<h3 className="font-bold  text-black my-2">
															Approval of Admission
														</h3>

														<p>
															(8) An applicant for admission to candidature for
															a doctorate degree must satisfy the requirements
															specified in this Part of the policy. .
														</p>
														<p>
															(9) The relevant Research and Higher Degrees
															Committee endorses successful applications and
															makes a recommendation to the Dean or Director,
															Research Institute for approval or otherwise of
															the applications. Endorsed recommendations are
															considered by the Dean or Director, Research
															Institute who has authority to approve the
															applicant for admission. If an application must be
															assessed for compliance with United Nations
															Security Council and Australia's Autonomous
															Sanctions legislation, the Research Studies
															Committee of Academic Senate will carry out the
															assessment. The Research Studies Committee may
															approve the applicant for admission if it agrees
															that the application complies with the legislation
															and the Dean or Director, Research Institute has
															approved the applicant for admission.
														</p>
														<p>
															(10) The Dean or Director, Research Institute will
															determine whether the candidature is full or
															part-time at the time of admission.
														</p>
														<div>
															<h2 className="text-black font-bold my-2">
																Academic Qualifications of the Applicant
															</h2>
															<h3 className="">
																Applicants for admission to candidature for any
																doctorate degree covered by this policy with the
																exception of a Doctor of Medicine (see Part R)
																shall hold:
															</h3>
															<div className="px-2 lg:px-9">
																<p className="mb-1">
																	(a) A research masters degree; or{" "}
																</p>
																<p className="mb-1">
																	(b) A bachelor degree with honours class 1 or
																	bachelor degree with honours class 2 division
																	1; or{" "}
																</p>
																<p className="mb-1">
																	(c) Qualifications from a university or other
																	tertiary institution deemed by the Dean or
																	Director, Research Institute to be equivalent
																	to the requirements set out above.{" "}
																</p>
															</div>
														</div>
														<p className="my-2">
															(12) In exceptional circumstances a Dean or
															Director, Research Institute may approve the
															admission of an applicant who does not have the
															qualifications specified in clause 11. In such
															cases the Dean or Director, Research Institute
															will consider evidence to be supplied by the
															candidate and verified by the relevant HDR
															Director or equivalent, that shows that the
															applicant has equivalent qualifications based on
															academic and professional attainment and
															demonstration in an appropriate discipline of a
															capacity for the research. Evidence should
															demonstrate the applicant's understanding of and
															skill in the use of a suitable research
															methodology and ability to undertake academic
															writing. The Dean or Director, Research Institute
															may approve admission on the basis of equivalent
															capacity.
														</p>
														<p className="mb-2">
															(13) An applicant may be given entry to a doctoral
															program on the basis of an approved application to
															upgrade from a research masters degree. See:
															Research Masters (Honours) Policy.
														</p>

														<p className="mb-2">
															(14) An applicant who does not meet the admission
															criteria described above may be required to
															successfully undertake a Graduate Certificate in
															Research Studies before entering the Doctorate or
															to complete other nominated University accredited
															units as part of their Doctorate program. These
															units must be satisfactorily completed before
															Confirmation of Candidature. A student who does
															not satisfactorily complete the units within the
															time frame prescribed for Confirmation of
															Candidature will normally not be permitted to
															continue enrolment.
														</p>
													</div>
													<div className="my-2">
														<h2 className="text-black font-bold mb-2">
															Approval of Resources, Thesis Topic and
															Supervisory Panel
														</h2>

														<p className="mb-2">
															(15) The Dean or Director, Research Institute must
															attest that adequate supervision and facilities
															are available before he/she approves admission.
														</p>

														<p className="mb-2">
															(16) The relevant Research and Higher Degrees
															Committee shall endorse the thesis topic and a
															supervisory panel. The supervisory panel will
															normally comprise a Principal Supervisor and at
															least one other member. Panels will be appointed
															in accordance with the Supervision of Research
															Candidates Policy. The Dean or Director, Research
															Institute has the authority to approve changes of
															Principal Supervisor.
														</p>
													</div>
													<div>
														<h2 className="text-black font-bold mb-2">
															English Language Requirements
														</h2>
														<p className="mb-2">
															(17) Where an applicant has completed all previous
															studies in a language other than English, the
															University requires the applicant to demonstrate a
															satisfactory command of the English language.
															Completion of a tertiary level qualification
															(Certificate IV or above), where the language of
															instruction was English, meets this requirement.
														</p>
														<p className="mb-2">
															(18) Applicants can also demonstrate English
															proficiency by achieving a prescribed level in an
															approved English examination. The approved English
															language proficiency tests and standards required
															are:
														</p>
														<div className="px-2 lg:px-9">
															<p className="my-1">
																(a) International English Language Testing
																System (IELTS) - 6.5 overall score with a
																minimum 6.0 in each subtest;{" "}
															</p>
															<p className="mb-1">
																(b) Test of English as a Foreign Language
																(TOEFL) - 575 (minimum 4.5 in TWE);
															</p>
															<p className="mb-1">
																(c) TOEFL computer based test - 232 (minimum 4.5
																in Essay Writing);
															</p>
															<p className="mb-1">
																(d) TOEFL Internet based test - 89 (writing = 21
																and all subtests = 18);
															</p>
															<p className="mb-1">
																(e) Cambridge Certificate in Advanced English -
																(CAE) - A grade of B or above; or
															</p>
															<p className="mb-1">
																(f) Cambridge Certificate of Proficiency in
																English - A grade of B or above.
															</p>
														</div>
													</div>
													<p className="mt-2">
														(19) If applicable, candidates must also meet
														Department of Home Affairs requirements for English
														language ability for the issue of student visas,
														according to country of origin.
													</p>
													<p className="my-2">
														(20) English language proficiency tests must be no
														more than two years old at the time of commencement
														of study at the University.
													</p>

													{/* Part B added here */}

													<div className="text-black ">
														<h1 className="font-bold text-lg text-black">
															Part B - Candidature
														</h1>
														<h2 className="font-bold text-black  my-2">
															Conditions of Enrolment
														</h2>
														<p className="my-2">
															{" "}
															(21) A candidate is expected to establish and
															maintain enrolment at the University by completing
															the requirements for initial enrolment and annual
															re-enrolment.
														</p>

														<p className="mb-2">
															(22) Candidates must submit a Commencement of
															Candidature form within three months of first
															enrolment. Alternatively, the Principal Supervisor
															must advise the Graduate Research School of the
															commencement date of the candidate within that
															time frame. If the Graduate Research School is not
															advised of a commencement date via one of these
															methods within the three months, the candidate
															will be required to either defer or have their
															enrolment terminated.
														</p>

														<p className="mb-2">
															(23) Except when the candidate is on approved
															leave, failure to re-enrol will lead to the
															candidate being deemed to have abandoned the
															course.
														</p>

														<p className="mb-2">
															(24) Candidates must abide by the University's
															policies and procedures. Candidates are
															responsible for ensuring that the Office of
															Student and University Planning is advised of any
															changes to their personal and contact details
															during the period of their enrolment and
															examination.
														</p>
														<p className="mb-2">
															(25) Candidates must access their University
															student email account. See the University Student
															Code of Conduct.
														</p>

														<p className="mb-2">
															(26) Candidates are required to make themselves
															available for regular consultation with members of
															their supervisory panel.
														</p>

														<p className="mb-2">
															(27) Commencing candidates must undertake
															orientation programs as directed by the Research
															Studies Committee.
														</p>

														<p className="mb-2">
															(28) Candidates enrolled in a Professional
															Doctorate (including Doctor of Education, Doctor
															of Cultural Research, Doctor of Creative Arts and
															Doctor of Business Administration), the Doctor of
															Medicine and the Doctor of Philosophy (Political
															and Social Thought) must read the additional
															course documents attached as guidelines to this
															document.
														</p>
													</div>
													<div className="text-black ">
														<h2 className=" text-black font-bold my-2">
															Full or Part-time Mode and Time Commitment
														</h2>
														<p className="my-2">
															(29) International on-shore candidates cannot
															enrol part-time.
														</p>

														<p className="mb-2">
															(30) Scholarship recipients must usually enrol
															full-time unless otherwise specified in the
															Scholarship Conditions of Award.
														</p>

														<p className="mb-2">
															(31) A candidate may change their mode of
															candidature from full-time to part-time or
															part-time to full-time on approval of the HDR
															Director.
														</p>

														<p className="mb-2">
															(32) A full-time candidate should expect to spend
															approximately 35 hours a week throughout the year
															on the program of research and advanced study and
															to attend the University for consultation as
															required by the Principal Supervisor.
														</p>

														<p className="mb-2">
															(33) A part-time candidate should expect to spend
															approximately 20 hours a week throughout the year
															on the program of research and advanced study and
															to attend the University for consultation as
															required by the Principal Supervisor.
														</p>
													</div>
													<div className="text-black ">
														<h2 className="font-bold text-black  my-2">
															Period of Candidature
														</h2>
														<p className="my-2">
															(34) The minimum period of candidature is three
															years full-time, or the part-time equivalent.
														</p>

														<p className="mb-2">
															(35) The maximum period of candidature is four
															years full-time, or the part-time equivalent.
														</p>
													</div>

													<div className="text-black ">
														<h2 className="font-bold text-black  my-2">
															Extension of Candidature
														</h2>
														<p className="my-2">
															(36) It is the responsibility of the candidate and
															supervisory panel to ensure timely completion, and
															extensions are only considered in exceptional
															circumstances.
														</p>

														<p className="mb-2">
															(37) Scholarship end-dates are different from
															candidature completion dates and recipients should
															consult their conditions of award for information
															relating to the duration and implementation of
															scholarships.
														</p>

														<p className="mb-2">
															(38) Applications for extension beyond maximum
															time may be considered by the Dean or Director,
															Research Institute where there is clear evidence
															that there have been delays beyond the control of
															the candidate that could not have reasonably been
															foreseen.
														</p>

														<p className="mb-2">
															(39) Research Training Scheme candidates requiring
															extensions beyond four years will have exhausted
															their Research Training Scheme entitlement.
															Extensions of Research Training Scheme
															entitlements may be granted for a maximum period
															of one session without additional fees being
															applied. For extensions of more than one session,
															the candidate will be liable for full session
															course tuition fees for the period of extension in
															excess of one session.
														</p>

														<p className="mb-2">
															(40) Extensions of candidature or scholarship will
															not be granted for changes in thesis topic,
															supervisory panel or a change from one doctoral
															program to another.
														</p>
													</div>

													<div className="text-black ">
														<h2 className="font-bold text-black  my-2">
															Changes to Supervisory Panel or Topic
														</h2>
														<p className="my-2">
															(41) Matters relating to the supervisory panel are
															covered in the Supervision of Research Candidates
															Policy. The HDR Director may approve additions to
															the supervisory panel or changes to the thesis
															topic during the period of candidature. Changes to
															thesis topic may not be of a nature that would
															require substantial reworking or abandonment of
															work already accomplished in the candidature. The
															relevant HDR Director will report topic changes to
															the Research Studies Committee.
														</p>
													</div>

													<div className="text-black ">
														<h2 className=" text-black font-bold my-2">
															Overseas Research by Candidates
														</h2>
														<p className="my-2">
															(42) Candidates may travel overseas to conduct
															research work that is relevant to their thesis
															topic, provided permission is granted by their
															School or University Research Institute. Students
															should consult the Dual Award and Joint Research
															Higher Degrees Policy and the agreement that
															covers their candidature.
														</p>

														<p className="mb-2">
															(43) Candidates are considered University
															travellers if they are conducting work overseas
															that contributes towards their degree, whether
															funded by the University or not.
														</p>

														<p className="mb-2">
															(44) Candidates must apply for permission of their
															School or University Research Institute to travel
															overseas to conduct field work.
														</p>

														<p className="mb-2">
															(45) In accordance with the Travel Policy,
															candidates must book travel using the University
															travel booking system.
														</p>

														<p className="mb-2">
															(46) Candidates undertaking field research are
															subject to the University's WH&S obligations and
															must consider any travel advice issued by the
															Department of Foreign Affairs and Trade (DFAT).
															University travellers must adhere to and monitor
															DFAT travel advisories when organising and
															travelling overseas. Refer to the Travel Policy.
														</p>
													</div>

													<div className="text-black ">
														<h2 className="font-bold text-black font-bold my-2">
															Applying for Permission to Travel
														</h2>
														<p className="my-2">
															(47) All candidates travelling overseas to conduct
															research must also apply using the Application to
															Vary Research Candidature/Scholarship Form.
														</p>

														<p className="mb-2">
															(48) International candidates are advised to
															contact Western Sydney International to ask about
															the validity of their visa if they leave Australia
															for any period. This must be endorsed by an
															International Student Advisor.
														</p>

														<p className="mb-2">
															(49) Australian citizens and permanent resident
															scholarship holders may take up to 12 months field
															work overseas and remain in receipt of their
															scholarship. However, certain conditions must be
															met regarding supervision during that period and
															relevance of the work to completion of the degree,
															see the Research Higher Degree and Research
															Training Program Scholarship Policy.
														</p>

														<p className="mb-2">
															(50) The candidate must apply for permission to
															the relevant HDR Director or equivalent at least
															three months before the proposed date of
															departure.
														</p>
													</div>

													<div className="text-black ">
														<h2 className="font-bold text-black font-bold my-2">
															Transfer to Other Doctorate
														</h2>
														<p className="my-2">
															(51) Candidates may apply to transfer to another
															doctorate program. The same standards of
															intellectual rigour and high-level endeavour apply
															to all doctoral programs. For that reason the
															application will not be regarded as a new
															admission in regard to the applicant's
															qualifications. The application will be considered
															taking into consideration those issues outlined in
															Part A including supervision, resources, time left
															for completion and specific course requirements.
														</p>

														<p className="mb-2">
															(52) The outcome of the application will be
															endorsed by the relevant Research and Higher
															Degrees Committee with advice from the relevant
															HDR Director and approved by the relevant Dean or
															Director, Research Institute.
														</p>
													</div>

													{/* Part C added  */}

													<div className="text-black ">
														<h2 className="font-bold text-black  my-2 text-lg">
															Part C - Academic Progress and Review of
															Candidature
														</h2>
														<h2 className="font-bold text-black  my-2">
															Early Candidature Plan and Confirmation of
															Candidature
														</h2>
														<p className="my-2">
															(53) Candidates must complete an Early Candidature
															Plan with their Supervisory Panel within the first
															six months of enrolment.
														</p>

														<p className="mb-2">
															(54) Candidates must successfully undertake a
															Confirmation of Candidature within three to 12
															months of commencement of candidature. Full-time
															candidates will normally complete the Confirmation
															of Candidature within six months.
														</p>
														<p className="mb-2">
															(55) Ethics applications cannot be submitted until
															the Confirmation of Candidature has been
															successfully completed.
														</p>
														<p className="mb-2">
															(56) Failure to successfully undertake a
															Confirmation of Candidature may lead to
															termination of candidature. Refer Part H for
															details on the process for termination of
															candidature and the appeals process.
														</p>
													</div>

													<div className="text-black ">
														<h2 className="font-bold text-black font-bold my-2 ">
															Presentation of Work and Participation in
															Activities
														</h2>

														<p className="my-2">
															(53) Candidates must complete an Early Candidature
															Plan with their Supervisory Panel within the first
															six months of enrolment.
														</p>

														<p className="mb-2">
															(57) Candidates must attend and participate in
															those candidate activities required by the
															relevant School or Institute Research and Higher
															Degrees Committee or the Research Studies
															Committee. Candidates will present their work on
															campus at least once per year, at School or
															University Research Institute conferences or
															colloquia or as part of the annual progress
															review.
														</p>
														<p className="mb-2">
															(58) Failure to attend events deemed compulsory by
															the relevant Research and Higher Degrees Committee
															or the Research Studies Committee may lead to
															termination of candidature. Refer Part H for
															details on the process for termination of
															candidature and the appeals process.
														</p>
													</div>

													<div className="text-black ">
														<h2 className="font-bold text-black font-bold my-2 ">
															Annual Progress Reports
														</h2>

														<p className="my-2">
															(59) Candidates must submit an Annual Progress
															Report from the second year of enrolment. The
															candidate's report is accompanied by a report by
															the candidate's supervisory panel.
														</p>

														<p className="mb-2">
															(60) Annual Progress Reports will be reviewed by
															the relevant Research and Higher Degrees
															Committee, and a summary of outcomes reported to
															the Research Studies Committee.
														</p>
														<p className="mb-2">
															(61) If the Research Studies Committee, on the
															recommendation of the relevant Research and Higher
															Degrees Committee, is of the opinion that the
															annual report reveals unsatisfactory progress the
															Research Studies Committee may terminate the
															candidature or take such other action as it
															considers appropriate.
														</p>
														<p className="mb-2">
															(62) Failure to complete an Annual Progress Report
															may lead to termination of candidature. Refer Part
															H for details on the process for termination of
															candidature and the appeals process.
														</p>
													</div>

													{/* Part D Added  */}

													<div className="text-black ">
														<h2 className="font-bold text-black  my-2 text-lg ">
															Part D - Leave of Absence
														</h2>

														<p className="my-2">
															(63) In special cases, the HDR Director may grant
															leave of absence from candidature.
														</p>

														<p className="mb-2">
															(64) As a general guide valid reasons for leave of
															absence include: serious medical reasons,
															family/personal reasons or employment-related
															reasons that are causing significant disruption to
															the candidate's capacity to study effectively.
														</p>
														<p className="mb-2">
															(65) The period of such leave shall not be counted
															as part of the period of candidature for the
															degree and the maximum amount of leave will
															normally be two sessions in any one candidature.
														</p>
														<p className="mb-2">
															(66) On resuming candidature after leave of
															absence a candidate shall be enrolled for not less
															than one session before being permitted to submit
															a thesis for examination.
														</p>
													</div>

													{/* Part E added  */}
													<div className="text-black ">
														<h2 className="font-bold text-black  my-2 text-lg ">
															Part E - Ethics Committee Approval
														</h2>

														<p className="my-2">
															(67) Research topics involving human participants
															or animal subjects or the use of micro-organisms
															of Risk Group 2 or higher, whole micro-organisms,
															in vivo use of imported biological products,
															specimens of human origin (including blood
															products), recombinant DNA and ionising radiation
															sources require approval of the relevant the
															University Ethics or Safety Committee.
														</p>
														<p className="my-2">
															(77)Where a party to the formal dispute can show
															evidence of procedural irregularity or unfairness,
															such evidence will be referred and considered in
															accordance with the Complaint Management Policy.
														</p>
													</div>

													{/* PArt F added  */}

													<div className="text-black ">
														<h2 className="font-bold text-black  my-2 text-lg ">
															Part F - Conflict of Interest
														</h2>

														<p className="my-2">
															(68) Staff and candidates must abide by the
															Conflict of Interest Policy within the context of
															research higher degree enrolment and the
															appointment of supervisors, panellists on
															Confirmations of Candidature, and external
															examiners. All conflicts of interest or potential
															conflicts of interest must be declared.
														</p>
													</div>

													{/* Part G added  */}

													<div className="text-black ">
														<h2 className="font-bold text-black  my-2 text-lg ">
															Part G - Resolution of Difficulties
														</h2>

														<p className="my-2">
															(69) Supervisors and candidates must seek to
															resolve any problems through informal dispute
															resolution pathways, where possible and before
															taking steps to initiate a termination of
															candidature. Informal measures include discussions
															with key staff such as the relevant HDR Director
															or equivalent, and other staff members. Efforts to
															resolve disputes through informal resolution
															pathways must be documented and such documents
															must be retained by both parties to the dispute.
															Where a resolution to the dispute is reached, the
															resolution must be set out in a document agreed to
															and retained by both parties. Supervisors and/or
															candidates may seek advice from the Graduate
															Research School.
														</p>
														<p className="mb-2">
															(70) Where efforts to resolve a dispute through
															the above informal dispute resolution pathway
															fail, it is open to either party to seek to
															resolve the dispute by formal referral to the
															Chair, Research Studies Committee. Such referral
															must include all documents demonstrating efforts
															to resolve the dispute through the informal
															pathway.
														</p>
														<p className="mb-2">
															(71) On the basis of documents provided, the Chair
															will determine whether the requirements of clause
															69 have been met. Where it is determined that the
															requirements are not met, the matter will be
															referred back into the processes as set out in
															clause 69.
														</p>
														<p className="mb-2">
															(72) Where the Chair determines that the
															requirements of clause 69 are met and it is clear
															that a resolution could not be reached via that
															process, the Chair will establish a sub-committee
															of the Research Studies Committee to consider the
															matter. The sub-committee is to meet within 21
															calendar days of the receipt of the referral by
															the Chair.
														</p>
														<p className="mb-2">
															(73) The sub-committee will consist of:
															<p>
																(a) A HDR Director or equivalent from another
																School or University Research Institute; and
															</p>
															<p>
																(b) Two other members of the Research Studies
																Committee who are not members of the Supervisory
															</p>
															<p>
																(c) Panel and who have not been involved in
																providing advice in regards to the matter.
															</p>
														</p>
														<p className="mb-2">
															(74) Both parties will be notified of the date the
															sub-committee will meet, and may elect to make a
															submission to the sub-committee in relation to the
															matter.
														</p>
														<p className="mb-2">
															(75) The sub-committee will make a decision within
															21 calendar days of its meeting and both parties
															will be provided with a copy of the decision of
															the sub-committee.
														</p>
														<p className="mb-2">
															(76) The decision of the sub-committee is final
															and no further appeals will be considered.
														</p>
														<p className="mb-2">
															(77) Where a party to the formal dispute can show
															evidence of procedural irregularity or unfairness,
															such evidence will be referred and considered in
															accordance with the Complaint Management Policy.
														</p>
													</div>

													{/* Part H added  */}

													<div className="text-black ">
														<h2 className="font-bold text-black  my-2 text-lg ">
															Part H - Show Cause and Termination of Candidature
														</h2>

														<p className="my-2">
															(78) Candidature may be terminated for:
														</p>
														<div className="px-2 lg:px-9">
															<p className="my-1">
																(a) Failure to make academic progress during the
																period of candidature;
															</p>
															<p className="mb-1">
																(b) Failure to attend candidate research events
																deemed compulsory by the relevant Research and{" "}
															</p>
															<p className="mb-1">
																(c) Higher Degrees Committee or the Research
																Studies Committee;
															</p>
															<p className="mb-1">
																(d) Failure to complete a Confirmation of
																Candidature;
															</p>
															<p className="mb-1">
																(e) Failure to complete an Annual Progress
																Report; and
															</p>
															<p className="mb-1">
																(f) Academic misconduct as described under the
																Student Misconduct Rule; or
															</p>
															<p className="mb-1">
																(g) For other breaches of University policy or
																procedures.
															</p>
														</div>
														<p className="my-2">
															(79) If the Principal Supervisor is at any time of
															the opinion that the candidate is not making
															satisfactory progress, the Principal Supervisor,
															in consultation with the supervisory panel, will
															recommend to the relevant Research and Higher
															Degrees Committee that the candidate be invited to
															show cause why the candidature should not be
															terminated. This recommendation may suggest that
															the candidate be admitted to candidature in a
															research masters degree.
														</p>
														<p className="mb-2">
															(80) Recommendations to terminate a candidature,
															for any reason, must be forwarded to the relevant
															Research and Higher Degrees Committee.
														</p>
														<p className="mb-2">
															(81) The relevant Research and Higher Degrees
															Committee will refer a recommendation to request a
															show cause to the Research Studies Committee. The
															Research Studies Committee will make a decision on
															requesting the candidate to show cause why they
															should be permitted to continue their candidature.
															The candidate will be told why the show cause
															request has been made and they will be given 14
															calendar days from the date of the letter to
															respond. The Research Studies Committee will make
															a decision about the candidature based on the
															response and information from the School or
															University Research Institute.
															<p className="my-2">
																(82) Where the relevant Research and Higher
																Degrees Committee recommends termination of
																candidature because a candidate fails:
															</p>
															<div className="px-2 lg:px-9">
																<p className="mb-1">
																	{" "}
																	(a) To attend compulsory events as determined
																	by the relevant Research and Higher Degrees
																	Committee or Research Studies Committee; or
																</p>
																<p className="mb-1">
																	(b) To complete a Confirmation of Candidature;
																	or
																</p>
																<p className="mb-1">
																	(c) To complete an Annual Progress Report;
																</p>
															</div>
														</p>
														<p className="mb-2">
															(83) The relevant Research and Higher Degrees
															Committee will refer the recommendation to the
															Research Studies Committee with a full
															explanation. The Research Studies Committee will
															make a determination about continuation or
															termination of candidature.
														</p>
														<p className="mb-2">
															(84) In cases of unsatisfactory progress the
															Research Studies Committee may permit a candidate
															to transfer a doctorate candidature to a research
															masters degree. In such cases the Research Studies
															Committee will determine the period of
															candidature.
														</p>
														<p className="mb-2">
															(85) The candidate has the right of appeal under
															the Academic Appeals Procedures in respect of
															decisions to terminate candidature made by the
															Research Studies Committee under this Part.
														</p>
													</div>

													{/* Part I added  */}

													<div className="text-black ">
														<h2 className="font-bold text-black  my-2 text-lg ">
															Part I - Transfer to another Degree/Award
														</h2>

														<p className="my-2">
															(86) In cases of unsatisfactory progress the
															Research Studies Committee may permit a candidate
															to transfer a doctorate candidature to a research
															masters degree.
														</p>
														<p className="mb-1">
															(87) In such cases the Research Studies Committee
															will determine the period of candidature.
														</p>
													</div>

													{/* Part J added  */}

													<div className="text-black ">
														<h2 className="font-bold text-black  my-2 text-lg ">
															Part J - Thesis
														</h2>

														<p className="my-2">
															(88) The examinable work must be the candidate's
															own account of the work undertaken. The examinable
															work may consist of a single written work or a
															combination of a written work with work in other
															media (exhibition, performance, novel, film,
															video, computer program, etc.). The written work
															may be one or more of the following, as specified
															for a particular degree: thesis, exegesis,
															overarching statement, dissertation, portfolio.
														</p>
														<p className="mb-1">
															(89) A PhD may be presented as a series of papers,
															as described in clauses 95 to 96 of this policy.
															The language of expression and analysis must be
															English and reach a satisfactory standard of
															literary presentation. Candidates in modern
															languages may submit a thesis in a language other
															than English with the approval of the Research
															Studies Committee.
														</p>
														<p className="mb-1">
															(90) A candidate may not submit as the main
															content of the thesis any work or material which
															has been previously submitted for any degree, but
															may incorporate such work or material in the
															thesis if the candidate specifies the work or
															material which has been so incorporated and if it
															does not form part of the main content of the
															thesis.
														</p>
														<p className="mb-1">
															(91) In exceptional cases, work done conjointly
															with other persons may be accepted, provided that
															the Research Studies Committee is satisfied as to
															the candidate's part in the conjoint research.
														</p>
														<p className="mb-1">
															(92) The University does not prescribe a word
															limit and candidates should seek the advice of the
															supervisory panel. However, 100,000 words are
															considered to be the upper limit for doctorates.
															Most disciplines have a general expectation of a
															minimum of 60,000 words for a doctorate.
														</p>
														<p className="mb-1">
															(93) A candidate will submit to the Graduate
															Research School three copies of the written
															component of the thesis prepared in a form
															approved by the Research Studies Committee. The
															submission will include a 300 word summary and a
															certificate of authenticity signed by the
															candidate to the effect that the work has not been
															submitted for a higher degree to any other
															institution. The candidate will indicate in the
															thesis the sources of information and the extent
															to which the candidate has used the work of
															others. For advice on writing the certificate of
															authenticity see Thesis Presentation Guidelines.
														</p>
														<p className="mb-1">
															(94) Any component(s) of the thesis in other media
															will be submitted in a form approved by the
															Research Studies Committee. The Research Studies
															Committee will seek advice from the relevant
															School or University Research Institute on any
															non-printed text-based component of the submission
															for examination.
														</p>
														<p className="mb-1">
															(95) All copies of the thesis presented for
															examination will be returned to the candidate.
															Examiners will be requested to return their copies
															unless they request to keep their copy and the
															candidate agrees.
														</p>

														<div className="text-black ">
															<h2 className="font-bold text-black font-bold my-2  ">
																Thesis as a Series of Papers
															</h2>

															<p className="my-2">
																(96) PhD candidates may submit a series of
																publications as their examinable work.
																Submission of a thesis as a series of papers is
																available only for the PhD and the work must be
																accomplished during the period of enrolment.
															</p>
															<p className="mb-1">
																(97) Requirements for submission of thesis as a
																series of publications are:
															</p>
															<div className="mb-1 lg:px-9 px-2 ">
																<p>
																	{" "}
																	(a) Overarching Statement - the overarching
																	statement serves as an introduction to the
																	assessable work. It makes reference to the
																	research papers and explains the research
																	components in terms of their temporal sequence
																	and interdependence, and their contribution to
																	the candidate's personal and professional
																	development, and to the field of scholarship.
																	It should be at least 10,000 words, under the
																	advisement of the supervisory panel.
																</p>
																<p className="mb-2">
																	{" "}
																	(b) Four scholarly research papers that have
																	been peer reviewed, that are accepted, in
																	print or published in peer reviewed
																	publications. Each paper will have a
																	designated scholarly outlet in a refereed
																	journal, or as a book chapter in an edited
																	academic volume. Where there are multiple
																	authors, the candidate will normally be the
																	first author
																</p>
															</div>
														</div>

														<div className="text-black ">
															<h2 className="font-bold text-black font-bold my-2  ">
																Examination of Thesis as a Series of Papers
															</h2>

															<p className="my-2">
																(98) The examiners are asked to make a global
																judgement about the scope and quality of the
																work contained within the portfolio and to
																indicate the extent to which its cumulative
																nature warrants a doctoral award. The work
																should meet the criteria specified in clause 110
																of this policy.
															</p>
														</div>
													</div>

													{/* Part K added  */}

													<div className="text-black ">
														<h2 className=" text-black font-bold my-2  text-lg">
															Part K - Examination and Award of Degree
														</h2>
														<h3 className="text-black font-bold">
															Submission for Examination
														</h3>

														<p className="my-2">
															(98) The examiners are asked to make a global
															judgement about the scope and quality of the work
															contained within the portfolio and to indicate the
															extent to which its cumulative nature warrants a
															doctoral award. The work should meet the criteria
															specified in clause 110 of this policy.
														</p>
														<p className="mb-2">
															(99) The supervisory panel must be satisfied that
															the thesis meets a suitable academic standard and
															format and presentation requirements before it may
															be submitted for examination by the candidate.
															Supervisory panel approval for the examination to
															proceed will be indicated on the Examination
															Submission Form. The Examination Submission Form
															must be endorsed by the relevant HDR Director or
															equivalent.
														</p>
														<p className="mb-2">
															(100) If the supervisory panel does not agree that
															the thesis is ready for examination, the candidate
															may refer the matter to the relevant Research and
															Higher Degrees Committee for determination. If
															examination has been refused because the thesis
															does not meet a suitable standard of format and
															presentation, referred to in clause 98, the
															examination will not proceed. In other cases the
															matter will be forwarded, with a recommendation to
															the Research Studies Committee for a decision.
														</p>
														<p className="mb-2">
															(101) The relevant Research and Higher Degrees
															Committee may also refer the matter to the
															Research Studies Committee for a determination if
															the relevant Committee is unable to reach
															agreement. If the examination is refused the
															candidate will be asked to remain enrolled and to
															take further academic advice from their Principal
															Supervisor.
														</p>

														<div className="text-black ">
															<h2 className="font-bold text-black font-bold my-2 ">
																Early Submission for Examination
															</h2>

															<p className="my-2">
																(102) Candidates who wish to submit work for
																examination before completion of the minimum
																period of candidature should apply in writing to
																the School or Institute Research and Higher
																Degrees Committee which will make a
																recommendation to the Research Studies
																Committee. The Research Studies Committee will
																seek evidence that no purpose would be served by
																continuing the candidature in terms of academic
																readiness of the work.
															</p>
														</div>

														<div className="text-black ">
															<h2 className="font-bold text-black font-bold my-2 ">
																Thesis Examination
															</h2>

															<p className="my-2">
																(103) On the recommendation of the Principal
																Supervisor and the relevant HDR Director or
																equivalent, the relevant Research and Higher
																Degrees Committee shall approve and appoint two
																external examiners of the thesis.
															</p>
															<p className="mb-2">
																(104) Any conflicts of interest or potential for
																conflicts of interest relating to examiners must
																be declared.
															</p>
															<p className="mb-2">
																(105) An external examiner is a person who is
																not an employee of the University at the time
																when invited to examine the thesis, and who has
																not been an employee of the University within
																the five years prior to the examination.
															</p>
															<p className="mb-2">
																(106) There will not normally be more than one
																examiner from any one institution.
															</p>
															<p className="mb-2">
																(107) Past supervisors of the candidate cannot
																act as an examiner.
															</p>
															<p className="mb-2">
																(108) Examiners will hold qualifications at the
																level of or the equivalent to that which they
																are examining and be recognised academic leaders
																in their discipline.
															</p>
															<p className="mb-2">
																(109) Candidates may advise their Principal
																Supervisor if there is a particular person in
																their field who they would prefer not to have as
																an examiner or who they would particularly like
																to have as an examiner.
															</p>
															<p className="mb-2">
																(110) Candidates will not be informed of the
																composition of their examining panel at the time
																of examination. After examination, candidates
																may learn the identity of an examiner, if the
																examiner agrees to their name being disclosed on
																the thesis report. Examiners may request that
																their identity not be disclosed but they will be
																informed that this information may be requested
																by candidates under the right to information
																provisions.
															</p>
															<p className="mb-2">
																(111) The examiners will be asked to assess the
																work to determine if:
															</p>
															<div className="mb-2 px-2 lg:px-9 ">
																<p className="mb-1">
																	(a) The thesis as a whole makes an original
																	contribution to the knowledge of the subject
																	with which it deals;
																</p>
																<p className="mb-1">
																	(b) The thesis provides a sufficiently
																	comprehensive study of the topic appropriate
																	to the degree in the discipline area, or in
																	related interdisciplinary areas;
																</p>
																<p className="mb-1">
																	(c) The methods adopted are appropriate to the
																	subject matter and are appropriately applied;
																</p>
																<p className="mb-1">
																	(d) The research findings are suitably set
																	out, accompanied by adequate exposition and
																	are discussed critically in the context of the
																	discipline; and
																</p>
																<p className="mb-1">
																	(e) The quality of English and general
																	presentation is satisfactory.
																</p>
															</div>
															<p className="mb-2">
																(112) Each examiner shall report in writing to
																the Graduate Research School within six weeks of
																the date of posting of the thesis. Examiners may
																be replaced if a report is not received within
																two months unless the examiner is given leave to
																report late.
															</p>
															<p className="mt-3">
																(113) Each examiner must recommend one of the
																outcomes in Table 1.
															</p>

															{/* Table-1 added */}
															<div className="mb-2">
																<table className="  border-collapse border border-black-4 my-5">
																	<tbody>
																		<tr>
																			<td className="border border-black-4 px-2">
																				A
																			</td>
																			<td className="border border-black-4 px-2 text-justify">
																				<p className="my-2">
																					the candidate be required to undertake
																					minor rewriting of an editorial nature
																					(as identified by the examiners to the
																					satisfaction of the relevant Research
																					and Higher Degrees Committee) before
																					the degree is awarded;
																				</p>
																			</td>
																		</tr>

																		<tr>
																			<td className="border border-black-4 px-2">
																				M
																			</td>
																			<td className="border border-black-4 px-2 text-justify">
																				<p className="my-3">
																					The candidate be required to undertake
																					rewriting that is of greater magnitude
																					than minor editorial changes (as
																					identified by the examiners) to the
																					satisfaction of the Research Studies
																					Committee before the degree is
																					awarded;
																				</p>
																			</td>
																		</tr>
																		<tr>
																			<td className="border border-black-4 px-2">
																				R
																			</td>
																			<td className="border border-black-4 px-2 text-justify">
																				<p className="my-3">
																					the candidate be required to undertake
																					rewriting that is of greater magnitude
																					than minor editorial changes (as
																					identified by the examiners) to the
																					satisfaction of the Research Studies
																					Committee before the degree is
																					awarded;
																				</p>
																			</td>
																		</tr>
																		<tr>
																			<td className="border border-black-4 px-2">
																				X
																			</td>
																			<td className="border border-black-4 px-2 text-justify">
																				<p className="my-3">
																					The candidate be required to revise
																					and resubmit for further examination
																					within a specified time (only
																					available for the initial
																					examination); or
																				</p>
																			</td>
																		</tr>
																		<tr>
																			<td className="border border-black-4 px-2">
																				F
																			</td>
																			<td className="border border-black-4 px-2 text-justify">
																				<p className="my-3">
																					The degree not be awarded.
																				</p>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
															<p className="mb-2">
																(114) The examiners may request to submit a
																conjoint report. The decision to permit a
																conjoint report will be made by the Research
																Studies Committee, in consultation with the
																relevant Research and Higher Degrees Committee.
															</p>
															<p className="mb-2">
																(115) Examination outcomes must not be disclosed
																to the candidate until a final recommendation is
																decided.
															</p>
															<p className="mb-2">
																(116) The Graduate Research School will forward
																the examiners' reports to the relevant HDR
																Director who will forward the reports to the
																Principal Supervisor for comment and advice. The
																Principal Supervisor will prepare a written
																report for the relevant Research and Higher
																Degrees Committee that will recommend an initial
																outcome and list in detail any recommended
																changes to the thesis.
															</p>
															<p className="mb-2">
																(117) Where the examiners present
																recommendations of A or M the relevant Research
																and Higher Degrees Committee may endorse the
																initial examination outcome and report its
																finding to the Research Studies Committee.
															</p>
															<p className="mb-2">
																(118) Where one or more examiners recommend R, X
																or F the relevant Research and Higher Degrees
																Committee will seek the advice of the
																Supervisory Panel and refer the matter to the
																Research Studies Committee with a
																recommendation.
															</p>
															<p className="mb-2">
																(119) Where a F outcome is given the relevant
																Research and Higher Degrees Committee may
																recommend the awarding of a research masters
																degree to the Research Studies Committee. If
																approved by the Research Studies Committee, the
																recommendation may require resubmission and
																re-examination for the research masters award.
															</p>
															<p className="mb-2">
																(120) The Research Studies Committee will
																consider the relevant Research and Higher
																Degrees Committee report and make a
																determination.
															</p>
															<p className="mb-2">
																(121) Where additional work is required, the
																Research Studies Committee may specify the time
																within which any additional work shall be
																completed. Normally all corrections will be made
																within one session of the candidate being
																advised to make changes or rewrite for
																re-examination.
															</p>
															<p className="mb-2">
																(122) The Principal Supervisor must advise the
																Graduate Research School if a candidate who is
																re-writing will need access to the Library and
																other facilities.
															</p>
															<p className="mb-2">
																(123) In circumstances where the outcome is not
																clear, before making any determination the
																Research Studies Committee may take one or more
																of the following actions:
															</p>
															<div className="px-2 lg:px-10">
																<p className="my-1">
																	(a) Appoint an additional examiner;
																</p>
																<p className="mb-1">(b) Appoint an arbiter; </p>
																<p className="mb-1">
																	(c) Invite the examiners to confer with each
																	other and/or with the Research Studies
																	Committee with a view to the presentation of a
																	consolidated recommendation; and/or
																</p>
																<p className="mb-1">
																	(d) Direct that the candidate undertake such
																	further examinations oral, written or
																	practical as the Research Studies Committee
																	may specify.
																</p>
															</div>
															<p className="my-2">
																(124) The Research Studies Committee will notify
																its decision to the Graduate Research School,
																who will advise the candidate.
															</p>
														</div>

														<div className="text-black ">
															<h2 className="font-bold text-black  my-2  ">
																Re-writing and Re-examination
															</h2>

															<p className="my-2">
																(125) A re-examination will be conducted on the
																basis of specific advice given to the candidate
																on what must be achieved in rewriting.
															</p>
															<p className="mb-2">
																(126) The instructions to the candidate for
																rewriting for re-examination will be prepared by
																the Supervisory Panel, endorsed by the relevant
																Research and Higher Degrees Committee, and
																approved by the Research Studies Committee.
																(127)These instructions will be provided to the
																examiner for the re-examination as they will
																form the basis of the second examination.
															</p>
															<p className="mb-2">
																(128) No new criticisms may be introduced by the
																examiner in the second examination.
															</p>
															<p className="mb-2">
																(129) The examiner(s) who recommended that the
																thesis be re-examined shall normally be invited
																to undertake the re-examination.
															</p>
															<p className="mb-2">
																(130) The rewritten thesis will be presented for
																the second examination with an Examination
																Submission Form.
															</p>
															<p className="mb-2">
																(131) Re-examined theses will be considered by
																the Principal Supervisor who will make a
																recommendation to the relevant Research and
																Higher Degrees Committee. That Committee will
																then submit a recommendation to the Research
																Studies Committee.
															</p>
														</div>
														<div className="text-black ">
															<h2 className="font-bold text-black  my-2  ">
																Access to Examiner's Report
															</h2>

															<p className="my-2">
																(132)Candidates will be given a copy of each
																examiner's report at the completion of the
																examination process. Each report will include
																the name of the examiner unless the examiner
																requests, in writing, that his/her name be
																withheld.
															</p>
														</div>
														<div className="text-black ">
															<h2 className="font-bold text-black  my-2  ">
																Award of the Degree
															</h2>

															<p className="my-2">
																(133) When the Research Studies Committee is
																satisfied that all requirements have been met,
																it will approve the awarding of the degree.
															</p>
														</div>

														<div className="text-black ">
															<h2 className="font-bold text-black  my-2  ">
																Copy of Thesis for the University
															</h2>

															<p className="my-2">
																(134) Upon notification of the awarding of the
																degree, a candidate must submit to the Graduate
																Research School one digitised (CD or disc in PDF
																format) copy of the thesis incorporating all
																amendments and/or rewriting that was required as
																an outcome of the examination. Detailed advice
																on format of the digital copy can be found on
																the Australian Digital Theses Program web page.
															</p>
															<p className="mb-2">
																(135) In addition to any requirements outlined
																in the Graduation Policy, a candidate must
																submit an electronic copy of the approved thesis
																and a completed Right of Access Form in order to
																graduate.
															</p>
															<p className="mb-2">
																(136) A digital copy of the thesis will be made
																available via the University Library unless the
																relevant Research and Higher Degrees Committee,
																on the application of the candidate, determines
																in exceptional cases that it will not be made
																available until after the expiry of a period,
																which shall not normally exceed one year, unless
																otherwise determined by arrangements in place
																under the Intellectual Property Policy.
															</p>
														</div>
													</div>

													{/* Part L Added  */}
													<div className="text-black ">
														<h2 className="font-bold text-black  my-2 text-lg ">
															Part L - Forms
														</h2>

														<p className="my-2">
															(137) Forms for application for admission,
															variation of candidature, examination processes;
															nomination of examiners, thesis lodgement form and
															amendments completed can be found on the
															University website.
														</p>
													</div>
												</div>
											</div>

											{/* section - 5 added here */}
											
											<div className="w-full  py-2 text-justify" id="section-5">
												<div className="text-black border-b-2 border-black ">
													<h1 className="font-bold text-xl text-sky-700 mb-3">
														SECTION 5 - GUIDELINES
													</h1>

													<p>
														(138) This policy should be read with the Guidelines
														attached to this policy, including:
														<div className="px-2 lg:px-10">
															<p className="my-1">
																(a) Doctor of Creative Arts Guidelines;
															</p>
															<p className="mb-1">
																(b) Doctor of Education Guidelines;
															</p>
															<p className="mb-1">
																(c) Doctor of Cultural Research Guidelines;
															</p>
															<p className="mb-1">
																(d) Doctor of Business Administration
																Guidelines;
															</p>
															<p className="mb-1">
																(e) Doctor of Philosophy (Political and Social
																Thought) Guidelines;
															</p>
														</div>
														<p className="my-2">
															(139) This policy should be read in conjunction
															with the Supervisors Code of Practice, the
															Research Code of Practice, Research Ethics Policy,
															Research Higher Degree Candidature Essential
															Resources Policy and the Student Misconduct Rule.
														</p>
														<p className="mb-2">
															(140) Scholarship recipients should consult their
															Conditions of Award for additional advice relating
															to candidature.
														</p>
													</p>

													{/* Part M ADDED  */}

													<div className="text-black  ">
														<h1 className="font-bold text-lg my-2">
															Part M - DOCTOR OF CREATIVE ARTS
														</h1>

														<p className="mb-2">
															(141) This document outlines the specific course
															requirements of the Doctor of Creative Arts (DCA)
															degree at the University. It should be read in
															conjunction with the Doctorate Policy and
															University policies relating to Higher Degrees by
															Research and specific School or Research Institute
															(Institute) requirements and guidelines for
															candidates.
														</p>

														<div className="text-black  ">
															<h1 className="font-bold my-2">
																Aims of the Course
															</h1>

															<p className="mb-2">
																(142) In addition to the requirements set out in
																Section 3, clause 6 of the Doctorate Policy, in
																a DCA, a candidate should develop theorisation
																that demonstrably influences their creative
																practice and output, including methodologies.
															</p>
															<p className="mb-2">
																(143) In addition, the DCA provides extended and
																advanced training in creative arts where
																projects and investigative practice provide a
																contribution to professional and scholarly
																knowledge.
															</p>
														</div>

														<div className="text-black  ">
															<h1 className="font-bold my-2"> Background</h1>

															<p className="mb-2">
																(144) The DCA program at the University is a
																program of advanced research embedded in the
																artist's professional practice and aims to
																develop graduates who shall demonstrate several
																of the following attributes:
															</p>
															<div className="px-2 lg:px-9">
																<p className="pb-1">
																	(a) Technical and conceptual innovation in
																	their arts discipline;
																</p>
																<p className="pb-1">
																	(b) Commitment to research and development as
																	a means of solving problems;
																</p>
																<p className="pb-1">
																	(c) Familiarity with new technology and its
																	applications;
																</p>
																<p className="pb-1">
																	(d) Knowledge in theoretical foundations and
																	highly developed skills in the application of
																	theory to practice and creative reflection;
																</p>
																<p className="pb-1">
																	(e) Effective and advanced communication at
																	all levels;
																</p>
																<p className="pb-1">
																	(f) Ability to articulate a broad vision of
																	practice and practice-led research and its
																	relationship to social, cultural and community
																	needs;
																</p>
																<p className="pb-1">
																	(g) Ability to contribute to the advancement
																	of policy and practice in the creative arts.
																</p>
															</div>
															<p className="py-2">
																(145) The DCA candidate develops knowledge
																through practice, undertaking the development of
																a body of original creative work within the
																chosen discipline. New knowledge comes from
																investigatory practice that is intellectually
																rigorous.
															</p>
														</div>

														<div className="text-black  ">
															<h1 className="font-bold my-2">
																{" "}
																Areas of Study
															</h1>

															<p className="mb-2">
																(146) The following areas of enquiry are
																available in the Doctor of Creative Arts:
															</p>
															<div className="px-2 lg:px-9">
																<p className="pb-1">(a) Communication</p>
																<p className="pb-1">(b) Electronic Arts</p>
																<p className="pb-1">(c) Film Making</p>
																<p className="pb-1">(d) Music and Sound Arts</p>
																<p className="pb-1">(e) Writing</p>
																<p className="pb-1">(f) Media Arts</p>
																<p className="pb-1">(g) Design</p>
															</div>
														</div>

														<div className="text-black  ">
															<h1 className="font-bold my-2">
																Specific Course Requirements of DCA
															</h1>

															<p className="mb-2">
																(147) DCA candidates are required to produce an
																examinable thesis (body of creative work and an
																exegesis) accomplished during the period of
																enrolment in the DCA.
															</p>
															<p className="mb-2">
																(148) The thesis includes the body of creative
																work and an exegesis. The exegesis demonstrates
																the development and application of theory within
																a creative process and the production of the
																creative work. It includes a survey of recent
																representative literature in the chosen
																discipline(s). It is also a reflexive analysis
																of creative process and is an engaging piece of
																writing constructed as a scholarly essay of
																approximately 25,000 to 30,000 words.
															</p>
															<p className="mb-2">
																(149) Photography, sound or video recordings,
																and web material may also support the writing.
																The relative weighting of the exegesis as a
																component of the thesis submission for
																examination shall be at least 30% of the total,
																with the creative practice constituting no more
																than 70%. The requirements and relative
																weightings for examinable creative practice and
																exegesis are discussed and developed between
																candidate and supervisory panel on commencement
																and again during the confirmation of candidature
																process.
															</p>
															<p className="mb-2">
																(150) The following examples thus reflect the
																different disciplines supported by the Schools
																and/or University Research Institutes.
															</p>

															<div className="pl-2 lg:pl-9">
																<p className="pb-2">
																	(a) Communication/Media Arts: A body of
																	creative work in the communication discipline
																	is required. It should be equivalent to a
																	series of programs for television, radio, a
																	selection of multimedia presentations, or one
																	program of substantial length. For example, a
																	one-off film of 30-60 minutes in length. Other
																	formats for communication dissertations could
																	be developed on HDV, DV, DVD, DAT, CD,
																	photo-media and on-line Internet media. The
																	work must be broadcast to a public audience;
																	and an exegesis of approximately 25,000 to
																	30,000 words in length is also required.
																</p>
																<p className="pb-2">
																	(b) Electronic Arts: Two solo exhibitions in
																	galleries and festivals, or presentations in
																	performative modalities. These may include
																	telepresencing, online interactivity, sensor
																	driven interactivity, as well as the use of
																	archival and recording technologies; and an
																	exegesis of approximately 25,000 to 30,000
																	words in length is also required.
																</p>
																<p className="pb-2">
																	(c) Music and Sound Arts: Composition: a folio
																	of compositions including works that employ
																	large resources or performance media
																	demonstrating a variety of 'architecture',
																	colours, textures - for example, a musical,
																	opera or symphonic score, or 6-8 compositions
																	for smaller resources or other media; and an
																	exegesis of approximately 25,000 to 30,000
																	words in length is also required. Music
																	Performance: the staging of two major live
																	performances or concerts and recitals, each of
																	sixty minutes duration, demonstrating high
																	level artistry encompassing performance
																	practice, production values and spatial
																	considerations. An exegesis of approximately
																	25,000 to 30,000 words in length is also
																	required.
																</p>
																<p className="pb-2">
																	(d) Writing: an original poetry collection
																	(70-80 pages), a play script or film script
																	(90 minutes production), or a novel (70,000
																	words), or a book of short stories; and an
																	exegesis of approximately 25,000 to 30,000
																	words in length is also required.
																</p>
																<p className="pb-2">
																	(e) Media Arts (see Communication).
																</p>
																<p className="pb-2">
																	(f) Design: A portfolio of design
																	documentation relating to a coherent creative
																	project with well articulated outcomes in
																	community or industry settings. The forms of
																	presentation may utilise the full range of
																	computer-based applications that best serve
																	the communicational needs of the project.
																	These may be stand-alone formats for
																	distribution (e.g. CD/DVD), exhibited works as
																	installations; or on-line interface projects;
																	and an exegesis of approximately 25,000 to
																	30,000 words in length is also required.
																</p>
															</div>
														</div>

														<div className="text-black  ">
															<h1 className="font-bold my-2"> Background</h1>

															<p className="mb-2">
																(144) The DCA program at the University is a
																program of advanced research embedded in the
																artist's professional practice and aims to
																develop graduates who shall demonstrate several
																of the following attributes:
															</p>
															<div className="px-2 lg:px-9">
																<p className="pb-1">
																	(a) Technical and conceptual innovation in
																	their arts discipline;
																</p>
																<p className="pb-1">
																	(b) Commitment to research and development as
																	a means of solving problems;
																</p>
																<p className="pb-1">
																	(c) Familiarity with new technology and its
																	applications;
																</p>
																<p className="pb-1">
																	(d) Knowledge in theoretical foundations and
																	highly developed skills in the application of
																	theory to practice and creative reflection;
																</p>
																<p className="pb-1">
																	(e) Effective and advanced communication at
																	all levels;
																</p>
																<p className="pb-1">
																	(f) Ability to articulate a broad vision of
																	practice and practice-led research and its
																	relationship to social, cultural and community
																	needs;
																</p>
																<p className="pb-1">
																	(g) Ability to contribute to the advancement
																	of policy and practice in the creative arts.
																</p>
															</div>
															<p className="py-2">
																(145) The DCA candidate develops knowledge
																through practice, undertaking the development of
																a body of original creative work within the
																chosen discipline. New knowledge comes from
																investigatory practice that is intellectually
																rigorous.
															</p>
														</div>

														<div className="text-black  ">
															<h1 className="font-bold my-2">
																{" "}
																Participation in Research Events
															</h1>

															<p className="mb-2">
																(151) Candidates are expected to:
															</p>
															<div className="px-2 lg:px-9">
																<p className="pb-1">
																	(a) Meet with their principal supervisor on a
																	regular basis, and to consult frequently with
																	members of their supervisory panel. The advice
																	of the panel should be sought on all aspects
																	of the candidature, including public
																	presentations and professional involvement.
																</p>
																<p className="pb-1">
																	(b) Participate in research training and
																	research development activities as designated
																	by their School or Institute and supervisory
																	panel such as research training units, courses
																	and workshops;
																</p>
																<p className="pb-1">
																	(c) Contribute to the research culture of
																	their School or Institute through
																	participation in seminars, forums and
																	conferences at the University;
																</p>
																<p className="pb-1">
																	(d) Maintain a public professional profile of
																	high standing during the course of their
																	candidature, with the mentoring and
																	supervisory support of the University;
																</p>
																<p className="pb-1">
																	(e) offer their work for publication or public
																	presentation, contribute to the organisation
																	and/or programming of relevant cultural
																	events, contribute to policy and planning
																	debates in their area of expertise
																</p>
															</div>
														</div>
														<div className="text-black  ">
															<h1 className="font-bold my-2">Examination</h1>

															<p className="mb-2">
																(152)A candidate presenting a body of creative
																work is required to present the exegesis
																concurrently. However, where the body of
																creative work is public performance or
																exhibition the candidate is required to submit
																the exegesis no later than three months after
																the final event. This implies that careful
																planning is required to ensure that the DCA
																submission is made within the time specified for
																candidature.
															</p>
															<p className="mb-2">
																(153) It is expected that a high level of
																intellectual and research acumen will be
																demonstrated throughout candidature. The
																submitted thesis should show evidence of
																significant conceptual development, as
																demonstrated in exhibition, performance,
																writing, screening or publication during the
																period of candidature.
															</p>
															<p className="mb-2">
																(154) Performances, presentations and
																exhibitions should occur at the University or
																associated venues. Consultation with the
																supervisory panel in conjunction with the HDR
																Director may lead to external or professional
																engagements being considered as part of the
																submission.
															</p>
															<p className="mb-2">
																(155) The examination process is described in
																the Doctorate Policy. Examination will
																incorporate the creative component and the
																exegesis. Where appropriate, recommendations of
																examiners for any additional work described in
																examination outcome options M, R or X can apply
																to creative component and/or the critical
																exegesis.
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
				</div>
			</div>
		</div>
	);
};

export default DoctoratePolicy;
