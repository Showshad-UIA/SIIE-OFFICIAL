import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InterestPolicy = () => {
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
											<p className="text-black">
												{" "}
												Higher Degree Research Policies
											</p>
										</li>
									</ul>
									{/* breadcrumb ended */}
								</div>

								{/* Sidebar added here */}

								<div className="lg:px-20 ">
									<div>
										<h1 className="mb-3 border-t-4 border-sky-700 mt-2"></h1>
										<h1 className=" text-xl mb-3 text-sky-700 font-bold ">
											CONFLICT OF INTEREST POLICY
										</h1>
									</div>
									<div className="flex flex-row bg-gray-100">
										<div className="flex flex-col w-56 bg-base-100  overflow-hidden">
											<ul className="flex flex-col py-4">
												<li>
													<a
														href="#"
														className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
													>
														<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
															<i className="bx bx-home"></i>
														</span>
														<span className="text-sm font-medium">
															Section 1
														</span>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
													>
														<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
															<i className="bx bx-music"></i>
														</span>
														<span className="text-sm font-medium">
															Section 2
														</span>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
													>
														<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
															<i className="bx bx-drink"></i>
														</span>
														<span className="text-sm font-medium">
															Section 3
														</span>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
													>
														<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
															<i className="bx bx-shopping-bag"></i>
														</span>
														<span className="text-sm font-medium">
															Section 4
														</span>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
													>
														<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
															<i className="bx bx-chat"></i>
														</span>
														<span className="text-sm font-medium">
															Section 5
														</span>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
													>
														<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
															<i className="bx bx-user"></i>
														</span>
														<span className="text-sm font-medium">
															Section 6
														</span>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
													>
														<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
															<i className="bx bx-bell"></i>
														</span>
														<span className="text-sm font-medium">
															Section 7
														</span>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
													>
														<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
															<i className="bx bx-log-out"></i>
														</span>
														<span className="text-sm font-medium">
															Section 8
														</span>
													</a>
												</li>
											</ul>
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

export default InterestPolicy;
