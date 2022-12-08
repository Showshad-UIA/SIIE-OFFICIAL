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
		<>
			<div className="container mx-auto  lg:mb-5">
				<div className="lg:mx-[100px] shadow"></div>
			</div>
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
								<a href="/people">
									<p className="text-2xl text-white  mb-5">Our People</p>
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
