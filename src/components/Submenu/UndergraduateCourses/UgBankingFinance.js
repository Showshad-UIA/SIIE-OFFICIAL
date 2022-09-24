import React from "react";
import UgAdditionalMain from "./UgAdditionalMain";
import UgBankingFinnaceMaincontent from "./UgBankingFinnaceMaincontent";
import UgEnquiry from "./UgEnquiry";
import UgFinanceRightSidebar from "./UgFinanceRightSidebar";
import UgFinanceSecondRightSidebar from "./UgFinanceSecondRightSidebar";

const UgBankingFinance = () => {
	return (
		<div className=" lg:mx-12 sm:w-full">
			<div className="grid text-center lg:mt-[100px] sm:mt-10   lg:grid-cols-2 sm:grid-cols-1">
				<div className=" lg:ml-[200px] text-justify m-2 lg:w-full border-t-2 border-black">
					<div className="">
						<p className="mb-5 mt-3  text-2xl  font-bold cursor-pointer hover:text-red-500  text-blue-500">
							About the course
						</p>
					</div>
					<p className="mt-5">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
						similique, nobis explicabo voluptate ab impedit earum dignissimos
						placeat error dolorem repudiandae corrupti quidem nisi expedita eum
						suscipit numquam dolor accusantium! Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Quae, similique, nobis explicabo
						voluptate ab impedit earum dignissimos placeat error dolorem
						repudiandae corrupti quidem nisi expedita{" "}
					</p>
					<div>
						<UgAdditionalMain></UgAdditionalMain>
					</div>
				</div>

				<div className="lg:mx-[200px] lg:ml-[245px] mt-16">
					<div>
						<UgFinanceRightSidebar></UgFinanceRightSidebar>
					</div>
					<div className="mt-16">
						<UgFinanceSecondRightSidebar></UgFinanceSecondRightSidebar>
					</div>
					<div className="mt-16 mb-8">
						<UgEnquiry></UgEnquiry>
					</div>
				</div>
			</div>

			{/* <UgBankingFinnaceMaincontent></UgBankingFinnaceMaincontent> */}
		</div>
	);
};

export default UgBankingFinance;
