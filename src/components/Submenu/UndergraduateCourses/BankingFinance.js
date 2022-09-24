import React from "react";
import { Link } from "react-router-dom";
import AboutCourse from "./AboutCourse";
import Navbar from "./Navbar";
import banner from "../../../images/Slider-bankingPage.png";
import UgBankingFinance from "./UgBankingFinance";
const BankingFinance = () => {
	return (
		<div>
			{/* carousel start here */}
			{/* <div class="carousel  carousel-center">
				<img src={banner} alt="" className="w-full lg:h-[520px] sm:h-[300px]" />
			</div> */}
			{/* navbar start here */}
			{/* <Navbar></Navbar> */}
			{/* <AboutCourse></AboutCourse> */}
			<UgBankingFinance></UgBankingFinance>
		</div>
	);
};

export default BankingFinance;
