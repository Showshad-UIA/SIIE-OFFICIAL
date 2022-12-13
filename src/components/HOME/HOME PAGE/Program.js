import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from "../../../Carosel/Asset/PhD.jpg";
import image2 from "../../../Carosel/Asset/Masters.jpg";
import image3 from "../../../Carosel/Asset/Coursework.jpg";
import image4 from "../../../Carosel/Asset/diploma.png";

import React from "react";

const Program = () => {
	return (
		<>
			<div className="container mx-auto   sm:mb-5 pb-5 ">
				<div class="lg:mx-28 lg:w-[85%] md:mx-20 sm:w-full md:w-4/5  ">
					<div className="text-2xl font-bold px-3 mt-10 mb-3">
						STUDYING AT SYDNEY IBS
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-10  lg:grid-cols-4 px-3">
						{/* PhD content  */}
						<div className="">
							<a href="/phd">
								{" "}
								<figure>
									<img
										src={image1}
										alt="image1"
										className="lg:h-[190px] lg:w-[350px] "
									/>
								</figure>
							</a>
							<div className=" mt-3">
								<a href="/phd">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Doctor of Philosophy (PhD)
									</h2>
									<p className="text-justify">
										Islamic banking, Islamic finance, or Sharia-compliant
										finance is banking .
									</p>
								</a>
							</div>
						</div>

						{/*Masters (MPhil) content  */}

						<div className=" ">
							<a href="/mastersreserach">
								{" "}
								<figure>
									<img
										src={image2}
										alt="image3"
										className="lg:h-[190px] lg:w-[350px]"
									/>
								</figure>
							</a>
							<div className="mt-3">
								<a href="/mastersreserach">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Masters (Research)
									</h2>
									<p className="text-justify">
										The master program consists of two components– coursework
										and research.
									</p>
								</a>
							</div>
						</div>

						{/*Masters (coursework) content  */}
						<div className=" ">
							<a href="/masterscoursework">
								<figure>
									<img
										src={image3}
										alt="image2"
										className="lg:h-[190px] lg:w-[350px]"
									/>
								</figure>
							</a>
							<div className="mt-3">
								<a href="/masterscoursework">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Masters (Coursework)
									</h2>
									<p className="text-justify">
										coursework component, master candidates undertake a
										comprehensive{" "}
									</p>
								</a>
							</div>
						</div>

						{/*Graduate diploma content  */}

						<div className=" ">
							<a href="/diploma">
								{" "}
								<figure>
									<img
										src={image4}
										alt="image4"
										className="lg:h-[190px] lg:w-[350px]"
									/>
								</figure>
							</a>
							<div className="mt-3">
								<a href="/diploma">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Graduate Diploma
									</h2>
									<p className="text-justify">
										diploma candidates undertake research training and
										independent research.
									</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Program;
