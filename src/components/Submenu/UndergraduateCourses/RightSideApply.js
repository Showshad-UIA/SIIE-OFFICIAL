import { faArrowRight, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const RightSideApply = () => {
	return (
		<div>
			<div className=" bg-white sm:w-full">
				<div class="  bg-white m-3 col-span-1">
					<div className="mt-3 border-4 mr-11 p-5 gap-5  border-gray-600 mb-8 flex justify-content">
						<div className="mt-5 fill-blue-500">
							<a href="#">
								<FontAwesomeIcon icon={faDesktop} className="w-16 h-8 " />
							</a>
						</div>
						<div>
							<div>
								<a href="#">
									<h1 className=" text-xl font-bold m-3 mr-3    text-blue-500">
										Apply Now
									</h1>
								</a>
							</div>
							<div className="flex gap-3">
								<FontAwesomeIcon
									icon={faArrowRight}
									className="ml-4"
								></FontAwesomeIcon>
								<div>
									<h1>Find out how to apply</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightSideApply;
