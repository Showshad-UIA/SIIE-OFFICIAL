import React from "react";

const MainContent = () => {
	return (
		<div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-1 m-5">
			<div class=" w-[330px] bg-base-100    ">
				<figure>
					<a href="#">
						<img src="https://placeimg.com/400/225/arch" alt="" />
					</a>
				</figure>
				<div className="">
					<h2 className=" text-lg cursor-pointer font-bold hover:text-red-700">
						<a href="/banking">Bachelor of Islamic Banking & Finance</a>
					</h2>
				</div>
			</div>
			<div class="  w-[330px] bg-base-100 m-2   ">
				<figure>
					<a href="#">
						<img src="https://placeimg.com/400/225/arch" alt="" />
					</a>
				</figure>
				<div className="">
					<h2 className=" text-lg cursor-pointer  font-bold hover:text-red-700">
						Bachelor of Islamic Economics
					</h2>
				</div>
			</div>
			<div class="  w-[330px] bg-base-100 m-2   ">
				<figure>
					<a href="#">
						<img src="https://placeimg.com/400/225/arch" alt="" />
					</a>
				</figure>
				<div className="">
					<h2 className=" text-lg cursor-pointer  font-bold hover:text-red-700">
						Bachelor of Islamic Insurance
					</h2>
				</div>
			</div>
			<div class="  w-[330px] bg-base-100 m-2   ">
				<figure>
					<a href="#">
						<img src="https://placeimg.com/400/225/arch" alt="" />
					</a>
				</figure>
				<div className="">
					<h2 className=" text-lg cursor-pointer  font-bold hover:text-red-700">
						Bachelor of Islamic Business low
					</h2>
				</div>
			</div>
			<div class="  w-[330px] bg-base-100 m-2   ">
				<figure>
					<a href="#">
						<img src="https://placeimg.com/400/225/arch" alt="" />
					</a>
				</figure>
				<div className="">
					<h2 className=" text-lg cursor-pointer  font-bold hover:text-red-700">
						Bachelor of Islamic Insurance
					</h2>
				</div>
			</div>

			<div class="  w-[330px] bg-base-100 m-2   ">
				<figure>
					<a href="#">
						<img src="https://placeimg.com/400/225/arch" alt="" />
					</a>
				</figure>
				<div className="">
					<h2 className=" text-lg cursor-pointer  font-bold hover:text-red-700">
						Bachelor of Islamic Shariah
					</h2>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
