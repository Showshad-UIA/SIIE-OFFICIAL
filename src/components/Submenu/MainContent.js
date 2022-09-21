import React from "react";
import finance from "../../images/Finance.jpg";
import economics from "../../images/economics.jpg";
import insurance from "../../images/insurance.jpg";
import law from "../../images/law.jpg";
import islamic from "../../images/islamic.jpg";
import shariah from "../../images/shariah.jpg";
const MainContent = () => {
	return (
		<div className="grid lg:grid-cols-3 gap-9 sm:grid-cols-1 m-5">
			<div class=" w-[332px] m-2     ">
				<figure>
					<a href="/banking">
						<img src={finance} alt="finance" />
					</a>
				</figure>
				<div className="">
					<h2 className=" text-xl p-2 text-justify cursor-pointer bg-green-300 text-blue-700 hover:text-red-700 space-x-5">
						<a href="/banking">Bachelor of Islamic Banking & Finance</a>
					</h2>
				</div>
			</div>
			<div class="  w-[332px]  m-2  ">
				<figure>
					<a href="#">
						<img src={economics} alt="economics" />
					</a>
				</figure>
				<div className="">
					<h2 className=" text-xl p-2 cursor-pointer bg-green-300 text-blue-700   hover:text-red-700">
						Bachelor of Islamic Economics
					</h2>
				</div>
			</div>
			<div class="  w-[332px]  m-2 g-base-200   ">
				<figure>
					<a href="#">
						<img src={insurance} alt="insurance" />
					</a>
				</figure>
				<div className="">
					<h2 className=" text-xl  cursor-pointer bg-green-300 text-blue-700   p-2 hover:text-red-700">
						Bachelor of Islamic Insurance
					</h2>
				</div>
			</div>
			<div class="  w-[332px] bg-base-100 m-2   ">
				<figure>
					<a href="#">
						<img src={law} alt="law" />
					</a>
				</figure>
				<div className="">
					<h2 className=" text-xl cursor-pointer bg-green-300 text-blue-700  hover:text-red-700 p-2">
						Bachelor of Islamic Business low
					</h2>
				</div>
			</div>
			<div class="  w-[332px] bg-base-100 m-2   ">
				<figure>
					<a href="#">
						<img src={islamic} alt="islamic" />
					</a>
				</figure>
				<div className="">
					<h2 className=" text-xl cursor-pointer bg-green-300 text-blue-700 p-2  hover:text-red-700">
						Bachelor of Islamic Insurance
					</h2>
				</div>
			</div>

			<div class="  w-[332px] bg-base-100 m-2   ">
				<figure>
					<a href="#">
						<img src={shariah} alt="shariah" />
					</a>
				</figure>
				<div className="">
					<h2 className=" text-xl cursor-pointer bg-green-300 text-blue-700   hover:text-red-700 p-2">
						Bachelor of Islamic Shariah
					</h2>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
