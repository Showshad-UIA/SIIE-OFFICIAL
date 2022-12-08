import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const GettingStarts = () => {
	return (
		<div className="">
			{/* Main content start here */}
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[100px] shadow mb-5">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-gray-100 lg:px-8 px-3 py-3 pb-10  ">
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
											<p className="text-black"> Getting started</p>
										</li>
									</ul>
								</div>

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="lg:px-20 px-3 text-xl text-sky-700 font-bold ">
										Checklist for HDR students
									</h1>
									<p className="lg:px-20 px-3 text-justify ">
										Congratulations on your candidature as a higher degree by
										research (HDR) student, and welcome to Sydney IBS! Starting
										a research degree can be a confusing time, especially if you
										are new to Sydney IBS. This checklist is designed to help
										you navigate the first six months of your research degree.
									</p>
								</div>
								<div className="lg:mx-20 my-5 ">
									<h1 className="text-xl text-sky-700 font-bold  ">
										Your first two weeks
									</h1>
									<div className=" text-justify ">
										<li className="my-2">
											Get in touch with your local HDR Administrator by sending
											them an email or visiting your relevant student office.
											Your HDR Administrator can help you find your desk,
											connect to internet and printing networks, and guide you
											through any necessary paperwork;
										</li>
										<li className="my-2">
											Get in touch with your HDR Convenor. This will be a member
											of the academic staff in your school who convenes your HDR
											cohort. Ask them if there are any upcoming induction
											events for new students in your College;
										</li>
										<li className="my-2">
											Pay your{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												Services and Amenities
											</span>{" "}
											fee and pick up your Student Card (which doubles as your
											library card) from
											<span className="text-sky-700 cursor-pointer hover:underline ml-1">
												Student Central
											</span>
											;
										</li>
										<li className="my-2">
											Read the latest{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												HDR Update
											</span>
											. This newsletter advertises all kinds of opportunities
											and communities at Sydney IBS;
										</li>
										<li className="my-2">
											Find and bookmark your College's policies and guidelines
											page. You don't need to know all the rules, but it is
											important to know where to find them when you need them;
										</li>
										<li className="my-2">
											Visit the{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												Postgraduate and Research Students' Association (PARSA)
												webpage
											</span>{" "}
											for information on student support services;
										</li>
										<li className="my-2">
											Arrange an informal meeting or coffee with your
											supervisor. Your first meeting can just be a casual
											conversation, but you should also try to schedule another
											meeting to establish your expectations of each other in
											the{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												supervision relationship
											</span>
											.
										</li>
										<li className="my-2">
											If you have a disability, medical condition (including
											mental illness) or will be a recognised primary carer
											during your time at Sydney IBS, you can visit{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												Access & Inclusion{" "}
											</span>
											to discuss the support you can receive during your
											studies. This is a free and confidential service.
										</li>
									</div>
								</div>
								<div className="lg:mx-20 border-t-2">
									<h1 className="text-xl text-sky-700 font-bold my-3">
										Your first three months
									</h1>
									<div className=" text-justify">
										<li className="my-2">
											Get started on the{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												Research Integrity Training
											</span>{" "}
											course. This online module is compulsory for every Sydney
											IBS HDR student;
										</li>
										<li className="my-2">
											Meet with your supervisor to put together your supervisory
											panel and getting stuck in to your research project;
										</li>
										<li className="my-2">
											Complete your first{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												Annual Plan
											</span>
											. You should do this in discussion with your supervisory
											panel. This is a really useful way to plan your research
											activities for the coming year;
										</li>
										<li className="my-2">
											Check with your HDR Convenor if there is any compulsory
											coursework you must complete as part of your degree;
										</li>
										<li className="my-2">
											Attend an Sydney IBS-wide new student induction. These
											events are run every three months by the Research Training
											team, and are a great way to get to know Sydney IBS as an
											institution;
										</li>
										<li className="my-2">
											Have a look at all the other{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												research training opportunities
											</span>{" "}
											available throughout Sydney IBS and start to identify what
											might be relevant to you. The{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												Sydney IBS Researcher Development team
											</span>{" "}
											send out useful links continuously on
											<span className="text-sky-700 cursor-pointer hover:underline ml-1">
												Twitter
											</span>{" "}
											and{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												Facebook
											</span>
											;
										</li>
										<li className="my-2">
											Familiarise yourself with the{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												milestone reporting
											</span>{" "}
											that you will be asked to do throughout your degree. Many
											aspects of research degree administration vary between
											Colleges, but progress reports are submitted online via{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												ISIS
											</span>
											, so log in and have a look around;
										</li>
										<li className="my-2">
											Familiarise yourself with the{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												Sydney IBS Library online
											</span>{" "}
											and take advantage of their{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												training and resources
											</span>
											.
										</li>
									</div>
								</div>
								<div className="lg:mx-20 border-t-2">
									<h1 className="text-xl text-sky-700 font-bold my-3">
										Your first six months
									</h1>
									<div className=" text-justify">
										<li className="my-2">
											Meet all your panel members individually to discuss their
											roles in your research project;
										</li>
										<li className="my-2">
											Get involved in Sydney IBS{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												events
											</span>
											,{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												communities
											</span>{" "}
											and{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												clubs
											</span>
											. Research clearly shows that students with good social
											connections are more likely to successfully complete their
											degree, so taking some time to go to talks, seminars and
											social gatherings in your School is essential in becoming
											part of your intellectual community;
										</li>
										<li className="my-2">
											Familiarise yourself with the{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												Research Awards Rule
											</span>
											. These are the rules and guidelines that govern all
											higher degree by research programs at Sydney IBS. Knowing
											exactly what is expected of you as a candidate, and what
											you can expect from Sydney IBS is essential in setting
											yourself up for a successful candidature.{" "}
										</li>
									</div>
								</div>
								<div className="lg:mx-20 border-t-2 ">
									<h1 className="text-xl text-sky-700 font-bold my-3">
										What to do if things go wrong
									</h1>
									<p className="text-justify">
										Higher degree by research can be a challenging time for a
										lot of students. There are lots of places you can go for
										help if things go wrong. Your supervisor should be your
										first point of call, or you can contact your HDR Convenor or
										HDR Administrator for general advice. Sydney IBS also offers
										a range of support services to help you stay on track:
									</p>
									<div className="">
										<li className="my-2 text-justify">
											The{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												Dean of Students
											</span>{" "}
											can provide confidential advice if you have a concern
											related to supervision;
										</li>

										<li className="my-2 text-justify">
											The{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												University Counselling Centre
											</span>{" "}
											are highly experienced at working with HDR candidates.
											They offer private sessions and workshops to help you deal
											with a range of issues mental health issues including
											stress, confidence issues, balancing family and work
											commitments, adjusting to living in a new location,
											motivation issues, and relationship advice;
										</li>
										<li className="my-2 text-justify">
											As an Sydney IBS student you also have access to a range
											of programs and services that aim to help you maintain
											your
											<span className="text-sky-700 cursor-pointer hover:underline">
												health and wellbeing
											</span>
											.
										</li>
									</div>
								</div>

								<div className="lg:mx-20 border-t-2">
									<h1 className="text-sky-700 font-bold text-xl my-3">
										Quick guide to administering your degree
									</h1>
									<p>
										Understanding the administrative aspects of your candidature
										will help you effectively manage your program. Take some
										time to familiarise yourself with key elements of your
										candidature:
									</p>
									<div className="">
										<li className="my-3">
											{" "}
											All candidates must comply with the rules and guidelines
											stipulated by the{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												Research Awards Rule
											</span>
											;
										</li>
										<li className="my-3">
											All Sydney IBS staff and students are obliged to comply
											with the Sydney IBS{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												Code of Conduct
											</span>
											, which provides guidelines on identifying and resolving
											issues of ethical and professional conduct;
										</li>
										<li className="my-3">
											All candidates must comply with expected{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												academic performance
											</span>
											;
										</li>
										<li className="my-3">
											All candidates may apply for{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												research program leave
											</span>
											including personal leave, medical leave, parental leave,
											and other absences.
										</li>
										<li className="my-3">
											Find information on relevant{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												scholarships and awards
											</span>
											;
										</li>

										<li className="my-3">
											Information on{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												changing conditions of candidature
											</span>{" "}
											(full time/part time loads or internal/external);
										</li>
										<li className="my-3">
											Find information on{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												withdrawing from candidature
											</span>
											;
										</li>

										<li className="my-3">
											Find information on{" "}
											<span className="text-sky-700 cursor-pointer hover:underline">
												termination of candidature
											</span>
											.
										</li>
									</div>
									<p className="my-3">
										You can find more information on Sydney IBS administrative
										processes under the{" "}
										<span className="text-sky-700 cursor-pointer hover:underline">
											Program Management
										</span>{" "}
										page.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GettingStarts;
