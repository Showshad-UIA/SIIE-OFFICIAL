import React from "react";
import MediasIcon from "../MediasIcon";

const Topbar = () => {
	return (
		<div className="flex bg-gray-200 ">
			<div>
				<nav class="bg-gray-200  dark:bg-blue-500   lg:ml-[880px]">
					<div class="py-2  mx-auto max-w-screen-xl md:px-6 ">
						<div class="flex items-center ">
							<ul class="flex flex-row  space-x-8 text-sm font-medium  text-white">
								<li>
									<a
										href="#"
										class="text-gray-500 dark:text-white hover:underline"
										aria-current="page"
									>
										Library
									</a>
								</li>
								<li>
									<a
										href="#"
										class="text-gray-500 dark:text-white hover:underline"
									>
										Blackboard
									</a>
								</li>
								<li>
									<a
										href="#"
										class="text-gray-500 dark:text-white hover:underline"
									>
										Staff 
									</a>
								</li>
								<li>
									<a
										href="#"
										class="text-gray-500 dark:text-white hover:underline"
									>
									Student
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
				</nav>
			</div>
			{/* <div className="">
				<MediasIcon></MediasIcon>
			</div> */}
		</div>
	);
};

export default Topbar;
