import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Program = () => {
    return (
        <>
			<div className="lg:mx-[150px] lg:mt-5 my-5 md:my-5 ">
			<div className="w-50 text-2xl  font-bold cursor-pointer   text-center">
				<button className="bg-sky-700  pr-16 pb-5 pt-5 pl-16">
					<p className=" text-white  "> We Offer</p>
				</button>
			</div>
			<div className="grid lg:grid-cols-2 gap-1  sm:grid-cols-1 m-5 lg:mx-[300px] mb-7">
				<div class=" hover:bg-sky-300  bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="/phd">
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
									PhD 
								</h2>
							</a>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-300 bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="/masters">
								{" "}
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
									Masters (Research)
								</h2>
							</a>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-300 bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="/masters">
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
                               Masters (Coursework)
								</h2>
							</a>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-300 bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="/undergraduate">
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
								Undergraduate
								</h2>
							</a>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-300 bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="/phdsariah">
								{" "}
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
									Diploma								</h2>
							</a>
						</div>
					</div>
				</div>

				<div class=" hover:bg-sky-300 bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="/phdusalfiq">
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
									Short course
								</h2>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
    );
};

export default Program;