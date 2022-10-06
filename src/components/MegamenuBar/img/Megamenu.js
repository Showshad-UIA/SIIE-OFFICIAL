import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/style.css";
import "../css/font-awesome.css";
import logo from "../../../images/capture  .png";

const Megamenu = () => {
	const [nav, setNav] = useState(false);
	return (
		<div>
			<header class="header">
				<div class="container">
					<div class="row v-center">
						<div class="header-item item-left">
							<div class="logo">
								<a>
									<img src={logo} alt="SIBS" />
								</a>
							</div>
						</div>
						{/* <!-- menu start here --> */}
						<div class="header-item item-center">
							<div class="menu-overlay"></div>
							<nav class="menu">
								<div class="mobile-menu-head">
									<div class="go-back">
										<i class="fa fa-angle-left"></i>
									</div>
									<div class="current-menu-title"></div>
									<div class="mobile-menu-close">&times;</div>
								</div>
								<ul class="menu-main">
									<li>
										<a href="#">Home</a>
									</li>
									<li class="menu-item-has-children  ">
										<a href="#">
											New <i class="fa fa-angle-down"></i>
										</a>
										<div class="sub-menu mega-menu mega-menu-column-4">
											<div class="list-item text-center">
												<a href="#">
													<img src="img/p1.jpg" alt="new Product" />
													<h4 class="title">Product 1</h4>
												</a>
											</div>
											<div class="list-item text-center">
												<a href="#">
													<img src="img/p2.jpg" alt="new Product" />
													<h4 class="title">Product 2</h4>
												</a>
											</div>
											<div class="list-item text-center">
												<a href="#">
													<img src="img/p3.jpg" alt="new Product" />
													<h4 class="title">Product 3</h4>
												</a>
											</div>
											<div class="list-item text-center">
												<a href="#">
													<img src="img/p4.jpg" alt="new Product" />
													<h4 class="title">Product 4</h4>
												</a>
											</div>
										</div>
									</li>
									<li class="menu-item-has-children">
										<a href="#">
											Shop <i class="fa fa-angle-down"></i>
										</a>
										<div class="sub-menu mega-menu mega-menu-column-4">
											<div class="list-item">
												<h4 class="title">Men's Fashion</h4>
												<ul>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
												</ul>
												<h4 class="title">Beauty</h4>
												<ul>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
												</ul>
											</div>
											<div class="list-item">
												<h4 class="title">Women's Fashion</h4>
												<ul>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
												</ul>
												<h4 class="title">Furniture</h4>
												<ul>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
												</ul>
											</div>
											<div class="list-item">
												<h4 class="title">Home, Kitchen</h4>
												<ul>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
													<li>
														<a href="#">Product List</a>
													</li>
												</ul>
											</div>
										</div>
									</li>

									<li class="menu-item-has-children">
										<a href="#">
											Pages <i class="fas fa-angle-down"></i>
										</a>
										<div class="sub-menu single-column-menu">
											<ul>
												<li>
													<a href="#">Login</a>
												</li>
												<li>
													<a href="#">Register</a>
												</li>
												<li>
													<a href="#">Faq</a>
												</li>
												<li>
													<a href="#">404 Page</a>
												</li>
											</ul>
										</div>
									</li>
									<li>
										<a href="#">Contact</a>
									</li>
								</ul>
							</nav>
						</div>
						{/* <!-- menu end here --> */}
						<div class="header-item item-right">
							<a href="#">
								<i class="fas fa-search"></i>
							</a>
							<a href="#">
								<i class="far fa-heart"></i>
							</a>
							<a href="#">
								<i class="fas fa-shopping-cart"></i>
							</a>
							{/* <!-- mobile menu trigger --> */}
							<div
								onClick={() => setNav(!nav)}
								className=" md:hidden cursor-pointer pr-4 z-10 text-gray-500"
							>
								{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
							</div>
							{nav && (
								<div class="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-sky-700 text-gray-500'">
									<div class="menu-overlay"></div>
									<nav class="menu">
										<div class="mobile-menu-head">
											<div class="go-back">
												<i class="fa fa-angle-left"></i>
											</div>
											<div class="current-menu-title"></div>
											<div class="mobile-menu-close">&times;</div>
										</div>
										<ul class="menu-main">
											<li>
												<a href="#">Home</a>
											</li>
											<li class="menu-item-has-children">
												<a href="#">
													New <i class="fa fa-angle-down"></i>
												</a>
												<div class="sub-menu mega-menu mega-menu-column-4">
													<div class="list-item text-center">
														<a href="#">
															<img src="img/p1.jpg" alt="new Product" />
															<h4 class="title">Product 1</h4>
														</a>
													</div>
													<div class="list-item text-center">
														<a href="#">
															<img src="img/p2.jpg" alt="new Product" />
															<h4 class="title">Product 2</h4>
														</a>
													</div>
													<div class="list-item text-center">
														<a href="#">
															<img src="img/p3.jpg" alt="new Product" />
															<h4 class="title">Product 3</h4>
														</a>
													</div>
													<div class="list-item text-center">
														<a href="#">
															<img src="img/p4.jpg" alt="new Product" />
															<h4 class="title">Product 4</h4>
														</a>
													</div>
												</div>
											</li>
											<li class="menu-item-has-children">
												<a href="#">
													Shop <i class="fa fa-angle-down"></i>
												</a>
												<div class="sub-menu mega-menu mega-menu-column-4">
													<div class="list-item">
														<h4 class="title">Men's Fashion</h4>
														<ul>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
														</ul>
														<h4 class="title">Beauty</h4>
														<ul>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
														</ul>
													</div>
													<div class="list-item">
														<h4 class="title">Women's Fashion</h4>
														<ul>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
														</ul>
														<h4 class="title">Furniture</h4>
														<ul>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
														</ul>
													</div>
													<div class="list-item">
														<h4 class="title">Home, Kitchen</h4>
														<ul>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
															<li>
																<a href="#">Product List</a>
															</li>
														</ul>
													</div>
												</div>
											</li>

											<li class="menu-item-has-children">
												<a href="#">
													Pages <i class="fas fa-angle-down"></i>
												</a>
												<div class="sub-menu single-column-menu">
													<ul>
														<li>
															<a href="#">Login</a>
														</li>
														<li>
															<a href="#">Register</a>
														</li>
														<li>
															<a href="#">Faq</a>
														</li>
														<li>
															<a href="#">404 Page</a>
														</li>
													</ul>
												</div>
											</li>
											<li>
												<a href="#">Contact</a>
											</li>
										</ul>
									</nav>
								</div>
							)}
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Megamenu;
