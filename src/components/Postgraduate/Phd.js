import React from "react";
import PhdMaincontent from "./PhdMaincontent";
import PhdRightSideBar from "./PhdRightSideBar";
import finance from "../../Carosel/Asset/Islamic finance.jpg";
import economics from "../../Carosel/Asset/economics.jpg";
import business from "../../Carosel/Asset/business.jpg";
import Insurance from "../../Carosel/Asset/Islamic insurance.jpg";
import Management from "../../Carosel/Asset/management.jpg";
import IBusiness from "../../Carosel/Asset/international-business.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Phd = () => {
	return (
		// <div className="container mx-auto  lg:mb-16 lg:mt-16 ">
		// 	<div className="lg:mx-[100px]">
		// 		<div className="grid   lg:grid-cols-2 sm:grid-cols-1">
		// 			<div className="shadow lg:w-full lg:mx-20  ">
		// 				<div className=" bg-base-100 lg:px-8 px-3  pb-10 ">
		// 					<div className="  ">
		// 						<h1 className=" mt-4 border-t-4 border-sky-700"></h1>
		// 						<h1 className="text-sky-700 text-xl font-bold text-justify mt-">
		// 							PhD Program
		// 						</h1>
		// 						<p className="  text-justify">
		// 							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
		// 							Quae, similique, nobis explicabo voluptate ab impedit earum
		// 							dignissimos placeat error dolorem repudiandae corrupti quidem
		// 							nisi expedita eum suscipit numquam dolor accusantium! Lorem
		// 							ipsum dolor sit amet, consectetur adipisicing elit. Quae,
		// 							similique, nobis explicabo voluptate ab impedit earum
		// 							dignissimos placeat error dolorem repudiandae corrupti quidem
		// 							nisi expedita eum suscipit numquam dolor accusantium! Lorem
		// 							ipsum dolor sit amet, consectetur adipisicing elit. Quae,
		// 							similique, nobis explicabo voluptate ab impedit earum
		// 							dignissimos placeat error dolorem repudiandae corrupti quidem
		// 							nisi expedita eum suscipit numquam dolor accusantium! Lorem
		// 							ipsum dolor sit amet, consectetur adipisicing elit. Quae,
		// 							similique, nobis explicabo voluptate ab impedit earum
		// 							dignissimos placeat error dolorem repudiandae corrupti quidem
		// 							nisi expedita eum suscipit numquam dolor accusantium! eum
		// 							suscipit numquam dolor accusantium! Lorem ipsum dolor sit
		// 							amet, consectetur adipisicing elit. Quae, similique, nobis
		// 							explicabo voluptate ab impedit earum dignissimos placeat error
		// 							dolorem repudiandae corrupti quidem nisi expedita eum suscipit
		// 							numquam dolor accusantium! Lorem ipsum dolor sit amet,
		// 							consectetur adipisicing elit. Quae, similique, nobis explicabo
		// 							voluptate ab impedit earum dignissimos placeat error dolorem
		// 							repudiandae corrupti quidem nisi expedita eum suscipit numquam
		// 							dolor accusantium!
		// 						</p>
		// 						<h1 className=" mt-3 border-t-4 border-sky-700"></h1>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div className="lg:ml-[200px] mt-4">
		// 				<PhdRightSideBar></PhdRightSideBar>
		// 			</div>
		// 		</div>
		// 		<div>
		// 			<PhdMaincontent></PhdMaincontent>
		// 		</div>
		// 	</div>
		// </div>
		<>
			<div className="container mx-auto  lg:mb-5">
				<div className="lg:mx-[100px] shadow">
					<div className="text-sm breadcrumbs  lg:px-3 md:px-6 px-6  lg:mx-[100px] ">
						<ul>
							<li>
								<a href="/">Home</a>
							</li>

							<li>
								<a href="/phdfinance">PhD in Islamic banking and finance</a>
							</li>
							<li>
								<a href="/phdeconomics">PhD in Islamic economics</a>
							</li>
							<li>
								<a href="/phdbusinesslaw">PhD in Islamic business law</a>
							</li>
							<li>
								<a href="/phdinsurance">PhD in Islamic Insurance</a>
							</li>
							<li>
								<a href="/phdmanagement">PhD in management</a>
							</li>
							<li>
								<a href="#">PhD in International business</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[100px] shadow ">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-base-100 lg:px-8 px-3 py-3 pb-10  ">
								<h1 className="text-sky-700 text-xl font-bold lg:px-20 px-3 ">
									Doctor of Philosophy (PhD)
								</h1>

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>

									<p className=" lg:px-20 px-3 text-justify mt-3 ">
										SIBS offers PhD programmes across the complete spectrum of
										business, economics, management, and related fields.
									</p>
									<p className=" lg:px-20 px-3 text-justify mt-3 ">
										PhD applicants at the University are obliged to submit
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
										<a href="#" className="text-sky-700 px-2">
											PhD programs
										</a>
										.
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="">
						<PhdFinanceAdditionalMain></PhdFinanceAdditionalMain>
					</div> */}

					<div className="lg:mx-[100px] pb-10">
						<div className="flex bg-sky-700 shadow p-5 mb-5 gap-10">
							<div>
								<a href="/phdfinance">
									<img
										src={finance}
										alt=""
										className="lg:h-28 lg:w-[280px] h-24 w-[300px]"
									/>
								</a>
							</div>
							<div>
								<a href="/phdfinance" className="text-2xl text-white">
									Islamic Banking and Finance
								</a>
								<a href="/phdfinance">
									<p className="mb-3 text-white mt-5">
										Islamic banking, Islamic finance, or Sharia-compliant
										finance is banking or financing activity that complies with
										Sharia and its practical application through the development
										of Islamic economics.
									</p>
								</a>
								<p className="text-right  cursor-pointer">
									<a href="/phdfinance" className="underline text-white">
										Find out more
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-3 w-2 "
										></FontAwesomeIcon>
									</a>
								</p>
							</div>
						</div>
						<div className="flex bg-sky-700 shadow p-5 mb-5 gap-10">
							<div>
								<a href="/phdeconomics">
									<img
										src={economics}
										alt=""
										className="lg:h-28 lg:w-[280px] h-24 w-[300px]"
									/>
								</a>
							</div>
							<div>
								<a href="/phdeconomics">
									<p className="text-2xl mb-5 text-white">Islamic Economics</p>

									<p className="mb-3 text-white">
										It tries to promote human brotherhood, socio-economic
										justice and the well-being of all through an integrated role
										of moral values, market mechanism, families.Islamic
										economics refers to the
									</p>
								</a>
								<p className="text-right  cursor-pointer text-white">
									<a href="/phdeconomics">Find out more</a>
									<FontAwesomeIcon
										icon={faChevronRight}
										className="h-3 w-2"
									></FontAwesomeIcon>
								</p>
							</div>
						</div>
						<div className="flex bg-sky-700 p-5 mb-5 gap-10">
							<div>
								<a href="/phdbusinesslaw">
									<img
										src={business}
										alt=""
										className="lg:h-28 lg:w-[280px] h-24 w-[300px]"
									/>
								</a>
							</div>
							<div>
								<a href="/phdbusinesslaw">
									<p className="text-2xl  mb-5 text-white">
										Islamic Business Law
									</p>
									<p className="mb-3 text-white">
										Shariah restrictions on certain financial and trade
										transactions is the raison d’être for the emergence of
										Islamic banking. It is, therefore, important for any student
										of Islamic banking to grasp
									</p>
								</a>
								<p className="text-right  cursor-pointer text-white">
									<a href="/phdbusinesslaw">Find out more</a>
									<FontAwesomeIcon
										icon={faChevronRight}
										className="h-3 w-2"
									></FontAwesomeIcon>
								</p>
							</div>
						</div>
						<div className="flex bg-sky-700 p-5 mb-5 gap-10">
							<div>
								<a href="/phdinsurance">
									<img
										src={Insurance}
										alt=""
										className="lg:h-28 lg:w-[280px] h-24 w-[300px]"
									/>
								</a>
							</div>
							<div>
								<a href="/phdinsurance">
									<p className="text-2xl text-white mb-5">Islamic Insurance</p>
									<p className="mb-3 text-white">
										A Shariah-compliant insurance that can be renewed online.
										DISCOVER. A Shariah-compliant motor insurance plan that can
										be easily renewed online , important for any student of
										Islamic
									</p>
								</a>
								<p className="text-right  cursor-pointer text-white">
									<a href="/phdinsurance">Find out more</a>
									<FontAwesomeIcon
										icon={faChevronRight}
										className="h-3 w-2"
									></FontAwesomeIcon>
								</p>
							</div>
						</div>
						<div className="flex bg-sky-700 p-5 mb-5 gap-10">
							<div>
								<a href="/phdmanagement">
									<img
										src={Management}
										alt=""
										className="lg:h-28 lg:w-[280px] h-24 w-[300px]"
									/>
								</a>
							</div>
							<div>
								<a href="/phdmanagement">
									<p className="text-2xl mb-5 text-white">Management</p>
									<p className="mb-3 text-white">
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
						<div className="flex bg-sky-700 p-5 mb-5 gap-10">
							<div>
								<a href="/phdIntbusiness">
									<img
										src={IBusiness}
										alt=""
										className="lg:h-28 lg:w-[280px] h-24 w-[300px]"
									/>
								</a>
							</div>
							<div>
								<a href="/phdIntbusiness">
									<p className="text-2xl text-white  mb-5">
										International Business
									</p>
									<p className="mb-3 text-white">
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
				{/* <div className="container lg:mr-52 ">
					<FinanceDetails></FinanceDetails>
				</div> */}
			</div>
		</>
	);
};

export default Phd;
