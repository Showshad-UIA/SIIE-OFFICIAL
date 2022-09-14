import React from "react";
import Image from "../images/Image 2.jpg";
const Banner = () => {
	return (
		<div className="hero">
			<div class="hero-overlay  bg-blue-400"></div>
			<div class="hero-content text-center py-[100px] text-neutral-content">
				<div class="max-w-md mt-16">
					<marquee behavior="" direction="left">
						<h1 class="mb-5 text-4xl font-bold">WELCOME TO SIIE WEBSITE </h1>
					</marquee>
					<p class="mb-15 text-xl w-full">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, et
						eum dolor pariatur placeat sapiente autem tenetur labore
					</p>
					<button class="btn btn-primary mb-10 mt-5">know More..</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
