import React from "react";

const Event = () => {
	return (
		<div className=" mx- 20 grid lg:grid-cols-4 gap-5 sm:grid-cols-1 m-6 mb-10 justify-center ">
			<div className=" ">
				<div class="card lg:w-full sm:w-4/5 bg-base-100 shadow-xl">
					<figure className="px-10 pt-10">
						<img
							src="https://placeimg.com/400/225/arch"
							alt=""
							className="rounded-xl"
						/>
					</figure>
					<div className="card-body  ">
						<p className="text-justify text-lg hover:text-red-500">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
							expedita quia dolore sapiente veniam asperiores, corporis ea alias
							exercitationem nemo repellendus! Culpa pariatur nulla aperiam
							neque laborum maxime similique ab.
						</p>
						<div className="card-actions">
							<p className="text-lg font-bold">SEP 09 2022</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="card w-full bg-base-100 shadow-xl">
					<figure className="px-10 pt-10">
						<img
							src="https://placeimg.com/400/225/arch"
							alt=""
							className="rounded-xl"
						/>
					</figure>
					<div className="card-body  ">
						<p className="text-justify text-lg hover:text-red-500">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
							expedita quia dolore sapiente veniam asperiores, corporis ea alias
							exercitationem nemo repellendus! Culpa pariatur nulla aperiam
							neque laborum maxime similique ab.
						</p>
						<div className="card-actions">
							<p className="text-lg font-bold">SEP 09 2022</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="card w-full bg-base-100 shadow-xl mb-10">
					<figure className="px-10 pt-10">
						<img
							src="https://placeimg.com/400/225/arch"
							alt=""
							className="rounded-xl"
						/>
					</figure>
					<div className="card-body items-center ">
						<p className="text-justify text-lg hover:text-red-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
							iste pariatur, beatae aliquam accusamus non voluptate illum maxime
							asperiores ex ut error molestiae? Corporis reiciendis earum
							laborum distinctio nihil totam.
						</p>
						<div className="card-actions">
							<p className="text-lg font-bold">
								Lorem ipsum dolor sit amet consectetur{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* right side bar start here */}
			<div className="px-4 ">
				<div className="flex mt-[-40px] mb-5 ">
					<div className="text-3xl font-bold -mt-2">Events</div>
					<div>
						<a href="#" className="ml-3 text-blue-500 text-sm ">
							All EVENTS>
						</a>
					</div>
				</div>
				<div className="flex w-4/5 mt-5  gap-4 ">
					<div className="font-bold  text-white text-lg bg-black  w-10 h-[50px]">
						SEP 09
					</div>
					<div className=" text-justify">
						<a href="#">
							<p className="text-blue-500 font-bold text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptate..
							</p>
							<h1 className="text-lg">The headline of these content</h1>
							<p className="text-lg">09 SEP 2022</p>
						</a>
					</div>
				</div>
				<div className="flex mt-3 w-4/5 gap-4">
					<div className="font-bold  bg-black text-white w-10 h-[50px] text-lg  ">
						SEP 10
					</div>
					<div className=" text-justify">
						<a href="#">
							<p className="text-blue-500 font-bold text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptate..
							</p>
							<h1 className="text-lg">The headline of these content</h1>
							<p className="text-lg">10 SEP 2022</p>
						</a>
					</div>
				</div>
				<div className="flex mt-3 w-4/5 gap-4">
					<div className="font-bold  text-white bg-black text-lg w-10 h-[50px]  ">
						SEP 12
					</div>
					<div className=" text-justify">
						<a href="#">
							<p className="text-blue-500 font-bold  text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptate..
							</p>
							<h1 className="text-lg">The headline of these content</h1>
							<p className="text-lg">12 SEP 2022</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Event;
