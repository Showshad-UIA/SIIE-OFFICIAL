import React from "react";
import MastersMaincontent from "./MastersMaincontent";
import MastersSidebar from "./MastersSidebar";

const Masters = () => {
	return (
		<div className=" lg:mx-12 sm:w-full">
			<div className="grid text-center lg:mt-[100px] sm:mt-10   lg:grid-cols-2 sm:grid-cols-1">
				<div className=" lg:ml-[200px] text-justify m-2 lg:w-full border-t-2 border-black">
					<div className="">
						<p className="mb-5 mt-3  text-2xl  font-bold cursor-pointer hover:text-red-500  text-blue-500">
							Masters program
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
						<p>
							eum suscipit numquam dolor accusantium! Lorem ipsum dolor sit
							amet, consectetur adipisicing elit. Quae, similique, nobis
							explicabo voluptate ab impedit earum dignissimos placeat error
							dolorem repudiandae corrupti quidem nisi expedita eum suscipit
							numquam dolor accusantium! Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Quae, similique, nobis explicabo voluptate ab
							impedit earum dignissimos placeat error dolorem repudiandae
							corrupti quidem nisi expedita eum suscipit numquam dolor
							accusantium!
						</p>
						<p>
							eum suscipit numquam dolor accusantium! Lorem ipsum dolor sit
							amet, consectetur adipisicing elit. Quae, similique, nobis
							explicabo voluptate ab impedit earum dignissimos placeat error
							dolorem repudiandae corrupti quidem nisi expedita eum suscipit
							numquam dolor accusantium! Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Quae, similique, nobis explicabo voluptate ab
							impedit earum dignissimos placeat error dolorem repudiandae
							corrupti quidem nisi expedita eum suscipit numquam dolor
							accusantium!
						</p>
					</p>
				</div>
				<div className="lg:mx-[200px] lg:ml-[245px] mt-16">
					<MastersSidebar></MastersSidebar>
				</div>
			</div>

			<MastersMaincontent></MastersMaincontent>
		</div>
	);
};

export default Masters;
