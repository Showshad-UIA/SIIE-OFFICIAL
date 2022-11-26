import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Governance from "../../../Carosel/Asset/Presentation8.jpg";
const LeadershipGovernence = () => {
	return (
		<div className="">
			{/* Main content start here */}
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[100px] shadow mb-5">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-base-100 lg:px-8 px-3 py-3 pb-10  ">
								<div className=" flex text-sky-700 text-md font-bold cursor-pointer lg:px-20 px-3 ">
									<div>
										About Us{" "}
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-4 w-2 px-1  "
										></FontAwesomeIcon>
									</div>
									<div className="px-2">Governance Structure</div>
								</div>

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<img src={Governance} alt="" className="lg:px-14 lg:ml-5" />
									<div className="-mt-10">
										<h1 className="text-2xl px-3 font-bold border-b-2 lg:mx-24  border-gray-400">
											<a href="#">Board of Trustees</a>
										</h1>
										<p className="lg:mx-24 px-3 text-justify">
											The governing authority of the University, the Board
											manages development of broad policies and strategic plans,
											and is informed by a number of standing committees.
										</p>
										<h1 className="text-2xl px-4  font-bold border-b-2 lg:mx-24  mt-5 border-gray-400">
											<a href="#"> CEO and President</a>
										</h1>
										<p className="lg:mx-24 px-3 text-justify">
											The University President and CEO, responsible for managing
											all academic and administrative areas of the University.
											They are informed by the University Executive consisting
											of the Administrative and Academic Boards.
										</p>
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
