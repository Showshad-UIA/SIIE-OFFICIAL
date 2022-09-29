import React from "react";

const UgCourseYearOne = () => {
	return (
		<div className="lg:mt-20 sm:mt-16 lg:w-[50%] lg:mx-auto sm:w-[50%]">
			<h1 className=" mb-5 text-xl">
				Degree: Bachelor of Islamic Banking &amp;Finance
			</h1>
			<h1 className=" mb-10 text-xl underline">Course Structure:</h1>
			<div class="overflow-x-auto relative shadow-md sm:rounded-lg lg:mt-5">
				<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-300">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" class="py-4 border border-gray-300 px-6">
								Year
							</th>
							<th scope="col" class="py-4 border border-gray-300 px-6">
								Total Course
							</th>
							<th scope="col" class="py-4 border border-gray-300  px-6">
								Core Course
							</th>
							<th scope="col" class=" px-6 py-4 border border-gray-300 ">
								Elective Course
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
							<th
								scope="row"
								class="py-4 px-6 font-medium text-gray-900 border border-gray-300 whitespace-nowrap dark:text-white"
							>
								1st
							</th>
							<td class="py-4 border border-gray-300 px-6">8</td>
							<td class="py-4 border border-gray-300 px-6">6</td>
							<td class="py-4 border border-gray-300 px-6">$2</td>
						</tr>
						<tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								class="py-4 border border-gray-300 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								2nd
							</th>
							<td class="py-4 border border-gray-300 px-6">8</td>
							<td class="py-4 border border-gray-300 px-6">6</td>
							<td class="py-4 border border-gray-300 px-6">2</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
							<th
								scope="row"
								class="py-4 border border-gray-300 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								3rd
							</th>
							<td class="py-4 border border-gray-300 px-6">8</td>
							<td class="py-4 border border-gray-300 px-6">5</td>
							<td class="py-4 border border-gray-300 px-6">3</td>
						</tr>
						<tr class="bg-gray-50 border-b font-bold text-black dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								class="py-4 border border-gray-300 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Total Year=3
							</th>
							<td class="py-4 border border-gray-300 px-6">24 Courses</td>
							<td class="py-4 border border-gray-300 px-6">17 Core Courses</td>
							<td class="py-4 border border-gray-300 px-6">
								7 Elective Courses
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="mt-10">
				<h1 className="underline text-xl lg:mb-16">Subjects:</h1>
			</div>
			<div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-5 ">
				<h1 className="text-center border-l-2 border-r-2 py-3 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 border-gray-300 ">
					Year 1
				</h1>
				<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-300">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
					<thead class="bg-gray border-b dark:bg-gray-900 dark:border-gray-700">
						<tr>
							<th scope="col" class="py-4 border border-gray-300 px-6">
								Course code
							</th>
							<th scope="col" class="py-4 border border-gray-300 px-6">
								Course title
							</th>
							<th scope="col" class="py-4 border border-gray-300 px-6">
								Course type
							</th>
							<th scope="col" class="py-4 border border-gray-300 px-6">
								-
							</th>
						</tr>
					</thead>

					<tbody>
						<tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								class="py-2 px-6 font-medium text-gray-900 border border-gray-300 whitespace-nowrap dark:text-white"
							></th>
							<td class="py-2 border border-gray-300 px-6">
								Fundamentals of Islamic Economics system
							</td>
							<td class="py-2 border border-gray-300 px-6">Core</td>
							<td class="py-2 border border-gray-300 px-6">
								<button className="bg-sky-700 w-18 h-7 hover:bg-blue-700 text-white font-bold px-2 rounded">
									<a href="#">Details</a>
								</button>
							</td>
						</tr>
						<tr class="bg-gray border-b dark:bg-gray-900 dark:border-gray-700">
							<th
								scope="row"
								class="py-2 px-6 font-medium text-gray-900 border border-gray-300 whitespace-nowrap dark:text-white"
							></th>
							<td class="py-2 border border-gray-300 px-6">
								Principles of Finance
							</td>
							<td class="py-2 border border-gray-300 px-6">Core</td>
							<td class="py-2 border border-gray-300 px-6">
								<button className="bg-sky-700 w-18 h-7 hover:bg-blue-700 text-white font-bold px-2 rounded">
									<a href="#">Details</a>
								</button>
							</td>
						</tr>
						<tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								class="py-2 px-6 font-medium text-gray-900 border border-gray-300 whitespace-nowrap dark:text-white"
							></th>
							<td class="py-2 border border-gray-300 px-6">
								The Holy Qur'aan I
							</td>
							<td class="py-2 border border-gray-300 px-6">Core</td>
							<td class="py-2 border border-gray-300 px-6">
								<button className="bg-sky-700 w-18 h-7 hover:bg-blue-700 text-white font-bold px-2 rounded">
									<a href="#">Details</a>
								</button>
							</td>
						</tr>
						<tr class="bg-gray border-b dark:bg-gray-900 dark:border-gray-700">
							<th
								scope="row"
								class="py-2 px-6 font-medium text-gray-900 border border-gray-300 whitespace-nowrap dark:text-white"
							></th>
							<td class="py-2 border border-gray-300 px-6">
								Mathematics for Business Management I
							</td>
							<td class="py-2 border border-gray-300 px-6">Core</td>
							<td class="py-2 border border-gray-300 px-6">
								<button className="bg-sky-700 w-18 h-7 hover:bg-blue-700 text-white font-bold px-2 rounded">
									<a href="#">Details</a>
								</button>
							</td>
						</tr>
						<tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								class="py-2 px-6 font-medium text-gray-900 border border-gray-300 whitespace-nowrap dark:text-white"
							></th>
							<td class="py-2 border border-gray-300 px-6">Microeconomics</td>
							<td class="py-2 border border-gray-300 px-6">Core</td>
							<td class="py-2 border border-gray-300 px-6">
								<button className="bg-sky-700 w-18 h-7 hover:bg-blue-700 text-white font-bold px-2 rounded">
									<a href="#">Details</a>
								</button>
							</td>
						</tr>
						<tr class="bg-gray border-b dark:bg-gray-900 dark:border-gray-700">
							<th
								scope="row"
								class="py-2 px-6 font-medium text-gray-900 border border-gray-300 whitespace-nowrap dark:text-white"
							></th>
							<td class="py-2 border border-gray-300 px-6">
								Principles of Financial Accounting
							</td>
							<td class="py-2 border border-gray-300 px-6">Core</td>
							<td class="py-2 border border-gray-300 px-6">
								<button className="bg-sky-700 w-18 h-7 hover:bg-blue-700 text-white font-bold px-2 rounded">
									<a href="#">Details</a>
								</button>
							</td>
						</tr>
						<tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								class="py-2 px-6 font-medium text-gray-900 border border-gray-300 whitespace-nowrap dark:text-white"
							></th>
							<td class="py-2 border border-gray-300 px-6">
								Islamic Culture I
							</td>
							<td class="py-2 border border-gray-300 px-6">Elective</td>
							<td class="py-2 border border-gray-300 px-6">
								<button className="bg-sky-700 w-18 h-7 hover:bg-blue-700 text-white font-bold px-2 rounded">
									<a href="#">Details</a>
								</button>
							</td>
						</tr>
						<tr class="bg-gray border-b dark:bg-gray-900 dark:border-gray-700">
							<th
								scope="row"
								class="py-2 px-6 font-medium text-gray-900 border border-gray-300 whitespace-nowrap dark:text-white"
							></th>
							<td class="py-2 border border-gray-300 px-6">
								Principles of Fiqh
							</td>
							<td class="py-2 border border-gray-300 px-6">Elective</td>
							<td class="py-2 border border-gray-300 px-6">
								<button className="bg-sky-700 w-18 h-7 hover:bg-blue-700 text-white font-bold px-2 rounded">
									<a href="#">Details</a>
								</button>
							</td>
						</tr>
						<tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								class="py-2 px-6 font-medium text-gray-900 border border-gray-300 whitespace-nowrap dark:text-white"
							></th>
							<td class="py-2 border border-gray-300 px-6">
								Arabic Language Skills
							</td>
							<td class="py-2 border border-gray-300 px-6">Elective</td>
							<td class="py-2 border border-gray-300 px-6">
								<button className="bg-sky-700 w-18 h-7 hover:bg-blue-700 text-white font-bold px-2 rounded">
									<a href="#">Details</a>
								</button>
							</td>
						</tr>
						<tr class="bg-gray border-b dark:bg-gray-900 dark:border-gray-700">
							<th
								scope="row"
								class="py-2 px-6 font-medium text-gray-900 border border-gray-300 whitespace-nowrap dark:text-white"
							></th>
							<td class="py-2 border border-gray-300 px-6">
								International Economics
							</td>
							<td class="py-2 border border-gray-300 px-6">Elective</td>
							<td class="py-2 border border-gray-300 px-6">
								<button className="bg-sky-700 w-18 h-7 hover:bg-blue-700 text-white font-bold px-2 rounded">
									<a href="#">Details</a>
								</button>
							</td>
						</tr>
						<tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								class="py-2 px-6 font-medium text-gray-900 border border-gray-300 whitespace-nowrap dark:text-white"
							></th>
							<td class="py-2 border border-gray-300 px-6">
								Islamic Non-Bank Financial Institutions
							</td>
							<td class="py-2 border border-gray-300 px-6">Elective</td>
							<td class="py-2 border border-gray-300 px-6">
								<button className="bg-sky-700 w-18 h-7 hover:bg-blue-700 text-white font-bold px-2 rounded">
									<a href="#">Details</a>
								</button>
							</td>
						</tr>
						<tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								class="py-2 px-6 font-medium text-gray-900 border border-gray-300 whitespace-nowrap dark:text-white"
							></th>
							<td class="py-2 border border-gray-300 px-6">
								Commercial & Financial Laws
							</td>
							<td class="py-2 border border-gray-300 px-6">Elective</td>
							<td class="py-2 border border-gray-300 px-6">
								<button className="bg-sky-700 w-18 h-7 hover:bg-blue-700 text-white font-bold px-2 rounded">
									<a href="#">Details</a>
								</button>
							</td>
						</tr>
						<tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								class="py-2 px-6 font-medium text-gray-900 border border-gray-300 whitespace-nowrap dark:text-white"
							></th>
							<td class="py-2 border border-gray-300 px-6">
								International Finance
							</td>
							<td class="py-2 border border-gray-300 px-6">Elective</td>
							<td class="py-2 border border-gray-300 px-6">
								<button className="bg-sky-700 w-18 h-7 hover:bg-blue-700 text-white font-bold px-2 rounded">
									<a href="#">Details</a>
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UgCourseYearOne;
