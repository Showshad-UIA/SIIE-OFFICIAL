import React, { useState } from "react";
import logo2 from "../Carosel/Asset/capture  .png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../CSS/style.css";

const Header = () => {
	return (
		<>
			<nav className="top-0 bg-sky-700 py-5 sticky">
				<div class="wrapper">
					<div class="logo">
						<a href="/">
							<img src={logo2} alt="" />
						</a>
					</div>
					<input type="radio" name="slider" id="menu-btn" />
					<input type="radio" name="slider" id="close-btn" />
					<ul class="nav-links">
						<label for="close-btn" class="btn close-btn   ">
							<FaTimes />
						</label>
						<li>
							<a href="#" class="desktop-item">
								ACADEMIC PROGRAMS
							</a>
							<input type="checkbox" id="showMega" />
							<label for="showMega" class="mobile-item">
								ACADEMIC PROGRAMS
							</label>
							<div class="mega-box  text-red-500">
								<div className="content bg-sky-700 ">
									<div className="grid lg:grid-cols-3 ">
										{" "}
										<div class="row ">
											<header className="">
												{" "}
												<Link to="/phd">
													{" "}
													<span className="font-bold text-black">
														PHD(RESEARCH)
													</span>
												</Link>
											</header>
											<ul class="mega-links  ">
												<li>
													<Link to="/phdfinance" className="w-[400px]">
														PhD in Islamic banking & finance
													</Link>
												</li>
												<li>
													<Link to="/phdeconomics" className="w-[400px]">
														PhD in Islamic Economics
													</Link>
												</li>
												<li>
													<a href="/phdbusinesslaw" className="w-[400px]">
														PhD in Islamic Business law
													</a>
												</li>
												<li>
													<a href="/phdinsurance" className="w-[400px]">
														PhD in Islamic Insurance
													</a>
												</li>
												<li>
													<a href="/phdsariah" className="w-[400px]">
														PhD in Islamic Shariah
													</a>
												</li>
												<li>
													<a href="/phdusalfiq" className="w-[400px]">
														PhD in Islamic studies
													</a>
												</li>
											</ul>
										</div>
										<div class="row">
											<header>
												{" "}
												<Link to="/phd">
													<span className="font-bold text-black">
														PHD(COURSEWORK)
													</span>{" "}
												</Link>{" "}
											</header>
											<ul class="mega-links  ">
												<li>
													<Link to="/phdfinance" className="w-[400px]">
														PhD in Islamic banking & finance
													</Link>
												</li>
												<li>
													<Link to="/phdeconomics" className="w-[400px]">
														PhD in Islamic Economics
													</Link>
												</li>
												<li>
													<a href="/phdbusinesslaw" className="w-[400px]">
														PhD in Islamic Business law
													</a>
												</li>
												<li>
													<a href="/phdinsurance" className="w-[400px]">
														PhD in Islamic Insurance
													</a>
												</li>
												<li>
													<a href="/phdsariah" className="w-[400px]">
														PhD in Islamic Shariah
													</a>
												</li>
												<li>
													<a href="/phdusalfiq" className="w-[400px]">
														PhD in Islamic studies
													</a>
												</li>
											</ul>
										</div>
										<div class="row">
											<header>
												<Link to="/masters">
													<span className="font-bold text-black">
														MASTERS(RESEARCH)
													</span>{" "}
												</Link>
											</header>
											<ul class="mega-links">
												<li>
													<a href="#" className="w-[350px]">
														Masters in Islamic banking & finance
													</a>
												</li>
												<li>
													<a href="#" className="w-[350px]">
														Masters in Islamic Economics
													</a>
												</li>
												<li>
													<a href="#" className="w-[350px]">
														Masters in Islamic Business law
													</a>
												</li>
												<li>
													<a href="#" className="w-[350px]">
														Masters in Islamic Insurance
													</a>
												</li>
												<li>
													<a href="#" className="w-[350px]">
														Masters in Islamic Shariah
													</a>
												</li>
												<li>
													<a href="#" className="w-[350px]">
														Masters in Islamic studies
													</a>
												</li>
											</ul>
										</div>
										<div class="row">
											<header>
												<Link to="/masters">
													<span className="font-bold text-black">
														MASTERS(COURSEWORK)
													</span>{" "}
												</Link>
											</header>
											<ul class="mega-links">
												<li>
													<a href="#" className="w-[350px]">
														Masters in Islamic banking & finance
													</a>
												</li>
												<li>
													<a href="#" className="w-[350px]">
														Masters in Islamic Economics
													</a>
												</li>
												<li>
													<a href="#" className="w-[350px]">
														Masters in Islamic Business law
													</a>
												</li>
												<li>
													<a href="#" className="w-[350px]">
														Masters in Islamic Insurance
													</a>
												</li>
												<li>
													<a href="#" className="w-[350px]">
														Masters in Islamic Shariah
													</a>
												</li>
												<li>
													<a href="#" className="w-[350px]">
														Masters in Islamic studies
													</a>
												</li>
											</ul>
										</div>
										<div class="row">
											<header>
												<Link to="/undergraduate">
													<span className="font-bold text-black">
														UNDERGRADUATE
													</span>{" "}
												</Link>
											</header>
											<ul class="mega-links">
												<li>
													<a href="#" className="w-[400px]">
														{" "}
														Undergraduate in Islamic finance & banking
													</a>
												</li>
												<li>
													<a href="#" className="w-[400px]">
														Undergraduate in Islamic Economics
													</a>
												</li>
												<li>
													<a href="#" className="w-[400px]">
														Undergraduate in Islamic Business law
													</a>
												</li>
												<li>
													<a href="#" className="w-[400px]">
														Undergraduate in Islamic Insurance
													</a>
												</li>
												<li>
													<a href="#" className="w-[400px]">
														Undergraduate in Islamic Shariah
													</a>
												</li>
												<li>
													<a href="#" className="w-[400px]">
														Undergraduate in Islamic studies
													</a>
												</li>
											</ul>
										</div>
										<div class="row ">
											<header>
												<Link to="/diploma">
													<span className="font-bold text-black">DIPLOMA</span>{" "}
												</Link>
											</header>
											<ul class="mega-links ">
												<li className="">
													<a href="#" className="w-[350px]">
														Diploma in Islamic finance & banking
													</a>
												</li>

												<li>
													<a href="#" className="w-[400px] ">
														Diploma in Islamic Economics
													</a>
												</li>
												<li>
													<a href="#" className="w-[400px]">
														Diploma in Islamic Business law
													</a>
												</li>
												<li>
													<a href="#" className="w-[400px]">
														Diploma in Islamic Insurance
													</a>
												</li>
												<li>
													<a href="#" className="w-[400px]">
														Diploma in Islamic Shariah
													</a>
												</li>
												<li>
													<a href="#" className="w-[400px]">
														Diploma in Islamic studies
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</li>

						<li>
							<Link to="/research">RESEARCH</Link>
						</li>

						<li>
							<a href="#" class="desktop-item">
								ABOUT US
							</a>
							<input type="checkbox" id="showDrop" />
							<label for="showDrop" class="mobile-item  ">
								ABOUT US
							</label>
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
						</li>
						<li>
							<Link to="/events">NEWS & EVENTS</Link>
						</li>
					</ul>
					<label for="menu-btn" class="btn menu-btn">
						<FaBars />
					</label>
				</div>
			</nav>
		</>
	);
};

export default Header;
