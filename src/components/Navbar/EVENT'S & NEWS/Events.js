import React from "react";
import finance from "../../../Carosel/Asset/Islamic finance.jpg";
import economics from "../../../Carosel/Asset/economics.jpg";
import business from "../../../Carosel/Asset/business.jpg";
import Insurance from "../../../Carosel/Asset/insurance.jpg";
import Management from "../../../Carosel/Asset/management.jpg";
import IBusiness from "../../../Carosel/Asset/international-business.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Events = () => {
	return (
		<div className="container mx-auto">
			{/* <div className="container mx-auto lg:mt-10">
				<div class="lg:mx-28 lg:w-[85%] md:mx-20 sm:w-full md:w-4/5  ">
					<div className="flex px-2 ">
						<div className="text-2xl font-bold ">NEWS & EVENTS </div>

					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4  px-3 mt-4">
						<div class="flex items-center text-xl lg:mb-24   w-full  ">
							<div className="shadow-md bg-sky-700">
								<figure className="">
									<a href="/articleone">
										<img
											src={explore1}
											alt="image"
											className="w-full lg:h-[220px]"
										/>
									</a>
								</figure>
								<div className=" bg-sky-700 lg:h-24 md:h-[120px]  md:h-auto">
									<a href="/articleone" className="">
										<h1 className="text-[19px]  text-white lg:mt-1 px-2  hover:text-red-500">
											What’s next for Islamic banking?
										</h1>

										<p className="text-left text-gray-300 text-[12px] mb-3  px-2 lg:mt-1">
											13 OCT 2022
										</p>
									</a>
								</div>
							</div>
						</div>
						<div class="flex items-center text-xl lg:mb-24  w-full ">
							<div className="shadow-md bg-sky-700">
								<figure className="">
									<a href="/articletwo">
										<img
											src={explore2}
											alt="image 2"
											className="w-full lg:h-[220px] md:h-auto"
										/>
									</a>
								</figure>

								<div className=" bg-sky-700  lg:h-auto md:h-[112px]">
									<a href="/articletwo" className="">
										<h1 className="text-[19px]  text-white lg:mt-1 px-2 hover:text-red-500">
											Islamic banks — too big to fail or too small to succeed?
										</h1>
										<p className="text-left text-gray-300 text-[12px] mb-3 px-2 lg:mt-1">
											15 OCT 2022
										</p>
									</a>
								</div>
							</div>
						</div>
						<div class="flex justify-center text-xl lg:mb-24 md:mb-12  w-full ">
							<div className="bg-sky-700  ">
								<figure className="">
									<a href="/articlethree">
										<img
											src={explore3}
											alt="image3"
											className="w-full lg:h-[220px]"
										/>
									</a>
								</figure>

								<div className=" bg-sky-700  lg:h-auto md:h-auto sm:h-[150px]">
									<a href="/articlethree" className="">
										<h1 className="text-[19px] px-2 text-white hover:text-red-500">
											Funding social expenditure with risk sharing sukuk
										</h1>
										<p className="text-left text-gray-300 text-[12px] mb-3 px-2 lg:mt-2">
											17 OCT 2022
										</p>
									</a>
								</div>
							</div>
						</div>
						<div class="flex  text-md px-7 bg-gray-400">
							<div className="">
								<div className=" lg:-mt-12 mb-[80px] ">
									<div className="text-2xl font-bold ">LATEST NEWS</div>
									<p className="px-1 text-gray-500"></p>
									<div>
										<a
											href="#"
											className="ml-[5px] text-[16px]  text-blue-500 font-bold "
										>
											All News <FontAwesomeIcon
								icon={faArrowRight}
								className=""
							></FontAwesomeIcon>
										</a>
									</div>
								</div>
								<div className="flex -mt-16 lg:w-full gap-3 lg:mb-6 ">
									<div className="font-bold p-1  text-white w-10 h-[50px] text-sm bg-black ">
										16 OCT
									</div>
									<div className=" text-justify">
										<a href="#">
											<p className="text-blue-500  text-[16px]  hover:text-red-500">
												The knowledge of economics or economic activities and
												processes in terms of Islamic principles and teachings
											</p>
											<h1 className="text-md text-black lg:mt-1 ">
												The concept of Islamic economics
											</h1>
											<p className="text-[12px] text-gray-500">16 OCT 2022</p>
										</a>
									</div>
								</div>
								<div className="flex lg:mt-5 w-full gap-4 mb-8">
									<div className="font-bold p-1 bg-black text-white w-10 h-[50px] text-sm ">
										13 OCT
									</div>
									<div className=" text-justify">
										<a href="#">
											<p className="hover:text-red-500 text-blue-500  text-[16px]  ">
												Hudud punishments range from public lashing to publicly
												stoning to death, amputation of hands and crucifixion.
											</p>

											<p className="text-[12px] text-gray-500">13 OCT 2022</p>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			<div class=" p-2  my-5 ">
				<div
					class="flex flex-col w-full lg:flex-row lg:divide-x-4 
                    divide-green-500"
				>
				<div className="lg:mx-[100px] pb-10">
					<h1>NEWS(Testing phase)</h1>
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
						
						
					</div>
					
					<div className="px-5">
					<h1>EVENTS(Testing phase)</h1>
					<div className=" pb-10">
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
						
						
					</div>
					</div>
				
				</div>
			</div>
		</div>
	);
};

export default Events;
