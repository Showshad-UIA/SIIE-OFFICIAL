import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SafetyContent from "./SafetyContent";
import image9 from "../../../../../Carosel/Asset/Safety/safety 9.jpg";
const Safety = () => {
	return (
		<div className="container mx-auto lg:mb-16 lg:mt-7 ">
			<div className="lg:mx-[100px] shadow">
				<div className="text-md breadcrumbs md:px-6   lg:mx-[55px] ">
					<ul className="text-sky-700 ">
						<li>
							<a href="/">
								<FontAwesomeIcon
									icon={faHouse}
									className="h-6 w-4 px-1  "
								></FontAwesomeIcon>
							</a>
						</li>
						<li>
							<p>Graduate Research</p>
						</li>
						<li>
							<a href="/current"> Current students</a>
						</li>
						<li>
							<p className="text-black"> Safety & wellbeing</p>
						</li>
					</ul>
				</div>
				{/* main content start here */}
				<div>
					<div className="  ">
						<h1 className=" mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
						<h1 className="lg:px-20 px-3 text-xl text-sky-700 font-bold ">
							Health, safety & wellbeing
						</h1>

						<div className="lg:px-20 px-3 text-justify ">
							<p>
								At Sydney IBS, we recognise that a healthy university supports
								student success. Here you will find a number of initiatives,
								programs and resources that will support your physical, social,
								spiritual and mental health to help you to maintain a healthy
								lifestyle during your studies.
							</p>
							<p>
								Explore further important information on how to stay safe and
								secure on campus.
							</p>
						</div>
					</div>

					<div className="lg:mx-20">
						<SafetyContent></SafetyContent>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Safety;
