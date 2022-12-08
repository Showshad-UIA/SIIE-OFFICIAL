import React from "react";
import MasterIslamicInsuranceDetails from "./MasterIslamicInsuranceDetails";
import MasterIslamicInsuranceMain from "./MasterIslamicInsuranceMain";
import MasterIslamicInsuranceSidebar from "./MasterIslamicInsuranceSidebar";

const MasterIslamicInsurance = () => {
	return (
		<div className="">
			{/* PhD sub pages added here using breadcrumbs */}
			<div className="container mx-auto  lg:mb-5">
				<div className="lg:mx-[100px] shadow">
					<div className="text-sm breadcrumbs  lg:px-3 md:px-6 px-6  lg:mx-[100px] ">
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/mastersreserach">Master of Philosophy(MPhil)</a>
							</li>
							<li>
								<a>Master of Philosophy (Islamic Insurance)</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* Main content start here */}
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[100px] shadow">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-gray-100 lg:px-8 px-3 py-3 pb-10  ">
								<h1 className="text-sky-700 text-xl font-bold lg:px-20 px-3 ">
									Master of Philosophy (Islamic Insurance)
								</h1>
								<p className=" lg:px-20 px-3 text-justify">
									Start date: 4 March 2024
								</p>

								<p className="lg:px-20 px-3">
									Duration: 3 to 5 years full time (4 to 8 years part time –
									domestic students only)
								</p>
								<p className="lg:px-20 px-3">
									Part time: 8 years part time available for domestic students
									only
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
										Sydney Islamic Business School (Sydney IBS) offers master
										programs across all disciplines within Islamic Business. The
										master program consists of two components– coursework and
										research. Before completing their research, Sydney IBS
										master candidates are required to complete 36 units of
										credit worth of coursework units, usually during their first
										18 months of study, to assist them in completing their
										dissertation. Master candidates are required to submit a
										thesis which should not exceed 100,000 words. The thesis
										must be an original work that not only demonstrates the
										candidate’s ability to undertake world-class research, but
										that also makes a substantial contribution to the
										advancement of knowledge in their chosen area of study.
										Admission requirements, program structure and program
										duration vary by discipline. You should carefully review all
										discipline-specific information before applying for entry to
										a master program.
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
							</div>
						</div>
					</div>
					<div className="">
						<MasterIslamicInsuranceMain></MasterIslamicInsuranceMain>
					</div>
				</div>
				<div className="container lg:mr-52 ">
					<MasterIslamicInsuranceDetails></MasterIslamicInsuranceDetails>
				</div>
			</div>
		</div>
	);
};

export default MasterIslamicInsurance;
