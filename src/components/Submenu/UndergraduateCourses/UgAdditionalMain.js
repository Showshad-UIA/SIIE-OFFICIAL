import React from "react";
import UgBankingFinanceCourseplan from "./UgBankingFinanceCourseplan";

const UgAdditionalMain = () => {
	return (
		<>
			<div className=" mt-10">
				<div className="flex gap-5 mb-5 ">
					<div>
						<button class="bg-red-500 w-40 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Course outcome
						</button>
					</div>
					<div className="">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
							sed totam, voluptate eveniet obcaecati nisis?
						</p>
					</div>
				</div>
				<div className="flex gap-5 mb-5">
					<div>
						<button class="bg-red-500 w-40 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Job opportunity
						</button>
					</div>
					<div className="mt-5">
						<p className=" text-medium ">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sit,
							blanditiis a officiis facere aliquam
						</p>
					</div>
				</div>
				<div className="flex gap-5 flex-col sm:flex-row">
					<div>
						<button class="bg-red-500 h-16 w-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Course structure
						</button>
					</div>
					<div className=" w-full p-2">
						{" "}
						<UgBankingFinanceCourseplan></UgBankingFinanceCourseplan>
					</div>
				</div>
			</div>
		</>
	);
};

export default UgAdditionalMain;
