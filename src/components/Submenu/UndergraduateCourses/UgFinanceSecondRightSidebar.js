import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UgFinanceSecondRightSidebar = () => {
	return (
		<div className=" bg-white lg:mt-[-119px] mb-10">
			<div class="  bg-white ">
				<div className=" bg-gray-200 sm:w-full  ">
					<div className="  ">
						<h1 className="text-xl mb-5 text-start font-bold  pr-5 pt-8 pb-3 border-b-2 border-t-4 border-black pl-5   text-blue-500">
							SEE ALSO
						</h1>
					</div>
					<div className="text-medium p-5">
						<div>
							<a
								href="#"
								className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faSquareCaretRight}></FontAwesomeIcon>
								</div>
								<div>
									<a href="/economics">
										<p>Bachelor of economics</p>
									</a>
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
									<a href="/shariah">
										<p>Bachelor of Islamic shariah</p>
									</a>
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
									<a href="/insurance">
										<p>Bachelor of Islamic insurance</p>
									</a>
								</div>
							</a>
						</div>
						<div className="mb-3">
							<a
								href="#"
								className="flex gap-5   cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faSquareCaretRight}></FontAwesomeIcon>
								</div>
								<div>
									<a href="/businesslaw">
										<p>Bachelor of Islamic business law</p>
									</a>
								</div>
							</a>
						</div>
						<div className="mb-3">
							<a
								href="#"
								className="flex gap-5   cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faSquareCaretRight}></FontAwesomeIcon>
								</div>
								<div>
									<p>Bachelor of economics</p>
								</div>
							</a>
						</div>
						<div className="mb-3">
							<a
								href="#"
								className="flex gap-5   cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faSquareCaretRight}></FontAwesomeIcon>
								</div>
								<div>
									<p>Tuition fees</p>
								</div>
							</a>
						</div>
						<div className="mb-3">
							<a
								href="#"
								className="flex gap-5   cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faSquareCaretRight}></FontAwesomeIcon>
								</div>
								<div>
									<p>Further enquiry</p>
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

export default UgFinanceSecondRightSidebar;
