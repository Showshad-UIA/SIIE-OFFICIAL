import {
	faBookOpen,
	faBuildingColumns,
	faGlobe,
	faHandshake,
	faHouse,
	faLightbulb,
	faMosque,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import governanceBody from "../../../Carosel/Asset/governance.jpg";
import academics from "../../../Carosel/Asset/academics.jpg";
import accrediation from "../../../Carosel/Asset/Accreditation.png";
import facilities from "../../../Carosel/Asset/Facilities .jpg";
import colleborate from "../../../Carosel/Asset/colleborate.jpg";

const Profile = () => {
	return (
		<div className="container mx-auto mb-10 ">
			<div class=" p-2  w-full  ">
				<div
					class="flex flex-col  lg:flex-row  
                     lg:mx-[100px]  shadow-md "
				>
					<div className="flex flex-col mt-5 ">
						<div className="">
							<div className=" lg:w-full    ">
								<div className=" bg-base-100  px-3 py-3 pb-10  ">
									

									<div className="  ">
										<h1 className=" border-t-4 border-sky-700 lg:mx-20 mx-3 mt-5"></h1>
										<h1 className="text-sky-700 text-xl font-bold lg:px-20 px-3 my-3 ">
										About SIBS
									</h1>

										<p className="  text-justify font-serif lg:px-20 ">
											Sydney Islamic Business School (SIBS) is the first Islamic
											Business School in Australia. We aim to be a leading
											teaching and research focused business school by providing
											excellent Islamic Business higher education. We offer
											degree programs across a range of academic disciplines
											from doctoral, undergraduate, and graduate diploma level
											in the fields of Islamic Banking and Finance, Islamic
											Business Law, Islamic Economics and Islamic
											Entrepreneurship and Innovation.
										</p>
										<p className="text-justify font-serif mt-2 lg:px-20">
											We aim to develop the capabilities of graduates, to serve
											the community and to work for an inclusive and sustainable
											global economy. Our academic activities, curricula, and
											organisational practices are derived from Islamic
											principles and correlated with the high standards of the
											Australian Higher Education Legal Framework. Our academic
											syllabus is structured by input from globally renowned
											Islamic business academia as well as industry experts. We
											warmly welcome everyone from all over the world to come
											join the community that is the Sydney Islamic Business
											School.
										</p>
										<h1 className="text-sky-700 text-xl font-bold font-serif mt-4 text-justify lg:px-20">
											Vision
										</h1>
										<p className="text-justify font-serif mb-10 lg:px-20">
											To be the leader in Islamic business higher education by
											offering graduates with education, training, research, and
											collaboration that will lead to careers and make
											meaningful contributions to society.
										</p>
										<h1 className="mb-3 border-b-4 border-sky-700 lg:mx-20 mx-3 "></h1>
									</div>
								</div>
							</div>
						</div>
						<div className="lg:mx-20 pb-10">
							<div className="">
								<div class="px-3 ">
									<div class="grid grid-cols-1 md:grid-cols-2 gap-10  lg:grid-cols-3 ">
										<div className="shadow-md">
											<div className=" mt-3 py-10 px-5">
												<div className="text-center my-3">
													<FontAwesomeIcon
														icon={faMosque}
														className="w-28 h-20 hover:text-sky-700 text-blue-500  "
													></FontAwesomeIcon>
												</div>
												<a>
													{" "}
													<h2 className="text-2xl  text-sky-700 cursor-pointer hover:underline text-center font-serif">
														#1 Islamic business school in Australia
													</h2>
													<p className="text-center my-3 text-black font-serif">
														SYDNEY IBS is Australia's top university and ranked in the
														top 30 globally.*
													</p>
													<p className="font-serif text-black text-center">
														*QS World University Rankings 2023
													</p>
												</a>
											</div>
										</div>

										<div className="shadow-md ">
											<div className="mt-3 py-10 px-5">
												<div className="text-center my-3">
													<FontAwesomeIcon
														icon={faLightbulb}
														className="w-28 h-20 hover:text-sky-700 text-blue-500"
													></FontAwesomeIcon>
												</div>
												<a>
													<h2 className="text-2xl text-sky-700 cursor-pointer hover:underline text-center font-serif">
														World-class research
													</h2>
													<p className="text-center my-3 text-black font-serif">
														Research agendas focused on issues that are highly
														significant for organisations, the Australian
														economy and society at large
													</p>
												</a>
											</div>
										</div>
										<div className=" py-10 shadow-md">
											<div className="mt-3 mx-5">
												<div className="text-center my-5">
													<FontAwesomeIcon
														icon={faBuildingColumns}
														className="w-28 h-20 hover:text-sky-700 text-blue-500"
													></FontAwesomeIcon>
												</div>
												<a href="/">
													<h2 className="text-2xl text-sky-700 cursor-pointer hover:underline text-center font-serif">
														Educational excellence
													</h2>
													<p className="text-center my-3 text-black font-serif">
														When it comes to producing employable graduates, SYDNEY IBS
														is number 1 in Australia and 20th globally*.
													</p>
													<p className="text-center font-serif text-black">
														*The Global University Employability Ranking 2021
													</p>
												</a>
											</div>
										</div>
										<div className="py-10 shadow-md  ">
											<div className=" mt-3 mx-5">
												<div className="text-center">
													<FontAwesomeIcon
														icon={faGlobe}
														className="w-28 h-20 hover:text-sky-700 text-blue-500"
													></FontAwesomeIcon>
												</div>
												<a href="/">
													{" "}
													<h2 className="text-2xl text-sky-700 cursor-pointer hover:underline text-center font-serif">
														Global experience
													</h2>
													<p className="text-black text-center mt-3 font-serif">
														SYDNEY IBS has been named the 16th most international
														university in the world and the most international
														in Australia.*
													</p>
													<p className="text-center my-3 text-black font-serif">
														*Times Higher Education Rankings: The World's Most
														International Universities 2022
													</p>
												</a>
											</div>
										</div>

										<div className="shadow-md py-10 ">
											<div className="mt-3 mx-3">
												<div className="text-center">
													<FontAwesomeIcon
														icon={faHandshake}
														className="w-28 h-24 hover:text-sky-700 text-blue-500"
													></FontAwesomeIcon>
												</div>
												<a>
													<h2 className="text-2xl text-sky-700 cursor-pointer hover:underline text-center font-serif">
														Industry engagement
													</h2>
													<p className="text-center my-3 text-black font-serif">
														Our goal is to achieve real-world results for our
														partners in in business, government and
														not-for-profit organisations.
													</p>
												</a>
											</div>
										</div>
										<div className="bg-white shadow-md py-10 ">
											<div className="mt-3 mx-5">
												<div className="text-center">
													<FontAwesomeIcon
														icon={faHouse}
														className="w-28 h-20 hover:text-sky-700 text-blue-500"
													></FontAwesomeIcon>
												</div>
												<a>
													<h2 className="text-2xl text-sky-700 cursor-pointer hover:underline text-center font-serif">
														Excellent facilities
													</h2>
													<p className="text-center font-serif text-black">
														The business and economics precinct is a welcoming
														environment to study, research and network, with
														state-of-the-art classrooms, open meeting spaces and
														a popular café. Explore our building and campus via
														the{" "}
														<p>
															<span className="text-sky-700 cursor-pointer hover:underline font-serif ">
																CBE Virtual Tour
															</span>
															.
														</p>
													</p>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="lg:mx-24 pb-10">
								<div className="">
									<div class="px-3 ">
										<div class="grid grid-cols-1 md:grid-cols-2 gap-10  lg:grid-cols-2 ">
											<div className="shadow-md py-8 ">
												<div className="mt-3 mx-3 flex gap-5">
													<div className=" lg:w-[30%]">
														<img
															src={governanceBody}
															alt=""
															className="lg:w-52 lg:h-28 "
														/>
													</div>
													<div className="lg:w-[70%] mx-2">
														<a href="/LeadershipGovernence">
															<h2 className="text-2xl font-serif text-sky-700 cursor-pointer hover:underline  ">
																Governance Structure
															</h2>
															<p className="text-justify my-3 text-black font-serif ">
																Our goal is to achieve real-world results for
																our partners in in business, government and
																not-for-profit organisations.
															</p>
														</a>
														<a href="/LeadershipGovernence">
															<p className="cursor-pointer hover:underline text-sky-700 text-right font-serif">
																Find out more..
															</p>
														</a>
													</div>
												</div>
											</div>

											<div className="shadow-md py-8 ">
												<div className="mt-3 mx-3 flex gap-5">
													<div className=" lg:w-[30%]">
														<img
															src={academics}
															alt=""
															className="lg:w-52 lg:h-28"
														/>
													</div>
													<div className="lg:w-[70%] mx-2">
														<a href="/AcademicStructure">
															<h2 className="text-2xl text-sky-700 cursor-pointer hover:underline  font-serif">
																Academic Structure
															</h2>
															<p className="text-justify my-3 text-black font-serif">
																Our goal is to achieve real-world results for
																our partners in in business, government and
																not-for-profit organisations.
															</p>
														</a>
														<a href="/AcademicStructure">
															<p className="cursor-pointer hover:underline text-sky-700 text-right font-serif">
																Find out more..
															</p>
														</a>
													</div>
												</div>
											</div>
											<div className="shadow-md py-8 ">
												<div className="mt-3 mx-3 flex gap-5">
													<div className=" lg:w-[30%]">
														<img
															src={accrediation}
															alt=""
															className="lg:w-52 lg:h-28"
														/>
													</div>
													<div className="lg:w-[70%] mx-2">
														<a>
															<h2 className="text-2xl text-sky-700 cursor-pointer hover:underline  font-serif">
																Accreditation
															</h2>
															<p className="text-justify my-3 text-black font-serif">
																Our goal is to achieve real-world results for
																our partners in in business, government and
																not-for-profit organisations.
															</p>
														</a>
														<a href="#">
															<p className="cursor-pointer hover:underline text-sky-700 text-right font-serif">
																Find out more..
															</p>
														</a>
													</div>
												</div>
											</div>
											<div className="shadow-md py-8 ">
												<div className="mt-3 mx-3 flex gap-5">
													<div className=" lg:w-[30%] ">
														<img
															src={facilities}
															alt=""
															className="lg:w-52 lg:h-28"
														/>
													</div>
													<div className="lg:w-[70%] mx-2">
														<a>
															<h2 className="text-2xl text-sky-700 cursor-pointer hover:underline  font-serif">
																Our Facilities
															</h2>
															<p className="text-justify my-3 text-black font-serif">
																Our goal is to achieve real-world results for
																our partners in in business, government and
																not-for-profit organisations.
															</p>
														</a>
														<a href="">
															<p className="cursor-pointer hover:underline text-sky-700 text-right font-serif">
																Find out more..
															</p>
														</a>
													</div>
												</div>
											</div>

											<div className="shadow-md py-8 ">
												<div className="mt-3 mx-3 flex gap-5">
													<div className=" lg:w-[30%]">
														<img
															src={colleborate}
															alt=""
															className="lg:w-52 lg:h-28"
														/>
													</div>
													<div className="lg:w-[70%] mx-2">
														<a>
															<h2 className="text-2xl text-sky-700 cursor-pointer hover:underline  font-serif">
																Collaborations
															</h2>
															<p className="text-justify my-3 text-black font-serif">
																Our goal is to achieve real-world results for
																our partners in in business, government and
																not-for-profit organisations.
															</p>
														</a>
														<a href="">
															<p className="cursor-pointer hover:underline text-sky-700 text-right font-serif">
																Find out more..
															</p>
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
			</div>
		</div>
	);
};

export default Profile;
