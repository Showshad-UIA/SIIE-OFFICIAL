import React from "react";
import logo from "../images/SYDNEY ISLAMIC BUSINESS SCHOOL.png";
// import logo2 from "../images/capture  .png";
import logo2 from "../images/capture  .png";
import { Link } from "react-router-dom";


const Header = () => {
	return (
		// <header className="navbar bg-sky-700 lg:w-full sm:w-4/5 py-12 h-[75px] sm:mt-[-60px] sticky top-0 justify-center   text-lg text-white z-50   ">
		// 	<div className="navbar-start ">
		// 		<div className="dropdown ">
		// 			<label tabindex="0" class="btn btn-ghost  mb-5 lg:hidden">
		// 				<svg
		// 					xmlns="http://www.w3.org/2000/svg"
		// 					className="h-5 w-5"
		// 					fill="none"
		// 					viewBox="0 0 24 24"
		// 					stroke="currentColor"
		// 				>
		// 					<path
		// 						stroke-linecap="round"
		// 						stroke-linejoin="round"
		// 						stroke-width="2"
		// 						d="M4 6h16M4 12h8m-8 6h16"
		// 					/>
		// 				</svg>
		// 			</label>
		// 			<ul
		// 				tabindex="0"
		// 				className="menu menu-compact dropdown-content mt-3 p-2 bg-white   text-black rounded-box w-52"
		// 			>
		// 				<li tabindex="0">
		// 					<a href="/program" class="justify-between">
		// 						ACADEMIC PROGRAMS
		// 						<svg
		// 							class="fill-current "
		// 							xmlns="http://www.w3.org/2000/svg"
		// 							width="20"
		// 							height="20"
		// 							viewBox="0 0 24 24"
		// 						>
		// 							<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
		// 						</svg>
		// 					</a>
		// 					<ul class="p-2   absolute text-black bg-white  opacity-100 ">
		// 						<li className="hover:bg-sky-700 border-b-2 border-gray-200">
		// 							<Link to="/phd">PhD</Link>
		// 						</li>
		// 						<li className="hover:bg-sky-700 border-b-2 border-gray-200">
		// 							<Link to="/masters">Masters</Link>
		// 						</li>
		// 						<li className="hover:bg-sky-700 border-b-2 border-gray-200">
		// 							<Link to="/undergraduate">Undergraduate</Link>
		// 						</li>

		// 						<li className="hover:bg-sky-700 border-b-2 border-gray-200">
		// 							<Link to="/diploma">Diploma</Link>
		// 						</li>
		// 					</ul>
		// 				</li>
		// 				<li tabindex="0">
		// 					<a class="justify-between">RESEARCH</a>
		// 				</li>

		// 				<li>
		// 					<Link to="/news">NEWS & EVENTS</Link>
		// 				</li>
		// 				<li tabindex="0">
		// 					<a href="/program" class="justify-between">
		// 						ABOUT US
		// 						<svg
		// 							class="fill-current "
		// 							xmlns="http://www.w3.org/2000/svg"
		// 							width="20"
		// 							height="20"
		// 							viewBox="0 0 24 24"
		// 						>
		// 							<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
		// 						</svg>
		// 					</a>
		// 					<ul class="p-2   absolute text-black bg-white  opacity-100 ">
		// 						<li className="hover:bg-sky-700 border-b-2 border-gray-200">
		// 							<Link to="#">Leadership and governance </Link>
		// 						</li>
		// 						<li className="hover:bg-sky-700 border-b-2 border-gray-200">
		// 							<Link to="#">campus and structure </Link>
		// 						</li>
		// 						<li className="hover:bg-sky-700 border-b-2 border-gray-200">
		// 							<Link to="#">Research center</Link>
		// 						</li>

		// 						<li className="hover:bg-sky-700 border-b-2 border-gray-200">
		// 							<Link to="#">Contact with SIBS</Link>
		// 						</li>
		// 					</ul>
		// 				</li>
		// 				<li>
		// 					<Link to="/home"></Link>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 		<div>
		// 			<Link to="/">
		// 				<img
		// 					src={logo2}
		// 					alt=""
		// 					className="lg:h-[80px] lg:mt-3 lg:w-[120px]  lg:mb-5 sm:w-16  lg:ml-[105px]  "
		// 				/>
		// 			</Link>
		// 		</div>
		// 	</div>
		// 	{/* desktop version */}
		// 	<div class="navbar-center hidden text-lg lg:mr-[95px] lg:flex">
		// 		<ul class="menu menu-horizontal p-0">
		// 			<li tabindex="0">
		// 				<a class="">
		// 					ACADEMIC PROGRAMS
		// 					<svg
		// 						class="fill-current"
		// 						xmlns="http://www.w3.org/2000/svg"
		// 						width="20"
		// 						height="20"
		// 						viewBox="0 0 24 24"
		// 					>
		// 						<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
		// 					</svg>
		// 				</a>
		// 				<ul class="p-2  absolute  menu-vertical lg:menu-horizontal text-black bg-white   opacity-100 left-0">
		// 					<li className="hover:bg-sky-700 border-b-2 border-gray-200">
		// 						<Link to="/phd">PhD</Link>
		// 					</li>
		// 					<li className="hover:bg-sky-700 border-b-2 border-gray-200">
		// 						<Link to="/masters">Masters</Link>
		// 					</li>
		// 					<li className="hover:bg-sky-700 border-b-2 border-gray-200">
		// 						<Link to="/undergraduate">Undergraduate</Link>
		// 					</li>

		// 					<li className="hover:bg-sky-700 border-b-2 border-gray-200">
		// 						<Link to="/diploma">Diploma</Link>
		// 					</li>
		// 				</ul>
		// 			</li>
		// 			<li tabindex="0">
		// 				<Link to="/research" className="justify-between ">
		// 					RESEARCH
		// 				</Link>
		// 			</li>

		// 			<li>
		// 				<Link to="/news">NEWS & EVENTS</Link>
		// 			</li>
		// 			<li tabindex="0">
		// 				<a href="/program" class="justify-between">
		// 					ABOUT US
		// 					<svg
		// 						class="fill-current "
		// 						xmlns="http://www.w3.org/2000/svg"
		// 						width="20"
		// 						height="20"
		// 						viewBox="0 0 24 24"
		// 					>
		// 						<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
		// 					</svg>
		// 				</a>
		// 				<ul class="p-2   absolute text-black bg-white  opacity-100 ">
		// 					<li className="hover:bg-sky-700 border-b-2 border-gray-200">
		// 						<Link to="#">Leadership and governance </Link>
		// 					</li>
		// 					<li className="hover:bg-sky-700 border-b-2 border-gray-200">
		// 						<Link to="#">campus and structure </Link>
		// 					</li>
		// 					<li className="hover:bg-sky-700 border-b-2 border-gray-200">
		// 						<Link to="#">Research center</Link>
		// 					</li>

		// 					<li className="hover:bg-sky-700 border-b-2 border-gray-200">
		// 						<Link to="#">Contact with SIBS</Link>
		// 					</li>
		// 				</ul>
		// 			</li>
		// 		</ul>
		// 	</div>
		// </header>
		// 	<div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
		//     <a href="https://flowbite.com" class="flex items-center">
		//         <img src={logo2} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
		//         <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
		//     </a>
		//     <div class="flex items-center md:order-2">
		//         <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
		//         <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</a>
		//         <button data-collapse-toggle="mega-menu" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
		//             <span class="sr-only">Open main menu</span>
		//             <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
		//         </button>
		//     </div>
		//     <div id="mega-menu" class="hidden justify-between items-center w-full text-sm md:flex md:w-auto md:order-1">
		//         <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
		//             <li>
		//                 <a href="#" class="block py-2 pr-4 pl-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
		//             </li>
		//             <li>
		//                 <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
		//                     Company <svg aria-hidden="true" class="ml-1 w-5 h-5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
		//                 </button>
		//                 <div id="mega-menu-dropdown" class="grid hide  absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
		//                     <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
		//                         <ul class="space-y-4" aria-labelledby="mega-menu-dropdown-button">
		//                             <li>
		//                                 <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
		//                                     About Us
		//                                 </a>
		//                             </li>
		//                             <li>
		//                                 <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
		//                                     Library
		//                                 </a>
		//                             </li>
		//                             <li>
		//                                 <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
		//                                     Resources
		//                                 </a>
		//                             </li>
		//                             <li>
		//                                 <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
		//                                     Pro Version
		//                                 </a>
		//                             </li>
		//                         </ul>
		//                     </div>
		//                     <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
		//                         <ul class="space-y-4">
		//                             <li>
		//                                 <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
		//                                     Blog
		//                                 </a>
		//                             </li>
		//                             <li>
		//                                 <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
		//                                     Newsletter
		//                                 </a>
		//                             </li>
		//                             <li>
		//                                 <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
		//                                     Playground
		//                                 </a>
		//                             </li>
		//                             <li>
		//                                 <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
		//                                     License
		//                                 </a>
		//                             </li>
		//                         </ul>
		//                     </div>
		//                     <div class="p-4 text-gray-900 dark:text-white">
		//                         <ul class="space-y-4">
		//                             <li>
		//                                 <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
		//                                     Contact Us
		//                                 </a>
		//                             </li>
		//                             <li>
		//                                 <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
		//                                     Support Center
		//                                 </a>
		//                             </li>
		//                             <li>
		//                                 <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
		//                                     Terms
		//                                 </a>
		//                             </li>
		//                         </ul>
		//                     </div>
		//                 </div>
		//             </li>
		//             <li>
		//                 <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Team</a>
		//             </li>
		//             <li>
		//                 <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
		//             </li>
		//         </ul>
		//     </div>
		// </div>

		<div>
			<div className="navbar  bg-sky-700 lg:w-full sm:w-4/5 lg:py-12 lg:h-[73px] lg:mt-[-1px]  sticky   text-white z-50 w-screen flex justify-around items-center   drop-shadow-md">
				{/* <!-- Logo --> */}
				<div class="px-3 md:px-10 text-2xl   text-white font-extrabold italic">
					<Link to="/">
						<img src={logo2} alt="" />
					</Link>
				</div>

				<div className="flex justify-center lg:mt-[-28px] ">
					<div class="group">
						<button class=" group-hover:bg-sky-700 group-hover:text-white">
							ACADEMIC PROGRAMS
						</button>
						<div class="hidden group-hover:flex flex-col absolute lg:right-[250px] py-2  w-[60%] bg-white text-black duration-300">
							<div class="grid sm:grid-cols-1 md:grid-cols-3 p-5 gap-8">
								<div class="flex flex-col lg:w-[250px]   ">
									<a href="/phd">
										<h3 class="mb-4 text-xl underline">PhD</h3>
									</a>
									<Link
										to="/phdfinance"
										class=" hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										PhD in Islamic Banking & Finance
									</Link>
									<Link
										to="/phdeconomics"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										PhD in Islamic Economics
									</Link>
									<Link
										to="/phdbusinesslaw"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										PhD in Islamic Business law
									</Link>
									<Link
										to="/phdinsurance"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										PhD in Islamic Insurance
									</Link>
									<Link
										to="/phdsariah"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										PhD in Islamic Shariah
									</Link>
									<Link
										to="/phdusalfiq"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										PhD in Islamic studies
									</Link>
								</div>

								<div class="flex flex-col lg:w-[270px] ">
									<a href="/masters">
										<h3 class="mb-4 text-xl underline">Masters(Research)</h3>
									</a>
									<Link
										to="/banking"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Masters in Islamic Banking & Finance
									</Link>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Masters in Islamic Economics
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Masters in Islamic Business law
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Masters in Islamic Insurance
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Masters in Islamic Shariah
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Masters in Islamic studies
									</a>
								</div>
								<div class="flex flex-col lg:w-[270px] ">
									<a href="/masters">
										<h3 class="mb-4 text-xl underline">Masters(Course work)</h3>
									</a>
									<Link
										to="/banking"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Masters in Islamic Banking & Finance
									</Link>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Masters in Islamic Economics
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Masters in Islamic Business law
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Masters in Islamic Insurance
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Masters in Islamic Shariah
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Masters in Islamic studies
									</a>
								</div>

								<div class="flex flex-col w-[350px]">
									<a href="/undergraduate">
										{" "}
										<h3 class="mb-4 text-xl underline">Undergraduate</h3>
									</a>
									<Link
										to="/banking"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Undergraduate in Islamic Banking & Finance
									</Link>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Undergraduate in Islamic Economics
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Undergraduate in Islamic Business law
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Undergraduate in Islamic Insurance
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Undergraduate in Islamic Shariah
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Undergraduate in Islamic studies
									</a>
								</div>

								<div class="flex flex-col ">
									<a href="/diploma">
										<h3 class="mb-4 text-xl underline">Diploma</h3>
									</a>
									<Link
										to="/banking"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Diploma in Islamic Banking & Finance
									</Link>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Diploma in Islamic Economics
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Diploma in Islamic Business law
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Diploma in Islamic Insurance
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Diploma in Islamic Shariah
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Diploma in Islamic studies
									</a>
								</div>
							</div>
						</div>
						{/* </div> <!-- end of dropdown --> */}
					</div>

					<div>
						<a
							href="/research"
							class="px-5 py-4 hover:bg-sky-700 hover:text-white"
						>
							RESEARCH
						</a>
						<a
							href="/events"
							class="px-5 py-4  text-white"
						>
							NEWS & EVENTS
						</a>
					</div>
					{/* <!-- Mega menu here --> */}

					<div class="group">
						<button class="px-5  group-hover:bg-sky-700 group-hover:text-white">
							ABOUT US
						</button>
						<div class="hidden group-hover:flex flex-col absolute right-[-30] lg:w-[250px]  p-5   bg-white text-black duration-300">
							<div class="grid grid-cols-1 ">
								<div class="flex flex-col">
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Vision and Mission
									</a>

									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Leadership and Governance
									</a>

									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Academic Structure
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Male Campus
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Female Campus
									</a>
									<a
										href="#"
										class="hover:bg-sky-700 border-b-2 border-gray-200 text-black hover:text-white"
									>
										Collaborations
									</a>
								</div>
							</div>
						</div>
						{/* </div> <!-- end of dropdown --> */}
					</div>
				</div>

				{/* <!-- Other content --> */}
			</div>
		</div>
	);
};

export default Header;
