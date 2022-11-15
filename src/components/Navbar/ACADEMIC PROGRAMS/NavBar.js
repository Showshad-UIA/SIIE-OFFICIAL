import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Carosel/Asset/SydneyIslamicLogo-10-01-01.png";
import CurentStudent from "../STUDENTS/CurentStudent";
import NavLinks from "./NavLinks";
import ResearchMenu from "../RESERACH/ResearchMenu";
import Sibs from "../ABOUT SIBS/Sibs";
import EvnetsNewsMain from "../EVENT'S & NEWS/EvnetsNewsMain";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<nav className="bg-sky-700  sticky ">
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
					{/* desktop view navbar */}
					<ul className="md:flex hidden md:text-sm  text-white items-center gap-2  mt[-10px] font-[Poppins]">
						{/* Academic programs navbar */}
						<NavLinks />
						{/* Other menubars   */}
						<ResearchMenu></ResearchMenu>
						<CurentStudent></CurentStudent>
						<Sibs></Sibs>
						<EvnetsNewsMain></EvnetsNewsMain>
					</ul>

					{/* Mobile view nav */}
					<ul
						className={`
        md:hidden bg-white fixed  w-full top-0 overflow-y-auto bottom-0 py-24 
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
					>
						{/* academic programs menubar */}
						<NavLinks setOpen={setOpen} open={open} />
						{/* other menubars */}
						<ResearchMenu></ResearchMenu>
						<CurentStudent></CurentStudent>
						<Sibs></Sibs>
						<EvnetsNewsMain></EvnetsNewsMain>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
