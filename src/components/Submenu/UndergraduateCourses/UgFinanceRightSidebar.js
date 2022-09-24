import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UgFinanceRightSidebar = () => {
	return (
		<div className=" bg-white lg:mt-[-57px] mb-5">
			<div class="  bg-white ">
				<div className=" bg-gray-200 sm:w-full  ">
					{/* <div className="  ">
						<h1 className="text-xl mb-5 text-start font-bold  pr-5 pt-10 pb-3 border-b-2 border-t-4 border-black p-2   text-blue-500">
							DIPLOMA ADMISSION
						</h1>
					</div> */}
					<div className="text-xl p-2">
						<div>
							<a
								href="#"
								className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faSquareCaretRight}></FontAwesomeIcon>
								</div>
								<div>
									<p>Apply now </p>
								</div>
							</a>
						</div>
						<div>
							<a
								href="#"
								className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faSquareCaretRight}></FontAwesomeIcon>
								</div>
								<div>
									<p>Register your interest in PG study</p>
								</div>
							</a>
						</div>
						<div>
							<a
								href="#"
								className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faSquareCaretRight}></FontAwesomeIcon>
								</div>
								<div>
									<p>Post graduate tuition fees</p>
								</div>
							</a>
						</div>
						<div className="mb-16">
							<a
								href="#"
								className="flex gap-5   cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faSquareCaretRight}></FontAwesomeIcon>
								</div>
								<div>
									<p>Contact Us</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UgFinanceRightSidebar;
