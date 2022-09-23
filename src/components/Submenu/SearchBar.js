import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchBar = () => {
	return (
		<div className=" mb-5 ml-5 mt-5 sm:w-4/5 lg:w-full">
			{/* search box */}
			{/* <div class="flex-none mr-3 gap-1">
					<div class="form-control">
						<input
							type="text"
							placeholder="Search"
							class="input input-bordered"
						/>
					</div>
					<div class="">
						<button className="bg-blue-500 p-3 text-white rounded-lg">
							SEARCH
						</button>
					</div>
				</div> */}

			<div className="">
				{/* <p className="  text-2xl  font-bold cursor-pointer hover:text-red-500  text-blue-500">
					COURSES OFFER
				</p> */}
				{/* <FontAwesomeIcon
					icon={faArrowRight}
					className=" text-gray-500  h-10"
				></FontAwesomeIcon> */}
			</div>
		</div>
	);
};

export default SearchBar;
