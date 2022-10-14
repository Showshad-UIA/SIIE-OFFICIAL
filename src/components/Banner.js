import React from "react";
import Image from "../images/Image 2.jpg";
import slider1 from "../Carosel/Asset/mosque.jpg";
import slider2 from "../Carosel/Asset/slider-5.jpg";
import slider3 from "../Carosel/Asset/slider3.PNG";
const Banner = () => {
	return (
		// <div className="hero mb-6">
		// 	<div class="hero-overlay   bg-blue-400"></div>
		// 	<div class="  lg:py-[150px]  text-neutral-content">
		// 		<div class="max-w-lg mt-16">

		// 			<marquee behavior="" direction="left">
		// 				<h1 class="mb-5 text-2xl font-bold ">
		// 					WELCOME TO SYDNEY ISLAMIC BUSINESS SCHOOL, , WE ARE IN THE FIRST
		// 					ISLAMIC BUSINESS SCHOOL IN AUSTRALIA
		// 				</h1>
		// 			</marquee>

		// 			<div className="flex justify-center lg:ml-24">
		// 				<button class="btn btn-primary mb-10 mt-5 mx-auto">
		// 					know More..
		// 				</button>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

		// 		<div className="carousel w-full h-[520px]">
		//   <div id="slide1" className="carousel-item relative w-full">
		//     <img src={slider1} className="w-full" />
		//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
		//       <a href="#slide4" className="btn btn-circle">❮</a>
		//       <a href="#slide2" className="btn btn-circle">❯</a>
		//     </div>
		//   </div>
		//   <div id="slide2" className="carousel-item relative w-full">
		//     <img src={slider2} className="w-full" />
		//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
		//       <a href="#slide1" className="btn btn-circle">❮</a>
		//       <a href="#slide3" className="btn btn-circle">❯</a>
		//     </div>
		//   </div>
		//   <div id="slide3" className="carousel-item relative w-full">
		//     <img src={slider3} className="w-full" />
		//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
		//       <a href="#slide2" className="btn btn-circle">❮</a>
		//       <a href="#slide4" className="btn btn-circle">❯</a>
		//     </div>
		//   </div>

		// </div>
		<div>
			<div className="carousel w-full relative">
				<div
					id="item1"
					className="carousel-item w-full h-[450px]  bg-cover"
					style={{ backgroundImage: `url(${slider1})` }}
				>
					{/* <img src={banner} className="w-full object-cover absolute" alt="" /> */}
					<div className=" text-black w-full my-auto  flex  justify-items-center content-center ">
						<div className="w-3/5 mx-auto">
            <p className=" text-center ">
							<marquee behavior="" direction="left" className="text-3xl font-bold ">Welcome to Sydney Islamic Business School (SIBS)</marquee>
						</p>
						<button className="btn btn-primary text-white flex justify-center mx-auto ">Know More</button>
            </div>
					</div>
				</div>
				<div
					id="item2"
					className="carousel-item w-full h-[450px]"
					style={{ backgroundImage: `url(${slider2})` }}
				>
					{/* <img src={banner2} className="w-full" alt="" /> */}
					<div className=" text-black w-full my-auto  flex  justify-items-center content-center ">
						<div className="w-3/5 mx-auto">
            <p className=" text-center ">
							<marquee behavior="" direction="left" className="text-3xl font-bold ">Welcome to Sydney Islamic Business School (SIBS)</marquee>
						</p>
						<button className="btn btn-primary text-white flex justify-center mx-auto ">Know More</button>
            </div>
					</div>
				</div>
				<div
					id="item3"
					className="carousel-item w-full h-[450px]"
					style={{ backgroundImage: `url(${slider3})` }}
				>
					{/* <img src={banner2} className="w-full" alt="" /> */}
					<div className=" text-black w-full my-auto  flex  justify-items-center content-center ">
						<div className="w-3/5 mx-auto">
            <p className=" text-center ">
							<marquee behavior="" direction="left" className="text-3xl font-bold ">Welcome to Sydney Islamic Business School (SIBS)</marquee>
						</p>
						<button className="btn btn-primary text-white flex justify-center mx-auto ">Know More</button>
            </div>
					</div>
				</div>
			</div>
			<div className="flex justify-center w-full py-2 gap-2">
				<a href="#item1" className="btn btn-xs">
					1
				</a>
				<a href="#item2" className="btn btn-xs">
					2
				</a>
				<a href="#item3" className="btn btn-xs">
					3
				</a>
			</div>
		</div>
	);
};

export default Banner;
