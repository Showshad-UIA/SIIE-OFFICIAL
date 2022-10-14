import {
	faBookOpen,
	faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PhdRightSideBar = () => {
	return (
		<div className=" bg-white lg:mt-[-57px] lg:w-full ">
			<div class="  bg-white ">
				<div className=" bg-gray-200 sm:w-full   ">
					<div className="  ">
						<h1 className="text-xl mb-5 text-start font-bold p-3 border-b-2 border-t-4 border-black    text-blue-500">
						PHD ADMISSION
						</h1>
					</div>
					<div className="text-xl p-2">
						<div>
							<a
								href="#"
								className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
								</div>
								<div>
									<p>Post graduate program</p>
								</div>
							</a>
						</div>
						<div>
							<a
								href="#"
								className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
								</div>
								<div>
									<p>Post graduate fees structure</p>
								</div>
							</a>
						</div>
						<div>
							<a
								href="#"
								className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
								</div>
								<div>
									<p>Postgraduate scholarship</p>
								</div>
							</a>
						</div>
						<div className="mb-16">
							<a
								href="#"
								className="flex gap-5   cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
								</div>
								<div>
									<p>Apply now</p>
								</div>
							</a>
						</div>
					</div>
				</div>
				{/* <div className="mt-5  mb-5 justify-center">
					<h1 className="p-2 text-xl font-bold m-3  bg-sky-800 text-white">
						ADMISSION NEWS
					</h1>
				</div>
				<div className="p-2 bg-gray-200 m-2 sm:m-3">
					<p className="mb-3">
						29/06/22 -
						<span className="hover:underline text-blue-500 cursor-pointer">
							Deadline for test registration moves to Friday, 30 September (from
							15 October).
						</span>
						Register for your admissions test anytime from 1 September - 30
						September.
					</p>
					<p className="mb-3">
						29/06/22 -
						<span className="hover:underline text-blue-500 cursor-pointer">
							BMAT test date moves to Tuesday, 18 October (from 2 November)
						</span>
					</p>

					<p className="mb-3">
						11/1/22 -{" "}
						<span className="hover:underline text-blue-500 cursor-pointer">
							{" "}
							Decisions sent out to all interviewed applicants
						</span>
					</p>
				</div> */}
			</div>
		</div>
	);
};

export default PhdRightSideBar;
