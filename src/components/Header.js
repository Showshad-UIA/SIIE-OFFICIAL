import React from "react";
import logo from "../images/SYDNEY ISLAMIC BUSINESS SCHOOL.png";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header class="navbar bg-sky-700    h-[70px] sm:mt-[-60px] sticky top-0 justify-center   text-lg text-white z-50   ">
			<div class="navbar-start ">
				<div class="dropdown ">
					<label tabindex="0" class="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
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
						class="menu menu-compact dropdown-content mt-3 p-2 bg-white   text-black rounded-box w-52"
					>
						<li tabindex="0">
							<a class="justify-between">
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
							<ul class="p-2   absolute text-black bg-white  opacity-100 ">
								<li className="hover:bg-sky-700 border-b-2 border-gray-200">
									<Link to="/postgraduate">Phd</Link>
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
				<Link to="/">
					<img src={logo} alt="" className=" w-[350px]  sm:mb-[50px] " />
				</Link>
			</div>
			{/* desktop version */}
			<div class="navbar-center hidden text-lg  lg:flex">
				<ul class="menu menu-horizontal p-0">
					<li tabindex="0">
						<a class="justify-between">
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
								<Link to="/postgraduate">Phd</Link>
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
