import React from "react";
import { Link } from "react-router-dom";
import AboutCourse from "./AboutCourse";
import Navbar from "./Navbar";

const BankingFinance = () => {
	return (
		<div>
			{/* carousel start here */}
			<div class="carousel carousel-center">
				<div class="carousel-item">
					<img src="https://placeimg.com/400/300/arch" alt="Pizza" />
				</div>
				<div class="carousel-item">
					<img src="https://placeimg.com/400/300/arch" alt="Pizza" />
				</div>
				<div class="carousel-item">
					<img src="https://placeimg.com/400/300/arch" alt="Pizza" />
				</div>
				<div class="carousel-item">
					<img src="https://placeimg.com/400/300/arch" alt="Pizza" />
				</div>
				<div class="carousel-item">
					<img src="https://placeimg.com/400/300/arch" alt="Pizza" />
				</div>
				<div class="carousel-item">
					<img src="https://placeimg.com/400/300/arch" alt="Pizza" />
				</div>
				<div class="carousel-item">
					<img src="https://placeimg.com/400/300/arch" alt="Pizza" />
				</div>
			</div>
			{/* navbar start here */}
			<Navbar></Navbar>
			<AboutCourse></AboutCourse>
		</div>
	);
};

export default BankingFinance;
