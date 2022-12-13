import React from "react";

const Study = () => {
	return (
		<div className="container mx-auto">
			<div>
			<div className="mb-16 lg:mx-28 lg:w-[85%]  md:mx-28 px-3">
			<h1 className="text-2xl font-bold  mb-3 ">LIVING IN SYDNEY</h1>
			<div
			className="hero lg:h-[500px]   "
			style={{ backgroundImage: `url("https://i.ibb.co/mrKTwcX/sydney-banner.jpg")` }}
		>
			<div className="hero-overlay bg-opacity-10"></div>
			<div className=" text-center ">
				<div className="max-w-md lg:mt-[270px] bg-white opacity-60 shadow-md pb-10 rounded ">
					<h1 className="mb-3 pt-5 text-4xl font-bold ">Life in Sydney</h1>
					<p className="mb-5 text-black text-xl ">
                  Sydney is popular with international students for many reasons.
					</p>
					<a href="/living" className="bg-sky-700 text-white p-3 rounded-lg ">Know more</a>
				</div>
			</div>
		</div>
		</div>
			</div>
		</div>
	);
};

export default Study;
