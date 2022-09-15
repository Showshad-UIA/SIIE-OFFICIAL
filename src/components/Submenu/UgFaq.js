import React from "react";

const UgFaq = () => {
	return (
		<div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-10 gap-4 ">
			<div className="w-4/5 m-4">
				<h1 className=" text-2xl font-bold  text-blue-500 m-3">
					MOST POPULAR QUESTIONS
				</h1>

				<div
					tabindex="0"
					class="collapse collapse-plus border-t-2  bg-base-100 mb-5"
				>
					<div class="collapse-title text-xl cursor-pointer hover:text-red-700 font-medium">
						I am not a university student. Can I enrol at SIIE?
					</div>
					<div class="collapse-content">
						<p className="container">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
							sapiente voluptatibus dolorem quos sequi
						</p>
					</div>
				</div>
				<div
					tabindex="0"
					class="collapse collapse-plus border-t-2 bg-base-100 "
				>
					<div class="collapse-title text-xl font-medium cursor-pointer hover:text-red-700 ">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit?
					</div>
					<div class="collapse-content">
						<p className="container">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
							sapiente voluptatibus dolorem quos sequi
						</p>
					</div>
				</div>
				<div
					tabindex="0"
					class="collapse collapse-plus border-t-2 bg-base-100 "
				>
					<div class="collapse-title text-xl font-medium cursor-pointer hover:text-red-700 ">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit?
					</div>
					<div class="collapse-content">
						<p className="container">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
							sapiente voluptatibus dolorem quos sequi
						</p>
					</div>
				</div>
				<div
					tabindex="0"
					class="collapse collapse-plus border-t-2 bg-base-100 "
				>
					<div class="collapse-title text-xl font-medium cursor-pointer hover:text-red-700 ">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit?
					</div>
					<div class="collapse-content">
						<p className="container">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
							sapiente voluptatibus dolorem quos sequi
						</p>
					</div>
				</div>
			</div>
			<div className="w-3/5 cursor-pointer lg:ml-20  mt-6 ">
				<iframe
					width="500"
					height="300"
					src="https://www.youtube.com/embed/zwLt9WMFA1w"
					title="TOP 10 BEST UNIVERSITIES OF AUSTRALIA/TOP 10 MEJORES UNIVERSIDADES DE AUSTRALIA"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
				<a href="#">
					<p className="cursor-pointer  text-xl hover:text-red-700  ">
						Wall of faces
					</p>
				</a>
				<a href="#">
					<p className="cursor-pointer text-medium text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</a>
			</div>
		</div>
	);
};

export default UgFaq;
