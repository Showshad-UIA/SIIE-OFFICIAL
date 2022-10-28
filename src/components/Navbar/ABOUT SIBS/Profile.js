import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SibsLogo from "../../../Carosel/Asset/SydneyIslamicLogo-9-01.png";
import React from "react";
import ProfileSidebar from "./ProfileSidebar";

const Profile = () => {
	return (
		<div className="container mx-auto  lg:mb-16  lg:mt-16   ">
			<div className="lg:mx-[100px]">
				<div className="grid   lg:grid-cols-2 sm:grid-cols-1">
					<div className="shadow lg:w-full lg:mx-20  ">
						<div className=" bg-base-100 lg:px-8 px-3  pb-10 ">
							<div className="  ">
								<div className="w-full flex justify-center">
									<img src={SibsLogo} alt="" className="w-[28%]  " />
								</div>

								<h1 className="  border-t-4 border-sky-700"></h1>
								<h1 className="text-sky-700 font-serif text-xl font-bold text-justify mt-4">
									About SIBS
								</h1>
								<p className="  text-justify font-serif">
									Sydney Islamic Business School (SIBS) is the first Islamic
									Business School in Australia. We aim to be a leading teaching
									and research focused business school by providing excellent
									Islamic Business higher education. We offer degree programs
									across a range of academic disciplines from doctoral,
									undergraduate, and graduate diploma level in the fields of
									Islamic Banking and Finance, Islamic Business Law, Islamic
									Economics and Islamic Entrepreneurship and Innovation.
								</p>
								<p className="text-justify font-serif mt-2">
									We aim to develop the capabilities of graduates, to serve the
									community and to work for an inclusive and sustainable global
									economy. Our academic activities, curricula, and
									organisational practices are derived from Islamic principles
									and correlated with the high standards of the Australian
									Higher Education Legal Framework. Our academic syllabus is
									structured by input from globally renowned Islamic business
									academia as well as industry experts. We warmly welcome
									everyone from all over the world to come join the community
									that is the Sydney Islamic Business School.
								</p>
								<h1 className="text-sky-700 text-xl font-bold font-serif mt-4 text-justify">
									Vision
								</h1>
								<p className="text-justify font-serif mb-10">
									To be the leader in Islamic business higher education by
									offering graduates with education, training, research, and
									collaboration that will lead to careers and make meaningful
									contributions to society.
								</p>
								
								<h1 className="  border-t-8 border-sky-700"></h1>
							</div>
						</div>
					</div>
					<div className="lg:ml-[200px]">
						<ProfileSidebar></ProfileSidebar>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
