import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cost = () => {
	return (
		<>
			<div className="container mx-auto  lg:mb-16 lg:mt-7  ">
				<div className="lg:mx-[110px] shadow ">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-gray-100 lg:px-8 px-3 py-3 pb-10  ">
								{/* breadcrumb added here */}
								<div className="text-md breadcrumbs md:px-1   lg:mx-[55px] ">
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
											<p className="text-black"> Discover</p>
										</li>
										<li>
											<p className="text-black"> Cost of studying </p>
										</li>
									</ul>
								</div>
								{/* breadcrumb end */}

								{/* About the education systems*/}

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="text-sky-700 text-xl font-bold lg:px-20 px-3 ">
                                    How much will it cost to study in Australia?
									</h1>
									<h1 className="mt-2 text-sky-700 text-xl font-bold lg:px-20 px-3 ">
                                    Wondering how to manage your expenses in Australia? Here’s our list of estimates to help!
									</h1>

									<p className=" lg:px-20 px-3 text-justify mt-3 ">
									Studying abroad can be an expensive affair but planning your budget smartly can help you get a hold on your finances effectively. Before you depart from Bangladesh, ensure that you consider expenses like accommodation, food, health coverage and travel along with your tuition fee when calculating the estimated cost of studying in Australia. This will help you plan your budget more effectively.
									</p>
									<h1 className="mt-2 text-sky-700 text-xl font-bold lg:px-20 px-3 ">
                                    1. Tuition fee is your prime expenditure
									</h1>

									<p className=" lg:px-20 px-3 text-justify mt-3 ">
									Your expenditure on tuition fee depends on the type of qualification and the university or school you opt for. For instance, veterinary and medical degrees cost substantially more than other degrees. The average tuition fees at one of Australia’s tertiary institutions ranges between AUD 20,000 and AUD 30,000 a year.
									</p>
									
									

									{/* Australian Qualifications Framework info */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cost;
