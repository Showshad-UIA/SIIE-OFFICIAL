// import React from "react";
// import logo from "../images/SYDNEY ISLAMIC BUSINESS SCHOOL.png";
// const Header = () => {
// 	return (
// 		<div>
// 			<nav class="bg-sky-700">
// 				<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
// 					<div class="relative flex h-16 items-center justify-between">
// 						<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
// 							<button
// 								type="button"
// 								class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
// 								aria-controls="mobile-menu"
// 								aria-expanded="false"
// 							>
// 								<span class="sr-only">Open main menu</span>

// 								<svg
// 									class="block h-6 w-6"
// 									xmlns="http://www.w3.org/2000/svg"
// 									fill="none"
// 									viewBox="0 0 24 24"
// 									stroke-width="1.5"
// 									stroke="currentColor"
// 									aria-hidden="true"
// 								>
// 									<path
// 										stroke-linecap="round"
// 										stroke-linejoin="round"
// 										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
// 									/>
// 								</svg>

// 								<svg
// 									class="hidden h-6 w-6"
// 									xmlns="http://www.w3.org/2000/svg"
// 									fill="none"
// 									viewBox="0 0 24 24"
// 									stroke-width="1.5"
// 									stroke="currentColor"
// 									aria-hidden="true"
// 								>
// 									<path
// 										stroke-linecap="round"
// 										stroke-linejoin="round"
// 										d="M6 18L18 6M6 6l12 12"
// 									/>
// 								</svg>
// 							</button>
// 						</div>
// 						<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
// 							<div class="flex flex-shrink-0 items-center">
// 								<img
// 									class="block w-[150px] h-[50px]    lg:hidden"
// 									src={logo}
// 									alt="Your Company"
// 								/>
// 								<img
// 									class="hidden w-[250px] mt-[-20px] h-[60px]  lg:block"
// 									src={logo}
// 									alt="Your Company"
// 								/>
// 							</div>
// 							<div class="hidden sm:ml-6 sm:block">
// 								<div class="flex space-x-4">
// 									<a
// 										href="#"
// 										class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
// 										aria-current="page"
// 									>
// 										Admission
// 									</a>

// 									<a
// 										href="#"
// 										class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// 									>
// 										Research
// 									</a>

// 									<a
// 										href="#"
// 										class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// 									>
// 										About
// 									</a>

// 									<a
// 										href="#"
// 										class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// 									>
// 										Event & News
// 									</a>
// 								</div>
// 							</div>
// 						</div>
// 						<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
// 							<div class="relative ml-3">
// 								<div>
// 									<button
// 										type="button"
// 										class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
// 										id="user-menu-button"
// 										aria-expanded="false"
// 										aria-haspopup="true"
// 									></button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div class="sm:hidden" id="mobile-menu">
// 					<div class="space-y-1 px-2 pt-2 pb-3">
// 						<a
// 							href="#"
// 							class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
// 							aria-current="page"
// 						>
// 							Admission
// 						</a>

// 						<a
// 							href="#"
// 							class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
// 						>
// 							Research
// 						</a>

// 						<a
// 							href="#"
// 							class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
// 						>
// 							About
// 						</a>

// 						<a
// 							href="#"
// 							class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
// 						>
// 							Event & News
// 						</a>
// 					</div>
// 				</div>
// 			</nav>
// 			;
// 		</div>
// 	);
// };

// export default Header;

import React from "react";
import logo from "../images/SYDNEY ISLAMIC BUSINESS SCHOOL.png";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="navbar bg-sky-700 lg:w-full sm:w-4/5    h-[70px] sm:mt-[-60px] sticky top-0 justify-center   text-lg text-white z-50   ">
			<div className="navbar-start ">
				<div className="dropdown ">
					<label tabindex="0" class="btn btn-ghost mb-5 lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabindex="0"
						className="menu menu-compact dropdown-content mt-3 p-2 bg-white   text-black rounded-box w-52"
					>
						<li tabindex="0">
							<a class="justify-between">
								ADMISSION
								<svg
									class="fill-current "
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
								>
									<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
								</svg>
							</a>
							<ul class="p-2   absolute text-black bg-white  opacity-100 ">
								<li className="hover:bg-sky-700 border-b-2 border-gray-200">
									<Link to="/postgraduate">PhD</Link>
								</li>
								<li className="hover:bg-sky-700 border-b-2 border-gray-200">
									<Link to="/postgraduate">Masters</Link>
								</li>
								<li className="hover:bg-sky-700 border-b-2 border-gray-200">
									<Link to="/undergraduate">Undergraduate</Link>
								</li>

								<li className="hover:bg-sky-700 border-b-2 border-gray-200">
									<Link to="/funding">Diploma</Link>
								</li>
							</ul>
						</li>
						<li tabindex="0">
							<a class="justify-between">
								RESEARCH
								<svg
									class="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
								>
									<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
								</svg>
							</a>
							<ul class="p-2   absolute text-black bg-white  opacity-100 ">
								<li className="hover:bg-sky-700 border-b-2 border-gray-200">
									<Link to="/undergraduate">RESEARCH METHODOLOGY</Link>
								</li>
								<li className="hover:bg-sky-700 border-b-2 border-gray-200">
									<Link to="/postgraduate">Survey</Link>
								</li>
							</ul>
						</li>

						<li>
							<Link to="/news">NEWS & EVENTS</Link>
						</li>
						<li>
							<Link to="/about">ABOUT</Link>
						</li>
						<li>
							<Link to="/home"></Link>
						</li>
					</ul>
				</div>
				<div>
					<Link to="/">
						<img src={logo} alt="" className=" mb-10 sm:mt-5 lg:ml-20  " />
					</Link>
				</div>
			</div>
			{/* desktop version */}
			<div class="navbar-center hidden text-lg  lg:flex lg:mr-2">
				<ul class="menu menu-horizontal p-0">
					<li tabindex="0">
						<a class="">
							ADMISSION
							<svg
								class="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
							>
								<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
							</svg>
						</a>
						<ul class="p-2  absolute text-black bg-white   opacity-100 left-0">
							<li className="hover:bg-sky-700 border-b-2 border-gray-200">
								<Link to="/postgraduate">PhD</Link>
							</li>
							<li className="hover:bg-sky-700 border-b-2 border-gray-200">
								<Link to="/postgraduate">Masters</Link>
							</li>
							<li className="hover:bg-sky-700 border-b-2 border-gray-200">
								<Link to="/undergraduate">Undergraduate</Link>
							</li>

							<li className="hover:bg-sky-700 border-b-2 border-gray-200">
								<Link to="/funding">Diploma</Link>
							</li>
						</ul>
					</li>
					<li tabindex="0">
						<a class="justify-between">
							RESEARCH
							<svg
								class="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
							>
								<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
							</svg>
						</a>
						<ul class="p-2  absolute text-black bg-white   opacity-100 left-0">
							<li className="hover:bg-sky-700 border-b-2 border-gray-200">
								<Link to="/survey">SURVEY</Link>
							</li>
							<li className="hover:bg-sky-700 border-b-2 border-gray-200">
								<Link to="/support">RESEARCH METHODOLOGY</Link>
							</li>
						</ul>
					</li>

					<li>
						<Link to="/news">NEWS & EVENTS</Link>
					</li>
					<li>
						<Link to="/about">ABOUT</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
