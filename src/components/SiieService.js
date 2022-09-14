import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SiieService = () => {
	return (
		<div className="mt-5 mb-5">
			<div className="text-2xl text-blue-500 font-bold m-6 p-2">
				<h1>STUDYING AT SIIE</h1>
			</div>
			<div className="grid lg:grid-cols-4  text-xl mb-3 p-3 gap-5 sm:grid-cols-1 m-6  justify-center ">
				<div className="w-full">
					<div class="card  bg-base-100 shadow-xl">
						<figure className="px-10 pt-10">
							<img
								src="https://placeimg.com/400/225/arch"
								alt=""
								className="rounded-xl"
							/>
						</figure>

						<div className="card-actions justify-center   flex  mt-3 mb-3">
							<p className=" font-bold text-xl">Undergraduate admissions</p>
							<a href="#">
								<FontAwesomeIcon
									className="mt-2 w-[100px] h-[10]"
									icon={faArrowRight}
								></FontAwesomeIcon>
							</a>
						</div>
					</div>
				</div>
				<div>
					<div className="w-full">
						<div class="card  bg-base-100 shadow-xl">
							<figure className="px-10 pt-10">
								<img
									src="https://placeimg.com/400/225/arch"
									alt=""
									className="rounded-xl"
								/>
							</figure>

							<div className="card-actions justify-center flex mt-3">
								<p className="text-xl font-bold">Scholarship finding</p>
								<a href="#">
									<FontAwesomeIcon
										className="mt-2 w-[100px] h-[10]"
										icon={faArrowRight}
									></FontAwesomeIcon>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full">
					<div class="card  bg-base-100 shadow-xl">
						<figure className="px-10 pt-10">
							<img
								src="https://placeimg.com/400/225/arch"
								alt=""
								className="rounded-xl"
							/>
						</figure>

						<div className="card-actions justify-center flex mt-3">
							<p className="text-xl font-bold">Continue education</p>
							<a href="#">
								<FontAwesomeIcon
									className="mt-2 w-[100px] h-[10]"
									icon={faArrowRight}
								></FontAwesomeIcon>
							</a>
						</div>
					</div>
				</div>
				<div className="w-full">
					<div class="card  bg-base-100 shadow-xl">
						<figure className="px-10 pt-10">
							<img
								src="https://placeimg.com/400/225/arch"
								alt=""
								className="rounded-xl"
							/>
						</figure>

						<div className="card-actions justify-center flex mt-3">
							<p className="text-xl font-bold">Current SIIE Services</p>
							<a href="#">
								<FontAwesomeIcon
									className="mt-2  w-[100px] h-[10]"
									icon={faArrowRight}
								></FontAwesomeIcon>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SiieService;
