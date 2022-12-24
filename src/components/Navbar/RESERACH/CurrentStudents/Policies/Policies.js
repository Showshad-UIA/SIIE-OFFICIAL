import { faAngleRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Group_A from "./Groups/Group_A";
import Group_B from "./Groups/Group_B";
import Group_C from "./Groups/Group_C";
import Group_D from "./Groups/Group_D";
import Group_E from "./Groups/Group_E";
import Group_F from "./Groups/Group_F";
import Group_G from "./Groups/Group_G";
import Group_H from "./Groups/Group_H";
import Group_I from "./Groups/Group_I";
import Group_L from "./Groups/Group_L";
import Group_M from "./Groups/Group_M";
import Group_N from "./Groups/Group_N";
import Group_O from "./Groups/Group_O";
import Group_P from "./Groups/Group_P";
import Group_R from "./Groups/Group_R";
import Group_S from "./Groups/Group_S";
import Group_T from "./Groups/Group_T";
import Group_W from "./Groups/Group_W";

const Policies = () => {
	return (
		<div className="">
			{/* Main content start here */}
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[110px] shadow mb-5">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-gray-100 lg:px-8 px-3 py-3 pb-10  ">
								{/* Breadcrumb added */}

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
											<p>Graduate Research</p>
										</li>
										<li>
											<a href="/current"> Current students</a>
										</li>
										<li>
											<p className="text-black">Policies and Procedures</p>
										</li>
									</ul>

									{/* breadcrumb ended */}
								</div>

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-1"></h1>

									{/* Student Rights */}

									<h1 className="lg:mx-20  font-bold text-xl text-sky-700 text-center mt-2">
										Policies and Procedures
									</h1>
									<div className="lg:mx-20 mt-3">
										<h2 className="font-bold my-2 text-lg">
											Know the name of the document you are looking for?
										</h2>
										<p>
											Following is a master list (in alphabetical order, by
											title) of all policies and procedures. Jump to the
											relevant part of the alphabet by clicking an alphabetical
											character in the fast find index below. Each alphabetic
											grouping of documents is headed with the relevant letter
											of the alphabet, next to which you will find a "view
											summary descriptions" link. If you are not sure you have
											found the right policy, click this link to view the
											summary descriptions. These may help you determine if the
											document is the one you are after.
										</p>
									</div>

									{/* pagination added  */}

									<div className="btn-group gap-4 lg:mx-20 text-white lg:my-5 border-2 bg-sky-700 px-1 rounded-lg">
										<p>INDEX:</p>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-a">A</a>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-b">B</a>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-c">C</a>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-d">D</a>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-e">E</a>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-f">F</a>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-g">G</a>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-h">H</a>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-i">I</a>
										</button>
										<button className="text-gray-400  cursor-not-allowed">
											<p>J</p>
										</button>
										<button className="text-gray-400 cursor-not-allowed ">
											<p>K</p>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-l">L</a>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-m">M</a>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-n">N</a>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-o">O</a>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-p">P</a>
										</button>
										<button className="text-gray-400 cursor-not-allowed ">
											<p>Q</p>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-r">R</a>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-s">S</a>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-t">T</a>
										</button>
										<button className="text-base-300 cursor-not-allowed">
											<p>U</p>
										</button>
										<button className="text-base-300 cursor-not-allowed ">
											<p>V</p>
										</button>
										<button className="cursor-pointer hover:underline ">
											<a href="#group-w">W</a>
										</button>
										<button className="text-base-300 cursor-not-allowed ">
											<p>X</p>
										</button>
										<button className="text-gray-400 cursor-not-allowed">
											<p>Y</p>
										</button>
										<button className="text-gray-400 cursor-not-allowed ">
											<p>Z</p>
										</button>
									</div>

									{/* All group policies added here  */}
									<div className="lg:mx-20 px-1 ">
										<Group_A></Group_A>
										<Group_B></Group_B>
										<Group_C></Group_C>
										<Group_D></Group_D>
										<Group_E></Group_E>
										<Group_F></Group_F>
										<Group_G></Group_G>
										<Group_H></Group_H>
										<Group_I></Group_I>
										<Group_L></Group_L>
										<Group_M></Group_M>
										<Group_N></Group_N>
										<Group_O></Group_O>
										<Group_P></Group_P>
										<Group_R></Group_R>
										<Group_S></Group_S>
										<Group_T></Group_T>
										<Group_W></Group_W>
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

export default Policies;
