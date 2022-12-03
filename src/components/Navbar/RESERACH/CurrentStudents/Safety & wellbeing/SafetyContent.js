import React from "react";
import image1 from "../../../../../Carosel/Asset/Safety/safety.jpg";
import image2 from "../../../../../Carosel/Asset/Safety/safety 2.jpg";
import image3 from "../../../../../Carosel/Asset/Safety/safety 3.jpg";
import image4 from "../../../../../Carosel/Asset/Safety/safety 4.jpg";
import image5 from "../../../../../Carosel/Asset/Safety/safety 5.jpg";
import image6 from "../../../../../Carosel/Asset/Safety/safety 6.jpg";
import image7 from "../../../../../Carosel/Asset/Safety/safety 7.jpg";
import image8 from "../../../../../Carosel/Asset/Safety/safety 8.jpg";
import image9 from "../../../../../Carosel/Asset/Safety/safety 9.jpg";
import image10 from "../../../../../Carosel/Asset/Safety/contact us.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SafetyContent = () => {
	return (
		<div>
			<div class=" mt-5 pb-5 grid grid-cols-1 md:grid-cols-2 gap-5  lg:grid-cols-3  ">
				{/* finance component start here  */}
				<div className="px-2">
					<figure>
						<img
							src={image1}
							alt="image1"
							className="lg:h-[190px] lg:w-[350px] w-full "
						/>
					</figure>
					<div className=" mt-3">
						<a href="#">
							<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
								Sexual Harassment & Sexual Assault
							</h2>
						</a>
						<p className="text-black text-md ">
							The University's holistic response to sexual assault interest to
							students Understand your legal
						</p>
					</div>
				</div>
				{/* finance component start here  */}
				<div className="px-2">
					<figure>
						<img
							src={image2}
							alt="image1"
							className="lg:h-[190px] lg:w-[350px] w-full"
						/>
					</figure>
					<div className=" mt-3">
						<a href="#">
							<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
								Living well
							</h2>
						</a>
						<p className="text-black text-md ">
							Personal success is different for everyone. To achieve it we need
							to maintain
						</p>
					</div>
				</div>
				{/* finance component start here  */}
				<div className="px-2">
					<figure>
						<img
							src={image3}
							alt="image1"
							className="lg:h-[190px] lg:w-[350px] w-full"
						/>
					</figure>
					<div className=" mt-3">
						<a href="#">
							<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
								Feeling well
							</h2>
						</a>
						<p className="text-black text-md ">
							The University has a range of resources available that cover
							common topics
						</p>
					</div>
				</div>
				{/* finance component start here  */}
				<div className="px-2">
					<figure>
						<img
							src={image4}
							alt="image1"
							className="lg:h-[190px] lg:w-[350px] w-full"
						/>
					</figure>
					<div className=" mt-3">
						<a href="#">
							<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
								Respectful relationships
							</h2>
						</a>
						<p className="text-black text-md ">
							Looking for something else? If you need urgent support, please
							click here
						</p>
					</div>
				</div>
				{/* finance component start here  */}
				<div className="px-2">
					<figure>
						<img
							src={image5}
							alt="image1"
							className="lg:h-[190px] lg:w-[350px] w-full"
						/>
					</figure>
					<div className=" mt-3">
						<a href="#">
							<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
								Spending well
							</h2>
						</a>
						<p className="text-black text-md ">
							Managing your finances are important for your future benefits and
							to achieve
						</p>
					</div>
				</div>
				{/* finance component start here  */}
				<div className="px-2">
					<figure>
						<img
							src={image6}
							alt="image1"
							className="lg:h-[190px] lg:w-[350px] w-full"
						/>
					</figure>
					<div className=" mt-3">
						<a href="#">
							<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
								Living legally & safe
							</h2>
						</a>
						<p className="text-black text-md ">
							Legal Issues are not just about crime and punishments. Understand
							your legal
						</p>
					</div>
				</div>
				{/* finance component start here  */}
				<div className="px-2">
					<figure>
						<img
							src={image7}
							alt="image1"
							className="lg:h-[190px] lg:w-[350px] w-full"
						/>
					</figure>
					<div className=" mt-3">
						<a href="#">
							<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
								Access & inclusion
							</h2>
						</a>
						<p className="text-black text-md ">
							Assisting students to participate fully in their program of study
							by minimising
						</p>
					</div>
				</div>
				{/* finance component start here  */}
				<div className="px-2">
					<figure>
						<img
							src={image8}
							alt="image1"
							className="lg:h-[190px] lg:w-[350px] w-full"
						/>
					</figure>
					<div className=" mt-3">
						<a href="#">
							<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
								Living spiritually
							</h2>
						</a>
						<p className="text-black text-md ">
							ANU offers spiritual support for all students, staff and visitors
							through
						</p>
					</div>
				</div>
				{/* finance component start here  */}
				<div className="px-2">
					<figure>
						<img
							src={image9}
							alt="image1"
							className="lg:h-[190px] lg:w-[350px] w-full"
						/>
					</figure>
					<div className=" mt-3">
						<a href="#">
							<h2 className="text-xl text-sky-700 cursor-pointer hover:underline">
								Getting help at ANU
							</h2>
						</a>
						<p className="text-black text-md ">
							There are many services at ANU that can help you with your
							wellbeing,
						</p>
					</div>
				</div>
				<div className="px-2">
					<figure>
						<img
							src={image10}
							alt="image1"
							className=" lg:h-[190px] lg:w-[350px] w-full"
						/>
					</figure>
					<div className=" mt-3 ">
						<a href="#">
							<h2 className="text-xl font-bold text-sky-700 cursor-pointer hover:underline">
								Contact Us
							</h2>
						</a>
						<p className="text-black text-md ">Student Safety and Wellbeing,</p>
						<div className="flex">
							<div>
								<FontAwesomeIcon
									icon={faEnvelope}
									className="h-7 w-8 px-1 text-sky-700  "
								></FontAwesomeIcon>
							</div>
							<div>
								<p className="text-sky-700 cursor-pointer hover:underline">Send email</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SafetyContent;
