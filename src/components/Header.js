import React from "react";
import logo from "../images/SYDNEY ISLAMIC BUSINESS SCHOOL.png";
// import logo2 from "../images/capture  .png";
import logo2 from "../images/capture  .png";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="navbar bg-sky-700 lg:w-full sm:w-4/5 py-12 h-[75px] sm:mt-[-60px] sticky top-0 justify-center   text-lg text-white z-50   ">
			<div className="navbar-start ">
				<div className="dropdown ">
					<label tabindex="0" class="btn btn-ghost  mb-5 lg:hidden">
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
							<a href="/program" class="justify-between">
								ACADEMIC PROGRAM
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
									<Link to="/phd">PhD</Link>
								</li>
								<li className="hover:bg-sky-700 border-b-2 border-gray-200">
									<Link to="/masters">Masters</Link>
								</li>
								<li className="hover:bg-sky-700 border-b-2 border-gray-200">
									<Link to="/undergraduate">Undergraduate</Link>
								</li>

								<li className="hover:bg-sky-700 border-b-2 border-gray-200">
									<Link to="/diploma">Diploma</Link>
								</li>
							</ul>
						</li>
						<li tabindex="0">
							<Link to="/research" class="justify-between">
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
							</Link>
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
						<img
							src={logo2}
							alt=""
							className="lg:h-[80px] lg:mt-3 lg:w-[120px]  lg:mb-5 sm:w-16  lg:ml-[105px]  "
						/>
					</Link>
				</div>
			</div>
			{/* desktop version */}
			<div class="navbar-center hidden text-lg lg:mr-[95px] lg:flex">
				<ul class="menu menu-horizontal p-0">
					<li tabindex="0">
						<a class="" href="/program">
							ACADEMIC PROGRAM
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
								<Link to="/phd">PhD</Link>
							</li>
							<li className="hover:bg-sky-700 border-b-2 border-gray-200">
								<Link to="/masters">Masters</Link>
							</li>
							<li className="hover:bg-sky-700 border-b-2 border-gray-200">
								<Link to="/undergraduate">Undergraduate</Link>
							</li>

							<li className="hover:bg-sky-700 border-b-2 border-gray-200">
								<Link to="/diploma">Diploma</Link>
							</li>
						</ul>
					</li>
					<li tabindex="0">
						<Link to="/research" className="justify-between ">
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
						</Link>
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
