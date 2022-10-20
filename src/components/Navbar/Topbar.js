import React from "react";
import MediasIcon from "../MediasIcon";
import { FaBars, FaBook, FaBookOpen } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topbar = () => {
	return (
		<div className="">
			<div className="">
				<div className="flex  text-start lg:visible  bg-gray-200  top-0 sticky">
					<nav class="bg-gray-200  dark:bg-blue-500  ">
						<div class="py-2ml-[80px] px-2 mx-auto  max-w-screen-xl md:px-6 flex">
							<div>
								<div class="flex items-center ">
									<ul class="flex flex-row  space-x-2 text-sm font-medium  text-white">
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
												Contact Us
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
		</div>
	);
};

export default Topbar;
