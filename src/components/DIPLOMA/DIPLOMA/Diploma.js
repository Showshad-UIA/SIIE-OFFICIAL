import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import finance from "../../../Carosel/Asset/Diploma/finance.jpg";
import economics from "../../../Carosel/Asset/Diploma/economics.jpg";
import business from "../../../Carosel/Asset/Diploma/business.jpg";
import Insurance from "../../../Carosel/Asset/Diploma/insurance.jpg";

const Diploma = () => {
	return (
		<>
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[100px] shadow ">
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
											<p className="text-black"> Graduate diploma</p>
										</li>
									</ul>
									{/* breadcrumb ended here */}
								</div>

								{/* Graduate Diploma program summary */}
								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="text-sky-700 text-2xl font-bold lg:px-20 px-3 ">
										Graduate Diploma
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
										specialising. diploma applicants are obliged to take a
										number of graduate-level coursework units before finishing
										their thesis, typically during their first year of study, to
										help them with finishing their dissertation.
									</p>
									<p className="text-justify mt-3 lg:px-20 px-3">
										By discipline, admission standards, programme layout, and
										length vary. Before submitting an application for admission
										to a diploma programme, you should carefully evaluate all
										discipline-specific material.
									</p>

									{/* Graduate diploma program page added here */}

									<p className="text-justify mt-3 lg:px-20 px-3">
										Read more about Sydney IBS
										<a href="/gdiplomaprogram" className="text-sky-700 px-2">
											Graduate diploma programs
										</a>
										.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Graduate Diploma courses added here */}

					<div className="lg:mx-[110px] pb-10">
						{/* Diploma in Islamic Banking and Finance */}
						<div className="flex bg-sky-700 shadow p-3 mb-5 gap-5">
							<div>
								<a href="/diplomafinance">
									<img
										src={finance}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="/diplomafinance" className="text-2xl text-white">
									Graduate Diploma in Islamic Banking and Finance
								</a>
								<a href="/diplomafinance">
									<p className="mb-3 text-white mt-5 text-justify">
										Islamic banking, Islamic finance, or Sharia-compliant
										finance is banking or financing activity that complies with
										Sharia and its practical application through the development
										of Islamic economics.
									</p>
								</a>
								<p className="text-right  cursor-pointer">
									<a href="/diplomafinance" className="underline text-white">
										Find out more
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-3 w-2 "
										></FontAwesomeIcon>
									</a>
								</p>
							</div>
						</div>

						{/* Diploma in Islamic Economics */}

						<div className="flex bg-sky-700 shadow p-3 mb-5 gap-5">
							<div>
								<a href="/diplomaeconomics">
									<img
										src={economics}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="/diplomaeconomics">
									<p className="text-2xl mb-5 text-white">
										Graduate Diploma in Islamic Economics
									</p>

									<p className="mb-3 text-justify text-white">
										It tries to promote human brotherhood, socio-economic
										justice and the well-being of all through an integrated role
										of moral values, market mechanism, families.Islamic
										economics refers to the
									</p>
								</a>
								<p className="text-right  cursor-pointer text-white">
									<a href="/diplomaeconomics">Find out more</a>
									<FontAwesomeIcon
										icon={faChevronRight}
										className="h-3 w-2"
									></FontAwesomeIcon>
								</p>
							</div>
						</div>

						{/* Diploma in Islamic Business Law */}

						<div className="flex bg-sky-700 p-3 mb-5 gap-5">
							<div>
								<a href="#">
									<img
										src={business}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="#">
									<p className="text-2xl  mb-5 text-white">
										Graduate Diploma in Islamic Business Law
									</p>
									<p className="mb-3 text-justify text-white">
										Shariah restrictions on certain financial and trade
										transactions is the raison d’être for the emergence of
										Islamic banking. It is, therefore, important for any student
										of Islamic banking to grasp
									</p>
								</a>
								<p className="text-right  cursor-pointer text-white">
									<a href="#">Find out more</a>
									<FontAwesomeIcon
										icon={faChevronRight}
										className="h-3 w-2"
									></FontAwesomeIcon>
								</p>
							</div>
						</div>

						{/* Diploma in Islamic Insurance */}

						<div className="flex bg-sky-700 p-3 mb-5 gap-5">
							<div>
								<a href="#">
									<img
										src={Insurance}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="#">
									<p className="text-2xl text-white mb-5">
										Graduate Diploma in Islamic Insurance
									</p>
									<p className="mb-3 text-white text-justify">
										A Shariah-compliant insurance that can be renewed online.
										DISCOVER. A Shariah-compliant motor insurance plan that can
										be easily renewed online , important for any student of
										Islamic
									</p>
								</a>
								<p className="text-right  cursor-pointer text-white">
									<a href="#">Find out more</a>
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

export default Diploma;
