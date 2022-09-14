import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { data } from "./ImageSlider";
const Explore = () => {
	const sliderLeft = () => {
		var slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	const sliderRight = () => {
		var slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft + 500;
	};
	return (
		<div className="mt-5 mb-5">
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
							<p>{item.p}</p>
						</>
					))}
				</div>

				{/* <div
					id="slider"
					className="flex w-full h-full gap-5 overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth"
				>
					<div class="card w-96 bg-base-100 shadow-xl">
						<figure class="px-10 pt-10">
							<img
								className="w-[350px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
								alt="/"
								src="https://placeimg.com/400/225/arch"
								alt="Shoes"
								class="rounded-xl"
							/>
						</figure>
						<div class="card-body items-center text-center">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-96 bg-base-100 shadow-xl">
						<figure class="px-10 pt-10">
							<img
								src="https://placeimg.com/400/225/arch"
								alt="Shoes"
								class="rounded-xl"
							/>
						</figure>
						<div class="card-body items-center text-center">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-96 bg-base-100 shadow-xl">
						<figure class="px-10 pt-10">
							<img
								src="https://placeimg.com/400/225/arch"
								alt="Shoes"
								class="rounded-xl"
							/>
						</figure>
						<div class="card-body items-center text-center">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-96 bg-base-100 shadow-xl">
						<figure class="px-10 pt-10">
							<img
								src="https://placeimg.com/400/225/arch"
								alt="Shoes"
								class="rounded-xl"
							/>
						</figure>
						<div class="card-body items-center text-center">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-96 bg-base-100 shadow-xl">
						<figure class="px-10 pt-10">
							<img
								src="https://placeimg.com/400/225/arch"
								alt="Shoes"
								class="rounded-xl"
							/>
						</figure>
						<div class="card-body items-center text-center">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-96 bg-base-100 shadow-xl">
						<figure class="px-10 pt-10">
							<img
								src="https://placeimg.com/400/225/arch"
								alt="Shoes"
								class="rounded-xl"
							/>
						</figure>
						<div class="card-body items-center text-center">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-96 bg-base-100 shadow-xl">
						<figure class="px-10 pt-10">
							<img
								src="https://placeimg.com/400/225/arch"
								alt="Shoes"
								class="rounded-xl"
							/>
						</figure>
						<div class="card-body items-center text-center">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
				</div> */}
				<MdChevronRight
					className="opacity-50 cursor-pointer hover:opacity-100"
					onClick={sliderRight}
					size={40}
				></MdChevronRight>
			</div>
		</div>
	);
};

export default Explore;
