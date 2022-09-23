import React from "react";
import finance from "../../images/Finance.jpg";
import economics from "../../images/economics.jpg";
import insurance from "../../images/insurance.jpg";
import law from "../../images/law.jpg";
import islamic from "../../images/islamic.jpg";
import shariah from "../../images/shariah.jpg";
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
						<div className="items-center ml-[250px] ">
							<FontAwesomeIcon
								icon={faUser}
								className="sm:ml-5"
							></FontAwesomeIcon>
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
						<div className="items-center ml-[250px] ">
							<FontAwesomeIcon
								icon={faUser}
								className="sm:ml-5"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
								Bachelor of Islamic Shariah
							</h2>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-700 bg-sky-300 p-5">
					<div className="">
						<div className="items-center ml-[250px] ">
							<FontAwesomeIcon
								icon={faUser}
								className="sm:ml-5"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
								Bachelor of Economics
							</h2>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-700 bg-sky-300 p-5">
					<div className="">
						<div className="items-center ml-[250px] ">
							<FontAwesomeIcon
								icon={faUser}
								className="sm:ml-5"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
								Bachelor of Islamic Insurance
							</h2>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-700 bg-sky-300 p-5">
					<div className="">
						<div className="items-center ml-[250px] ">
							<FontAwesomeIcon
								icon={faUser}
								className="sm:ml-5"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
								Bachelor of Islamic Business
							</h2>
						</div>
					</div>
				</div>

				<div class=" hover:bg-sky-700 bg-sky-300 p-5">
					<div className="">
						<div className="items-center ml-[250px] ">
							<FontAwesomeIcon
								icon={faUser}
								className="sm:ml-5"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<h2 className=" text-xl cursor-pointer  text-white text-center p-2">
								Bachelor of Islamic Shariah
							</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MainContent;
