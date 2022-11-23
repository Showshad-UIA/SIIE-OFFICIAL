import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SibsLogo from "../../../Carosel/Asset/SydneyIslamicLogo-9-01.png";
import React from "react";
import explore1 from "../../../Carosel/Asset/finance.jpg";
import explore2 from "../../../Carosel/Asset/finance.png";
import explore3 from "../../../Carosel/Asset/news 3.jpg";
import ProfileSidebar from "./ProfileSidebar";

const Profile = () => {
	return (
		<div className="container mx-auto mb-10 ">
			<div class=" p-2  w-full  ">
				<div
					class="flex flex-col  lg:flex-row  
                    shadow-md lg:mx-[100px]   "
				>
					<div className="flex flex-col px-2">
						<div className="">
							<div className=" lg:w-full    ">
								<div className=" bg-base-100 lg:px-8 px-3 py-3 pb-10  ">
									<h1 className="text-sky-700 text-xl font-bold lg:px-20 px-3 ">
										About SIBS
									</h1>

									<div className="  ">
										<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>

										<p className="  text-justify font-serif lg:px-20">
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
									</div>
								</div>
							</div>
						</div>
						<div className="lg:mx-24 pb-10">
							<div className="">
								<div class="px-3 ">
									<div class="grid grid-cols-1 md:grid-cols-2 gap-10  lg:grid-cols-3 ">
										<div className="bg-gray-100 ">
											<div className=" mt-3 py-10 px-5">
												<a>
													{" "}
													<h2 className="text-2xl  text-sky-700 cursor-pointer hover:underline ">
														#1 Islamic business school in Australia
													</h2>
													<p>
														ANU is Australia's top university and ranked in the
														top 30 globally.*
													</p>
													<p>*QS World University Rankings 2023</p>
												</a>
											</div>
										</div>

										<div className="bg-gray-200 ">
											<div className="mt-3 py-10 px-5">
												<a>
													<h2 className="text-2xl text-sky-700 cursor-pointer hover:underline">
														World-class research
													</h2>
													<p>
														Research agendas focused on issues that are highly
														significant for organisations, the Australian
														economy and society at large
													</p>
												</a>
											</div>
										</div>
										<div className=" py-10 bg-gray-200">
											<a href=""></a>
											<div className="mt-3 mx-5">
												<a href="/">
													<h2 className="text-2xl text-sky-700 cursor-pointer hover:underline">
														Educational excellence
													</h2>
													<p>
														When it comes to producing employable graduates, ANU
														is number 1 in Australia and 20th globally*.
													</p>
													<p>
														*The Global University Employability Ranking 2021
													</p>
												</a>
											</div>
										</div>
										<div className="py-10 bg-gray-200  ">
											<div className=" mt-3 mx-5">
												<a href="/">
													{" "}
													<h2 className="text-2xl text-sky-700 cursor-pointer hover:underline">
														Global experience
													</h2>
													<p>
														ANU has been named the 16th most international
														university in the world and the most international
														in Australia.*
													</p>
													<p>
														*Times Higher Education Rankings: The World's Most
														International Universities 2022
													</p>
												</a>
											</div>
										</div>

										<div className="bg-gray-200 py-10 ">
											<div className="mt-3 mx-3">
												<a>
													<h2 className="text-2xl text-sky-700 cursor-pointer hover:underline">
														Industry engagement
													</h2>
													<p>
														Our goal is to achieve real-world results for our
														partners in in business, government and
														not-for-profit organisations.
													</p>
												</a>
												<p className="text-black text-sm">15 OCT 2022</p>
											</div>
										</div>
										<div className="bg-gray-200 py-10 ">
											<div className="mt-3 mx-5">
												<a>
													<h2 className="text-2xl text-sky-700 cursor-pointer hover:underline">
														Excellent facilities
													</h2>
													<p>
														The business and economics precinct is a welcoming
														environment to study, research and network, with
														state-of-the-art classrooms, open meeting spaces and
														a popular café. Explore our building and campus via
														the CBE Virtual Tour.
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
	);
};

export default Profile;
