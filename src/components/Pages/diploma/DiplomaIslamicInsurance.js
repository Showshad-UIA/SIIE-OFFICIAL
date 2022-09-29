import React from "react";
import DiplomaInsuranceSidebar from "./DiplomaInsuranceSidebar";
import DiplomaIslamicInsuranceMain from "./DiplomaIslamicInsuranceMain";

const DiplomaIslamicInsurance = () => {
	return (
		<div className=" lg:mx-[50px]  ">
			<div className="grid text-center lg:mt-[100px] sm:mt-10 gap-10 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
				<div className=" lg:ml-[150px]  text-justify m-2 lg:w-full  border-t-2 border-black">
					<div className="">
						<p className="mb-5 mt-3  text-2xl  font-bold cursor-pointer hover:text-red-500  text-blue-500">
							Diploma of Islamic Insurance
						</p>
					</div>
					<p className="mt-5 sm:w-4/5">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
						similique, nobis explicabo voluptate ab impedit earum dignissimos
						placeat error dolorem repudiandae corrupti quidem nisi expedita eum
						suscipit numquam dolor accusantium! Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Quae, similique, nobis explicabo
						voluptate ab impedit earum dignissimos placeat error dolorem
						repudiandae corrupti quidem nisi expedita.
					</p>
					<div>
						<DiplomaIslamicInsuranceMain></DiplomaIslamicInsuranceMain>
					</div>
				</div>

				<div className="lg:mx-[150px] lg:ml-[230px] lg:mt-[-16px]  ">
					<div className="lg:mt-[140px]">
						<DiplomaInsuranceSidebar></DiplomaInsuranceSidebar>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DiplomaIslamicInsurance;
