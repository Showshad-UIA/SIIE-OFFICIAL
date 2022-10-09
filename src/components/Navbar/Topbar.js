import React from "react";
import MediasIcon from "../MediasIcon";
import { FaBars, FaBook, FaBookOpen } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topbar = () => {
	return (
		<div className="flex w-full lg:mt-[-20px] lg:visible  bg-gray-200 py-3 top-0 sticky">
			<div className="">
				<nav class="bg-gray-200  dark:bg-blue-500 lg:ml-[785px]  ">
					<div class="py-2  mx-auto max-w-screen-xl md:px-6 flex">
						<div>
							<div class="flex items-center ">
								<ul class="flex flex-row  space-x-8 text-sm font-medium  text-white">
									<li className="flex">
										<div>
											<FontAwesomeIcon icon={FaBook}></FontAwesomeIcon>
										</div>
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
											Contact us
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</div>
			{/* <div className="">
				<MediasIcon></MediasIcon>
			</div> */}
		</div>
	);
};

export default Topbar;
