import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="lg:ml-[140px]">
			<ul class="flex border-b ">
				<li class="-mb-px mr-1">
					<h1 class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
						About the course
					</h1>
				</li>
				<li class="mr-1">
					<Link
						to="/plan"
						class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
						href="#"
					>
						Study plan
					</Link>
				</li>
				<li class="mr-1">
					<Link
						class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
						to="/requirements"
					>
						Entry Requirements
					</Link>
				</li>
				<li class="mr-1"></li>
			</ul>
		</div>
	);
};

export default Navbar;
