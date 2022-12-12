import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MasterprogramDetails from "./MasterprogramDetails";
import MasterprogramMain from "./MasterprogramMain";

const Masterprogram = () => {
	return (
		<div className="">
			<div className="container mx-auto  lg:mb-5">
				<div className="lg:mx-[100px] shadow">
					{/*  breadcrumbs added */}
					<div className="text-md breadcrumbs md:px-6   lg:mx-[85px] ">
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
								<p>Academic programs</p>
							</li>
							<li>
								<a href="/mastersreserach">Master of Philosophy (MPhil)</a>
							</li>
							<li>
								<p className="text-black"> MPhil programs</p>
							</li>
						</ul>
					</div>
					{/*  breadcrumbs ended */}
				</div>
			</div>
			{/* programs summary  start */}
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[110px] shadow">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-gray-100 lg:px-8 px-3 py-3 pb-10  ">
								<h1 className="text-sky-700 text-xl font-bold lg:px-20 px-3 ">
									Master of Philosophy (Islamic Business)
								</h1>
								<p className=" lg:px-20 px-3 text-justify">
									Start date: 4 March 2024
								</p>

								<p className="lg:px-20 px-3">
									Duration: 3 to 5 years full time (4 to 8 years part time –
									domestic students only)
								</p>

								<p className="lg:px-20 px-3">CRICOS code: ######</p>

								<p className="lg:px-20 px-3">
									Location: Sydney Olympic Park, Australia
								</p>
								<button className="lg:ml-20 ml-3 bg-sky-700 text-lg p-1 rounded-md text-white mb-3 mt-2 px-2">
									Apply Now
								</button>
								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="mt-6 lg:px-20 px-3 text-xl  font-bold text-sky-700">
										About the program
									</h1>

									<p className=" lg:px-20 px-3 text-justify mt-3 ">
										Sydney Islamic Business School (Sydney IBS) offers PhD
										programs across all disciplines within Islamic Business. The
										PhD program consists of two components– coursework and
										research. Before completing their research, Sydney IBS PhD
										candidates are required to complete 36 units of credit worth
										of coursework units, usually during their first 18 months of
										study, to assist them in completing their dissertation. PhD
										candidates are required to submit a thesis which should not
										exceed 100,000 words. The thesis must be an original work
										that not only demonstrates the candidate’s ability to
										undertake world-class research, but that also makes a
										substantial contribution to the advancement of knowledge in
										their chosen area of study. Admission requirements, program
										structure and program duration vary by discipline. You
										should carefully review all discipline-specific information
										before applying for entry to a PhD program.
									</p>
									<p className="text-justify mt-3 lg:px-20 px-3">
										Our doctoral training will engage you in numerous aspects of
										academic life. You will be both a student and a junior
										research colleague. We provide courses in a wide variety of
										research methods, and you will work closely with your
										supervisors to define your research question and develop
										your thesis. In addition, you will have opportunities to
										gain teaching and research assistant experience and become
										involved with the academic community within the Sydney
										Islamic Business School. You will attend academic
										conferences, make presentations, organise seminars and
										contribute to management and academic decisions.
									</p>
								</div>
								{/* programs summary  end */}
							</div>
						</div>
					</div>
					{/* MPhil main  added */}
					<div className="">
						<MasterprogramMain></MasterprogramMain>
					</div>
				</div>
				{/* MPhil details  added */}
				<div className="container lg:mr-52 ">
					<MasterprogramDetails></MasterprogramDetails>
				</div>
			</div>
		</div>
	);
};

export default Masterprogram;
