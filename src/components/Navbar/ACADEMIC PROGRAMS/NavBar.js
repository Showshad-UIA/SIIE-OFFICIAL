import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Carosel/Asset/SydneyIslamicLogo-10-01-01.png";
import AboutUs from "../ABOUT SIBS/Sibs";
import CurentStudent from "../STUDENTS/CurentStudent";
import NavLinks from "./NavLinks";
import ResearchMenu from "../../RESERACH/ResearchMenu";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<nav className="bg-sky-700  top-0 sticky ">
				<div className="flex items-center font-medium justify-around ">
					<div className="z-50 p-3 md:w-auto w-full flex justify-between">
						<Link to="/" onClick={() => setOpen(!open)}>
							<img
								src={Logo}
								alt="logo"
								className="md:cursor-pointer h-20 -mt-3"
							/>
						</Link>
						<div
							className="text-3xl mt-6 md:hidden"
							onClick={() => setOpen(!open)}
						>
							<ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
						</div>
					</div>
					<ul className="md:flex hidden md:text-sm  text-white items-center gap-2  mt[-10px] font-[Poppins]">
						<NavLinks />
						{/* <li>
							<Link to="/research" className="py-7 px-3 inline-block">
								RESEARCH
							</Link>
						</li> */}
						<ResearchMenu></ResearchMenu>

						<CurentStudent></CurentStudent>
						<AboutUs></AboutUs>
						<li>
							<Link to="/events" className="py-7 px-3 inline-block">
								NEWS & EVENTS
							</Link>
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

						{/* <li>
							<Link
								onClick={() => setOpen(!open)}
								to="/research"
								className="py-2 px-3 inline-block"
							>
								RESEARCH
							</Link>
						</li> */}
						<ResearchMenu></ResearchMenu>

						<CurentStudent></CurentStudent>
						<AboutUs></AboutUs>

						<li>
							<Link
								onClick={() => setOpen(!open)}
								to="/events"
								className="py-2 px-3 inline-block"
							>
								EVENTS & EVENTS
							</Link>
						</li>

						{/* <li>
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
						</li> */}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
