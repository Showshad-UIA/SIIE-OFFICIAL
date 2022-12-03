import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Track = () => {
	return (
		<div className="">
			{/* Main content start here */}
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[100px] shadow mb-5">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-base-100 lg:px-8 px-3 py-3 pb-10  ">
								{/* breadcrumb use here */}
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
											<p className="text-black"> Staying on track</p>
										</li>
									</ul>
								</div>

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="lg:px-20 px-3 lg:text-3xl text-xl text-sky-700 font-bold my-5">
										Staying on track with your HDR program
									</h1>
									<div className="lg:px-20 px-3 text-justify">
										<p className=" my-3 ">
											HDR study is a rich and rewarding experience, but can also
											be a very challenging time in your life. Every HDR student
											needs some form of support to help them stay on track and
											manage life around their study.
										</p>
										<p>
											When things get difficult, the worst thing you can do is
											stay silent. There are a number of areas around the Sydney IBS
											dedicated to helping students through a variety of issues.
											Take a look at some of the resources available and get in
											touch with the relevant area if you are struggling.
										</p>
									</div>
									<article className="lg:px-20 px-3 text-justify">
										<h1 className="text-sky-700 text-xl font-bold my-3">
											PARSA
										</h1>
										<div>
											<p>
												The Postgraduate and Research Students' Association
												(PARSA) Student Assistance Officers are professionally
												trained staff to assist you with any personal and
												academic matters. There is no charge for the service and
												confidentiality is assured. This is the place to head if
												you are a postgraduate student and need support with any
												aspect of your life, including:
											</p>
											<div className="px-3">
                                            <li> Academic matters</li>
											<li>Advocacy</li>
											<li>Appealing examination outcomes</li>
											<li>Budgeting</li>
											<li>Centrelink</li>
											<li>Communicating within your local area at Sydney IBS</li>
											<li>
												Conflict resolution (academic, accommodation, etc.)
											</li>
											<li>Difficulties with research supervision</li>
											<li>Emotional matters</li>
											<li>Fair treatment</li>
											<li>Family difficulties</li>
											<li>Financial difficulties</li>
											<li>Housing and accommodation problems</li>
											<li>Personal matters</li>
                                            </div>
										</div>
                                        <div className="text-justify">
                                            <h1 className="text-sky-700 font-bold text-xl my-3">Sydney IBS Counselling Centre</h1>
                                            <p>The Sydney IBS Counselling Centre offers <span className="text-sky-700 hover:underline cursor-pointer">a range of services and resources specifically for HDR students</span>. Mental health issues such as anxiety, depression, and high levels of stress are common in HDR students, and academia more broadly. In recognition of these concerns, Sydney IBS has developed a <span className="text-sky-700 hover:underline cursor-pointer">Mental Health Strategy</span> which prioritises accessible mental health services. The Counselling Centre offers expert advice on mental health issues, as well as common HDR concerns such as:</p>
                                        </div>
									</article>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Track;
