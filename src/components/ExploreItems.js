import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ExploreItems = ({ item }) => {
	const sliderLeft = () => {
		var slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	const sliderRight = () => {
		var slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft + 500;
	};
	return (
		<div>
			<div className="ml-12 font-bold text-blue-500 text-2xl">Explore:</div>
			<div className="relative flex items-center">
				<MdChevronLeft
					className="opacity-50 cursor-pointer hover:opacity-100"
					onClick={sliderLeft}
					size={40}
				/>
				<div
					id="slider"
					className=" w-full h-full flex overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth"
				>
					{data.map((item) => (
						<>
							<img
								className="w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
								src={item.img}
								alt="/"
							></img>
							<div>
								<p>{item.p}</p>
							</div>
						</>
					))}
				</div>

				<MdChevronRight
					className="opacity-50 cursor-pointer hover:opacity-100"
					onClick={sliderRight}
					size={40}
				></MdChevronRight>
			</div>
		</div>
	);
};

export default ExploreItems;
