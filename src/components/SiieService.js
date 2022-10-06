import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SiieService = () => {
	return (
		<div className=" mb-16">
			<div className=" -mb-[34px] mt-10 ml-8 text-3xl  text-blue-500 font-bold">
				Studying at SIBS
			</div>
			<div className="grid lg:grid-cols-4  text-xl  p-3 gap-5 sm:grid-cols-1 m-6  justify-center ">
				<div>
					<div className="w-full">
						<div class="  bg-gray-100 ">
							<figure className=" pt-10">
								<img
									src="https://placeimg.com/400/225/arch"
									alt=""
									className="cursor-pointer duration-300"
								/>
							</figure>

							<div className=" bg-gray-100 -mt-8  flex text-black mb-5">
								<div className="bg-white flex">
									<p className=" font-bold text-xl   cursor-pointer hover:text-red-700">
										<a href="/phd">PhD Admission</a>
									</p>
									<a href="#">
										<FontAwesomeIcon
											className="mt-2 w-[253px] h-[10]"
											icon={faArrowRight}
										></FontAwesomeIcon>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="w-full">
						<div class="  bg-gray-100 ">
							<figure className=" pt-10">
								<img
									src="https://placeimg.com/400/225/arch"
									alt=""
									className="cursor-pointer duration-300"
								/>
							</figure>

							<div className=" bg-gray-100 -mt-8  flex text-black mb-5">
								<div className="bg-white flex">
									<p className=" font-bold text-xl   cursor-pointer hover:text-red-700">
										<a href="/masters">Masters Admission</a>
									</p>
									<a href="#">
										<FontAwesomeIcon
											className="mt-2 w-[220px] h-[10]"
											icon={faArrowRight}
										></FontAwesomeIcon>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full">
					<div class=" bg-gray-100 ">
						<figure className=" pt-10">
							<img
								src="https://placeimg.com/400/225/arch"
								alt=""
								className="cursor-pointer duration-300"
							/>
						</figure>

						<div className=" bg-gray-100 -mt-8  flex text-black mb-5">
							<div className="bg-white flex">
								<p className=" font-bold text-xl   cursor-pointer hover:text-red-700">
									<a href="/undergraduate">Undergraduate Admission</a>
								</p>
								<a href="#">
									<FontAwesomeIcon
										className="mt-2 w-[151px] h-[10]"
										icon={faArrowRight}
									></FontAwesomeIcon>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full">
					<div class=" bg-gray-100">
						<figure className=" pt-10">
							<img
								src="https://placeimg.com/400/225/arch"
								alt=""
								className="cursor-pointer duration-300"
							/>
						</figure>

						<div className=" bg-gray-100 -mt-8  flex text-black mb-5">
							<div className="bg-white  flex">
								<p className=" font-bold text-xl   cursor-pointer hover:text-red-700">
									<a href="/diploma">Graduate Diploma Admission</a>
								</p>
								<a href="#">
									<FontAwesomeIcon
										className="mt-2  w-[123px] h-[10]"
										icon={faArrowRight}
									></FontAwesomeIcon>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SiieService;
