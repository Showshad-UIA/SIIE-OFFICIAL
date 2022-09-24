import React from "react";
import UgAdditionalMain from "./UgAdditionalMain";
import UgBankingFinanceCourseplan from "./UgBankingFinanceCourseplan";
import UgFinanceSecondRightSidebar from "./UgFinanceSecondRightSidebar";
import UgRightsidebar from "./UgRightsidebar";

const UgBankingFinance = () => {
	return (
		<div className=" lg:mx-[-20] lg:ml-5  ">
			<div className="grid text-center lg:mt-[100px] sm:mt-10 gap-16  lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
				<div className=" lg:ml-[220px] text-justify m-2 lg:w-full border-t-2 border-black">
					<div className="">
						<p className="mb-5 mt-3  text-2xl  font-bold cursor-pointer hover:text-red-500  text-blue-500">
							Bachelor of finance and banking
						</p>
					</div>
					<p className="mt-5">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
						similique, nobis explicabo voluptate ab impedit earum dignissimos
						placeat error dolorem repudiandae corrupti quidem nisi expedita eum
						suscipit numquam dolor accusantium! Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Quae, similique, nobis explicabo
						voluptate ab impedit earum dignissimos placeat error dolorem
						repudiandae corrupti quidem nisi expedita.
					</p>
					<div>
						<UgAdditionalMain></UgAdditionalMain>
					</div>
					{/* <div className="lg:mx-[200px] p-2">
						{" "}
						<UgBankingFinanceCourseplan></UgBankingFinanceCourseplan>
					</div> */}
				</div>

				<div className="lg:mx-[200px] lg:ml-[260px] mt-16 ">
					<div className="mt-16">
						<UgFinanceSecondRightSidebar></UgFinanceSecondRightSidebar>
					</div>
					<div className="mt-[150px]">
						<UgRightsidebar></UgRightsidebar>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UgBankingFinance;
