import React from "react";
import MediasIcon from "./MediasIcon";

const Footer = () => {
	return (
		<>
			{/* <footer className="footer p-10 grid sm:grid-cols-2 lg:grid-cols-6 bg-sky-700 text-white lg:mr-10">
				<div className="text-medium lg:mx-32">
					<span class="footer-title">Home</span>
					<a class="link link-hover">About</a>
					<a class="link link-hover">Courses</a>{" "}
					<a class="link link-hover">Careers</a>{" "}
					<a class="link link-hover">Sustainability</a>{" "}
				</div>{" "}
				<div className="">
					<span class="footer-title">Future students</span>
					<a class="link link-hover">PhD</a>
					<a class="link link-hover">Masters</a>
					<a class="link link-hover">Undergraduate</a>
					<a class="link link-hover">Diploma</a>
					<a class="link link-hover">Students life</a>
					<a class="link link-hover">Scholarship</a>
					<a class="link link-hover">Why SIBS?</a>
				</div>
				<div className="">
					<span class="footer-title">Students</span>
					<a class="link link-hover">Misconducts rule</a>
					<a class="link link-hover">Study with integrity</a>
					<a class="link link-hover">Enrolment</a>
					<a class="link link-hover">Fees</a>
					<a class="link link-hover">Forms</a>
					<a class="link link-hover">Results</a>
					<a class="link link-hover">Graduations</a>
					<a class="link link-hover">Students support</a>
				</div>
				<div className="">
					<span class="footer-title">Staff</span>
					<a class="link link-hover">Working with us</a>
					<a class="link link-hover">Career development</a>
					<a class="link link-hover">salary and benefits</a>
					<a class="link link-hover">New staffs</a>
					<a class="link link-hover">Future staffs</a>
					<a class="link link-hover">Teaching</a>
					<a class="link link-hover">Research</a>
					<a class="link link-hover">Staff service</a>
				</div>
				<div className="">
					<span class="footer-title">Research</span>
					<a class="link link-hover">Events</a>
					<a class="link link-hover">Researchers</a>
					<a class="link link-hover">Future students</a>
					<a class="link link-hover">Current students</a>
					<a class="link link-hover">Groups</a>
					<a class="link link-hover">Community and industry</a>
					<a class="link link-hover">Research</a>
				</div>
				<div className="">
					<span class="footer-title">Alumni</span>
					<a class="link link-hover">Alumni award</a>
					<a class="link link-hover">Alumni benefits</a>
					<a class="link link-hover">Future students</a>
					<a class="link link-hover">Mentoring program</a>
				</div>
			</footer> */}
			<footer class=" text-white bg-sky-700">
				<div class="grid grid-cols-2 gap-5 lg:mx-28 py-8 px-6 md:grid-cols-6">
					<div>
						<h2 class="mb-6 text-md underline font-bold text-white uppercase dark:text-gray-400">
							HOME
						</h2>
						<ul class="text-white dark:white">
							<li class="mb-4">
								<a href="#" class=" hover:underline">
									About
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Courses
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Careers
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Sustainability
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 class="mb-6 text-md font-bold text-white uppercase dark:text-gray-400 underline">
							FUTURE STUDENTS
						</h2>
						<ul class="text-white dark:text-gray-400">
							<li class="mb-4">
								<a href="#" class="hover:underline">
									PhD
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Masters
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Undergraduate
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Diploma
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Students life
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Scholarship
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Why SIBS?
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 class="mb-6 text-md font-bold text-white uppercase dark:text-gray-400 underline">
							STUDENTS
						</h2>
						<ul class="text-white dark:text-gray-400">
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Misconducts rule
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Study with integrity
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Enrolment
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Fees
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Forms
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Results
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Graduations
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Students support
								</a>
							</li>
						</ul>
					</div>
					<div>
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
					</div>
				</div>
			</footer>
			<footer className="footer text-white bg-sky-700 ">
				<div class="grid grid-cols-2 lg:mx-36 bt-2 px-6 border-black  md:grid-cols-10">
					<div>
						<h2 class="mb-6 text-sm  font-bold text-white dark:text-gray-400">
							Contact Us
						</h2>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-bold text-white dark:text-gray-400 ">
							Emergency Help
						</h2>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-bold text-white dark:text-gray-400 ">
							Copyright
						</h2>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-bold text-white dark:text-gray-400 ">
							Privacy
						</h2>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-bold text-white dark:text-gray-400 ">
							Mentoring program
						</h2>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-bold text-white dark:text-gray-400 ">
							Disclaimer
						</h2>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-bold text-white dark:text-gray-400 ">
							Complain unit
						</h2>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-bold text-white  dark:text-gray-400 ">
							Feedback
						</h2>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-bold text-white dark:text-gray-400 ">
							Compliance program
						</h2>
					</div>
					<div>
						<h2 class="mb-6  text-sm text-white font-bold dark:text-gray-400 ">
							Admission transparency
						</h2>
					</div>
				</div>
			</footer>
			<footer className="footer text-white bg-sky-700  ">
				<div class="grid grid-cols-2 px-6  border-white sm:mt-6 md:grid-cols-6 lg:mx-28 gap-12">
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
			</footer>
			{/* <footer className="footer px-10  bg-sky-700    text-white  ">
				{" "}
				<div className="items-center mb-5 lg:mx-[180px] gap-10  sm:grid-flow-row lg:grid-flow-col  gap-4">
					<span class="text-md[20px] text-white link link-hover">
						<p>
							Sydney Islamic business school <p>Copyright ©2022</p>{" "}
							<p>ABN 53 014 069 881 No: 00917K</p>
						</p>
					</span>
					<span className="h-3">|</span>
					<span class="text-md[20px] text-white link link-hover">
						<p>26/7 hall street, auburn,</p>
						<p> nsw 2144 </p>
						<p>Tel: +61 2 9852 5222</p>
					</span>
					<span className="h-8">|</span>
					<span class="text-md[20px] text-white link link-hover">
						<p>Page updated on 03/10/2022</p>
					</span>
					<span className="h-8">|</span>
					<span class="text-md[20px] text-white link link-hover">
						<p>First Islamic university in Australia</p>
					</span>
					<span className="h-8">|</span>
					<span class="text-md[20px] text-white link link-hover">
						Female campus
					</span>
					<span className="h-8">|</span>
					<span class="text-md:[40px] text-white link link-hover">
						Male campus
					</span>
				</div>
			</footer> */}
		</>
	);
};

export default Footer;
