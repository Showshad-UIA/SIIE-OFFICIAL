import React from "react";
import Image from "../images/Image 2.jpg";
const Banner = () => {
	return (
		<div className="hero ">
			<div class="hero-overlay mx-20 bg-blue-400"></div>
			<div class="hero-content  py-[100px] lg:w-[700px] mx-[-50px] text-neutral-content">
				<div class="max-w-md mt-16">
					<marquee behavior="" direction="left">
						<h1 class="mb-5 text-4xl font-bold ">
							WELCOME TO SYDNEY ISLAMIC BUSINESS SCHOOL, , WE ARE IN THE FIRST
							ISLAMIC BUSINESS SCHOOL IN AUSTRALIA
						</h1>
					</marquee>
					<p class="mb-15 text-[18px] lg:w-[700px]  ">
						Sydney Islamic Business School (SIBS) . We aim to be a leading
						teaching and research focused business school by providing excellent
						Islamic Business higher education.
					</p>
					{/* <div className="flex justify-center lg:ml-24">
						<button class="btn btn-primary mb-10 mt-5 mx-auto">
							know More..
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Banner;
