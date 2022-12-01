import { faBookOpen, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import image1 from "../../../../Carosel/Asset/policy.jpg";
import image2 from "../../../../Carosel/Asset/integrity.jpg";
import image3 from "../../../../Carosel/Asset/training.jpg";
import image4 from "../../../../Carosel/Asset/safety.jpg";
import image5 from "../../../../Carosel/Asset/fees.jpg";
import image6 from "../../../../Carosel/Asset/supervisor.jpg";
import image7 from "../../../../Carosel/Asset/adminstrative.jpg";
import image8 from "../../../../Carosel/Asset/association.jpg";
import image9 from "../../../../Carosel/Asset/photo.jpg";

const CurrentStudentsMain = () => {
	return (
		<>
			<div className="container mx-auto lg:-mt-[67px]  sm:mb-5 ">
				<div class="lg:mx-28 lg:w-[85%] md:mx-20 sm:w-full md:w-4/5  ">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-10  lg:grid-cols-3 ">
						<div className="">
							<a href="/gettingStarted">
								<figure>
									<img
										src={image5}
										alt="image1"
										className="lg:h-[190px] lg:w-[350px] "
									/>
								</figure>
							</a>
							<div className=" mt-3">
								<a href="/gettingStarted">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Getting started
									</h2>
								</a>

								<p className="text-black text-md ">
									Academic leadership and oversight of all Higher Degree
									Research Programs at SIBS
								</p>
							</div>
						</div>
						<div className="">
							<figure>
								<img
									src={image1}
									alt="image4"
									className="lg:h-[190px] lg:w-[350px]"
								/>
							</figure>
							<div className="mt-3">
								<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
									Policies and Procedures
								</h2>
								<p className="text-black text-md">
									Discover the range of funding options to assist you with your
									study expenses.
								</p>
							</div>
						</div>
						<div className=" ">
							<figure>
								<img
									src={image3}
									alt="image3"
									className="lg:h-[190px] lg:w-[350px]"
								/>
							</figure>
							<div className="mt-3">
								<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
									Research Training
								</h2>
								<p className="text-black text-md">
									Resources, workshops and communities to help you make the most
									of your time at SIBS
								</p>
							</div>
						</div>
						<div className=" ">
							<figure>
								<img
									src={image2}
									alt="image2"
									className="lg:h-[190px] lg:w-[350px]"
								/>
							</figure>
							<div className="mt-3">
								<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
									Research Ethics and Integrity
								</h2>
								<p className="text-black text-md">
									Information on human ethics training sessions and compulsory
									research integrity training
								</p>
							</div>
						</div>

						<div className=" ">
							<figure>
								<img
									src={image4}
									alt="image4"
									className="lg:h-[190px] lg:w-[350px]"
								/>
							</figure>
							<div className="mt-3">
								<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
									Safety and Wellbeing
								</h2>
								<p className="text-black text-md">
									At SIBS, we recognise that a safe and healthy University
									supports research success.
								</p>
							</div>
						</div>

						<div className="">
							<figure>
								<img
									src={image6}
									alt="image4"
									className="lg:h-[190px] lg:w-[350px]"
								/>
							</figure>
							<div className="mt-3">
								<a href="/progress">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Your academic progress{" "}
									</h2>
									<p className="text-black text-md">
										How to have a productive relationship with your supervisor
										scholarships for
									</p>
								</a>
							</div>
						</div>
						<div className="">
							<figure>
								<img
									src={image7}
									alt="image4"
									className="lg:h-[190px] lg:w-[350px]"
								/>
							</figure>
							<div className="mt-3">
								<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
									Staying on track
								</h2>
								<p className="text-black text-md">
									Resources and expert advice on making the most degree in f
									scholarships relationship
								</p>
							</div>
						</div>
						<div className="   ">
							<figure>
								<img
									src={image9}
									alt="image4"
									className="lg:h-[190px] lg:w-[350px]"
								/>
							</figure>
							<div className="mt-3">
								<h2 className="text-xl text-sky-700 hover:underline cursor-pointer">
									Finishing your degree
								</h2>
								<p className="text-black text-md">
									Information to help you submit your thesis, complete all the f
									scholarships for higher degree
								</p>
							</div>
						</div>
						<div className="  ">
							<figure>
								<img
									src={image8}
									alt="image4"
									className="lg:h-[190px] lg:w-[350px]"
								/>
							</figure>
							<div className="mt-3">
								<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
									HDR Students' Association
								</h2>
								<p className="text-justify text-black text-md">
									Information to help you submit your thesis, scholarships for
									higher degree complete all the
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CurrentStudentsMain;
