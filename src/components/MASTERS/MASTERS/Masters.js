import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import finance from "../../../Carosel/Asset/finance.jpg";
import economics from "../../../Carosel/Asset/economics.jpg";
import business from "../../../Carosel/Asset/business law.jpg";
import Insurance from "../../../Carosel/Asset/insurance.jpg";
import Management from "../../../Carosel/Asset/management .jpg";
import IBusiness from "../../../Carosel/Asset/International-Business.png";

const Masters = () => {
	
	return (
		<>
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[110px] shadow ">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-gray-100 lg:px-8 px-3 py-3 pb-10  ">
								{/* breadcrumb added here */}
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
											<p>Academic programs</p>
										</li>
										<li>
											<p className="text-black">
												{" "}
												Masters of philosophy (MPhil)
											</p>
										</li>
									</ul>
									{/* breadcrumb end here */}
								</div>

								{/* MPhil intro start here*/}
								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="text-sky-700 text-xl font-bold lg:px-20 px-3 ">
										Master of Philosophy (MPhil)
									</h1>
									<p className=" lg:px-20 px-3 text-justify mt-3 ">
										Sydney IBS offers master programmes across the complete
										spectrum of business, economics, management, and related
										fields.
									</p>
									<p className=" lg:px-20 px-3 text-justify mt-3 ">
										Master applicants at the University are obliged to submit
										theses that are no more than 100,000 words. The thesis must
										be an original work that not only exhibits the candidate's
										capacity for world-class research but also significantly
										advances knowledge in the field in which they are
										specialising. PhD applicants are obliged to take a number of
										graduate-level coursework units before finishing their
										thesis, typically during their first year of study, to help
										them with finishing their dissertation.
									</p>
									<p className="text-justify mt-3 lg:px-20 px-3">
										By discipline, admission standards, programme layout, and
										length vary. Before submitting an application for admission
										to a PhD programme, you should carefully evaluate all
										discipline-specific material.
									</p>
									<p className="text-justify mt-3 lg:px-20 px-3">
										Read more about Sydney IBS
										<a href="/mastersprogram" className="text-sky-700 px-2">
											MPhil programs
										</a>
										.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* MPhil main content start here */}
					<div className="lg:mx-[110px] pb-10">
						<div className="flex bg-sky-700 shadow p-5 mb-5 gap-5">
							{/* MPhil finance */}
							<div>
								<a href="/financeresearch">
									<img
										src={finance}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="/financeresearch" className="text-2xl text-white">
									Islamic Banking and Finance
								</a>
								<a href="/financeresearch">
									<p className="mb-3 text-white mt-5 text-justify">
										Islamic banking, Islamic finance, or Sharia-compliant
										finance is banking or financing activity that complies with
										Sharia and its practical application through the development
										of Islamic economics.
									</p>
								</a>
								<p className="text-right  cursor-pointer">
									<a href="/financeresearch" className="underline text-white">
										Find out more
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-3 w-2 "
										></FontAwesomeIcon>
									</a>
								</p>
							</div>
						</div>

						{/* MPhil economics */}
						<div className="flex bg-sky-700 shadow p-3 mb-5 gap-5">
							<div>
								<a href="/economicsresearch">
									<img
										src={economics}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="/economicsresearch">
									<p className="text-2xl mb-5 text-white">Islamic Economics</p>

									<p className="mb-3 text-white text-justify">
										It tries to promote human brotherhood, socio-economic
										justice and the well-being of all through an integrated role
										of moral values, market mechanism, families.Islamic
										economics refers to the
									</p>
								</a>
								<p className="text-right  cursor-pointer text-white">
									<a href="/economicsresearch">Find out more</a>
									<FontAwesomeIcon
										icon={faChevronRight}
										className="h-3 w-2"
									></FontAwesomeIcon>
								</p>
							</div>
						</div>

						{/* MPhil Islamic business */}

						<div className="flex bg-sky-700 p-3 mb-5 gap-5">
							<div>
								<a href="/businesslawresearch">
									<img
										src={business}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="/businesslawresearch">
									<p className="text-2xl  mb-5 text-white">
										Islamic Business Law
									</p>
									<p className="mb-3 text-white text-justify">
										Shariah restrictions on certain financial and trade
										transactions is the raison d’être for the emergence of
										Islamic banking. It is, therefore, important for any student
										of Islamic banking to grasp
									</p>
								</a>
								<p className="text-right  cursor-pointer text-white">
									<a href="/businesslawresearch">Find out more</a>
									<FontAwesomeIcon
										icon={faChevronRight}
										className="h-3 w-2"
									></FontAwesomeIcon>
								</p>
							</div>
						</div>

						{/* MPhil islamic insurance  */}

						<div className="flex bg-sky-700 p-3 mb-5 gap-5">
							<div>
								<a href="/insuranceresearch">
									<img
										src={Insurance}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="/insuranceresearch">
									<p className="text-2xl text-white mb-5">Islamic Insurance</p>
									<p className="mb-3 text-white text-justify">
										A Shariah-compliant insurance that can be renewed online.
										DISCOVER. A Shariah-compliant motor insurance plan that can
										be easily renewed online , important for any student of
										Islamic
									</p>
								</a>
								<p className="text-right  cursor-pointer text-white">
									<a href="/insuranceresearch">Find out more</a>
									<FontAwesomeIcon
										icon={faChevronRight}
										className="h-3 w-2"
									></FontAwesomeIcon>
								</p>
							</div>
						</div>

						{/* MPhil management */}
						<div className="flex bg-sky-700 p-3 mb-5 gap-5">
							<div>
								<a href="/managementresearch">
									<img
										src={Management}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="/managementresearch">
									<p className="text-2xl mb-5 text-white"> Management</p>
									<p className="mb-3 text-white text-justify">
										Management is the coordination and administration of tasks
										to achieve a goal. Such administration activities include
										setting the organization’s strategy and coordinating the
										efforts of staff to
									</p>
								</a>
								<p className="text-right  cursor-pointer text-white">
									Find out more
									<FontAwesomeIcon
										icon={faChevronRight}
										className="h-3 w-2"
									></FontAwesomeIcon>
								</p>
							</div>
						</div>

						{/* MPhil international business */}
						<div className="flex bg-sky-700 p-3 mb-5 gap-5">
							<div>
								<a href="/Intbusinessresearch">
									<img
										src={IBusiness}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="/Intbusinessresearch">
									<p className="text-2xl text-white  mb-5">
										International Business
									</p>
									<p className="mb-3 text-white text-justify">
										International business relates to any situation where the
										production or distribution of goods or services crosses
										country borders. Globalization—the shift toward a more
										International business
									</p>
								</a>
								<p className="text-right  cursor-pointer text-white">
									Find out more
									<FontAwesomeIcon
										icon={faChevronRight}
										className="h-3 w-2"
									></FontAwesomeIcon>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Masters;
