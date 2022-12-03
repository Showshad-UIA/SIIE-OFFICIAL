import {
	faBookOpen,
	faBuildingColumns,
	faChevronRight,
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
import mosque from "../../../Carosel/Asset/mosque.png";
import collaborate from "../../../Carosel/Asset/colleborate.jpg";
import engagement from "../../../Carosel/Asset/engagement.jpg";
import staff from "../../../Carosel/Asset/staff (1).jpg";

const Profile = () => {
	return (
		// <div className="container mx-auto mb-10 ">
		// 	<div class=" p-2  w-full  ">
		// 		<div
		// 			class="flex flex-col  lg:flex-row
		//              lg:mx-[100px]  shadow-md "
		// 		>
		// 			<div className="flex flex-col mt-5 ">
		// 				<div className="">
		// 					<div className=" lg:w-full    ">
		// 						<div className=" bg-base-100  px-3 py-3 pb-10  ">
		// 							<div className="  ">
		// 								{/* breadcrumb start here */}
		// 								<div className=" flex text-sky-700 text-md font-bold cursor-pointer lg:px-20 px-3 ">
		// 									<div>
		// 										About Us{" "}
		// 										<FontAwesomeIcon
		// 											icon={faChevronRight}
		// 											className="h-4 w-2 px-1  "
		// 										></FontAwesomeIcon>
		// 									</div>
		// 									<div className="px-2">Profile</div>
		// 								</div>

		// 								{/* About Us content start here */}

		// 								<h1 className=" border-t-4 border-sky-700 lg:mx-20 mx-3 mb-3"></h1>
		// 								<h1 className="text-sky-700 text-xl font-bold lg:px-20 px-3 my-2 ">
		// 									About Us
		// 								</h1>
		// 								<p className="  text-justify  lg:mx-20 ">
		// 									Sydney Islamic Business School (Sydney IBS) is the first
		// 									Islamic higher education institution in Australia. We aim
		// 									to be a leading teaching and research focused business
		// 									school by providing excellent Islamic business higher
		// 									education. We offer degree programs across a range of
		// 									academic disciplines from doctoral, masters, and graduate
		// 									diploma levels in the fields of Islamic Banking and
		// 									Finance, Islamic Business Law, Islamic Economics, Islamic
		// 									Insurance, Management and International Business.
		// 								</p>
		// 								<p className="text-justify  mt-2 lg:px-20">
		// 									Our goal is to develop the capabilities of graduates, to
		// 									serve the community and to work for an inclusive and
		// 									sustainable global economy. Our academic activities,
		// 									curricula, and organisational practices are derived from
		// 									Islamic principles and correlated with the high standards
		// 									of the Australian Higher Education Legal Framework. Our
		// 									academic syllabus is structured by input from globally
		// 									renowned Islamic business academia as well as industry
		// 									experts. We warmly welcome everyone from all over the
		// 									world to come join the community at Sydney IBS.
		// 								</p>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>

		// 				{/* Profile page main content start here  */}
		// 				<div>
		// 					<div className="lg:mx-24 pb-10">
		// 						<div className="">
		// 							<div class="px-3 ">
		// 								{/* About Us  main content layout figure out here  */}
		// 								<div class="grid grid-cols-1 md:grid-cols-2 gap-10  lg:grid-cols-3 ">
		// 									{/* Academic structure start here  */}
		// 									<div className="">
		// 										<figure>
		// 											<img
		// 												src={academics}
		// 												alt="image1"
		// 												className="lg:h-[190px] lg:w-[350px] "
		// 											/>
		// 										</figure>
		// 										<div className=" mt-3">
		// 											<a href="/AcademicStructure">
		// 												{" "}
		// 												<h2 className="text-[18.5px] text-sky-700 cursor-pointer hover:underline text-justify">
		// 													Academic structure
		// 												</h2>
		// 											</a>
		// 											<p className="text-black text-md text-justify">
		// 												Sydney IBS is Australia's top university and ranked
		// 												in the top 30 globally.*
		// 											</p>
		// 										</div>
		// 									</div>

		// 									{/* Governance Structure start here  */}
		// 									<div className=" ">
		// 										<figure>
		// 											<img
		// 												src={governanceBody}
		// 												alt="image3"
		// 												className="lg:h-[190px] lg:w-[350px]"
		// 											/>
		// 										</figure>
		// 										<div className="mt-3">
		// 											<a href="/LeadershipGovernence">
		// 												<h2 className="text-xl text-sky-700 cursor-pointer hover:underline text-justify">
		// 													Governance Structure
		// 												</h2>
		// 											</a>
		// 											<p className="text-black text-md text-justify">
		// 												Research agendas focused on issues that are highly
		// 												significant for organisations
		// 											</p>
		// 										</div>
		// 									</div>

		// 									{/* Industry engagement start here  */}

		// 									<div className=" ">
		// 										<figure>
		// 											<img
		// 												src={engagement}
		// 												alt="image4"
		// 												className="lg:h-[190px] lg:w-[350px]"
		// 											/>
		// 										</figure>
		// 										<div className="mt-3">
		// 											<a href="">
		// 												<h2 className="text-xl text-sky-700 cursor-pointer hover:underline text-justify">
		// 													Industry engagement
		// 												</h2>
		// 											</a>
		// 											<p className="text-justify text-black text-md">
		// 												Sydney IBS has been named the 16th most
		// 												international university in the world *
		// 											</p>
		// 										</div>
		// 									</div>

		// 									{/* Our Facilities start here  */}
		// 									<div className=" ">
		// 										<figure>
		// 											<img
		// 												src={mosque}
		// 												alt="image4"
		// 												className="lg:h-[190px] lg:w-[350px]"
		// 											/>
		// 										</figure>
		// 										<div className="mt-3">
		// 											<a href="">
		// 												<h2 className="text-xl text-sky-700 cursor-pointer hover:underline text-justify">
		// 													Our Facilities
		// 												</h2>
		// 											</a>
		// 											<p className="text-justify text-black text-md">
		// 												Our goal is to achieve real-world results for our
		// 												partners in in business, government.
		// 											</p>
		// 										</div>
		// 									</div>

		// 									{/* Academic Collaborations start here  */}
		// 									<div className=" ">
		// 										<figure>
		// 											<img
		// 												src={collaborate}
		// 												alt="image4"
		// 												className="lg:h-[190px] lg:w-[350px]"
		// 											/>
		// 										</figure>
		// 										<div className="mt-3">
		// 											<a href="">
		// 												<h2 className="text-xl text-sky-700 cursor-pointer hover:underline text-justify">
		// 													Academic Collaborations
		// 												</h2>
		// 											</a>
		// 											<p className="text-justify text-black text-md">
		// 												Our goal is to achieve real-world results for our
		// 												partners in in business, government
		// 											</p>
		// 										</div>
		// 									</div>

		// 									{/* Accreditation start here  */}
		// 									<div className=" ">
		// 										<figure>
		// 											<img
		// 												src={accrediation}
		// 												alt="image2"
		// 												className="lg:h-[190px] lg:w-[350px]"
		// 											/>
		// 										</figure>
		// 										<div className="mt-3">
		// 											<a href="/">
		// 												{" "}
		// 												<h2 className="text-xl text-sky-700 cursor-pointer hover:underline text-justify">
		// 													Accreditation
		// 												</h2>
		// 											</a>
		// 											<p className="text-justify text-black text-md">
		// 												When it comes to producing employable graduates,
		// 												Sydney IBS is number 1 *.
		// 											</p>
		// 										</div>
		// 									</div>
		// 								</div>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

		<>
			<div className="container mx-auto  lg:mb-5">
				<div className="lg:mx-[100px] shadow"></div>
			</div>
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[100px] shadow ">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-base-100 lg:px-8 px-3 py-3 pb-10  ">
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
											<p>About Us</p>
										</li>
										<li>
											<p className="text-black"> Profile | Vision & Mission</p>
										</li>
									</ul>
								</div>

								{/* Doctor of Philosophy (PhD) first paragraph added here */}

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="text-sky-700 text-xl font-bold lg:px-20 px-3 ">
										About Us
									</h1>

									<p className=" lg:px-20 px-3 text-justify mt-3 ">
										Sydney Islamic Business School (Sydney IBS) is the first
										Islamic higher education institution in Australia. We aim to
										be a leading teaching and research focused business school
										by providing excellent Islamic business higher education. We
										offer degree programs across a range of academic disciplines
										from doctoral, masters, and graduate diploma levels in the
										fields of Islamic Banking and Finance, Islamic Business Law,
										Islamic Economics, Islamic Insurance, Management and
										International Business.
									</p>
									<p className=" lg:px-20 px-3 text-justify mt-3 ">
										Our goal is to develop the capabilities of graduates, to
										serve the community and to work for an inclusive and
										sustainable global economy. Our academic activities,
										curricula, and organisational practices are derived from
										Islamic principles and correlated with the high standards of
										the Australian Higher Education Legal Framework. Our
										academic syllabus is structured by input from globally
										renowned Islamic business academia as well as industry
										experts. We warmly welcome everyone from all over the world
										to come join the community at Sydney IBS.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* PhD courses added here */}

					<div className="lg:mx-[100px] pb-10">
						{/* PhD Banking and Finance start here */}
						<div className="flex bg-sky-700 shadow p-3 mb-5 gap-5 ">
							<div className="">
								<a href="/AcademicStructure">
									<img
										src={academics}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="/AcademicStructure" className="text-2xl text-white">
									Academic Structure
								</a>

								<p className="mb-3 text-white mt-5 text-justify">
									Sydney IBS is Australia's top university and ranked in the top
									30 globally.Islamic banking, Islamic finance, or
									Sharia-compliant finance is banking or financing activity that
									complies with Sharia and its .
								</p>
							</div>
						</div>
						{/* PhD islamic economics start here */}
						<div className="flex bg-sky-700 shadow p-3 mb-5 gap-5">
							<div className="">
								<a href="/LeadershipGovernence">
									<img
										src={governanceBody}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="/LeadershipGovernence">
									<p className="text-2xl mb-5 text-white">
										Governance Structure
									</p>

									<p className="mb-3 text-white text-justify">
										Research agendas focused on issues that are highly
										significant for organisations.It tries to promote human
										brotherhood, socio-economic justice and the well-being of
										all through an integrated role
									</p>
								</a>
							</div>
						</div>
						<div className="flex bg-sky-700 p-3 mb-5 gap-5">
							<div className="">
								<a href="#">
									<img
										src={mosque}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="#">
									<p className="text-2xl text-white mb-5">Our Facilities</p>
									<p className="mb-3 text-white text-justify">
										Our goal is to achieve real-world results for our partners
										in in business, government.A Shariah-compliant insurance
										that can be renewed online. DISCOVER. A Shariah-compliant
										motor insurance plan
									</p>
								</a>
							</div>
						</div>

						<div className="flex bg-sky-700 p-3 mb-5 gap-5">
							<div>
								<a href="#">
									<img
										src={staff}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="#">
									<p className="text-2xl text-white  mb-5">Our Staff</p>
									<p className="mb-3 text-white text-justify">
										When it comes to producing employable graduates, Sydney IBS
										is number 1.International business relates to any situation
										where the production or distribution of goods or services
									</p>
								</a>
							</div>
						</div>
						<div className="flex bg-sky-700 p-3 mb-5 gap-5">
							<div className="">
								<a href="#">
									<img
										src={collaborate}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="#">
									<p className="text-2xl mb-5 text-white">
										Academic Collaborations
									</p>
								<p className="mb-3 text-white text-justify">
										Our goal is to achieve real-world results for our partners
										in in business, government.Management is the coordination
										and administration of tasks to achieve a goal. Such
										administration activities
									</p>
								</a>
							</div>
						</div>
						<div className="flex bg-sky-700 p-3 mb-5 gap-5">
							<div className="">
								<a href="#">
									<img
										src={engagement}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="#">
									<p className="text-2xl  mb-5 text-white">
										Industry Engagement
									</p>
									<p className="mb-3 text-white text-justify">
										Sydney IBS has been named the 16th most international
										university in the world .Shariah restrictions on certain
										financial and trade transactions is the raison d’être for
										the emergence of
									</p>
								</a>
							</div>
						</div>

						<div className="flex bg-sky-700 p-3 mb-5 gap-5">
							<div>
								<a href="#">
									<img
										src={accrediation}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="#">
									<p className="text-2xl text-white  mb-5">Accreditation</p>
									<p className="mb-3 text-white text-justify">
										When it comes to producing employable graduates, Sydney IBS
										is number 1.International business relates to any situation
										where the production or distribution of goods or services
									</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
