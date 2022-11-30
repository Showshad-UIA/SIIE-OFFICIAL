import React from "react";
import image1 from "../../../../Carosel/Asset/policy.jpg";
import image2 from "../../../../Carosel/Asset/integrity.jpg";
import image3 from "../../../../Carosel/Asset/training.jpg";
import image4 from "../../../../Carosel/Asset/safety.jpg";
import image5 from "../../../../Carosel/Asset/fees.jpg";
import image6 from "../../../../Carosel/Asset/supervisor.jpg";
import image7 from "../../../../Carosel/Asset/adminstrative.jpg";

const FutureStudentsMain = () => {
	return (
		<>
			<div className="container mx-auto lg:-mt-[67px]  sm:mb-5 ">
				<div class="lg:mx-28 lg:w-[85%] md:mx-20 sm:w-full md:w-4/5  ">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-10  lg:grid-cols-3 ">
						<div className="">
							<figure>
								<a href="/phd">
									<img
										src={image2}
										alt="image1"
										className="lg:h-[190px] lg:w-[350px] "
									/>
								</a>
							</figure>
							<div className=" mt-3">
								<a href="/phd">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Higher Degree Research Programs
									</h2>
								</a>
								<p className="text-black text-md ">
									Academic leadership and oversight of all Higher Degree
									Research Programs at SIBS
								</p>
							</div>
						</div>

						<div className=" ">
							<figure>
								<a href="/supervisors">
									<img
										src={image6}
										alt="image3"
										className="lg:h-[190px] lg:w-[350px]"
									/>
								</a>
							</figure>
							<div className="mt-3">
								<a href="/supervisors">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Finding a Supervisor
									</h2>
								</a>
								<p className="text-black text-md">
									Resources, workshops and communities to help you make the most
									of your time at SIBS
								</p>
							</div>
						</div>
						<div className=" ">
							<figure>
								<img
									src={image5}
									alt="image2"
									className="lg:h-[190px] lg:w-[350px]"
								/>
							</figure>
							<div className="mt-3">
								<a href="/accordion	">
									{" "}
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Fees | Scholarships
									</h2>
								</a>
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
								<a href="/deadline">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Application Deadlines
									</h2>
								</a>
								<p className="text-black text-md">
									At SIBS, we recognise that a safe and healthy University
									supports research success.
								</p>
							</div>
						</div>

						<div className="">
							<a href="/apply">
								<figure>
									<img
										src={image3}
										alt="image4"
										className="lg:h-[190px] lg:w-[350px]"
									/>
								</figure>
							</a>
							<div className="mt-3">
								<a href="/apply">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										How to Apply
									</h2>
								</a>
								<p className="text-black text-md">
									How to have a productive relationship with your supervisor
									scholarships for
								</p>
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
								<a href="/faq">
									<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
										Frequently Asked Questions
									</h2>
								</a>
								<p className="text-black text-md">
									Resources and expert advice on making the most degree in f
									scholarships relationship
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FutureStudentsMain;
