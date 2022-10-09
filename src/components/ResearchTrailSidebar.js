import React from 'react';

const ResearchTrailSidebar = () => {
    return (
        <div className="px-8 sm:mt-[-10]">
				<div className="flex  mb-5 ">
					<div className="text-3xl font-bold -mt-2">Events</div>
					<div>
						<a href="#" className="ml-3 text-blue-500 text-sm ">
							All EVENTS>
						</a>
					</div>
				</div>
				<div className="flex w-4/5 mt-5  gap-5 ">
					<div className="font-bold  text-white text-md bg-black  w-10 h-[50px]">
						SEP 09
					</div>
					<div className=" text-justify">
						<a href="#">
							<p className="text-blue-500 font-bold text-md">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptate..
							</p>
							<h1 className="text-md">The headline of these content</h1>
							<p className="text-md">09 SEP 2022</p>
						</a>
					</div>
				</div>
				<div className="flex mt-3 w-4/5 gap-4">
					<div className="font-bold  bg-black text-white w-10 h-[50px] text-md  ">
						SEP 10
					</div>
					<div className=" text-justify">
						<a href="#">
							<p className="text-blue-500 font-bold text-md">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptate..
							</p>
							<h1 className="text-md">The headline of these content</h1>
							<p className="text-md">10 SEP 2022</p>
						</a>
					</div>
				</div>
				<div className="flex mt-3 w-4/5 gap-4">
					<div className="font-bold  text-white bg-black text-md w-10 h-[50px]  ">
						SEP 12
					</div>
					<div className=" text-justify">
						<a href="#">
							<p className="text-blue-500 font-bold  text-md">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptate..
							</p>
							<h1 className="text-md">The headline of these content</h1>
							<p className="text-md">12 SEP 2022</p>
						</a>
					</div>
				</div>
			</div>
    );
};

export default ResearchTrailSidebar;