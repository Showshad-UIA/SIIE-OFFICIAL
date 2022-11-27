import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRight,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Events = () => {
	return (
		<div className="container mx-auto mb-10 ">
			<div class=" p-2  w-full  ">
				{/* Events main content start from here */}
				<div
					class="flex flex-col  lg:flex-row  
                    shadow-md lg:mx-[100px]   "
				>
					<div className="flex flex-col px-2">
						<div className="">
							<div className=" lg:w-full    ">
								<div className=" bg-base-100 lg:px-8 px-3 py-3  ">
									<h1 className="text-sky-700 text-xl font-bold lg:px-20 px-3 ">
										Events
									</h1>
								</div>
							</div>
						</div>

						{/* Events table start here */}
						<div className="lg:mx-24">
							<div class="overflow-x-auto relative">
								<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
									{/* Table head start here */}
									<thead class="text-xs text-white uppercase bg-sky-700 dark:bg-gray-700 dark:text-gray-400">
										<tr>
											<th scope="col" class="py-3 px-6">
												DATE
											</th>
											<th scope="col" class="py-3 px-6">
												TIME
											</th>
											<th scope="col" class="py-3 px-6">
												PRESENTER
											</th>
											<th scope="col" class="py-3 px-6">
												SEMINAR TITLE
											</th>
											<th scope="col" class="py-3 px-6">
												VALUE
											</th>
										</tr>
									</thead>

									{/* Table head end here */}

									{/* Table body start here */}
									<tbody>
										<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
											<th
												scope="row"
												class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>
												23-Nov-22
											</th>
											<td class="py-4 px-6">11:00am-12:30pm</td>
											<td class="py-4 px-6">
												<p className="text-sky-700 hover:underline cursor-pointer font-bold">
													Dr. Victor Sojo
												</p>{" "}
												<p>University of Melbourne</p>
											</td>
											<td class="py-4 px-6">
												$Using Anonymous Application Procedures to Address
												Discrimination in Personnel Selection: A Systematic
												Review
											</td>
											<td class="py-4 px-6">
												F2F or Click{" "}
												<span className="text-sky-700 font-bold hover:underline cursor-pointer">
													here
												</span>{" "}
												to attend the Zoom Seminar
											</td>
										</tr>
										<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
											<th
												scope="row"
												class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>
												22-Nov-22
											</th>
											<td class="py-4 px-6">10:00am-11:30am</td>
											<td class="py-4 px-6">
												<p className="text-sky-700 font-bold hover:underline cursor-pointer">
													Professor Girish Prayag
												</p>{" "}
												<p>University of Canterbury</p>
											</td>
											<td class="py-4 px-6">
												Organisational Resilience: Beyond jingle and jangle
												fallacies
											</td>
											<td class="py-4 px-6">
												F2F or Click{" "}
												<span className="text-sky-700 font-bold hover:underline cursor-pointer">
													here
												</span>{" "}
												to attend the Zoom Seminar{" "}
											</td>
										</tr>
										<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
											<th
												scope="row"
												class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>
												17-Nov-22
											</th>
											<td class="py-4 px-6">10:00am-11:30am</td>
											<td class="py-4 px-6">
												<p className="text-sky-700 font-bold hover:underline cursor-pointer">
													Prof Greta Hsu{" "}
												</p>{" "}
												<p>University of California, Davis</p>
											</td>
											<td class="py-4 px-6">
												Organisational Resilience: Beyond jingle and jangle
												fallacies
											</td>
											<td class="py-4 px-6">
												F2F or Click{" "}
												<span className="text-sky-700 font-bold hover:underline cursor-pointer">
													here
												</span>{" "}
												to attend the Zoom Seminar{" "}
											</td>
										</tr>
										<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
											<th
												scope="row"
												class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>
												10-Nov-22
											</th>
											<td class="py-4 px-6">1:00pm-2:30pm </td>
											<td class="py-4 px-6">
												<p className="text-sky-700 font-bold hover:underline cursor-pointer">
													{" "}
													Dr Andrew Yu{" "}
												</p>{" "}
												<p>University of Melbourne</p>
											</td>
											<td class="py-4 px-6">
												Age and the Work-family Interface: How Perceptions of
												Work and Family Change Over the Lifespan and the
												Influence of Life Course Factors
											</td>
											<td class="py-4 px-6">
												F2F or Click{" "}
												<span className="text-sky-700 font-bold hover:underline cursor-pointer">
													here
												</span>{" "}
												to attend the Zoom seminar
											</td>
										</tr>
										<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
											<th
												scope="row"
												class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>
												27-Oct-22
											</th>
											<td class="py-4 px-6">1:00pm-2:30pm</td>
											<td class="py-4 px-6">
												<p className="text-sky-700 font-bold hover:underline cursor-pointer">
													Professor Paula Jarzabkowski{" "}
												</p>{" "}
												<p>University of Queenslande</p>
											</td>
											<td class="py-4 px-6">
												Reimagining Insurance: Rebalancing Knowledge, Markets
												and Responsibility in the Face of Increasing Disaster
											</td>
											<td class="py-4 px-6">
												F2F or Click{" "}
												<span className="text-sky-700 font-bold hover:underline cursor-pointer">
													here
												</span>{" "}
												to attend the Zoom Seminar{" "}
											</td>
										</tr>
										<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
											<th
												scope="row"
												class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>
												20-Oct-22
											</th>
											<td class="py-4 px-6">11:00am-12:30pm</td>
											<td class="py-4 px-6">
												<p className="text-sky-700 font-bold hover:underline cursor-pointer">
													A Prof Daniel Gozman{" "}
												</p>{" "}
												<p>University of Sydney</p>
											</td>
											<td class="py-4 px-6">
												A Case Study of Using Blockchain Technology in
												Regulatory Technology
											</td>
											<td class="py-4 px-6">
												F2F or Click{" "}
												<span className="text-sky-700 font-bold hover:underline cursor-pointer">
													here
												</span>{" "}
												to attend the Zoom Seminar{" "}
											</td>
										</tr>
										<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
											<th
												scope="row"
												class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>
												13-Oct-22
											</th>
											<td class="py-4 px-6">1:00am-2:30am</td>
											<td class="py-4 px-6">
												<p className="text-sky-700 font-bold hover:underline cursor-pointer">
													Prof Andrew Timming Royal
												</p>{" "}
												<p>Melbourne Institute of Technology</p>
											</td>
											<td class="py-4 px-6">
												Using Artificial Neural Networks to Predict Suicidal
												Ideation: Implications for Algorithmic HRM
											</td>
											<td class="py-4 px-6">
												F2F or Click{" "}
												<span className="text-sky-700 font-bold hover:underline cursor-pointer">
													here
												</span>{" "}
												to attend the Zoom Seminar{" "}
											</td>
										</tr>
										<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
											<th
												scope="row"
												class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>
												29-Sep-22
											</th>
											<td class="py-4 px-6">1:00am-2:30pm</td>
											<td class="py-4 px-6">
												<p className="text-sky-700 font-bold hover:underline cursor-pointer">
													Dr Erica Coslor
												</p>{" "}
												<p>University of Melbourne</p>
											</td>
											<td class="py-4 px-6">World on a Calendar</td>
											<td class="py-4 px-6">
												F2F or Click{" "}
												<span className="text-sky-700 font-bold hover:underline cursor-pointer">
													here
												</span>{" "}
												to attend the Zoom Seminar{" "}
											</td>
										</tr>
										<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
											<th
												scope="row"
												class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>
												15-Sep-22
											</th>
											<td class="py-4 px-6">1:00pm - 2:30pm</td>
											<td class="py-4 px-6">
												<p className="text-sky-700 font-bold hover:underline cursor-pointer">
													Professor Tyler Okimoto
												</p>{" "}
												<p>University of Queensland</p>
											</td>
											<td class="py-4 px-6">
												Expectations of Reconciliation After Conflict
											</td>
											<td class="py-4 px-6">
												F2F or Click{" "}
												<span className="text-sky-700 font-bold hover:underline cursor-pointer">
													here
												</span>{" "}
												to attend the Zoom Seminar{" "}
											</td>
										</tr>
										<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
											<th
												scope="row"
												class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>
												25-Aug-22
											</th>
											<td class="py-4 px-6">2:00pm - 3:30pm</td>
											<td class="py-4 px-6">
												<p className="text-sky-700 font-bold hover:underline cursor-pointer">
													Professor Barney Tan
												</p>{" "}
												<p>Sydney IBS</p>
											</td>
											<td class="py-4 px-6">
												When it takes a village: A research agenda for achieving
												sustainable development through digital ecosystems
											</td>
											<td class="py-4 px-6">
												F2F or Click{" "}
												<span className="text-sky-700 font-bold hover:underline cursor-pointer">
													here
												</span>{" "}
												to attend the Zoom Seminar{" "}
											</td>
										</tr>
										<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
											<th
												scope="row"
												class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>
												18- Aug-22
											</th>
											<td class="py-4 px-6">2:00pm - 3:30pm</td>
											<td class="py-4 px-6">
												<p className="text-sky-700 font-bold hover:underline cursor-pointer">
													Associate Professor Aleksandra Luksyte
												</p>{" "}
												<p> University of Western Australia</p>
											</td>
											<td class="py-4 px-6">Presenteeism and Gender</td>
											<td class="py-4 px-6">
												F2F or Click{" "}
												<span className="text-sky-700 font-bold hover:underline cursor-pointer">
													here
												</span>{" "}
												to attend the Zoom Seminar{" "}
											</td>
										</tr>
										<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
											<th
												scope="row"
												class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>
												15-Aug-22
											</th>
											<td class="py-4 px-6">2:00pm - 3:30pm</td>
											<td class="py-4 px-6">
												<p className="text-sky-700 font-bold hover:underline cursor-pointer">
													Professor Sali Li
												</p>{" "}
												<p>University of South Caroline</p>
											</td>
											<td class="py-4 px-6">
												What if one creates no content? Social Platform
												performance under different intellectual property right
												regimes
											</td>
											<td class="py-4 px-6">
												F2F or Click{" "}
												<span className="text-sky-700 font-bold hover:underline cursor-pointer">
													here
												</span>{" "}
												to attend the Zoom Seminar{" "}
											</td>
										</tr>
										<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
											<th
												scope="row"
												class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>
												04-Aug-22
											</th>
											<td class="py-4 px-6">2:00pm - 3:30pm</td>
											<td class="py-4 px-6">
												<p className="text-sky-700 hover:underline cursor-pointer font-bold">
													Associate Professor Daiane Scaraboto
												</p>{" "}
												<p>University of Melbourne</p>
											</td>
											<td class="py-4 px-6">TBC</td>
											<td class="py-4 px-6">
												F2F or Click{" "}
												<span className="text-sky-700 font-bold hover:underline cursor-pointer">
													here
												</span>{" "}
												to attend the Zoom Seminar{" "}
											</td>
										</tr>
									</tbody>
									{/* Table body end here */}
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
