import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Track = () => {
	return (
		<div className="">
			{/* Main content start here */}
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[100px] shadow mb-5">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-base-100 lg:px-8 px-3 py-3 pb-10  ">
								{/* breadcrumb use here */}
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
											<p className="text-black"> Staying on track</p>
										</li>
									</ul>
								</div>

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="lg:px-20 px-3 text-xl text-sky-700 font-bold my-3">
										Staying on track with your HDR program
									</h1>
									<div className="lg:px-20 px-3 text-justify">
										<p className=" my-3 ">
											HDR study is a rich and rewarding experience, but can also
											be a very challenging time in your life. Every HDR student
											needs some form of support to help them stay on track and
											manage life around their study.
										</p>
										<p>
											When things get difficult, the worst thing you can do is
											stay silent. There are a number of areas around the Sydney
											IBS dedicated to helping students through a variety of
											issues. Take a look at some of the resources available and
											get in touch with the relevant area if you are struggling.
										</p>
									</div>
									<article className="lg:px-20 px-3 text-justify">
										<h1 className="text-sky-700 text-xl text-sky-700 font-bold mt-2">
											Parsa
										</h1>
										<div>
											<p>
												The Postgraduate and Research Students' Association
												(PARSA) Student Assistance Officers are professionally
												trained staff to assist you with any personal and
												academic matters. There is no charge for the service and
												confidentiality is assured. This is the place to head if
												you are a postgraduate student and need support with any
												aspect of your life, including:
											</p>
											<div className="">
												<li> Academic matters</li>
												<li>Advocacy</li>
												<li>Appealing examination outcomes</li>
												<li>Budgeting</li>
												<li>Centrelink</li>
												<li>
													Communicating within your local area at Sydney IBS
												</li>
												<li>
													Conflict resolution (academic, accommodation, etc.)
												</li>
												<li>Difficulties with research supervision</li>
												<li>Emotional matters</li>
												<li>Fair treatment</li>
												<li>Family difficulties</li>
												<li>Financial difficulties</li>
												<li>Housing and accommodation problems</li>
												<li>Personal matters</li>
											</div>
										</div>
										<div className="text-justify">
											<h1 className="text-sky-700 font-bold text-xl my-2">
												Sydney IBS Counselling Centre
											</h1>
											<p className="">
												The Sydney IBS Counselling Centre offers{" "}
												<span className="text-sky-700     my-3  hover:underline cursor-pointer ">
													a range of services and resources specifically for HDR
													students
												</span>
												. Mental health issues such as anxiety, depression, and
												high levels of stress are common in HDR students, and
												academia more broadly. In recognition of these concerns,
												Sydney IBS has developed a{" "}
												<span className="text-sky-700     my-3  hover:underline cursor-pointer ">
													Mental Health Strategy
												</span>{" "}
												which prioritises accessible mental health services. The
												Counselling Centre offers expert advice on mental health
												issues, as well as common HDR concerns such as:
											</p>
										</div>
										<div className="text-justify">
											<h1 className="text-sky-700 font-bold text-xl my-3">
												Guidance on the supervision relationship
											</h1>
											<p className="my-2">
												If you feel your supervision relationship is becoming
												unproductive, you should seek guidance and advice as
												soon as possible. Supervision issues can range from
												simple miscommunications to authorship disputes and
												persistent bullying, which is{" "}
												<span className="text-sky-700     my-3  hover:underline cursor-pointer ">
													not accepted at Sydney IBS
												</span>
												. If you believe your supervisor has acted contrary to
												the Code of Conduct, there are a range of options
												available to you. These include:{" "}
											</p>
											<ol>
												<li>
													1. Ascertain whether you and your supervisor are both
													abiding by the Sydney IBS
													<span className="text-sky-700     my-3  hover:underline cursor-pointer ">
														Code of Conduct{" "}
													</span>{" "}
													and the Sydney IBS
													<span className="text-sky-700     my-3  hover:underline cursor-pointer ml-1 ">
														Guideline: higher degree by research - University,
														candidate and supervisor responsibilities
													</span>
													;
												</li>
												<li>
													2. If you feel your supervisor is not abiding by these
													policies and guidelines, or is not performing their
													responsibilities, send them a polite email suggesting
													a meeting or some suggestions as to how the issue may
													be resolved;
												</li>
												<li>
													3. If you feel you cannot contact your supervisor
													directly about the issue, you can contact your HDR
													Convenor, another member of your supervisory panel, or
													a trusted staff member for advice;
												</li>
												<li>
													4. If the issue persists, contact your{" "}
													<span className="text-sky-700     my-3  hover:underline cursor-pointer ">
														College Dean or Student Advisor
													</span>
													;
												</li>
												<li>
													5. If you feel you need more confidential, impartial
													advice, contact the{" "}
													<span className="text-sky-700     my-3  hover:underline cursor-pointer ">
														Dean of Students
													</span>
												</li>
												<li>
													6. If you are not satisfied the issue has been
													resolved, the last point of contact for formal
													complaints is the{" "}
													<span className="text-sky-700     my-3  hover:underline cursor-pointer ">
														Pro Vice-Chancellor (Research & Research Training)
													</span>
													.
												</li>
											</ol>
											<p className="my-2">
												If, after you have taken the above steps, you wish to
												make a formal complaint in relation to supervision,
												Sydney IBS has a clear procedure on{" "}
												<span className="text-sky-700     my-3  hover:underline cursor-pointer ">
													student complaint resolution
												</span>
												.
											</p>
										</div>

										<div className="text-justify">
											<h1 className="text-sky-700 text-xl font-bold  my-3">
												Access and inclusion
											</h1>
											<p className="my-2">
												<span className="text-sky-700     my-3  hover:underline cursor-pointer ">
													Access and Inclusion
												</span>{" "}
												is an educative hub on practices inclusive of disability
												within the Australian National University community.
											</p>
											<p className="my-2">Access and Inclusion aims to:</p>
											<li>
												Raise awareness and understanding of disability issues
												with all students and staff;
											</li>
											<li>
												Enable students with disability to participate fully in
												University life.
											</li>

											<p className="my-2">
												Access and Inclusion aims to be at the forefront of
												disability services provision in higher education by
												using evidence-based practice that leverages the
												University's strength as one of Australia's leading
												universities
											</p>
										</div>
										<div className="text-justify">
											<h1 className="text-sky-700 text-xl font-bold  my-3">
												Sydney IBS Ally Network & Queer* Department
											</h1>
											<p className="my-2">
												Sydney IBS has an established{" "}
												<span className="text-sky-700     my-3  hover:underline cursor-pointer ">
													Ally Network
												</span>{" "}
												of staff and students who strongly support the
												University in making this an environment where all
												people can safely work and study free of discrimination
												or harassment, particularly members of the GLBTIQQA
												community.
											</p>
											<p className="my-2">
												Sydney IBS also has an active{" "}
												<span className="text-sky-700     my-3  hover:underline cursor-pointer ">
													Queer* Department
												</span>{" "}
												and a{" "}
												<span className="text-sky-700     my-3  hover:underline cursor-pointer ">
													Queer* House
												</span>{" "}
												for all queer* students.{" "}
											</p>
										</div>
										<div className="text-justify">
											<h1 className="text-sky-700 text-xl font-bold  my-3">
												Childcare on campus
											</h1>
											<p>
												There are several childcare options based on or near the
												Sydney IBS Campus:
											</p>
											<li className="text-sky-700     my-3  hover:underline cursor-pointer ">
												The University Preschool and Child Care Centre
											</li>
											<li className="text-sky-700     my-3  hover:underline cursor-pointer ">
												HERITAGE Early Childhood Centre
											</li>
											<li className="text-sky-700     my-3  hover:underline cursor-pointer ">
												Acton Early Childhood Centre
											</li>
										</div>
										<div className="text-justify">
											<h1 className="text-sky-700 text-xl font-bold  my-3">
												Sydney IBS Campus facilities
											</h1>
											<p>
												Sydney IBS has a{" "}
												<span className="text-sky-700     my-3  hover:underline cursor-pointer ">
													range of facilities
												</span>{" "}
												and centres to make student life enjoyable.
											</p>
										</div>
									</article>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Track;
