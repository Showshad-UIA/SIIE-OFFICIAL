import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/SydneyIslamicLogo-10-01-01.png";
import NavLinks from "./NavLinks";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<nav className="bg-sky-700  top-0 sticky   ">
				<div className="flex items-center font-medium justify-around ">
					<div className="z-50 p-3 md:w-auto w-full flex justify-between">
						<Link to="/" onClick={() => setOpen(!open)}>
							<img
								src={Logo}
								alt="logo"
								className="md:cursor-pointer h-20 -mt-3"
							/>
						</Link>
						<div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
							<ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
						</div>
					</div>
					<ul className="md:flex hidden  text-white items-center gap-6  mt[-10px] font-[Poppins]">
						<NavLinks />
						<li>
							<Link to="/research" className="py-7 px-3 inline-block">
								RESEARCH
							</Link>
						</li>

						<li>
							<Link to="/events" className="py-7 px-3 inline-block">
								NEWS & EVENTS
							</Link>
						</li>
						<li>
							<div className="navbar rounded-box">
								<div className="flex justify-end flex-1 px-2">
									<div className="flex items-stretch">
										<div className="dropdown dropdown-end">
											<label tabIndex={0} className=" ">
												ABOUT US
											</label>
											<ul
												tabIndex={0}
												className="menu dropdown-content mt-[62px] "
											>
												<li>
													<div className="dropdown dropdown-hover  ">
														<ul
															tabIndex={0}
															className="dropdown-content menu p-2 text-black shadow bg-base-100  w-52 mt-[260px] border-b-4 "
														>
															<li className="border-b-2 border-gray-200  hover:bg-sky-700  ">
																<a>Vision & mission</a>
															</li>
															<li className="border-b-2 border-gray-200 hover:bg-sky-700  ">
																<a>Leadership & governance</a>
															</li>
															<li className="border-b-2 border-gray-200  hover:bg-sky-700 ">
																<a>Academic structure</a>
															</li>
															<li className="border-b-2 border-gray-200  hover:bg-sky-700 ">
																<a>Male campus</a>
															</li>
															<li className="border-b-2 border-gray-200  hover:bg-sky-700 ">
																<a>Female campus</a>
															</li>
															<li className=" hover:bg-sky-700 ">
																<a>Collaborations</a>
															</li>
														</ul>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div className="navbar rounded-box">
								<div className="flex justify-end flex-1 px-2">
									<div className="flex items-stretch">
										<div className="dropdown dropdown-end">
											<label tabIndex={0} className=" ">
												NEW TO SIBS
											</label>
											<ul
												tabIndex={0}
												className="menu dropdown-content mt-[48px] "
											>
												<li>
													<div className="dropdown dropdown-hover  ">
														<ul
															tabIndex={0}
															className="dropdown-content menu p-2 text-black shadow bg-base-100  w-52 mt-[265px] border-b-4 "
														>
															<li className="border-b-2 border-gray-200  hover:bg-sky-700  ">
																<a> Enrolling dates</a>
															</li>
															<li className="border-b-2 border-gray-200 hover:bg-sky-700  ">
																<a> Importants dates</a>
															</li>
															<li className="border-b-2 border-gray-200  hover:bg-sky-700 ">
																<a>Orientations</a>
															</li>
															<li className="border-b-2 border-gray-200  hover:bg-sky-700 ">
																<a>How SIBS works</a>
															</li>
															<li className="border-b-2 border-gray-200  hover:bg-sky-700 ">
																<a>Scholarship</a>
															</li>
															<li className=" hover:bg-sky-700 ">
																<a>Calender</a>
															</li>
														</ul>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</li>
						
					</ul>

					{/* Mobile nav */}
					<ul
						className={`
        md:hidden bg-white fixed  w-full top-0 overflow-y-auto bottom-0 py-24 
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
					>
						<NavLinks setOpen={setOpen} open={open} />

						<li>
							<Link
								onClick={() => setOpen(!open)}
								to="/research"
								className="py-2 px-3 inline-block"
							>
								RESEARCH
							</Link>
						</li>
						<li>
							<Link
								onClick={() => setOpen(!open)}
								to="/events"
								className="py-2 px-3 inline-block"
							>
								EVENTS & EVENTS
							</Link>
						</li>
						
						<li>
							<div className="dropdown dropdown-hover  ">
								<h1 className="ml-3">ABOUT US</h1>
								<ul
									tabIndex={0}
									className="dropdown-content menu p-2 text-black shadow bg-base-100  w-52  "
								>
									<li className="border-b-2 border-gray-200  hover:bg-sky-700  ">
										<a>Vision & mission</a>
									</li>
									<li className="border-b-2 border-gray-200 hover:bg-sky-700  ">
										<a>Leadership & governance</a>
									</li>
									<li className="border-b-2 border-gray-200  hover:bg-sky-700 ">
										<a>Academic structure</a>
									</li>
									<li className="border-b-2 border-gray-200  hover:bg-sky-700 ">
										<a>Male campus</a>
									</li>
									<li className="border-b-2 border-gray-200  hover:bg-sky-700 ">
										<a>Female campus</a>
									</li>
									<li className=" hover:bg-sky-700 ">
										<a>Collaborations</a>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<div className="dropdown dropdown-hover   ">
								<h1 className="ml-3 cursor-pointer">NEW AT SIBS</h1>
								<ul
									tabIndex={0}
									className="dropdown-content menu p-2 text-black shadow bg-base-100  w-52  "
								>
									<li className="border-b-2 border-gray-200  hover:bg-sky-700  ">
										<a>Enrolling dates</a>
									</li>
									<li className="border-b-2 border-gray-200 hover:bg-sky-700  ">
										<a>Important dates</a>
									</li>
									<li className="border-b-2 border-gray-200  hover:bg-sky-700 ">
										<a>Orientations</a>
									</li>
									<li className="border-b-2 border-gray-200  hover:bg-sky-700 ">
										<a>How SIBS work</a>
									</li>
									<li className="border-b-2 border-gray-200  hover:bg-sky-700 ">
										<a>Scholarship</a>
									</li>
									<li className=" hover:bg-sky-700 ">
										<a>Calender</a>
									</li>
								</ul>
							</div>
						</li>
						
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
