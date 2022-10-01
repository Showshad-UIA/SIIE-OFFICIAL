import React from "react";
import PhdShariahMain from "./PhdShariahMain";
import PhdShariahSidebar from "./PhdShariahSidebar";
import image from "../../images/Banner 1.png";
import PhdShariahSinglepage from "./PhdShariahSinglepage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import PhdRightSideBar from "./PhdRightSideBar";
import PhdMaincontent from "./PhdMaincontent";
import ShariahMain from "./ShariahMain";

const PhdShariah = () => {
	return (
		// <div className=" lg:mx-[50px]  ">
		// 	<div className="grid text-center lg:mt-[100px] sm:mt-10 gap-10 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
		// 		<div className=" lg:ml-[150px]  text-justify m-2 lg:w-full  border-t-2 border-black">
		// 			<div className="">
		// 				<p className="mb-5 mt-3  text-2xl  font-bold cursor-pointer hover:text-red-500  text-blue-500">
		// 					PhD of Islamic Shariah
		// 				</p>
		// 			</div>
		// 			<p className="mt-5 sm:w-4/5">
		// 				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
		// 				similique, nobis explicabo voluptate ab impedit earum dignissimos
		// 				placeat error dolorem repudiandae corrupti quidem nisi expedita eum
		// 				suscipit numquam dolor accusantium! Lorem ipsum dolor sit amet,
		// 				consectetur adipisicing elit. Quae, similique, nobis explicabo
		// 				voluptate ab impedit earum dignissimos placeat error dolorem
		// 				repudiandae corrupti quidem nisi expedita.
		// 			</p>
		// 			<div>
		// 				<PhdShariahMain></PhdShariahMain>
		// 			</div>
		// 		</div>

		// 		<div className="lg:mx-[150px] lg:ml-[230px] lg:mt-[-16px]  ">
		// 			<div className="lg:mt-[140px]">
		// 				<PhdShariahSidebar></PhdShariahSidebar>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		// new layout
		// <div className="lg:ml-[200px] lg:mt-[200px] sm:mb-12 ">
		// 	<div className="lg:mx-[150px] gap-20  grid sm:mt-10 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
		// 		<div className="lg:w-full">
		// 			<div className=" lg:mt-[-100px]">
		// 				<div className="w-full">
		// 					<div className="  ">
		// 						<h1 className="text-3xl font-bold text-justify">
		// 							PhD of Islamic Shariah
		// 						</h1>
		// 						<p className="py-6 text-justify lg:w-4/5 sm:w-full">
		// 							Provident cupiditate voluptatem et in. Quaerat fugiat ut
		// 							assumenda excepturi exercitationem quasi. In deleniti eaque
		// 							aut repudiandae et a id nisi. Provident cupiditate voluptatem
		// 							et in. Quaerat fugiat ut assumenda excepturi exercitationem
		// 							quasi. In deleniti eaque aut repudiandae et a id nisi.Lorem
		// 							ipsum dolor sit amet consectetur adipisicing elit. Praesentium
		// 							quisquam voluptate perferendis quibusdam fuga totam cumque
		// 							necessitatibus,
		// 						</p>
		// 						<button className="p-2 bg-primary rounded sm:mb-5 ">
		// 							Apply now
		// 						</button>

		// 						{/* <div className=" bg-white mt-5">
		// 					<div class="  bg-white ">
		// 						<div className="  sm:w-full  ">
		// 							<div className="text-medium ">
		// 								<div>
		// 									<p href="#" className=" mb-3  ">
		// 										<div>
		// 											<p>Start date: 2 October 2023</p>
		// 										</div>
		// 									</p>
		// 								</div>
		// 								<div>
		// 									<p className=" mb-3   ">
		// 										<div>
		// 											<p>Duration: 4 years </p>
		// 										</div>
		// 									</p>
		// 								</div>
		// 								<div>
		// 									<p className="mb-3   ">
		// 										<div>
		// 											<p>Time commitment: Full time</p>
		// 										</div>
		// 									</p>
		// 								</div>
		// 								<div>
		// 									<p>Location: Sydney, Australia</p>
		// 								</div>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div> */}
		// 						<PhdShariahSinglepage></PhdShariahSinglepage>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div className="lg:w-[65%] lg:ml-20 lg:mt-5">
		// 			<PhdShariahSidebar></PhdShariahSidebar>
		// 			{/* <div className=" lg:w-[60%]">
		// 			<div className=" bg-white lg:mt-[-119px] mb-10">
		// 				<div class="  bg-white ">
		// 					<div className=" bg-gray-200 sm:w-full  ">
		// 						<div className="  ">
		// 							<h1 className="text-medium mb-5 text-start font-bold  pr-5 pt-8 pb-3 border-b-2 border-t-4 border-black pl-5   text-blue-500">
		// 								SEE ALSO
		// 							</h1>
		// 						</div>
		// 						<div className="text-medium p-5">
		// 							<div>
		// 								<a
		// 									href="#"
		// 									className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
		// 								>
		// 									<div>
		// 										<FontAwesomeIcon
		// 											icon={faSquareCaretRight}
		// 										></FontAwesomeIcon>
		// 									</div>
		// 									<div>
		// 										<a href="/phdeconomics">
		// 											<p>PhD of economics</p>
		// 										</a>
		// 									</div>
		// 								</a>
		// 							</div>
		// 							<div>
		// 								<a
		// 									href="#"
		// 									className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
		// 								>
		// 									<div>
		// 										<FontAwesomeIcon
		// 											icon={faSquareCaretRight}
		// 										></FontAwesomeIcon>
		// 									</div>
		// 									<div>
		// 										<a href="/phdfinance">
		// 											<p>PhD of Islamic banking&finance </p>
		// 										</a>
		// 									</div>
		// 								</a>
		// 							</div>
		// 							<div>
		// 								<a
		// 									href="#"
		// 									className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
		// 								>
		// 									<div>
		// 										<FontAwesomeIcon
		// 											icon={faSquareCaretRight}
		// 										></FontAwesomeIcon>
		// 									</div>
		// 									<div>
		// 										<a href="/phdinsurance">
		// 											{" "}
		// 											<p>PhD of Islamic insurance</p>
		// 										</a>
		// 									</div>
		// 								</a>
		// 							</div>
		// 							<div className="mb-3">
		// 								<a
		// 									href="#"
		// 									className="flex gap-5   cursor-pointer hover:text-red-500 "
		// 								>
		// 									<div>
		// 										<FontAwesomeIcon
		// 											icon={faSquareCaretRight}
		// 										></FontAwesomeIcon>
		// 									</div>
		// 									<div>
		// 										<a href="/phdbusinesslaw">
		// 											<p>PhD of Islamic business law</p>
		// 										</a>
		// 									</div>
		// 								</a>
		// 							</div>
		// 							<div className="mb-3">
		// 								<a
		// 									href="#"
		// 									className="flex gap-5   cursor-pointer hover:text-red-500 "
		// 								>
		// 									<div>
		// 										<FontAwesomeIcon
		// 											icon={faSquareCaretRight}
		// 										></FontAwesomeIcon>
		// 									</div>
		// 									<div>
		// 										<a href="/phdusalfiq">
		// 											<p>PhD of Usal al-Fiqh</p>
		// 										</a>
		// 									</div>
		// 								</a>
		// 							</div>
		// 							<div className="mb-3">
		// 								<a
		// 									href="#"
		// 									className="flex gap-5   cursor-pointer hover:text-red-500 "
		// 								>
		// 									<div>
		// 										<FontAwesomeIcon
		// 											icon={faSquareCaretRight}
		// 										></FontAwesomeIcon>
		// 									</div>
		// 									<div>
		// 										<a href="#">
		// 											<p>Tuition fees</p>
		// 										</a>
		// 									</div>
		// 								</a>
		// 							</div>
		// 							<div className="mb-3">
		// 								<a
		// 									href="#"
		// 									className="flex gap-5   cursor-pointer hover:text-red-500 "
		// 								>
		// 									<div>
		// 										<FontAwesomeIcon
		// 											icon={faSquareCaretRight}
		// 										></FontAwesomeIcon>
		// 									</div>
		// 									<div>
		// 										<a href="#">
		// 											<p>Further enquiry</p>
		// 										</a>
		// 									</div>
		// 								</a>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div> */}
		// 		</div>
		// 	</div>
		//  {/* new layout */}

		<>
			<div className=" sm:w-full">
				<div className="grid text-center gap-10 lg:mx-[150px] lg:mt-[100px] sm:mt-10   lg:grid-cols-2 sm:grid-cols-1">
					<div className=" lg:ml-[200px] text-justify m-2 lg:w-full border-t-2 border-black">
						<div className="">
							<p className="mb-5 mt-3  text-2xl  font-bold cursor-pointer hover:text-red-500  text-blue-500">
								PhD of Islamic Shariah
							</p>
						</div>
						<p className="mt-5">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
							similique, nobis explicabo voluptate ab impedit earum dignissimos
							placeat error dolorem repudiandae corrupti quidem nisi expedita
							eum suscipit numquam dolor accusantium! Lorem ipsum dolor sit
							amet, consectetur adipisicing elit. Quae, similique, nobis
							explicabo voluptate ab impedit earum dignissimos placeat error
							dolorem repudiandae corrupti quidem nisi expedita{" "}
							<p>
								eum suscipit numquam dolor accusantium! Lorem ipsum dolor sit
								amet, consectetur adipisicing elit. Quae, similique, nobis
								explicabo voluptate ab impedit earum dignissimos placeat error
								dolorem repudiandae corrupti quidem nisi expedita eum suscipit
								numquam dolor accusantium! Lorem ipsum dolor sit amet,
								consectetur adipisicing elit. Quae, similique, nobis explicabo
								voluptate ab impedit earum dignissimos placeat error dolorem
								repudiandae corrupti quidem nisi expedita eum suscipit numquam
								dolor accusantium!
							</p>
						</p>
					</div>
					<div className="lg:mx-[180px] lg:ml-[245px] mt-2">
						<PhdShariahSidebar></PhdShariahSidebar>
					</div>
				</div>

				<ShariahMain></ShariahMain>
			</div>
			<div className="lg:mx-[150px] ">
				<div className="">
					<div
						className="lg:w-[73%] lg:mx-[195px]   text-justify sm:w-full"
						id="structure"
					>
						<div className=" ">
							<div className="sm:mt-20 ">
								<div className="text-2xl text-blue-500 underline font-bold">
									<h1 className="">Course structure</h1>
								</div>
								<p className="mt-5">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Praesentium quisquam voluptate perferendis quibusdam fuga
									totam cumque necessitatibus, quas dolorem quod natus rerum
									provident amet excepturi aperiam. Doloremque voluptas iusto
									beatae? Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Praesentium quisquam voluptate perferendis quibusdam
									fuga totam cumque necessitatibus, quas dolorem quod natus
									rerum provident amet excepturi aperiam. Doloremque voluptas
									iusto beatae?
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Praesentium quisquam voluptate perferendis quibusdam fuga
									totam cumque necessitatibus, quas dolorem quod natus rerum
									provident amet excepturi aperiam. Doloremque voluptas iusto
									beatae? Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Praesentium quisquam voluptate perferendis quibusdam
									fuga totam cumque necessitatibus, quas dolorem quod natus
									rerum provident amet excepturi aperiam. Doloremque voluptas
									iusto beatae?
								</p>
							</div>
						</div>
					</div>
					<div
						className="  lg:w-[73%] lg:mx-[195px] text-justify mt-5  sm:w-full"
						id="outcome"
					>
						<div className=" ">
							<div className="">
								<h1 className="text-2xl underline font-bold text-blue-500">
									Course outcome
								</h1>
								<p className="mt-5">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Praesentium quisquam voluptate perferendis quibusdam fuga
									totam cumque necessitatibus, quas dolorem quod natus rerum
									provident amet excepturi aperiam. Doloremque voluptas iusto
									beatae? Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Praesentium quisquam voluptate perferendis quibusdam
									fuga totam cumque necessitatibus, quas dolorem quod natus
									rerum provident amet excepturi aperiam. Doloremque voluptas
									iusto beatae?
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Praesentium quisquam voluptate perferendis quibusdam fuga
									totam cumque necessitatibus, quas dolorem quod natus rerum
									provident amet excepturi aperiam. Doloremque voluptas iusto
									beatae? Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Praesentium quisquam voluptate perferendis quibusdam
									fuga totam cumque necessitatibus, quas dolorem quod natus
									rerum provident amet excepturi aperiam. Doloremque voluptas
									iusto beatae?
								</p>
							</div>
						</div>
					</div>
					<div
						className="lg:w-[73%] lg:mx-[195px] mt-5 text-justify sm:w-full"
						id="research"
					>
						<div className=" ">
							<div className="">
								<h1 className="text-2xl text-blue-500 underline font-bold">
									Research area
								</h1>
								<p className="mt-5">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Praesentium quisquam voluptate perferendis quibusdam fuga
									totam cumque necessitatibus, quas dolorem quod natus rerum
									provident amet excepturi aperiam. Doloremque voluptas iusto
									beatae? Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Praesentium quisquam voluptate perferendis quibusdam
									fuga totam cumque necessitatibus, quas dolorem quod natus
									rerum provident amet excepturi aperiam. Doloremque voluptas
									iusto beatae?
								</p>
							</div>
						</div>
					</div>
					<div
						className="lg:w-[73%] lg:mx-[195px] mt-5 text-justify sm:w-full"
						id="supervision"
					>
						<div className=" ">
							<div className="">
								<h1 className="text-2xl text-blue-500 underline font-bold">
									Supervision in IBF
								</h1>
								<p className="mt-5">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Praesentium quisquam voluptate perferendis quibusdam fuga
									totam cumque necessitatibus, quas dolorem quod natus rerum
									provident amet excepturi aperiam. Doloremque voluptas iusto
									beatae? Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Praesentium quisquam voluptate perferendis quibusdam
									fuga totam cumque necessitatibus, quas dolorem quod natus
									rerum provident amet excepturi aperiam. Doloremque voluptas
									iusto beatae?
								</p>
							</div>
						</div>
					</div>
					<div
						className="lg:w-[73%] lg:mx-[195px] mt-5 text-justify sm:w-full"
						id="admission"
					>
						<div className=" ">
							<div className="">
								<h1 className="text-2xl text-blue-500 underline font-bold">
									Admission requiremnts
								</h1>
								<p className="mt-5">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Praesentium quisquam voluptate perferendis quibusdam fuga
									totam cumque necessitatibus, quas dolorem quod natus rerum
									provident amet excepturi aperiam. Doloremque voluptas iusto
									beatae? Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Praesentium quisquam voluptate perferendis quibusdam
									fuga totam cumque necessitatibus, quas dolorem quod natus
									rerum provident amet excepturi aperiam. Doloremque voluptas
									iusto beatae?
								</p>
							</div>
						</div>
					</div>
					<div
						className="lg:w-[73%] lg:mx-[195px] mt-5 text-justify sm:w-full"
						id="fees"
					>
						<div className="">
							<h1 className="text-2xl text-blue-500 underline  font-bold">
								Fees structure | Scholarship
							</h1>
						</div>
						<div className="  mb-10  ">
							<div className=" ">
								<p className="mt-5">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Praesentium quisquam voluptate perferendis quibusdam fuga
									totam cumque necessitatibus, quas dolorem quod natus rerum
									provident amet excepturi aperiam. Doloremque voluptas iusto
									beatae? Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Praesentium quisquam voluptate perferendis quibusdam
									fuga totam cumque necessitatibus, quas dolorem quod natus
									rerum provident amet excepturi aperiam. Doloremque voluptas
									iusto beatae?
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PhdShariah;
