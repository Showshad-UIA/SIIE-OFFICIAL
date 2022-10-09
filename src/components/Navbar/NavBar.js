import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/capture  .png";

import NavLinks from "./NavLinks";
import Topbar from "./Topbar";
const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<nav className="bg-sky-700 sticky top-0 py-2 ">
				<div className="flex items-center font-medium justify-around ">
					<div className="z-50 p-5 md:w-auto w-full flex justify-between">
						<Link to="/">
							<img src={Logo} alt="logo" className="md:cursor-pointer h-16" />
						</Link>
						<div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
							<ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
						</div>
					</div>
					<ul className="md:flex hidden  text-white items-center gap-8  mt[-10px] font-[Poppins]">
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
						{/* <li>
							<a href="#" class="desktop-item">
								ABOUT US
							</a>
							
							<ul class="drop-menu ">
								<li className="hover:bg-sky-700">
									<a href="#">Vision and Mission</a>
								</li>
								<li>
									<a href="#">Leadership and Governance</a>
								</li>
								<li>
									<a href="#">Academic Structure</a>
								</li>
								<li>
									<a href="#">Male Campus</a>
								</li>
								<li>
									<a href="#">Female Campus</a>
								</li>
								<li>
									<a href="#">Collaborations</a>
								</li>
							</ul>
						</li> */}
					</ul>
					{/* <div className="md:block hidden">
					<Button />
				</div> */}
					{/* Mobile nav */}
					<ul
						className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
					>
						<NavLinks />
						{/* <div className="py-5">
						<Button />
					</div> */}

						<li>
							<Link to="/research" className="py-7 px-3 inline-block">
								RESEARCH
							</Link>
						</li>
						<li>
							<Link to="/events" className="py-7 px-3 inline-block">
								EVENTS & EVENTS
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
