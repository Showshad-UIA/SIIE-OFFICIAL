import React from "react";
import team from "../../../../Carosel/Asset/People/AcademicTeam.jpg";
import leadership from "../../../../Carosel/Asset/People/Leadership.jpg";
import administrative from "../../../../Carosel/Asset/People/adminstrative.jpg";
import scholar from "../../../../Carosel/Asset/People/scholar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
const People = () => {
	return (
		<>
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[100px] shadow ">
					<div className=" lg:w-full    ">
						<div className=" bg-gray-100 lg:px-8 px-3 py-3 pb-10  ">
							{/* breadcrumb start here */}
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
										<p className="text-black"> People</p>
									</li>
								</ul>
							</div>
							{/* breadcrumb end here */}

							{/* Our people summary start  */}
							<div className="  ">
								<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
								<h1 className="text-sky-700 text-xl font-bold lg:px-20 px-3 ">
									Our People
								</h1>

								<p className=" lg:px-20 px-3 text-justify mt-3 ">
									Sydney Islamic Business School (Sydney IBS) is the first
									Islamic higher education institution in Australia. We aim to
									be a leading teaching and research focused business school by
									providing excellent Islamic business higher education. We
									offer degree programs across a range of academic disciplines
									from doctoral, masters, and graduate diploma levels in the
									fields of Islamic Banking and Finance, Islamic Business Law,
									Islamic Economics, Islamic Insurance, Management and
									International Business.
								</p>
							</div>

							{/* Our people summary ended  */}
						</div>
					</div>

					{/* Main content start here */}
					<div className="lg:mx-[110px] pb-10">
						{/* Leadership team start here */}

						<div className="flex bg-sky-700 shadow p-3 mb-5 gap-5 ">
							<div className="">
								<a href="/leadershipTeam">
									<img
										src={leadership}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="/leadershipTeam" className="text-2xl text-white">
									Leadership Team
								</a>

								<p className="mb-3 text-white mt-5 text-justify">
									Sydney IBS is Australia's top university and ranked in the top
									30 globally.Islamic banking, Islamic finance, or
									Sharia-compliant finance is banking or financing activity that
									complies with Sharia and its .
								</p>
							</div>
						</div>

						{/* Academic team start here */}

						<div className="flex bg-sky-700 shadow p-3 mb-5 gap-5 ">
							<div className="">
								<a href="/academic">
									<img
										src={team}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="/academic" className="text-2xl text-white">
									Academic Team
								</a>

								<p className="mb-3 text-white mt-5 text-justify">
									Sydney IBS is Australia's top university and ranked in the top
									30 globally.Islamic banking, Islamic finance, or
									Sharia-compliant finance is banking or financing activity that
									complies with Sharia and its .
								</p>
							</div>
						</div>

						{/* Administrative team start here */}

						<div className="flex bg-sky-700 shadow p-3 mb-5 gap-5">
							<div className="">
								<a href="/administrative">
									<img
										src={administrative}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="/administrative">
									<p className="text-2xl mb-5 text-white">
										Administrative Team
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

						{/* Scholar team start here  */}

						<div className="flex bg-sky-700 p-3 mb-5 gap-5">
							<div className="">
								<a href="/scholar">
									<img
										src={scholar}
										alt=""
										className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
									/>
								</a>
							</div>
							<div className="w-[75%]">
								<a href="/scholar">
									<p className="text-2xl text-white mb-5">Visiting Scholar</p>
									<p className="mb-3 text-white text-justify">
										Our goal is to achieve real-world results for our partners
										in in business, government.A Shariah-compliant insurance
										that can be renewed online. DISCOVER. A Shariah-compliant
										motor insurance plan
									</p>
								</a>
							</div>
						</div>
					</div>
					{/* Main content end  here */}
				</div>
			</div>
		</>
	);
};

export default People;
