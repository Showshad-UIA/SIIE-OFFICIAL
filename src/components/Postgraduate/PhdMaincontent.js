import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PhdMaincontent = () => {
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
							<a href="/phdfinance">
								<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
									PhD of Islamic Banking & Finance
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
							<a href="/phdsariah">
								{" "}
								<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
									PhD of Islamic Shariah
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
							<a href="/phdeconomics">
								{" "}
								<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
									PhD of Economics
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
							<a href="/phdinsurance">
								<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
									PhD of Islamic Insurance
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
							<a href="/phdbusinesslaw">
								<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
									PhD of Islamic Business law
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
							<a href="/phdusalfiq">
								<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
									PhD of Usal al-Fiqh
								</h2>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PhdMaincontent;
