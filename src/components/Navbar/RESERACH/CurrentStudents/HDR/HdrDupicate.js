import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HdrDupicate = () => {
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
											<a href="/hdr">
												{" "}
												Higher Degree Research Policies
											</a>
										</li>
									</ul>
									{/* breadcrumb ended */}
								</div>

								{/*HDR students Checklist */}

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="lg:px-20 px-3 text-xl text-sky-700 font-bold ">
										Conflict of Interest Policy
									</h1>
								</div>
								<div className=" lg:px-20 ">
									<div className="container mx-auto  ">
										<div className="grid grid-cols-1 mb-6 lg:grid-cols-1">
											<div
												className="w-full  py-2 text-justify"
												id="section-1"
											>
												<div className="text-black ">
													<h1 className="font-bold text-xl text-sky-700">
														Section 1 - Purpose and Context
													</h1>
													<div id="part A" className="text-justify">
														<h2 className="py-3 font-bold text-xl text-sky-700">
															Part A - Introduction
														</h2>
														<ol className="">
															<p>
																The purpose of this policy is to set out a
																framework for the identification, declaration,
																and management of conflicts of interests for
																University employees and others engaged in
																University business.
															</p>
															<p>
																The University is committed to conducting its
																business and delivering higher education and
																research in a fair, transparent, accountable,
																and impartial manner that ensures public trust
																and confidence.
															</p>
															<p>
																Conflicts of interest commonly occur in all
																types of situations. If not properly managed,
																these can expose the University to risk that
																decisions or actions are based on personal or
																other external influences, rather than being
																made for proper purposes in the best interests
																of the University.
															</p>
														</ol>
													</div>

													{/* Part B added here  */}

													<div id="part B text-justify">
														<p className="py-3 font-bold text-xl text-sky-700">
															{" "}
															Part B - Application
														</p>
														<ol className="">
															<p className="mb-1">
																(4) This policy applies to all University
																representatives.
															</p>
															<p className="mb-1">
																(5) This policy should be read in conjunction
																with the University’s Code of Conduct, and is
																supported by procedures and guidelines which are
																mandatory to demonstrate compliance with this
																policy.
															</p>
															<p className="mb-1">
																(6) University controlled entities are expected
																to establish and implement their own conflict of
																interest policies, but may resolve to adopt this
																policy.
															</p>
														</ol>
													</div>
												</div>
											</div>

											{/* Section 2 added here */}

											<div
												className="w-full  py-2 text-justify"
												id="section-2"
											>
												<div className="text-black ">
													<h1 className="font-bold text-xl text-sky-700">
														Section 2 - Definitions
													</h1>

													<h2 className="py-3 ">
														(7) For the purpose of this policy:
													</h2>
													<ol className="">
														<p className="mb-2">
															(a) University representative means any person
															employed by the University or who represents the
															University or its interests in an official
															capacity (whether paid or voluntary), including:
														</p>
														<p className="mb-1">
															(i) a member of the Board of Trustees or its
															committees;
														</p>
														<p className="mb-1">
															(ii) a person appointed by the University as a
															director of a University controlled entity or of a
															company or other organisation in which the
															University has an interest;
														</p>
														<p className="mb-1">
															(iii) a person who holds a clinical, adjunct,
															conjoint or honorary title or appointment; and
														</p>
														<p className="mb-1">
															{" "}
															(iv) a person engaged as an agent or contractor of
															the University (whether in Australia or overseas).
														</p>
														<p className="my-2">
															(b) Conflict of interest – means a conflict
															between performing an official duty and another
															interest that has the potential to interfere with
															the proper performance of that official duty. A
															conflict of interest can be actual, perceived, or
															potential. Examples of where conflicts of interest
															might occur include:
														</p>
														<p className="mb-1">
															(i) personal relationships (inside and outside the
															University);
														</p>
														<p className="mb-1">
															(ii) perceptions of bias in favour of, or against,
															another person or something, such as a political
															or religious conviction or belief; or
														</p>
														<p className="mb-1">
															(iii) acceptance of bribes or other financial
															incentives.
														</p>
														<p className="mt-2">
															(c) Conflict of Interest Register – refers to a
															register that records all declared conflicts of
															interests in accordance with the Procedures.
														</p>
														<p>
															(d) Material interest – is where a reasonable
															person would assume that a University employee or
															other person engaged in University business stands
															to gain an advantage, or suffer a disadvantage, if
															he or she does not properly manage a conflict of
															interest when making a decision.
														</p>
													</ol>
												</div>
											</div>

											{/* section-3 added here  */}
											<div
												className="w-full  py-2 text-justify"
												id="section-3"
											>
												<div className="text-black ">
													<h1 className="font-bold text-xl text-sky-700">
														Section 3 -Policy Statement
													</h1>

													{/* part - C added here  */}

													<div id="part C">
														<h2 className="font-bold text-xl text-sky-700 my-2">
															{" "}
															Part C - The Conflicts of Interest Rule
														</h2>

														<p className="mb-1">
															(8) All University representatives have
															obligations to act honestly and in good faith at
															all times, including observing obligations of
															confidentiality.
														</p>

														<p className="mb-1">
															(9) The obligation to disclose, and to avoid or
															minimise, conflicts of interests applies where:
														</p>

														<div className="">
															<p className="mb-1">
																(a) There is a real or substantial possibility
																of the conflict of interest actually arising;
																and
															</p>

															<p className="mb-2">
																(b) The interest is a material interest, that is
																to say:
															</p>
														</div>
														<div className="">
															<p>
																(i) It is real and substantial, not theoretical,
																remote, contingent or otherwise insubstantial;
																and
															</p>
															<p>
																(ii) It has, or appears to have, the capacity to
																influence the conduct of a person (whether or
																not it actually does so).
															</p>
														</div>
													</div>

													{/* part- D added here  */}

													<div id="part D">
														<h2 className="text-sky-700 text-xl font-bold my-2">
															Part D - University’s Requirements
														</h2>
														<p className="mb-2">
															(10)The University requires all University
															representatives act ethically at all times, with
															openness and fairness, and to proactively
															safeguard the performance of their official duties
															and responsibilities as University representatives
															against conflicts of interest.
														</p>

														<p className="mb-2">
															(11)This requirement recognises the University's
															legal obligations in dealing with the disclosure,
															management, and reporting of conflicts of interest
															that apply to University representatives. These
															include:
														</p>
														<div className="">
															<p className="mb-2">
																(a) Western Sydney University Act 1997 – which
																applies to University Board of Trustees members
																and requires them to disclose all material
																interests in any matter before the Board, and to
																not be present or participate in any decision on
																that matter (refer Schedule 2A, clause 5 of the
																Act).
															</p>
															<p className="mb-2">
																(b) Corporations Act 2001 – which applies to
																companies and requires directors to notify
																material personal interests when a conflict
																arises (refer Section 191 of the Act).
															</p>
															<p className="mb-2">
																(c) Independent Commission Against Corruption
																Act 1988 – which applies to University
																representatives as “public officials” and
																includes conflicts of interests such as
																improperly using knowledge or resources of the
																person’s position for personal gain or the
																advantage of others. The Vice-Chancellor and
																President, as principal officer of the
																University, has a duty to notify the Commission
																of any matter where there is reasonable
																suspicion of corrupt conduct (refer Part 3 of
																the Act).
															</p>
														</div>
														<p className="mb-2">
															(12) The University will maintain a Conflict of
															Interest Register where the disclosure, management
															and reporting of conflicts of interests are
															recorded, monitored, and managed.
														</p>

														<p className="mb-2">
															(13)The University will also require specified
															University representatives to complete annual
															declarations of interests in order to comply with
															relevant legislative or governance standards.
														</p>
													</div>

													{/* part E added here  */}

													<div id="part E">
														<h2 className="text-sky-700 text-xl my-2 font-bold ">
															Part E - The University’s Expectations of Conduct
														</h2>
														<p className="my-2">
															(14) The University requires all University
															representatives to actively and continuously:
														</p>
														<div className="">
															<p className="pb-1">
																(a) Restrict the acts and/or activities that
																could lead to an actual, perceived, or potential
																conflict of interest.
															</p>
															<p className="pb-1">
																(b) Be aware of the situations that can give
																rise to conflicts of interests, especially in
																high risk areas, such as sitting on any of the
																University's Boards or Committees, or research
																areas;
															</p>
															<p className="pb-1">
																(c) Declare all conflicts of interests to their
																supervisor, a senior manager, or the
																chair/convenor of a committee, panel, or other
																group;
															</p>
															<p className="pb-1">
																(d) Assess the conflict of interest in
																consultation with their supervisor, a senior
																manager, or chair/convenor to assess whether the
																conflict can be avoided altogether or, if not,
																ensure it can be managed appropriately by
																implementing risk mitigation strategies, such as
																recusing themselves from decision-making,
																removing themselves from supervision or
																assessment, or arranging for another authorized
																Delegate under the University's Delegations of
																Authority Policy.
															</p>
															<p className="pb-2">
																(e) Record details of the conflict and
																associated risk mitigation strategies on the
																Conflict of Interest Register, and actively
																monitor the conflict on a continuing basis and,
																if necessary, put in place additional or
																different arrangements to manage the conflict
																when circumstances change.
															</p>
														</div>

														<p className="my-2">
															(15) All staff are required to report any breaches
															of this policy to their supervisor, a senior
															manager of the University, the Office of Audit and
															Risk Assessment, or a Public Interest Disclosures
															Officer under the University's Whistleblowing
															(Reporting Corruption and Other Wrongdoing)
															Policy.
														</p>

														<p className="mb-2">
															(16)The University Executive, senior staff and all
															managers and supervisors play a leading role in
															ensuring a culture that exemplifies best practice
															and sets the benchmark for ethical behaviour. In
															particular, they are expected to:
														</p>

														<p className="mb-1">
															(a) Raise awareness among their staff about this
															policy, and the obligations therein, and ensure
															that their staff undertake appropriate training
															where necessary;
														</p>
														<p className="mb-1">
															(b) Be aware of the types of conflicts of interest
															that are likely to arise within their areas of
															responsibility, including identifying any
															significant or sensitive projects in their area
															that might warrant putting specific arrangements
															in place to manage any conflicts of interest;
														</p>
														<p className="mb-1">
															(c) Ensure their staff document any conflicts of
															interests, and that these conflicts are monitored
															and managed in accordance with the University’s
															procedures (including any specified in other
															University policies);
														</p>
														<p className="mb-1">
															(d) Take appropriate action, including reporting
															any suspected corrupt conduct to the Office of
															Audit and Risk Assessment, if a staff member is
															unable or unwilling to disclose or satisfactorily
															address a conflict of interest.
														</p>
													</div>

													{/* part F added here  */}

													<div id="part F">
														<h2 className="text-sky-700 text-xl font-bold my-2">
															Part F - Raising Awareness and Training
														</h2>
														<p>
															(17)The University will ensure that University
															representatives have access to programs designed
															to raise awareness and to assist them in carrying
															out their responsibilities and duties, including
															through induction and other training initiatives.
														</p>
													</div>

													{/* part G added here  */}

													<div id="part G">
														<h2 className="text-sky-700 font-bold text-xl my-2">
															Part G - Consequences of Non-Compliance
														</h2>
														<p>
															(18)The University regards non-compliance with
															this policy as a serious matter and, depending on
															severity and impact, will take appropriate action,
															which may include disciplinary action or
															cancellation of a contract with an external
															supplier.
														</p>

														<p>
															(19)The University may also refer any
															non-compliance with this policy for independent
															investigation or to an external reporting agency,
															such as Independent Commission Against Corruption
															or the NSW Auditor-General.
														</p>

														{/* part H added here  */}

														<div id="part H">
															<h2 className="text-sky-700 font-bold text-xl my-2">
																Part H - Privacy
															</h2>
															<p>
																(20)Information concerning disclosures of
																conflicts of interest will be managed in
																accordance with the University’s Privacy Policy
																and Privacy Management Plan.
															</p>
														</div>
													</div>
													{/* part I added here  */}

													<div id="part I">
														<h2 className="text-sky-700 font-bold text-xl my-2">
															Part I - Agents and Contractors
														</h2>

														<p>
															(21)The University will implement appropriate
															systems and controls (including as part of any
															contractual arrangements) to ensure that conflicts
															of interest involving agents and contractors of
															the University are identified, declared and
															managed appropriately.
														</p>
													</div>
												</div>
											</div>
											<div
												className="w-full  py-2 text-justify"
												id="section-4"
											>
												<div className="text-black ">
													<h1 className="font-bold text-xl text-sky-700">
														Section 4 -Procedure
													</h1>

													<p>(22)See Conflicts of Interest Procedures.</p>
												</div>
											</div>

											{/* section - 5 added here */}
											<div
												className="w-full  py-2 text-justify"
												id="section-5"
											>
												<div className="text-black ">
													<h1 className="font-bold text-xl text-sky-700">
														Section 5 -Guidelines
													</h1>

													<p>(23)See Conflicts of Interest Guidelines.</p>
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

export default HdrDupicate;
