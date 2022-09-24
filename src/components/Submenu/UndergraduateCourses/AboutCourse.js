import React from "react";

import RightSideBar from "./RightSideBar";

const AboutCourse = () => {
	return (
		<div>
			<div className=" w-full grid bg-white lg:grid-flow-col mt-10 ">
				<div class="  col-span-4   text-justify sm:grid-flow-row">
					<div class="rounded-none text-xl  card  ">
						<div className="m-5 w-4/5 lg:ml-16">
							<div className="m-5 font-bold text-blue-500 text-2xl">
								About the courses
							</div>
							<p className="  p-5">
								This degree programme provides the opportunity to follow the
								prestigious CFA (Chartered Financial Analyst) specialist pathway
								and acquire the skills to complete the CFA Level 1 examination
								(for both September-intake and January-intake students).Lorem
								<span className="hover:underline text-red-500 cursor-pointer">
									Click here
								</span>
								for more information.
								<p>
									In addition, our partnership agreement with the esteemed
									Chartered Institute of Securities and Investment (CISI) means
									that graduates of this programme will be eligible to take
									CISI’s Level 3 Certificate in Islamic Finance, without the
									need for additional tuition.
								</p>
								<h1>Your Competitive Edges</h1>
							</p>
						</div>
					</div>
				</div>

				<RightSideBar></RightSideBar>
			</div>
		</div>
	);
};

export default AboutCourse;
