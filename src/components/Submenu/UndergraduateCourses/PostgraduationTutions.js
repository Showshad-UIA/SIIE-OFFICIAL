import { faArrowRight, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PostgraduationTutions = () => {
	return (
		<div>
			<div className=" bg-white sm:w-full">
				<div class="  bg-white m-3 col-span-1">
					<div className="mt-3 border-4 mr-11 p-5 gap-5 border-gray-600 mb-8 flex justify-content">
						<div className="mt-4">
							<a href="#">
								<FontAwesomeIcon icon={faSackDollar} className="w-16 h-9 m" />
							</a>
						</div>
						<div>
							<div>
								<a
									href="#"
									className=" text-xl font-bold  mr-3   text-blue-500"
								>
									Postgraduate Tuition Fees
								</a>
							</div>
							<div className="flex gap-3">
								<FontAwesomeIcon
									icon={faArrowRight}
									className="ml-4"
								></FontAwesomeIcon>
								<div>
									<h1>View our full tuition fees information</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostgraduationTutions;
