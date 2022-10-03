import React from "react";
import MediasIcon from "./MediasIcon";

const Footer = () => {
	return (
		<div className="w-full h-20">
			<div className="w-full bg-sky-800  justify-between ">
				{/* <MediasIcon></MediasIcon> */}
				<footer className="footer lg:visible sm:display-block justify-around   p-4    text-white">
					<div className="text-medium">
						<span class="footer-title">Home</span>
						<a class="link link-hover">About</a>
						<a class="link link-hover">Courses</a>
						<a class="link link-hover">Careers</a>
						<a class="link link-hover">Sustainability</a>
					</div>
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
				</footer>
				<div className=" lg:mx-[190px] sm:ml-2 py-5">
					<div className="text-white grid sm:grid-cols-2 lg:grid-cols-10">
						<div>
							<a class="link link-hover">Contact us | </a>
						</div>
						<div>
							<a class="link link-hover">Emergency help | </a>
						</div>
						<div>
							<a class="link link-hover">Copyright |</a>
						</div>
						<div>
							<a class="link link-hover"> Privacy | </a>
						</div>
						<div>
							<a class="link link-hover"> Mentoring program | </a>
						</div>
						<div>
							<a class="link link-hover"> Disclaimer | </a>
						</div>
						<div>
							<a class="link link-hover"> Complain unit | </a>
						</div>
						<div>
							<a class="link link-hover"> Feedback |</a>
						</div>
						<div>
							<a class="link link-hover"> Complaince program | </a>
						</div>
						<div>
							<a class="link link-hover"> Admission transparency </a>
						</div>
					</div>
				</div>
				<div className="lg:mx-[300px] pb-5 text-white grid sm:grid-cols-2 lg:grid-cols-6 gap-10">
					<div>
						<p>Sydney Islamic business school </p> <p>Copyright ©2022 </p>
						<p>ABN 53 014 069 881 No: 00917K</p>
					</div>
					<div>
						<p> 26/7 hall street, auburn, nsw 2144</p>
						<p>Tel: +61 2 9852 5222</p>
					</div>
					<div>
						<p>Page updated on 03/10/2022</p>
					</div>
					<div>
						<p> First islamic university In australia</p>
					</div>
					<div>
						<p> Female campus</p>
					</div>
					<div> Male campus</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
