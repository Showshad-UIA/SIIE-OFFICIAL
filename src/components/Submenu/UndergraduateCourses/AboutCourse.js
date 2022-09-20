import React from "react";
import MainContent from "../MainContent";
import SearchBar from "../SearchBar";
import Sidebar from "../Sidebar";
import RightSideBar from "./RightSideBar";

const AboutCourse = () => {
	return (
		<div>
			<div className=" w-full grid bg-white lg:grid-flow-col ">
				<div class="  col-span-4   text-justify sm:grid-flow-row">
					<div class="rounded-none text-xl  card  ">
						<div className="bg-white  ">
							<h1 className="lg:ml-[100px] mt-16 text-2xl font-bold text-blue-500">
								About This Courses
							</h1>
						</div>
						<div className="m-5 w-4/5 lg:ml-20">
							<p className="  p-5">
								This degree programme provides the opportunity to follow the
								prestigious CFA (Chartered Financial Analyst) specialist pathway
								and acquire the skills to complete the CFA Level 1 examination
								(for both September-intake and January-intake students).
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
								<p>
									Future employers confirm that a professional qualification on
									your CV makes it stand out in a competitive job market.
								</p>
								<p>
									The professional qualifications from the Chartered Institute
									for Securities and Investment (CISI), are developed by
									practitioners to equip you with the practical knowledge you
									need to do your job when you leave university. Demonstrate to
									future employers that you can make a difference from day one
									with a CISI qualification. Your degree is accredited by the
									CISI (www.cisi.org) as the syllabus covers a large proportion
									of the content for the following professional qualifications:
									Introduction to Investment. For your study resources visit
									CISI University Hub.
								</p>
								CISI Logo Over the past two or three decades or so, Islamic
								banking and finance has emerged as another viable way of
								financial intermediation. It has gained credibility and has
								spread worldwide and is the preferred way of banking for one
								fifth of the world’s population. This taught MSc programme
								offers an opportunity to study the structure of the Islamic
								Banking and Finance industry, including its theoretical
								foundations, products, performance, Islamic Financial
								Instruments and Risk Management issues. These and other topics
								will be studied within the wider context of the Banking and
								Finance industry worldwide. The MSc is suitable for candidates
								with some previous background in mathematics, statistics or
								econometrics. For applicants with different prior academic
								backgrounds, please refer to the MBA Islamic Banking and
								Finance.
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
