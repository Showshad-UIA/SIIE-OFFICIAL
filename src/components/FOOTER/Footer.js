import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import linekdln from "../../Carosel/Asset/LinkedIn_icon_circle.svg.png";
const Footer = () => {
	return (
		<>
			<footer class=" text-white bg-sky-700 lg:mt-auto mt-16">
				<div class="grid grid-cols-2 gap-16 lg:mx-24 py-8 px-6 md:grid-cols-4 lg:grid-cols-4 justify-between">
					<div>
						<h2 class="mb-6 text-md underline font-bold text-white  dark:text-gray-400">
							SIBS
						</h2>
						<ul class="text-white dark:white text-sm">
							<li class="mb-4">
								<p className="mt-2.5">Sydney NSW 2000 Australia</p>
								<p className="mt-2.5">Telephone: +61211223344</p>
								<p className="mt-2.5">SIBS CRICOS Provider Code: XXXXX</p>
								<p className="mt-2.5">TEQSA Provider ID: PRVXXXXX</p>
								<p className="mt-2.5">ABN: 62647024815</p>
							</li>
						</ul>
					</div>
					<div>
						<h2 class="mb-6 text-md underline font-bold text-white uppercase dark:text-gray-400">
							HOME
						</h2>
						<ul class="text-white text-sm mt-3 dark:white">
							<li class="mb-4">
								<a href="#" class=" hover:underline">
									About SIBS
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Careers at SIBS
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Facilities
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Collaborations
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 class="mb-6 text-md font-bold text-white uppercase dark:text-gray-400 underline">
							STUDY
						</h2>
						<ul class="text-white mt-3 text-sm dark:text-gray-400">
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Current students
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Future students
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Key dates
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Fees
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Scholarships
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 class="mb-6 text-md font-bold text-white uppercase dark:text-gray-400 underline">
							EVENTS & NEWS
						</h2>
						<ul class="text-white text-sm mt-3 dark:text-gray-400">
							<li class="mb-4">
								<a href="#" class="hover:underline">
									SIBS events
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									News
								</a>
							</li>
						</ul>
					</div>
					{/* <div>
						<h2 class="mb-6 text-md font-bold text-white uppercase dark:text-gray-400 underline">
							STAFF
						</h2>
						<ul class="text-white dark:text-gray-400">
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Working with us
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Career development
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									salary and benefits
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									New staffs
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Future staffs
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Teaching
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Research
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Staff service
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 class="mb-6 text-md font-bold text-white uppercase dark:text-gray-400 underline">
							RESEARCH
						</h2>
						<ul class="text-white dark:text-gray-400">
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Events
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Researchers
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Future students
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Current students
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Groups
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Community and industry
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Research
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 class="mb-6 text-md text-white font-bold uppercase dark:text-gray-400 underline">
							ALUMNI
						</h2>
						<ul class="text-white dark:text-gray-400">
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Alumni award
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Alumni benefits
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Future students
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Mentoring program
								</a>
							</li>
						</ul>
					</div> */}
				</div>
			</footer>

			{/* social media icon */}

			{/* <footer className="footer text-white bg-sky-700  ">
				<div class="grid grid-cols-2 px-6 lg:mx-[180px]  border-white sm:mt-6 md:grid-cols-6  gap-12">
					<div>
						<h2 class="mb-6 text-sm  font-bold text-white dark:text-gray-400">
							<span class="text-md[20px] text-white link link-hover">
								<p>
									Sydney Islamic business school <p>Copyright ©2022</p>{" "}
									<p>ABN 53 014 069 881 No: 00917K</p>
								</p>
							</span>
						</h2>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-bold text-white dark:text-gray-400 ">
							<span class="text-md[20px] text-white link link-hover">
								<p>26/7 hall street, auburn,</p>
								<p> nsw 2144 </p>
								<p>Tel: +61 2 9852 5222</p>
							</span>
						</h2>
					</div>
					<div>
						<span class="text-md[20px] text-white link link-hover">
							<p>Page updated on 03/10/2022</p>
						</span>
					</div>
					<div>
						<span class="text-md[20px] text-white link link-hover">
							<p>First Islamic university in Australia</p>
						</span>
					</div>
					<div>
						<span class="text-md[20px] text-white link link-hover">
							Female campus
						</span>
					</div>
					<div>
						<span class="text-md[20px] text-white link link-hover">
							Male campus
						</span>
					</div>
				</div>
			</footer> */}

			<footer className=" footer lg:px-10 py-2 border-t  bg-sky-700 text-base-content border-base-300  ">
				<div className=" lg:mx-16 flex px-5 w-full">
					<div className="flex justify-start  text-white">
						<div className="flex ">
							<div className="lg:visible md:invisible">
								<h1 className="text-md">Follow Us: </h1>
							</div>

							<div className="grid grid-flow-col gap-4">
								<a>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="fill-current"
									>
										<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
									</svg>
								</a>
								<a href="#" class=" text-white">
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fab"
										data-icon="instagram"
										class="w-5 h-5"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512"
									>
										<path
											fill="currentColor"
											d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
										></path>
									</svg>
								</a>
								<a href="#" class=" text-white ">
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fab"
										data-icon="linkedin-in"
										class="w-5 h-5"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512"
									>
										<path
											fill="currentColor"
											d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
										></path>
									</svg>
								</a>
								<a>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="fill-current"
									>
										<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
									</svg>
								</a>
								<a>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="fill-current"
									>
										<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="flex px-5  text-white">
					<ul className="grid gap-2 lg:grid-cols-6 md:grid-cols-3  grid-cols-3 ">
						<li> Privacy policy</li>
						<li>Copyright & Disclaimer</li>
						<li>Accessibility</li>
						<li>Site feedback</li>
						<li>Complaints</li>
						<li>Sitemap</li>
					</ul>
				</div>
			</footer>
		</>
	);
};

export default Footer;
