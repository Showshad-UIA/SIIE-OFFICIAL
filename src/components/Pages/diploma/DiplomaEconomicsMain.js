import React from "react";

const DiplomaEconomicsMain = () => {
	return (
		<div div className="w-4/5 mt-10 mb-20">
			<div className=" mt-10">
				<div className="flex gap-5 mb-5 ">
					<div>
						<h1 class="bg-sky-700 w-40 h-16  text-white font-bold py-2 px-4 rounded">
							Course outcome
						</h1>
					</div>
					<div className="">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
							sed totam, voluptate eveniet obcaecati nisis?
						</p>
					</div>
				</div>
				<div className="flex gap-5 mb-5">
					<div>
						<h1 class="bg-sky-700 w-40 h-16  text-white font-bold py-2 px-4 rounded">
							Job opportunity
						</h1>
					</div>
					<div className="">
						<p className=" text-medium ">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sit,
							blanditiis a officiis facere aliquam
						</p>
					</div>
				</div>
				<div className="flex gap-5 mt-5 ">
					<div>
						<h1 className=" bg-sky-700 w-40 h-16 text-white font-bold py-2 px-4 rounded">
							Course structure
						</h1>
					</div>
					<div className="flex">
						<a href="/UG.pdf" download="undergraduate course plan">
							<span className="cursor-pointer hover:text-black text-xl text-red-500  ">
								Click here
							</span>
						</a>
						<span className="ml-3">
							<p>for more information</p>
						</span>
					</div>
				</div>
				<div className="flex gap-5 mt-5 ">
					<div>
						<h1 className=" bg-sky-700 w-40 h-16 text-white font-bold py-2 px-4 rounded">
							Entry requirements
						</h1>
					</div>
					<div className="flex">
						<a href="#">
							<span className="cursor-pointer hover:text-black text-xl text-red-500  ">
								Click here
							</span>
						</a>
						<span className="ml-3">
							<p>for more information</p>
						</span>
					</div>
				</div>
				<div className="flex gap-5 mt-5 ">
					<div>
						<h1 className=" bg-sky-700 w-40 h-16 text-white font-bold py-2 px-4 rounded">
							Apply now
						</h1>
					</div>
					<div className="flex">
						<a href="#">
							<span className="cursor-pointer hover:text-black text-xl text-red-500  ">
								Click here
							</span>
						</a>
						<span className="ml-3">
							<p>for more information</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DiplomaEconomicsMain;
