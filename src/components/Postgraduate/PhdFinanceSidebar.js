import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PhdFinanceSidebar = () => {
	return (
		<div className=" bg-white lg:mt-[-119px] mb-10">
			<div class="  bg-white ">
				<div className=" bg-gray-200 sm:w-full  ">
					<div className="  ">
						<h1 className="text-xl  text-start font-bold  pr-5 pt-8 pb-3 border-b-2 border-t-2 border-black pl-5   text-blue-500">
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
									<a href="/phdeconomics">
										<p>PhD of Islamic economics</p>
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
									<a href="/phdsariah">
										<p>PhD of Islamic shariah </p>
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
									<a href="phdinsurance">
										<p>PhD of Islamic insurance</p>
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
										<p>PhD of Islamic business law</p>
									</a>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PhdFinanceSidebar;
