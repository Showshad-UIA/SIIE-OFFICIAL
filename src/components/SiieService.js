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
				<div className="w-full">
					<div class="  bg-gray-100">
						<figure className=" pt-10">
							<img
								src="https://placeimg.com/400/225/arch"
								alt=""
								className="cursor-pointer duration-300 "
							/>
						</figure>

						<div className="  -mt-8  flex text-black mb-5">
							<div className="bg-white flex">
								<p className=" font-bold text-xl   cursor-pointer hover:text-red-700">
									PhD Admission
								</p>
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
										Masters Admission
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
									Undergraduate Admission
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
									Graduate Diploma Admission
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
