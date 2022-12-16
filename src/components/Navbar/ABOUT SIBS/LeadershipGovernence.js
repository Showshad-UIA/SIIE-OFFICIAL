import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Governance from "../../../Carosel/Asset/Presentation8.jpg";
const LeadershipGovernence = () => {
	return (
		<div className="">
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[110px] shadow mb-5">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-base-100 lg:px-8 px-3 py-3 pb-10  ">
								{/* Breadcrumb added here */}
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
											<p className="text-black">Governance Structure</p>
										</li>
									</ul>

									{/* Breadcrumb ended */}
								</div>

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>

									{/* Governance body image  */}

									<img src={Governance} alt="" className="lg:px-14 lg:ml-5" />

									{/* Governance body details  */}

									<div className="-mt-10">
										<h1 className="text-2xl px-3 font-bold border-b-2 lg:mx-24  border-gray-400">
											<a href="#">Board of Trustees</a>
										</h1>
										<p className="lg:mx-24 px-3 text-justify">
											The governing authority of the University, the Board
											manages development of broad policies and strategic plans,
											and is informed by a number of standing committees.
										</p>

										{/* CEO and President  */}
										<h1 className="text-2xl px-4  font-bold border-b-2 lg:mx-24  mt-5 border-gray-400">
											<a href="#"> CEO and President</a>
										</h1>
										<p className="lg:mx-24 px-3 text-justify">
											The University President and CEO, responsible for managing
											all academic and administrative areas of the University.
											They are informed by the University Executive consisting
											of the Administrative and Academic Boards.
										</p>

										{/* Board Committees  */}
										<div>
											<h1 className="text-2xl px-4 font-bold border-b-2 lg:mx-24 mt-5 border-gray-400">
												<a href="#">Board Committees</a>
											</h1>
											<p className="lg:mx-24 px-3 text-justify">
												The Board Committees manage development of broad
												policies and strategic plans, and are informed by a
												number of standing committees.
											</p>
										</div>

										{/* Academic Senate  */}
										<div>
											<h1 className="text-2xl px-4 font-bold border-b-2 lg:mx-24 mt-5  border-gray-400">
												<a href="#">Academic Senate</a>
											</h1>
											<p className="lg:mx-24 px-3 text-justify">
												This is the peak forum in the University for academic
												debate and discourse. The Senate is a standing committee
												of the board, and is responsible for academic standards
												and values.
											</p>
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

export default LeadershipGovernence;
