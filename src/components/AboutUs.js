import React from "react";

import Content from "./Content";
import Info from "./Info";

const AboutUs = () => {
	return (
		<div className="ml-5 mr-5  mt-10 mx-auto  sm:mx-3 ">
			<div className="lg:w-4/5 m-auto  sm:w-4/5  text-justify">
				<h1 className="text-blue-500  font-bold text-2xl ">Overview</h1>
				<p className="mb-4 text-lg">
					The Sydney Institute for Innovation and Entrepreneurship (SIIE) was
					created with the vision to encourage university students to become job
					creators rather than job seekers. The Venture Funding Program offered
					at SIIE aims to help Australian university students bring their unique
					and realistic entrepreneurial ideas to life by creating funding
					opportunities from investors and live advice from industry experts.
					This program is for you if you want to:
					<p className=" text-lg mt-3 ">
						<span className="text-black font-bold">
							Get your business plan tested -
						</span>
						Your business plan will be reviewed by a panel of academic and
						industry experts and evaluated on feasibility, financing, market
						potential, market need (actual or perceived) and scalability of the
						business. Once the business plan has been reviewed, targeted
						feedback will be provided so you can implement and adjust your
						business plan accordingly.
					</p>
					<p className=" text-lg ">
						<span className="text-black font-bold">Prototype - </span>
						Prototype your business product/service into something tangible
					</p>
					<p className="text-lg">
						<span className="text-black font-bold">
							Get funding for your business -
						</span>
						Access to potential investors.
					</p>
				</p>
			</div>
			<Info></Info>
			<Content></Content>
		</div>
		// <section className="">
		// 	<div class=" hero z-index  pt-5 bg-base  sm:w-52 ">
		// 		{/* <img src={images} class="rounded-lg  lg:w-3/6 pt-10" alt="" /> */}

		// 		<div>
		// 			<h1 className=" text-start  text-blue-500 font-bold text-2xl mb-3">
		// 				Overview
		// 			</h1>
		// 			<p className="text-lg w-[500px]  text-justify justify-content mb-8">
		// 				The Sydney Institute for Innovation and Entrepreneurship (SIIE) was
		// 				created with the vision to encourage university students to become
		// 				job creators rather than job seekers. The Venture Funding Program
		// 				offered at SIIE aims to help Australian university students bring
		// 				their unique and realistic entrepreneurial ideas to life by creating
		// 				funding opportunities from investors and live advice from industry
		// 				experts. This program is for you if you want to:
		// 				<p className=" text-lg mt-3 ">
		// 					<span className="text-black font-bold">
		// 						Get your business plan tested -
		// 					</span>
		// 					Your business plan will be reviewed by a panel of academic and
		// 					industry experts and evaluated on feasibility, financing, market
		// 					potential, market need (actual or perceived) and scalability of
		// 					the business. Once the business plan has been reviewed, targeted
		// 					feedback will be provided so you can implement and adjust your
		// 					business plan accordingly.
		// 				</p>
		// 				<p className=" text-lg ">
		// 					<span className="text-black font-bold">Prototype - </span>
		// 					Prototype your business product/service into something tangible
		// 				</p>
		// 				<p className="text-lg">
		// 					<span className="text-black font-bold">
		// 						Get funding for your business -
		// 					</span>
		// 					Access to potential investors.
		// 				</p>
		// 			</p>
		// 		</div>
		// 	</div>

		// 	{/* added some components here */}
		// 	{/* <Service></Service> */}
		// 	<Info></Info>
		// 	<Content></Content>
		// 	{/* <FAQ></FAQ> */}
		// </section>
	);
};

export default AboutUs;
