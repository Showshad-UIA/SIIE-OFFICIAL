import React, { useState } from "react";
import Slider from "react-slick";
import image1 from "../images/image-4.png";
import image2 from "../images/Image 6.png";
import image3 from "../images/images.png";
import image4 from "../images/Finance.png";
import image5 from "../images/Image 6.png";
import "./carosel.css";
import { carosel } from "./data";
const Carosel = () => {
	// var settings = {
	// 	dots: true,
	// 	infinite: false,
	// 	speed: 500,
	// 	slidesToShow: 4,
	// 	slidesToScroll: 4,
	// 	initialSlide: 0,
	// 	responsive: [
	// 		{
	// 			breakpoint: 1024,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 3,
	// 				infinite: true,
	// 				dots: true,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 600,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 2,
	// 				initialSlide: 2,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 	],
	// };

	// return (
	// 	<>
	// 		<div className="mx-auto container mb-5">
	// 			<div className="mx-28 ">
	// 				<h1 className="text-black font-bold text-xl mb-5">Life at SIBS</h1>
	// 				<Slider {...settings}>
	// 					<div className="lg:w-[70%] md:w-max  ">
	// 						<img
	// 							src={image1}
	// 							alt=""
	// 							className="lg:w-[90%] md:w-[88%]  sm:w-full"
	// 						/>
	// 						<button className="-mt-6 bg-sky-500 text-white lg:w-[90%] md:w-[97%] text-lg ">
	// 							Lorem ipsum dolor sit amet
	// 						</button>
	// 					</div>
	// 					<div className="w-[70%]">
	// 						<img src={image2} alt="" className="lg:w-[90%] sm:w-full" />
	// 						<button className="-mt-6 bg-sky-500 lg:w-[90%] text-white md:w-[97%] text-lg ">
	// 							Lorem ipsum dolor sit amet
	// 						</button>
	// 					</div>
	// 					<div className="w-[70%]">
	// 						<img src={image3} alt="" className="lg:w-[90%] sm:w-full" />
	// 						<button className="-mt-6 bg-sky-500 lg:w-[90%] md:w-[97%] text-white text-lg ">
	// 							Lorem ipsum dolor sit amet
	// 						</button>
	// 					</div>{" "}
	// 					<div className="w-[70%]">
	// 						<img src={image4} alt="" className="lg:w-[90%] sm:w-full" />
	// 						<button className="-mt-6 bg-sky-500  lg:w-[90%] md:w-[97%] text-lg text-white ">
	// 							Lorem ipsum dolor sit amet
	// 						</button>
	// 					</div>{" "}
	// 					<div className="w-[70%]">
	// 						<img src={image5} alt="" className="lg:w-[90%] sm:w-full" />
	// 						<button className="-mt-6 bg-sky-500 lg:w-[90%] md:w-[97%] text-white text-lg ">
	// 							Lorem ipsum dolor sit amet
	// 						</button>
	// 					</div>
	// 				</Slider>
	// 			</div>
	// 		</div>
	// 	</>
	// );

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="App  ">
			<h1 className="text-xl mb-4 text-black font-bold -mt-10 ">
				Life at SIBS
			</h1>
			<Slider {...settings}>
				{carosel.map((item) => (
					<div className="card mb-5 ">
						<div className="card-top">
							<img src={item.linkImg} alt={item.title} />
							<h1>{item.title}</h1>
						</div>
						{/* <div className="card-bottom">
              <h3>{item.price}</h3>
              <span className="category">{item.category}</span>
            </div> */}
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carosel;
