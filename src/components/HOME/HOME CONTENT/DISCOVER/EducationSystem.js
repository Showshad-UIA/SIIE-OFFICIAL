import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const EducationSystem = () => {
	return (
		<>
			<div className="container mx-auto  lg:mb-16 lg:mt-7  ">
				<div className="lg:mx-[110px] shadow ">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-gray-100 lg:px-8 px-3 py-3 pb-10  ">
								{/* breadcrumb added here */}
								<div className="text-md breadcrumbs md:px-1   lg:mx-[55px] ">
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
											<p className="text-black"> Discover</p>
										</li>
										<li>
											<p className="text-black"> Education System</p>
										</li>
									</ul>
								</div>
								{/* breadcrumb end */}

								{/* About the education systems*/}

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="text-sky-700 text-xl font-bold lg:px-20 px-3 ">
										Education system in Australia
									</h1>
									<h1 className="mt-2 text-sky-700 text-xl font-bold lg:px-20 px-3 ">
										Everything you need to know about the Australian education
										system
									</h1>

									<p className=" lg:px-20 px-3 text-justify mt-3 ">
										When you choose to study in Australia, you can be assured of
										unparalleled quality of education,
										internationally-recognised qualification and immense
										employment prospects. Universities in Australia are renowned
										for their research and training methodologies, and this
										makes it a popular destination among Bangladeshi students.
									</p>
									<p className=" lg:px-20 px-3 text-justify mt-3 ">
										The academic excellence, campus life and qualified
										instructors are other key reasons behind Australian
										universities being ranked in the QS World Ranking and Times
										Higher Education Rankings consistently. It has
										well-structured curriculum that focuses on varied skills
										such as critical thinking, creativity, communication,
										literacy, analytical thinking ability, ethical understanding
										and more.
									</p>
									<p className="text-justify mt-3 lg:px-20 px-3">
										Plus, Australia offers a variety of courses – you can choose
										from 22,000 types of courses available in over 1,100
										institutions; and hosts the five best student cities in the
										world including Sydney, Melbourne, Adelaide, Perth and
										Brisbane.
									</p>

									{/* Australian Qualifications Framework info */}

									<article className="lg:px-20 mt-5">
										<h1 className="font-bold text-xl my-2 text-sky-700">
											Australian Qualifications Framework (AQF)
										</h1>

										<p className="text-justify">
											The unique factor of the Australian education system is
											its implementation of Australian Qualifications Framework
											(AQF), the national policy established in 1995 that
											specifies the standards of qualifications for the tertiary
											education sector (higher education, vocational education
											and training) in addition to the school leaving
											certificate, called the Senior Secondary Certificate of
											Education. With AQF, your degree is recognised and
											authorised by the government.
										</p>

										<p className="text-justify">
											Under the AQF, there are 10 levels that interconnects
											various schools, colleges, universities and educational
											institutions in one single national system. This allows
											flexibility, choice and better career planning for
											students to move from one study level to another as long
											as their student visa requirements are fulfilled.
										</p>

										{/*  levels of Australian study*/}

										<h1 className=" font-bold text-xl my-2 text-sky-700">
											Study levels in Australia
										</h1>
										<p className=" mb-3 text-justify">
											The education system in Australia is three-tiered with
											primary, secondary and tertiary levels of education.
											Here’s an overview of the different levels and
											qualifications available as per the AQF.
										</p>

										{/* study level details added here */}

										<div className="overflow-x-auto relative  ">
											<div className=" text-md text-black bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
												<p className="py-3 px-1 font-bold uppercase">
													Levels and qualifications as per Australian
													Qualification Framework (AQF)
												</p>

												{/* table-1 */}

												<table className=" border-2 w-full  text-left text-black dark:text-gray-400 border-collapse border border-black ">
													<tbody>
														<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 border-collapse border border-black ">
															<th
																scope="row"
																className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black "
															>
																Level 1
															</th>
															<td className="border-collapse border border-black  py-4 px-1">
																Certificate I
															</td>
														</tr>
														<tr className="border-collapse border border-black  bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
															<th
																scope="row"
																className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black "
															>
																Level 2
															</th>
															<td className=" border-collapse border border-black py-4 px-1">
																Certificate II
															</td>
														</tr>
														<tr className="bg-white border-collapse border border-black  border-b dark:bg-gray-900 dark:border-gray-700">
															<th
																scope="row"
																className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black "
															>
																Level 3
															</th>
															<td className="py-4 border-collapse border border-black  px-1">
																Certificate III
															</td>
														</tr>
														<tr className="border-collapse border border-black  bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
															<th
																scope="row"
																className="border-collapse border border-black  py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
															>
																Level 4
															</th>
															<td className="py-4 border-collapse border border-black px-1">
																Certificate IV
															</td>
														</tr>
														<tr className="border-collapse border border-black  bg-white border-b dark:bg-gray-900 dark:border-gray-700">
															<th
																scope="row"
																className="border-collapse border border-black  py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
															>
																Level 5
															</th>
															<td className="border-collapse border border-black  py-4 px-1">
																Diploma
															</td>
														</tr>
														<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
															<th
																scope="row"
																className="py-4 border-collapse border border-black  px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
															>
																Level 6
															</th>
															<td className="py-4 border-collapse border border-black  px-1">
																Advanced Diploma, Associate Degree
															</td>
														</tr>
														<tr className="bg-white border-collapse border border-black  border-b dark:bg-gray-900 dark:border-gray-700">
															<th
																scope="row"
																className="py-4 px-1 border-collapse border border-black font-medium text-gray-900 whitespace-nowrap dark:text-white"
															>
																Level 7
															</th>
															<td className="py-4 border-collapse border border-black  px-1">
																Bachelor Degree
															</td>
														</tr>
														<tr>
															<th
																scope="row"
																className="border-collapse border border-black  py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
															>
																Level 8
															</th>
															<td className="py-4 border-collapse border border-black  px-1">
																Graduate Diploma
															</td>
														</tr>
														<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 border-collapse border border-black ">
															<th
																scope="row"
																className="border-collapse border border-black  py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
															>
																Level 9
															</th>
															<td className="py-4 border-collapse border border-black px-1">
																Master's Degree
															</td>
														</tr>
														<tr className="">
															<th
																scope="row"
																className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black "
															>
																Level 10
															</th>
															<td className="py-4 border-collapse border border-black  px-1">
																Doctoral Degree
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div>
												<p className="text-justify my-3">
													The highest level of education in Australia is the
													university level. You can choose from 43 universities,
													40 out of which are government funded, two are
													international universities and one is a private
													university. You may opt for bachelor degrees or
													postgraduate courses which can comprise certificate,
													postgraduate diploma, master and doctoral programs.
												</p>
												<p className="text-justify">
													Students can also enrol for vocational courses that
													work as a gateway to university education or industry
													for work. These courses focus on practical skills and
													industry training and are offered by government-funded
													institutions (including TAFE - Technical and Further
													Education) and private establishments.
												</p>
											</div>

											{/* study level details ended here */}

											<div>
												{/* Additional details added here  */}

												<h1 className="font-bold text-xl my-2 text-sky-700">
													Higher education
												</h1>

												<p className="text-justify">
													Provided at university level, higher education
													comprises bachelors, masters and doctoral degrees. The
													skills and knowledge acquired at these levels makes a
													student ready to work in the industry eventually.
												</p>
												<h1 className="font-bold text-xl my-2 text-sky-700">
													Fee structure
												</h1>

												<p className="text-justify">
													The average tuition fees at one of Australia’s
													tertiary institutions ranges between AUD$20,000 and
													AUD$30,000 a year. Find out more about the cost of
													studying in Australia in detail{" "}
													<span className="text-sky-700 cursor-pointer hover:pointer">
														here
													</span>
													.
												</p>
												<h1 className="font-bold text-xl my-2 text-sky-700">
													Financial aid
												</h1>

												<p className="text-justify">
													Bangladeshi students can apply to several government,
													public as well as institution specific scholarships.
													Application requirements and guidelines are available
													on the official website of your institution or
													respective funding organisation. Students are
													recommended to check the same before applying. Know
													more about the available grants,{" "}
													<span className="text-sky-700 cursor-pointer hover:pointer">
														scholarships and bursaries here.{" "}
													</span>
													.
												</p>
												<h1 className="font-bold text-xl my-2 text-sky-700">
													Pedagogy in Australian classrooms
												</h1>

												<p className="text-justify">
													The Australian education emphasises on practical
													knowledge, hands-on experience and getting you
													job-ready. Universities in Australia provide a
													research-based learning approach wherein you’ll be
													implementing all the concepts and ideas you gather in
													the classroom.
												</p>
												<h1 className="font-bold text-xl my-2 text-sky-700">
													VET (Vocational and Technical Schools)
												</h1>

												<p className="text-justify">
													Australian education system allows its students to
													enrol for vocational courses that lets them skip
													university education and apply directly to jobs. These
													courses primarily focus on practical learning and
													industry skills unlike the regular courses that rely
													heavily on theoretical and in-depth knowledge. A lot
													of schools provide courses in technical and further
													education (TAFE) and vocational education and training
													(VET). Keep in mind that courses mostly provide
													certifications, diploma or advanced diploma. Some of
													the popular industries that VET students can look at
													include manufacturing, hospitality, sports, tourism,
													business and marketing.
												</p>

												<div>
													<h1 className="font-bold text-xl my-2 text-sky-700">
														Pathway programs – Your bridge to higher education
														in Australia
													</h1>

													<p className="text-justify">
														International students may require additional
														support and assistance to get accustomed to the
														education system and teaching approach of Australia.
														Henceforth, a lot of pathway programs to higher
														education that comprise of foundation courses and
														English language programs are available.
													</p>
													<h1 className="font-bold text-xl my-2 text-sky-700">
														Academic intakes
													</h1>

													<p className="text-justify mb-2">
														Unlike a single intake in the Bangladeshi
														universities, Australian colleges and universities
														offer two major intakes. Intakes may also be
														referred to as a semester in some universities. The
														two intakes available in Australia are:
													</p>
													<li>
														<span className="font-bold text-black">
															Semester 1:
														</span>{" "}
														Starts late February/early March to late May/early
														June
													</li>
													<li>
														<span className="font-bold text-black">
															Semester 2:
														</span>
														Starts late July/early August through to November
													</li>
													<p className="text-justify my-2">
														The Australian high school system commences in late
														January or early February whereas the vocational
														courses and university programs begin around
														February. While the school system has three to four
														terms, universities have two semesters. Students can
														enjoy a 2-4 week break between the two semesters,
														the summer one being the longer one. Read up about
														these intakes in detail here.
													</p>
												</div>
												<div>
													<h1 className="font-bold text-xl my-2 text-sky-700">
														English language training
													</h1>

													<p className="text-justify">
														Since Australia is an English-speaking country and
														all your instructions in the classroom takes place
														in English, it is essential to be proficient in this
														language. In case you have limited proficiency, you
														may be advised to enrol in an English language
														before you start your program. You can choose from
														over 100 private English language centres in the
														country.
													</p>
												</div>

												{/* Additional details ended here  */}

												{/* Postgraduate study details added here */}

												<div>
													<h1 className="font-bold text-xl my-2 text-sky-700">
														Postgraduate study
													</h1>

													<p className="text-justify">
														Both universities and private colleges offer
														postgraduate courses in Australia. A master’s degree
														has three formats – Master’s degree (coursework),
														Master’s degree (research) and Master’s degree
														(extended). Similarly, on doctorate level, there are
														two formats- Research doctorate (PhD) and
														Professional doctorate. Admission criteria at post
														graduate level is quite competitive including high
														levels of English language proficiency, and
														remarkable academic qualifications. You should also
														know that some courses like architecture and
														medicine are only offered by universities.
													</p>

													{/* Postgraduate popular program added */}

													<div className="mt-3 text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
														<p className="py-3 px-1 font-bold">
															Popular programs
														</p>
													</div>

													{/* table-2 */}

													<table className=" border-2 w-full  text-left text-gray-500 dark:text-gray-400 border-collapse border border-black">
														<tbody>
															<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 border-collapse border border-black">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	<a
																		href=""
																		className="text-sky-700 hover:underline "
																	>
																		Health and Science
																	</a>
																</th>
																<td className="py-4 px-1 border-collapse border border-black">
																	<a
																		href=""
																		className="text-sky-700 hover:underline "
																	>
																		Business and Management
																	</a>
																</td>
															</tr>
															<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 border-collapse border border-black">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	<a
																		href=""
																		className="text-sky-700 hover:underline "
																	>
																		<p>Law</p>
																	</a>
																</th>
																<td className="py-4 px-1 border-collapse border border-black">
																	<a
																		href=""
																		className="text-sky-700 hover:underline"
																	>
																		<p>Medicines</p>
																	</a>
																</td>
															</tr>
															<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 border-collapse border border-black">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	<a
																		href=""
																		className="text-sky-700 hover:underline "
																	>
																		Arts and Design
																	</a>
																</th>
																<td className="py-4 px-1 border-collapse border border-black">
																	<a
																		href=""
																		className="text-sky-700 hover:underline "
																	>
																		Education and Teaching
																	</a>
																</td>
															</tr>
															<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 border-collapse border border-black">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	<a
																		href=""
																		className="text-sky-700 hover:underline "
																	>
																		<p>Accounting</p>
																	</a>
																</th>
																<td className="py-4 px-1 border-collapse border border-black">
																	<a
																		href=""
																		className="text-sky-700 hover:underline"
																	>
																		<p>Engineering</p>
																	</a>
																</td>
															</tr>
															<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 border-collapse border border-black">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	<a
																		href=""
																		className="text-sky-700 hover:underline "
																	>
																		Computer Science and IT
																	</a>
																</th>
																<td className="py-4 px-1">
																	<a
																		href=""
																		className="text-sky-700 hover:underline "
																	>
																		Engineering and management
																	</a>
																</td>
															</tr>
														</tbody>
													</table>
													{/* Postgraduate study details ended here */}
												</div>

												{/* Post-study work details*/}
												<div>
													<h1 className="font-bold text-xl my-3 text-sky-700">
														Post-study work opportunities
													</h1>

													<p className="text-justify">
														Australia provides ample employment prospects after
														graduation. You can apply for subclass 485 temporary
														graduate visa on completion of your studies that
														will allow you to remain and study further/work in
														Australia. If you wish to further your studies, you
														can apply for the next level of study since there is
														no dearth of right courses and programs for the
														suitable candidate.
													</p>
													<div className="mt-3 text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
														<p className="py-3 px-1 font-bold">
															Some interesting facts about Australian education
														</p>
													</div>

													{/* table -3 */}

													<table className=" border-2 w-full  text-left text-black dark:text-gray-400 border-collapse border border-black">
														<tbody>
															<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 border-collapse border border-black">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	<p className="px-5">1.</p>
																</th>
																<td className="py-4 px-1 border-collapse border border-black px-3">
																	<p className="text-justify">
																		The Education Index, published by the United
																		Nations listed Australia as 0.993 in 2006,
																		the highest in the world.
																	</p>
																</td>
															</tr>
															<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 border-collapse border border-black">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	<p className="px-5 ">2.</p>
																</th>
																<td className="py-4 px-1 border-collapse border border-black px-3">
																	{" "}
																	<p className="text-justify">
																		In 2017, Australia had 526,932 international
																		students from over 90 countries.
																	</p>
																</td>
															</tr>
															<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 border-collapse border border-black">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black "
																>
																	<p className="px-5">3.</p>
																</th>
																<td className="py-4 px-1 border-collapse border border-black px-3">
																	<p href="" className=" text-justify ">
																		An international student is more likely to
																		enrol in a course registered under CRICOS
																		(the registration that indicates that the
																		course and institution meets academic
																		excellence standard of the Australian
																		education system).
																	</p>
																</td>
															</tr>
														</tbody>
													</table>
												</div>

												{/* Post-study work ended*/}
											</div>
										</div>
									</article>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EducationSystem;
