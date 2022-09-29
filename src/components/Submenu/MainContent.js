import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";
const MainContent = () => {
	return (
		<>
			<div className="w-50 text-2xl  font-bold cursor-pointer   text-center">
				<button className="bg-sky-300 hover:bg-sky-700 pr-20 pb-5 pt-5 pl-20">
					<p className="   ">Course offer</p>
				</button>
			</div>
			<div className="grid lg:grid-cols-2 gap-1  sm:grid-cols-1 m-5 lg:mx-[300px] mb-11">
				<div class=" hover:bg-sky-700  bg-sky-300 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon icon={faUser} className=""></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="/banking">
								<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
									Bachelor of Islamic Banking & Finance
								</h2>
							</a>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-700 bg-sky-300 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon icon={faUser} className=""></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="/shariah">
								<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
									Bachelor of Islamic Shariah
								</h2>
							</a>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-700 bg-sky-300 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon icon={faUser} className=""></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="/economics">
								<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
									Bachelor of Economics
								</h2>
							</a>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-700 bg-sky-300 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon icon={faUser} className=""></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="/insurance">
								<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
									Bachelor of Islamic Insurance
								</h2>
							</a>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-700 bg-sky-300 p-5">
					<div className="">
						<div className="items-center w-full text-center">
							<FontAwesomeIcon icon={faUser} className=""></FontAwesomeIcon>
						</div>
						<div className="">
							<a
								href="/businesslaw
							"
							>
								<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
									Bachelor of Islamic Business law
								</h2>
							</a>
						</div>
					</div>
				</div>

				<div class=" hover:bg-sky-700 bg-sky-300 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon icon={faUser} className=""></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="/fiqh">
								<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
									Bachelor of Usul al-Fiqh
								</h2>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MainContent;
