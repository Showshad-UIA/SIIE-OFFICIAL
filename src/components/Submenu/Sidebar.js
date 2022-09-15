import React from "react";
import openday from "../../images/side bar image .jpg";
import photoAlbum from "../../images/Photo.jpg";

const Sidebar = () => {
	return (
		<div className=" bg-white sm:w-full">
			<div class="  bg-white m-3 col-span-1">
				<p className="p-10  bg-red-500 text-white text-justify">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
					eveniet saepe voluptatem error similique tenetur ad voluptates, a quas
					delectus? Esse labore enim expedita rem, veritatis dolore
					necessitatibus
				</p>
				<div className="mt-5  mb-5">
					<h1 className="p-2 text-xl font-bold m-3  bg-blue-700 text-white">
						ADMISSION NEWS
					</h1>
				</div>
				<div className="p-2 bg-gray-200 m-2 sm:m-3">
					<p className="mb-3">
						29/06/22 -
						<span className="hover:underline text-blue-500 cursor-pointer">
							Deadline for test registration moves to Friday, 30 September (from
							15 October).
						</span>
						Register for your admissions test anytime from 1 September - 30
						September.
					</p>
					<p className="mb-3">
						29/06/22 -
						<span className="hover:underline text-blue-500 cursor-pointer">
							BMAT test date moves to Tuesday, 18 October (from 2 November)
						</span>
					</p>
					<p className="mb-3">
						26/5/22 -{" "}
						<span className=" hover:underline text-blue-500 cursor-pointer">
							Undergraduate interviews to be held online in 2022
						</span>
					</p>
					<p className="mb-3">
						4/5/22 -{" "}
						<span className="hover:underline text-blue-500 cursor-pointer">
							Launch of Astrophoria Foundation Year
						</span>
					</p>
					<p className="mb-3">
						1/3/22 -
						<span className="hover:underline text-blue-500 cursor-pointer">
							2023 entry undergraduate prospectus available
						</span>{" "}
					</p>
					<p className="mb-3">
						21/2/22 -{" "}
						<span className="hover:underline text-blue-500 cursor-pointer">
							{" "}
							Open Days update
						</span>
					</p>
					<p className="mb-3">
						11/1/22 -{" "}
						<span className="hover:underline text-blue-500 cursor-pointer">
							{" "}
							Decisions sent out to all interviewed applicants
						</span>
					</p>
				</div>
				{/* left sidebar first Image set here   */}
				<div className="p-2 ">
					<img src={openday} alt="" />
					<p>
						Our final
						<span className="hover:underline text-blue-500 cursor-pointer">
							Open Day
						</span>
						for 2022 will take place on Friday, 16 September..
					</p>
				</div>
				{/* left side photo album start here  */}
				<div className="bg-gray-200 p-2 mt-5 ml-2 mr-3 mb-7 ">
					<img src={photoAlbum} alt="" className="mt-7 p-2" />
					<p className="mt-5 p-2">
						Follow us on Twitter
						<span className="hover:underline text-blue-500 cursor-pointer">
							@OxOutreach
						</span>
						or on Instagram
						<span className="hover:underline text-blue-500 cursor-pointer">
							@StudyAtOxford
						</span>
						for the latest news about events and Open Days. Got an Open Days
						question? Get in touch using #OxOpenDay!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
