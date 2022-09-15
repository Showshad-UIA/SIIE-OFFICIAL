import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchBar = () => {
	return (
		<div className="w-full mb-5 ml-5 mt-5">
			<div class="navbar bg-sky-800">
				<div class="flex-1 sm:flex-row">
					<p className="   text-white font-bold text-2xl">COURSES OFFER</p>
					<FontAwesomeIcon
						icon={faArrowRight}
						className=" text-gray-500 w-10 h-10"
					></FontAwesomeIcon>
				</div>
				<div class="flex-none mr-3 gap-1">
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
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
