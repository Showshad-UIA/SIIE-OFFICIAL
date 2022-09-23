import { faArrowRight, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PostgraduationTutions from "./PostgraduationTutions";
import RightSideApply from "./RightSideApply";
import RightSidebarContact from "./RightSidebarContact";

import RightSidebarRegister from "./RightSidebarRegister";

const RightSideBar = () => {
	return (
		<div className="flex-row  mt-10 ">
			<div>
				<RightSideApply></RightSideApply>
			</div>

			<div>
				<RightSidebarRegister></RightSidebarRegister>
			</div>
			<div>
				<PostgraduationTutions></PostgraduationTutions>
			</div>
			<div>
				<RightSidebarContact></RightSidebarContact>
			</div>
		</div>
	);
};

export default RightSideBar;
