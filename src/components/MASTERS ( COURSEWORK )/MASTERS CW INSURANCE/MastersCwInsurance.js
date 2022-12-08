import React from "react";
import MasterCwInsuranceDetails from "./MasterCwInsuranceDetails";
import MastersCwInsuranceMain from "./MastersCwInsuranceMain";
import MastersCwInsuranceSidebar from "./MastersCwInsuranceSidebar";

const MastersCwInsurance = () => {
	return (
		<div>
			<div className="container mx-auto  lg:mb-16 lg:mt-16 ">
				<div className="lg:mx-[100px]">
					<div className="grid   lg:grid-cols-2 sm:grid-cols-1">
						<div className="shadow lg:w-full lg:mx-20  ">
							<div className=" bg-gray-100 lg:px-8 px-3  pb-10 ">
								<div className="  ">
									<h1 className=" mt-4 border-t-4 border-sky-700"></h1>
									<h1 className="text-sky-700 text-xl font-bold text-justify mt-4">
										Master of Islamic Insurance
									</h1>
									<p className="  text-justify mt-3">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Quae, similique, nobis explicabo voluptate ab impedit earum
										dignissimos placeat error dolorem repudiandae corrupti
										quidem nisi expedita eum suscipit numquam dolor accusantium!
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Quae, similique, nobis explicabo voluptate ab impedit earum
										dignissimos placeat error dolorem repudiandae corrupti
										quidem nisi expedita eum suscipit numquam dolor accusantium!
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Quae, similique, nobis explicabo voluptate ab impedit earum
										dignissimos placeat error dolorem repudiandae corrupti
										quidem nisi expedita eum suscipit numquam dolor accusantium!
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Quae, similique, nobis explicabo voluptate ab impedit earum
										dignissimos placeat error dolorem repudiandae corrupti
										quidem nisi expedita eum suscipit numquam dolor accusantium!
										eum suscipit numquam dolor accusantium! Lorem ipsum dolor
										sit amet, consectetur adipisicing elit. Quae, similique,
										nobis explicabo voluptate ab impedit earum dignissimos
										placeat error dolorem repudiandae corrupti quidem nisi
										expedita eum suscipit numquam dolor accusantium! Lorem ipsum
										dolor sit amet, consectetur adipisicing elit. Quae,
										similique, nobis explicabo voluptate ab impedit earum
										dignissimos placeat error dolorem repudiandae corrupti
										quidem nisi expedita eum suscipit numquam dolor accusantium!
									</p>
									<h1 className=" mt-3 border-t-4 border-sky-700"></h1>
								</div>
							</div>
						</div>
						<div className="lg:ml-[200px] mt-4">
							<MastersCwInsuranceSidebar></MastersCwInsuranceSidebar>
						</div>
					</div>
					<div>
						<MastersCwInsuranceMain></MastersCwInsuranceMain>
					</div>
				</div>
				<div className="container lg:mr-52">
					<MasterCwInsuranceDetails></MasterCwInsuranceDetails>
				</div>
			</div>
		</div>
	);
};

export default MastersCwInsurance;
