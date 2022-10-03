import React from "react";
import PhdShariahMain from "./PhdShariahMain";
import PhdShariahSidebar from "./PhdShariahSidebar";
import image from "../../images/Banner 1.png";
import PhdShariahSinglepage from "./PhdShariahSinglepage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import PhdRightSideBar from "./PhdRightSideBar";
import PhdMaincontent from "./PhdMaincontent";
import ShariahMain from "./ShariahMain";
import PhdDetails from "./PhdDetails";

const PhdShariah = () => {
	return (
		<>
			<div className=" sm:w-full ">
				<div className="grid text-center lg:mx-[69px]  lg:mt-[100px] sm:mt-10   lg:grid-cols-2 sm:grid-cols-1">
					<div className=" lg:ml-[200px] text-justify m-2 lg:w-full border-t-2 border-black">
						<div className="">
							<p className="mb-5 mt-3  text-2xl  font-bold cursor-pointer hover:text-red-500  text-blue-500">
								PhD in Islamic Shariah
							</p>
						</div>
						<p className="mt-5">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
							similique, nobis explicabo voluptate ab impedit earum dignissimos
							placeat error dolorem repudiandae corrupti quidem nisi expedita
							eum suscipit numquam dolor accusantium! Lorem ipsum dolor sit
							amet, consectetur adipisicing elit. Quae, similique, nobis
							explicabo voluptate ab impedit earum dignissimos placeat error
							dolorem repudiandae corrupti quidem nisi expedita{" "}
							<p>
								eum suscipit numquam dolor accusantium! Lorem ipsum dolor sit
								amet, consectetur adipisicing elit. Quae, similique, nobis
								explicabo voluptate ab impedit earum dignissimos placeat error
								dolorem repudiandae corrupti quidem nisi expedita eum suscipit
								numquam dolor accusantium! Lorem ipsum dolor sit amet,
								consectetur adipisicing elit. Quae, similique, nobis explicabo
								voluptate ab impedit earum dignissimos placeat error dolorem
								repudiandae corrupti quidem nisi expedita eum suscipit numquam
								dolor accusantium! Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Quae, similique, nobis explicabo voluptate ab
								impedit earum dignissimos placeat error dolorem repudiandae
								corrupti quidem nisi expedita eum suscipit numquam dolor
								accusantium!
							</p>
						</p>
					</div>
					<div className="lg:mx-[200px] lg:ml-[250px] mt-2">
						<PhdShariahSidebar></PhdShariahSidebar>
					</div>
				</div>
				<div>
					<ShariahMain></ShariahMain>
				</div>
			</div>
			<div>
				<PhdDetails></PhdDetails>
			</div>
		</>
	);
};

export default PhdShariah;
