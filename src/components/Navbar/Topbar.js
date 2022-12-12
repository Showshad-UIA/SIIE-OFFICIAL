import React from "react";
import { FaBars, FaBook, FaBookOpen } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topbar = () => {
	return (
		<div className="container mx-auto items-center">

			<div className="lg:mx-[100px]">
				<nav class="">
					<div class="max-w-screen-xl px-4 py-3  md:px-6">
						<div class="flex items-start">
							<ul class="flex flex-row  space-x-2 text-sm font-medium  text-white">
								<li className="flex">
									<div>
										<a
											href="#"
											class="text-gray-500 dark:text-white hover:underline"
											aria-current="page"
										>
											Library |
										</a>
									</div>
								</li>
								<li>
									<a
										href="#"
										class="text-gray-500 dark:text-white hover:underline"
									>
										Blackboard |
									</a>
								</li>
								<li>
									<a
										href="#"
										class="text-gray-500 dark:text-white hover:underline"
									>
										Staff |
									</a>
								</li>
								<li>
									<a
										href="#"
										class="text-gray-500 dark:text-white hover:underline"
									>
										Student |
									</a>
								</li>
								<li>
									<a
										href="#"
										class="text-gray-500 dark:text-white hover:underline"
									>
										Contact Us
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
		
	);
};

export default Topbar;
