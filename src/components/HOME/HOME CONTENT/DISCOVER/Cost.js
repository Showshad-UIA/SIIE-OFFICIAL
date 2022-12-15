import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cost = () => {
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
											<p className="text-black"> Cost of studying </p>
										</li>
									</ul>
								</div>
								{/* breadcrumb end */}

								{/* About the cost of study*/}

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="text-sky-700 text-xl font-bold lg:px-20 px-3 ">
										How much will it cost to study in Australia?
									</h1>
									<h1 className="mt-2 text-sky-700 text-xl font-bold lg:px-20 px-3 ">
										Wondering how to manage your expenses in Australia? Here’s
										our list of estimates to help!
									</h1>

									<p className=" lg:px-20 px-3 text-justify mt-3 ">
										Studying abroad can be an expensive affair but planning your
										budget smartly can help you get a hold on your finances
										effectively. Before you depart from Bangladesh, ensure that
										you consider expenses like accommodation, food, health
										coverage and travel along with your tuition fee when
										calculating the estimated cost of studying in Australia.
										This will help you plan your budget more effectively.
									</p>

									{/* Cost of studying info */}

									<div>
										<h1 className="mt-2 text-sky-700 text-xl font-bold lg:px-20 px-3 ">
											1. Tuition fee is your prime expenditure
										</h1>

										<p className=" lg:px-20 px-3 text-justify mt-3 ">
											Your expenditure on tuition fee depends on the type of
											qualification and the university or school you opt for.
											For instance, veterinary and medical degrees cost
											substantially more than other degrees. The average tuition
											fees at one of Australia’s tertiary institutions ranges
											between AUD 20,000 and AUD 30,000 a year.
										</p>

										<article>
											<div className="overflow-x-auto relative lg:mx-20 mx-3 mt-2 ">
												<div className=" text-md text-black bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
													{/* table-1 */}

													<table className=" border-collapse border border-black w-full text-sm text-left text-black dark:text-gray-400 ">
														<thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
															<tr className="border-collapse border border-black">
																<th
																	scope="col"
																	className="py-3 px-1 border-collapse border border-black"
																>
																	S.no
																</th>
																<th
																	scope="col"
																	className="py-3 px-1 border-collapse border border-black"
																>
																	Study Program
																</th>
																<th
																	scope="col"
																	className="py-3 px-3 border-collapse border border-black"
																>
																	Average fees in AUD*
																</th>
															</tr>
														</thead>
														<tbody>
															<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	1.
																</th>
																<td className="py-4 px-2 border-collapse border border-black">
																	School
																</td>
																<td className="py-4 px-3 border-collapse border border-black">
																	$7,800 to $30,000 annually
																</td>
															</tr>
															<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	2.
																</th>
																<td className="py-4 px-1 border-collapse border border-black">
																	English language studies
																</td>
																<td className="py-4 px-3 border-collapse border border-black">
																	$350-450 weekly (varies as per course length)
																</td>
															</tr>
															<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	3.
																</th>
																<td className="py-4 px-1 border-collapse border border-black">
																	Vocational Education and Training
																	(Certificates I to IV, Diploma and Advanced
																	Diploma)
																</td>
																<td className="py-4 px-3 border-collapse border border-black">
																	$4000 - $22,000 annually
																</td>
															</tr>
															<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	4.
																</th>
																<td className="py-4 px-1 border-collapse border border-black">
																	Undergraduate Bachelor's Degree
																</td>
																<td className="py-4 px-3 border-collapse border border-black">
																	$15,000 - $35,000 annually
																</td>
															</tr>
															<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	5.
																</th>
																<td className="py-4 px-1 ">
																	Postgraduate Master’s Degree
																</td>
																<td className="py-4 px-3 border-collapse border border-black">
																	$20,000 - $42,000 annually
																</td>
															</tr>
															<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	6.
																</th>
																<td className="py-4 px-1 border-collapse border border-black">
																	Doctoral Degree
																</td>
																<td className="py-4 px-3 border-collapse border border-black">
																	$20,000 - $42,000 annually (attractive
																	scholarships up to 100% available with living
																	grants on meeting the university requirements)
																</td>
															</tr>
														</tbody>
													</table>
												</div>
												<div>
													<p className="text-justify my-3">
														Most commonly, courses in humanities, arts and
														education are a little cheaper, while subjects such
														as medicine and engineering are likely to be more
														expensive. If you wish to study at a postgraduate
														level, the tuition fee is typically higher, and the
														costs vary depending on the program. If you want to
														bring down your educational expenses, it is best to
														apply to various{" "}
														<span className="cursor-pointer hover:underline text-sky-700">
															scholarships
														</span>{" "}
														available for Bangladeshi students.
													</p>
												</div>

												{/* study level details ended here */}
											</div>
										</article>
									</div>
									<div>
										<h1 className="mt-2 text-sky-700 text-xl font-bold lg:px-20 px-3 ">
											2. Where will you live? Calculate accommodation costs
										</h1>

										<p className=" lg:px-20 px-3 text-justify mt-3 ">
											Most universities in Australia offer on-campus residence
											facilities to international students. You can also opt for
											off-campus accommodation wherein you can share apartments
											with other students from Bangladesh or stay with a local
											Australian family. The rent is usually paid every two
											weeks in advance. Remember, the rentals vary from city to
											city.
										</p>

										<article>
											<div className="overflow-x-auto relative lg:mx-20 mx-3 mt-2 ">
												<div className=" text-md text-black bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
													{/* table-1 */}

													<table className=" border-2 w-full text-sm text-left text-black dark:text-gray-400 border-collapse border border-black">
														<thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
															<tr>
																<th
																	scope="col"
																	className="py-3 px-1 border-collapse border border-black"
																>
																	Accommodation type
																</th>
																<th
																	scope="col"
																	className="py-3 px-1 border-collapse border border-black"
																>
																	Expenses (indicative)
																</th>
															</tr>
														</thead>
														<tbody>
															<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
																<th
																	scope="row"
																	className=" border-collapse border border-black py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
																>
																	Hostels and Guesthouses
																</th>
																<td className="border-collapse border border-black py-4 px-2">
																	$90 to $150 per week
																</td>
															</tr>
															<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
																<th
																	scope="row"
																	className="border-collapse border border-black py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
																>
																	Shared Rental
																</th>
																<td className="border-collapse border border-black py-4 px-1">
																	$95 to $215 per week
																</td>
															</tr>
															<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	On-campus
																</th>
																<td className="border-collapse border border-black py-4 px-1">
																	$110 to $280 per week
																</td>
															</tr>
															<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
																<th
																	scope="row"
																	className="border-collapse border border-black py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
																>
																	Homestay
																</th>
																<td className="py-4 px-1 border-collapse border border-black">
																	$235 to $325 per week
																</td>
															</tr>
															<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	Rental
																</th>
																<td className="py-4 px-1 border-collapse border border-black">
																	$185 to $440 per week
																</td>
															</tr>
															<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	Boarding schools
																</th>
																<td className="py-4 px-1 border-collapse border border-black">
																	$11,000 to $22,000 a year
																</td>
															</tr>
														</tbody>
													</table>
												</div>
												<div>
													<p className="text-justify my-3">
														Most commonly, courses in humanities, arts and
														education are a little cheaper, while subjects such
														as medicine and engineering are likely to be more
														expensive. If you wish to study at a postgraduate
														level, the tuition fee is typically higher, and the
														costs vary depending on the program. If you want to
														bring down your educational expenses, it is best to
														apply to various scholarships available for
														Bangladeshi students.
													</p>
												</div>

												{/* study level details ended here */}
											</div>
										</article>
									</div>
									<div>
										<h1 className="mt-2 text-sky-700 text-xl font-bold lg:px-20 px-3 ">
											3. Cost of your student visa
										</h1>

										<p className=" lg:px-20 px-3 text-justify mt-3 ">
											To study in Australia, the first step is to secure a valid
											student visa that comes with its own costs (approx. AUD
											606). Feel free to consult your IDP counsellor for latest
											updates and information on the visa application process
											and related costs.
										</p>

										<p className=" lg:px-20 px-3 text-justify mt-3 ">
											Know more:{" "}
											<span className="cursor-pointer hover:underline text-sky-700">
												All about Australian student visa
											</span>
										</p>
									</div>
									<div>
										<h1 className="mt-2 text-sky-700 text-xl font-bold lg:px-20 px-3 ">
											4. Living expenses
										</h1>

										<p className=" lg:px-20 px-3 text-justify mt-3 ">
											You need to keep a little money aside for your grocery
											shopping, social activities, and emergencies. When living
											in a foreign country as a student, it is better to keep
											track of your expenditures so that you do not overspend.
											According to the Australian Government, general living
											expenses amount to $21,041 per year. An international
											student spends between $20,000 and $27,000 per year (given
											your living arrangements and personal choices).
										</p>

										<article>
											<div className="overflow-x-auto relative lg:mx-20 mx-3 mt-2 ">
												<p className="my-2">
													You should also consider these common expenses when
													creating your budget:
												</p>
												<div className=" text-md text-black bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
													{/* table-1 */}

													<table className=" border-2 w-full text-sm text-left text-black dark:text-gray-400 border-collapse border border-black">
														<thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
															<tr>
																<th
																	scope="col"
																	className="border-collapse border border-black py-3 px-1"
																>
																	Living expenses
																</th>
																<th
																	scope="col"
																	className="py-3 px-1 border-collapse border border-black"
																>
																	Weekly budget (indicative)
																</th>
															</tr>
														</thead>
														<tbody>
															<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
																<th
																	scope="row"
																	className="border-collapse border border-black py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
																>
																	Groceries and eating out
																</th>
																<td className="py-4 px-3 border-collapse border border-black">
																	$140 to $280 per week
																</td>
															</tr>
															<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	Gas, electricity
																</th>
																<td className="py-4 px-3 border-collapse border border-black">
																	$10 to $20 per week
																</td>
															</tr>
															<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	Phone and Internet
																</th>
																<td className="py-4 px-3 border-collapse border border-black">
																	$15 to $30 per week
																</td>
															</tr>
															<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	Public transport
																</th>
																<td className="py-4 px-3 border-collapse border border-black">
																	$30 to $60 per week
																</td>
															</tr>
															<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	Car (after purchase)
																</th>
																<td className="py-4 px-3 border-collapse border border-black">
																	$150 to $260 per week
																</td>
															</tr>
															<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	Entertainment
																</th>

																<td className="py-4 px-3 border-collapse border border-black">
																	$80 to $150 per week
																</td>
															</tr>
														</tbody>
													</table>
												</div>
												<div>
													<p className="text-justify my-3">
														Most commonly, courses in humanities, arts and
														education are a little cheaper, while subjects such
														as medicine and engineering are likely to be more
														expensive. If you wish to study at a postgraduate
														level, the tuition fee is typically higher, and the
														costs vary depending on the program. If you want to
														bring down your educational expenses, it is best to
														apply to various scholarships available for
														Bangladeshi students.
													</p>
												</div>

												{/* study level details ended here */}
											</div>
										</article>
									</div>
									<div>
										<h1 className="mt-2 text-sky-700 text-xl font-bold lg:px-20 px-3 ">
											5. Keep safe. Consider health support and insurance
										</h1>

										<p className=" lg:px-20 px-3 text-justify mt-3 ">
											It is mandatory for all students scheduled to travel to
											Australia from Bangladesh to get medically insured before
											the commencement of their program. The average cost for
											medical insurance ranges around AUD 500 a year
											(indicative). Extensive health and support services are
											readily available for all International students in
											Australia. IDP can help you get the right <span className="cursor-pointer hover:underline text-sky-700">Overseas Student
											Health Cover (OSHC)</span> .
										</p>
									</div>
									<div>
										<h1 className="mt-2 text-sky-700 text-xl font-bold lg:px-20 px-3 ">
											6. Transportation. Know how much it will cost to move
											around
										</h1>

										<p className=" lg:px-20 px-3 text-justify mt-3 ">
											Unless your institution provides a shuttle service
											to-and-fro from your lodging, you’ll have to rely on the
											available public transport.
										</p>

										<article>
											<div className="overflow-x-auto relative lg:mx-20 mx-3 mt-2 ">
												<div className=" text-md text-black bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
													{/* table-1 */}

													<table className=" border-2 w-full text-sm text-left text-black dark:text-gray-400 border-collapse border border-black">
														<tbody>
															<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
																<th
																	scope="row"
																	className="py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-black"
																>
																	For short distances
																</th>
																<td className="py-4 pl-10 border-collapse border border-black">
																	You can make use of regional trains, buses,
																	and trams. A short ride on a bus or train can
																	cost you around AUD 3. You can get a weekly
																	pass upwards of AUD 20 or a monthly pass for
																	AUD 80. Student discounts are easily available
																	in all states and territories apart from
																	Victoria.
																</td>
															</tr>
															<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
																<th
																	scope="row"
																	className="border-collapse border border-black py-4 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
																>
																	For long distances
																</th>
																<td className="py-4 pl-10 border-collapse border border-black">
																	For travelling between different cities, you
																	can avail any of the following options:
																	<li>Long-distance bus</li>
																	<li>Rail</li>
																	<li>Air</li>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
												<div>
													<p className="text-justify my-3">
														Most commonly, courses in humanities, arts and
														education are a little cheaper, while subjects such
														as medicine and engineering are likely to be more
														expensive. If you wish to study at a postgraduate
														level, the tuition fee is typically higher, and the
														costs vary depending on the program. If you want to
														bring down your educational expenses, it is best to
														apply to various scholarships available for
														Bangladeshi students.
													</p>
												</div>

												{/* study level details ended here */}
											</div>
										</article>
									</div>

									<div>
										<h1 className="mt-2 text-sky-700 text-xl font-bold lg:px-20 px-3 ">
											7. Don’t ignore your taxes
										</h1>

										<p className=" lg:px-20 px-3 text-justify mt-3 ">
											International students in Australia cannot work without
											acquiring their Tax File Number (TFN). With this, you are
											allowed to work 20 hours per week during academic sessions
											and full-time during vacations. If you choose to work
											along with your studies, your earned income will be
											taxable.
										</p>
										<p className=" lg:px-20 px-3 text-justify mt-3 ">
											Remember, the exchange rate variations may also affect
											your budgeting. We suggest you also look for a part-time
											job while you are studying in Australia or seek
											scholarships in the universities you apply to. This can
											help lower your cost of studying abroad to a great extent.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cost;
