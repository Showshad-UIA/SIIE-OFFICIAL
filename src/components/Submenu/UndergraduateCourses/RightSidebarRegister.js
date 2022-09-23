import { faArrowRight, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const RightSidebarRegister = () => {
	return (
		<div>
			<div className=" bg-white sm:w-full">
				<div class="  bg-white m-3 col-span-1">
					<div className="mt-3 border-4 mr-11 p-5 gap-5 border-gray-600 mb-8 flex justify-content">
						<div className="mt-5">
							<a href="#">
								<FontAwesomeIcon icon={faBookOpen} className="w-16 h-8 " />
							</a>
						</div>
						<div>
							<div>
								<a
									href="#"
									className=" text-xl font-bold  mr-3    text-blue-500"
								>
									Register your interest in PG study
								</a>
							</div>
							<div className="flex gap-3">
								<FontAwesomeIcon
									icon={faArrowRight}
									className="ml-4"
								></FontAwesomeIcon>
								<div>
									<h1>Register now</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightSidebarRegister;
