import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import female1 from "../../../../Carosel/Asset/Academic staffs/female-1.jpg";
import male1 from "../../../../Carosel/Asset/Academic staffs/male-1.png";

const Scholar = () => {
	return (
		<div className="container mx-auto mb-10 ">
			<div class=" p-2  w-full  ">
				<div
					className="  
                shadow-lg lg:mx-[110px]   "
				>
					<div className="flex flex-col px-2">
						<div className=" lg:w-full    ">
							<div className=" bg-gray-100 lg:px-8 px-3 py-3 pb-10  ">
								{/* breadcrumb added here */}

								<div className="text-md breadcrumbs md:px-6   lg:mx-[55px] ">
									<ul className="text-sky-700 ">
										<li>
											<a href="/">
												<FontAwesomeIcon
													icon={faHouse}
													className="h-6 w-4 px-1  "
												></FontAwesomeIcon>
											</a>
										</li>
										<li>
											<p>About Us</p>
										</li>
										<li>
											<a href="/profile"> profile</a>
										</li>
										<li>
											<a href="/people"> Our people</a>
										</li>
										<li>
											<p className="text-black"> Visiting scholars</p>
										</li>
									</ul>
									{/* breadcrumb ended here */}
								</div>

								{/* Scholar list start here */}

								<div className="lg:mx-20 mx-3">
									<h1 className="mb-3 border-t-4 border-sky-700  mt-2"></h1>
									<h1 className="text-xl font-bold text-sky-700">
										Our Visiting Scholars
									</h1>
								</div>
							</div>

							<div className="lg:mx-24 -mt-5">
								{/* profile-1 */}

								<div className=" mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
										<div>
											<img src={male1} className="max-w-sm w-52 px-2 h-44" />
										</div>
										<div className="lg:-mx-64">
											<a href="">
												<h1 className=" font-bold hover:underline hover:text-blue-500 text-sky-700 cursor-pointer">
													Dr. Mustafa Z. Younis
												</h1>
											</a>
											<p> Professor</p>
											<p>
												<span className="font-bold">Expertise:</span> Financial
												advisory & legal system
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4930
												/ 4907
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												<span className="text-sky-700 font-bold">
													doud@sydneyibs.edu.au
												</span>
											</p>
											<p>
												<span className="font-bold">Website:</span>[Google
												Scholar]
											</p>
										</div>
									</div>
								</div>

								{/* profile-2 */}

								<div className=" mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
										<img src={male1} className="max-w-sm w-52 px-2 h-44" />
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700"> Dr. Tom Baum</h1>
											<p> Professor</p>
											<p>
												<span className="font-bold">Expertise:</span>Economic
												Growth and Development, Energy Economics, Tourism
												Economics
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4909
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												<span className="text-sky-700 font-bold">
													Hanis@sydneyibs.edu.au
												</span>
											</p>
											<p>
												<span className="font-bold">Website:</span>[Google
												Scholar]
											</p>
										</div>
									</div>
								</div>

								{/* profile-3 */}

								<div className="mb-3 p-2 border-b-2 border-gray  ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
										<img
											src={male1}
											className="max-w-sm w-48 lg:w-52 px-2 h-44"
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Dr. Abdul Mongid
											</h1>
											<p>Professor</p>
											<p>
												<span className="font-bold">Expertise:</span> Financial
												Law, shariah and Halal Law
											</p>
											<p>
												<span className="font-bold">Phone:</span>+608-3769 4909
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												<span className="text-sky-700 font-bold">
													Buda@sydneyibs.edu.au
												</span>
											</p>
											<p>
												<span className="font-bold">Website:</span>[Google
												Scholar]
											</p>
										</div>
									</div>
								</div>

								{/* profile-4 */}

								<div className=" mb-3 p-2 border-b-2 border-gray ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 ">
										<img
											src={male1}
											className="max-w-sm w-48 lg:w-52 px-2 h-44 "
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Dr. Irwan Trinugroho
											</h1>
											<p>Associate professor</p>
											<p>
												<span className="font-bold">Expertise:</span> Corporate
												Governance, Financial Accounting
											</p>
											<p>
												<span className="font-bold">Phone:</span>+605-3269 4909
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												<span className="text-sky-700 font-bold">
													Mahmud@sydneyibs.edu.au
												</span>
											</p>
											<p>
												<span className="font-bold">Website:</span>[Google
												Scholar]
											</p>
										</div>
									</div>
								</div>

								{/* profile-5 */}

								<div className="mb-3 p-2  border-b-2 border-gray  ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
										<img
											src={male1}
											className="max-w-sm w-48 lg:w-52 px-2 h-44 "
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Dr. Thorsten Beck
											</h1>
											<p>Professor</p>
											<p>
												<span className="font-bold">Expertise:</span>{" "}
												Agrotechnopreneurship
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4911
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												Marzuki@sydneyibs.edu.au
											</p>
											<p>
												<span className="font-bold">Website:</span>[Google
												Scholar]
											</p>
										</div>
									</div>
								</div>

								{/* profile-6 */}

								<div className=" mb-3 p-2 border-b-2 border-gray  ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
										<img
											src={female1}
											className="max-w-sm w-48 lg:w-52 px-2 h-44 "
										/>
										<div className="lg:-mx-64">
											<h1 className="font-bold text-sky-700">
												Dr. Meryem Duygun
											</h1>
											<p>Professor</p>
											<p>
												<span className="font-bold">Expertise:</span> Finance
												and Islamic Finance
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4906
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												Fadzil@sydneyibs.edu.au
											</p>
											<p>
												<span className="font-bold">Website:</span>[Google
												Scholar]
											</p>
										</div>
									</div>
								</div>

								{/* profile-7 */}

								<div className=" mb-3 p-2 border-b-2 border-gray    ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
										<img
											src={female1}
											className="max-w-sm w-48 lg:w-52 px-2 h-44 "
										/>
										<div className="lg:-mx-64">
											<h1 className="font-bold text-sky-700">
												Paresh Narayan Mohd. Isa
											</h1>
											<p>Professor</p>
											<p>
												<span className="font-bold">Expertise:</span> Taxation -
												Tax Compliance and Tax Audit .
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4937
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												Shamsudin@sydneyibs.edu.au
											</p>
											<p>
												<span className="font-bold">Website:</span>[Google
												Scholar]
											</p>
										</div>
									</div>
								</div>

								{/* profile-8 */}

								<div className="mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3 ">
										<img
											src={male1}
											className="max-w-sm lg:w-52 w-44 px-2 h-44"
										/>
										<div className=" lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Dr. Ming Lang Tseng
											</h1>
											<p>Professor</p>
											<p>
												<span className="font-bold">Expertise:</span> Finance &
												managemental science
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4910
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												sahbani@sydneyibs.edu.au
											</p>
											<p>
												<span className="font-bold">Website:</span>[Google
												Scholar]
											</p>
										</div>
									</div>
								</div>
								{/* profile-9 */}
								<div className="mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
										<img
											src={female1}
											className="max-w-sm w-48 lg:w-52 px-2 h-44 "
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Dr. Salina Bt. Kassim
											</h1>
											<p>Professor</p>
											<p>
												<span className="font-bold">Expertise:</span>{" "}
												Economics/Applied Economics ~ Financial and Monetary
												Economics - Islamic banking and finance
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4910
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												sahbani@sydneyibs.edu.au
											</p>
											<p>
												<span className="font-bold">Website:</span>[Google
												Scholar]
											</p>
										</div>
									</div>
								</div>

								{/* profile-10 */}

								<div className="mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
										<img
											src={male1}
											className="max-w-sm lg:w-52 w-44 px-2 h-44"
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Dr. Aznan Bin Hasan
											</h1>
											<p>Professor</p>
											<p>
												<span className="font-bold">Expertise:</span>
												Business And Management, Business And Management ~
												Islamic Insurance
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4910
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												sahbani@sydneyibs.edu.au
											</p>
											<p>
												<span className="font-bold">Website:</span>[Google
												Scholar]
											</p>
										</div>
									</div>
								</div>

								{/* profile-11 */}

								<div className="mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
										<img
											src={male1}
											className="max-w-sm lg:w-52 w-44 px-2 h-44"
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Ibrahim Nuhu Tahir
											</h1>
											<p>Associate Professor</p>
											<p>
												<span className="font-bold">Expertise:</span> Economics,
												Business And Management
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4910
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												sahbani@sydneyibs.edu.au
											</p>
											<p>
												<span className="font-bold">Website:</span>[Google
												Scholar]
											</p>
										</div>
									</div>
								</div>

								{/* profile-12 */}

								<div className="mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
										<img
											src={male1}
											className="max-w-sm lg:w-52 w-44 px-2 h-52"
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Dr. ain Muhammad Sabri
											</h1>
											<p>Professor</p>
											<p>
												<span className="font-bold">Expertise:</span> Financial
												advisory and financial education industry
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4910
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												sahbani@sydneyibs.edu.au
											</p>
											<p>
												<span className="font-bold">Website:</span>[Google
												Scholar]
											</p>
										</div>
									</div>
								</div>

								{/* profile-14 */}

								<div className="mb-3 p-2   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
										<img
											src={male1}
											className="max-w-sm lg:w-52 w-44 px-2 h-52 "
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Dr. Abdul Mansor Ibrahim musa
											</h1>
											<p>Professor</p>

											<p>
												<span className="font-bold">Expertise:</span> Money and
												banking, analysis of financial markets
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4910
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												bani@sydneyibs.edu.au
											</p>
											<p>
												<span className="font-bold">Website:</span>[Google
												Scholar]
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Scholar;
