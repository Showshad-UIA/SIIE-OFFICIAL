import React from "react";

const UgCourse = () => {
	return (
		<div className="lg:w-[50%] lg:mx-auto">
			<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
				<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-300">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" class="py-3 px-6">
								Course code
							</th>
							<th scope="col" class="py-3 px-6">
								Course title
							</th>
							<th scope="col" class="py-3 px-6">
								Course type
							</th>
							<th scope="col" class="py-3 px-6">
								-
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
							<th
								scope="row"
								class="py-4 px-6 font-medium text-gray-900 border border-gray-300 whitespace-nowrap dark:text-white"
							>
								Apple MacBook Pro 17"
							</th>
							<td class="py-4 border border-gray-300 px-6">Sliver</td>
							<td class="py-4 border border-gray-300 px-6">Laptop</td>
							<td class="py-4 border border-gray-300 px-6">$2999</td>
						</tr>
						<tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Microsoft Surface Pro
							</th>
							<td class="py-4 px-6">White</td>
							<td class="py-4 px-6">Laptop PC</td>
							<td class="py-4 px-6">$1999</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
							<th
								scope="row"
								class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Magic Mouse 2
							</th>
							<td class="py-4 px-6">Black</td>
							<td class="py-4 px-6">Accessories</td>
							<td class="py-4 px-6">$99</td>
						</tr>
						<tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Google Pixel Phone
							</th>
							<td class="py-4 px-6">Gray</td>
							<td class="py-4 px-6">Phone</td>
							<td class="py-4 px-6">$799</td>
						</tr>
						<tr>
							<th
								scope="row"
								class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Apple Watch 5
							</th>
							<td class="py-4 px-6">Red</td>
							<td class="py-4 px-6">Wearables</td>
							<td class="py-4 px-6">$999</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UgCourse;
