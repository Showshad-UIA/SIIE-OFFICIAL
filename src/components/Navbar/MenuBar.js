import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../../images/capture  .png";

const MenuBar = () => {
	return (
		<div>
			{/* <div className="navbar h-24 bg-sky-700 sticky top-0 text-white">
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
							<img
								src={logo2}
								alt=""
								className="lg:h-[80px] lg:mt-3 lg:w-[120px]  lg:mb-5 sm:w-16  lg:ml-[105px]  "
							/>
						</Link>
					</div>
				</div>
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
							<ul class="p-2  absolute text-black bg-white    left-0">
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
			</div> */}

			<nav class="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
				<div class="container flex flex-wrap justify-between items-center mx-auto">
					<a href="#" class="flex items-center">
						<img
							src="https://flowbite.com/docs/images/logo.svg"
							class="mr-3 h-6 sm:h-10"
							alt="Flowbite Logo"
						/>
						<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
							Flowbite
						</span>
					</a>
					<button
						data-collapse-toggle="navbar-multi-level"
						type="button"
						class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
						aria-controls="navbar-multi-level"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>
					<div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
						<ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<a
									href="#"
									class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
									aria-current="page"
								>
									Home
								</a>
							</li>
							<li>
								<button
									id="dropdownNavbarLink"
									data-dropdown-toggle="dropdownNavbar"
									class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
								>
									Dropdown{" "}
									<svg
										class="ml-1 w-4 h-4"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</button>
								{/* <!-- Dropdown menu --> */}
								<div
									id="dropdownNavbar"
									class="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
								>
									<ul
										class="py-1 text-sm text-gray-700 dark:text-gray-400"
										aria-labelledby="dropdownLargeButton"
									>
										<li>
											<a
												href="#"
												class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Dashboard
											</a>
										</li>
										<li aria-labelledby="dropdownNavbarLink">
											<button
												id="doubleDropdownButton"
												data-dropdown-toggle="doubleDropdown"
												data-dropdown-placement="right-start"
												type="button"
												class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Dropdown
												<svg
													aria-hidden="true"
													class="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fill-rule="evenodd"
														d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
														clip-rule="evenodd"
													></path>
												</svg>
											</button>
											<div
												id="doubleDropdown"
												class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
												data-popper-reference-hidden=""
												data-popper-escaped=""
												data-popper-placement="right-start"
												style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(10px, 3002px);"
											>
												<ul
													class="py-1 text-sm text-gray-700 dark:text-gray-200"
													aria-labelledby="doubleDropdownButton"
												>
													<li>
														<a
															href="#"
															class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
														>
															Overview
														</a>
													</li>
													<li>
														<a
															href="#"
															class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
														>
															My downloads
														</a>
													</li>
													<li>
														<a
															href="#"
															class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
														>
															Billing
														</a>
													</li>
													<li>
														<a
															href="#"
															class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
														>
															Rewards
														</a>
													</li>
												</ul>
											</div>
										</li>
										<li>
											<a
												href="#"
												class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Earnings
											</a>
										</li>
									</ul>
									<div class="py-1">
										<a
											href="#"
											class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
										>
											Sign out
										</a>
									</div>
								</div>
							</li>
							<li>
								<a
									href="#"
									class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default MenuBar;