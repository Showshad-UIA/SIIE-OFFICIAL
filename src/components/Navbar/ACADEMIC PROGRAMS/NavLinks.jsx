import { faLink } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../ACADEMIC PROGRAMS/Mylinks";

const NavLinks = () => {
	const { open, setOpen } = useState("false");
	const [heading, setHeading] = useState("");
	const [subHeading, setSubHeading] = useState("");
	return (
		<>
			{links.map((link) => (
				<div>
					<div className="px-3 text-left md:cursor-pointer group">
						<h1
							className="py-3 flex justify-between items-center md:pr-0 pr-5 group"
							onClick={() => {
								heading !== link.name ? setHeading(link.name) : setHeading("");
								setSubHeading("");
							}}
						>
							{link.name}
							<span className="text-xl md:hidden inline">
								<ion-icon
									name={`${
										heading === link.name ? "chevron-up" : "chevron-down"
									}`}
								></ion-icon>
							</span>
							<span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-3">
								<ion-icon name="chevron-down"></ion-icon>
							</span>
						</h1>
						{link.submenu && (
							<div>
								<div className="absolute top-[69px] hidden group-hover:md:block hover:md:block">
									<div className="py-3">
										<div
											className="w-4 h-4 left-3 absolute 
                     bg-white rotate-45"
										></div>
									</div>
									<div className="bg-gray-100 shadow-md text-black grid grid-cols-5  p-4 left-10">
										{link.sublinks.map(({ Head, link, sublink }) => (
											<div>
												
												<a
													className="text-md font-semibold onClick={() => setOpen(!open)} "
													href={link}
												>
													{Head}{" "}
												</a>

												

												{sublink.map((slink) => (
													<li className="text-sm w-full  text-black pr-5  my-3">
														<Link
															to={slink.link}
															className="hover:bg-sky-700 hover:text-white dropdown-content menu p-2 text-black border-b-2 border-gray-300  "
														>
															{slink.name}
														</Link>
													</li>
												))}
											</div>
										))}
									</div>
								</div>
							</div>
						)}
					</div>

					{/* Mobile menus */}
					<div
						className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
					>
						{/* sublinks */}
						{link.sublinks.map((slinks) => (
							<div>
								<div>
									<h1
										onClick={() =>
											subHeading !== slinks.Head
												? setSubHeading(slinks.Head)
												: setSubHeading("")
										}
										className="py-4 pl-7 font-semibold   flex justify-between items-center md:pr-0 pr-5"
									>
										{slinks.Head}

										<span className="text-xl md:mt-1 md:ml-2 inline">
											<ion-icon
												name={`${
													subHeading === slinks.Head
														? "chevron-up"
														: "chevron-down"
												}`}
											></ion-icon>
										</span>
									</h1>
									<div
										className={`${
											subHeading === slinks.Head ? "md:hidden" : "hidden"
										}`}
									>
										{slinks.sublink.map((slink) => (
											<li className="py-3 pl-14 hover:bg-sky-700 hover:text-white dropdown-content menu p-2 text-black border-b-2 border-gray-300 ">
												<Link onClick={() => setOpen(!open)} to={slink.link}>
													{slink.name}
												</Link>
											</li>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</>
	);
};

export default NavLinks;
