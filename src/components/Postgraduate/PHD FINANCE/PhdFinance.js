import React from "react";
import FinanceDetails from "./FinanceDetails";
import PhdFinanceAdditionalMain from "./PhdFinanceAdditionalMain";
import PhdFinanceSidebar from "./PhdFinanceSidebar";

const PhdFinance = () => {
	return (
		<div>
			{/* PhD sub pages added here using breadcrumbs */}
			<div className="container mx-auto">
				<div className="text-sm breadcrumbs lg:mx-[100px]">
					<ul>
						<li>
							<a href="/phdeconomics">PhD economics</a>
						</li>
						<li>
							<a href="phdbusinesslaw">PhD business law</a>
						</li>
						<li><a href="/phdinsurance">PhD Islamic Insurance</a></li>
						<li><a href="/phdislamicstudies">PhD Islamic studies</a></li>
						
					</ul>
				</div>
			</div>
			{/* Main content start here */}
			<div className="container mx-auto  lg:mb-16 lg:mt-16 ">
				<div className="lg:mx-[100px]">
					<div className="">
						<div className="shadow lg:w-full    ">
							<div className=" bg-base-100 lg:px-8 px-3 py-5 pb-10  ">
								<h1 className="text-sky-700 text-xl font-bold text-justify ">
									Doctor of Philosophy (Islamic Banking and Finance)
								</h1>
								<p className="   text-justify">Start date: 2 February 2024</p>

								<p>
									Full time: 4 years full time for domestic and international
									students
								</p>
								<p>
									Part time: 8 years part time available for domestic students
									only
								</p>

								<p>Location: Sydney, Australia.</p>
								<button className=" bg-sky-700 text-lg p-1 rounded-md text-white mb-3 mt-2 px-2">
									Apply Now
								</button>
								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700"></h1>
									<h1 className="mt-6 text-xl  font-bold text-blue-500">
										About the program
									</h1>

									<p className="  text-justify mt-3">
										The degree of Doctor of Philosophy (PhD) in Islamic Banking
										and Finance at the Sydney Islamic Business School may be
										undertaken across various Islamic Banking and Finance
										research areas. As part of your progression towards the
										degree, as a Higher Degree by Research (HDR) student, you
										will have access to an extensive HDR Curriculum from which
										you will have to complete 30 units of credit (UOC) worth of
										coursework units and a research thesis of 80,000 words on an
										approved topic, under the supervision of an academic panel.
										You will need to complete the coursework units by the end of
										the second year of your PhD (for full time students) and by
										the end of the fourth year of your PhD (for part time
										students).
									</p>
									<p className="text-justify mt-3">
										Our doctoral training will immerse you in all aspects of
										academic life.You will be both a student and a junior
										research colleague. We provide courses in a wide variety of
										research methods and you will work closely with your
										supervisors to define your research question and develop
										your thesis. In addition, you will have opportunities to
										gain teaching and research assistant experience and become
										involved with the intellectual community within both Sydney
										Islamic Business School. You will attend academic
										conferences, make presentations, organise lectures and
										seminars and contribute to management and academic
										decisions.
									</p>
									<h1 className=" mt-3 border-t-4 border-sky-700"></h1>
								</div>
							</div>
						</div>
						{/* <div className="lg:ml-[200px] mt-4">
							<PhdFinanceSidebar></PhdFinanceSidebar>
						</div> */}
					</div>
					<div>
						<PhdFinanceAdditionalMain></PhdFinanceAdditionalMain>
					</div>
				</div>
				<div className="container lg:mr-52">
					<FinanceDetails></FinanceDetails>
				</div>
			</div>
		</div>
	);
};

export default PhdFinance;
