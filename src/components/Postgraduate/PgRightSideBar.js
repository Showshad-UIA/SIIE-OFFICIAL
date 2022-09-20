import React from "react";
import openday from "../../images/side bar image .jpg";
import photoAlbum from "../../images/Photo.jpg";
const PgRightSideBar = () => {
	return (
		<div className=" bg-white sm:w-full">
			<div class="  bg-white m-3 col-span-1">
				<div className="mt-6  mb-5">
					<h1 className="p-2 text-xl font-bold m-3   bg-sky-800 text-white">
						Faculties
					</h1>
				</div>
				<div className="mt-5 ">
					<div className="w-4/5 m-4">
						<div
							tabindex="0"
							class="collapse collapse-plus border-t-2  bg-base-100 mb-5"
						>
							<div class="collapse-title text-xl cursor-pointer hover:text-red-700 font-medium">
								What is SIIE ?
							</div>
							<div class="collapse-content">
								<p className="container">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Laborum sapiente voluptatibus dolorem quos sequi
								</p>
							</div>
						</div>
						<div
							tabindex="0"
							class="collapse collapse-plus border-t-2 bg-base-100 "
						>
							<div class="collapse-title text-xl font-medium cursor-pointer hover:text-red-700 ">
								Faculty listing
							</div>
							<div class="collapse-content">
								<p className="container">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Laborum sapiente voluptatibus dolorem quos sequi
								</p>
							</div>
						</div>
						<div
							tabindex="0"
							class="collapse collapse-plus border-t-2 bg-base-100 "
						>
							<div class="collapse-title text-xl font-medium cursor-pointer hover:text-red-700 ">
								Choosing any program
							</div>
							<div class="collapse-content">
								<p className="container">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Laborum sapiente voluptatibus dolorem quos sequi
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-5  mb-5">
					<h1 className="p-2 text-xl font-bold m-3  bg-sky-800 text-white">
						FREQUENTLY ASKED QUESTIONS
					</h1>
				</div>
				<div className="p-2 bg-gray-200 m-2 sm:m-3">
					<p className="mb-3">
						Try our extensive database of FAQs or submit your own question...
					</p>
					<button className="bg-sky-700 rounded-sm p-2">FAQ Faculties</button>
					<p className="mb-3">
						If you still have a question,{" "}
						<span className="hover:underline text-blue-500 cursor-pointer">
							contact us using our online form
						</span>{" "}
						and we'll reply by email. If you would prefer to contact us by
						phone, please consult our telephone support hours.
					</p>
				</div>
				{/* left sidebar first Image set here   */}

				{/* left side photo album start here  */}
				{/* <div className="bg-gray-200 p-2 mt-5 ml-2 mr-3 mb-7 ">
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
				</div> */}
			</div>
		</div>
	);
};

export default PgRightSideBar;
