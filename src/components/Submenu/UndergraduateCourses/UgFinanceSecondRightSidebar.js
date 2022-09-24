import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UgFinanceSecondRightSidebar = () => {
	return (
		<div className=" bg-white lg:mt-[-57px] mt-10">
			<div class="  bg-white ">
				<div className=" bg-white border-4 border-blue-500  sm:w-full  ">
					<div className="  ">
						<h1 className="text-xl  text-start   pr-5 pb-3 bg-sky-700   p-2   text-white">
							See also
						</h1>
					</div>
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
									<p>Bachelor of shariah </p>
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
									<p>Bachelor of economics</p>
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
									<p>Bachelor of Islamic insurance</p>
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
									<p>Bachelor of Islamic business</p>
								</div>
							</a>
						</div>
						<div className="">
							<a
								href="#"
								className="flex gap-5   cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faSquareCaretRight}></FontAwesomeIcon>
								</div>
								<div>
									<p>Bachelor of Islamic shariah</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UgFinanceSecondRightSidebar;
