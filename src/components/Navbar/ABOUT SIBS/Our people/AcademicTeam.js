import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import female1 from "../../../../Carosel/Asset/Academic staffs/female-1.jpg";
import male1 from "../../../../Carosel/Asset/Academic staffs/male-1.png";

const AcademicTeam = () => {
	return (
		<div className="container mx-auto mb-10 ">
			<div class=" p-2  w-full  ">
				{/* News content start here */}
				<div
					class="flex flex-col  lg:flex-row  
            shadow-md lg:mx-[100px]   "
				>
					<div className="flex flex-col px-2">
						<div className="">
							<div className=" lg:w-full    ">
								<div className=" bg-gray-100 lg:px-8 px-3 py-3 pb-10  ">
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
												<p className="text-black"> Academic team</p>
											</li>
										</ul>
									</div>

									{/* News details start here */}
									<div className="lg:mx-20 mx-3  ">
										<h1 className="mb-3 border-t-4 border-sky-700  mt-2"></h1>
										<h1 className="text-xl font-bold text-sky-700">
											Our Academic Team
										</h1>
									</div>
								</div>
							</div>
						</div>

						{/* All new's start from here */}

						<div className="lg:mx-24 -mt-5">
							{/* First news  start here */}

							<div className=" mb-3 p-2 border-b-2 border-gray   ">
								<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
									<div>
										<img src={male1} className="max-w-sm w-52 px-2 h-44" />
									</div>
									<div className="lg:-mx-12">
										<a href="">
											<h1 className=" font-bold hover:underline hover:text-blue-500 text-sky-700 cursor-pointer">
												Shaufique Fahmi Ahmad Sidique, Ph.D
											</h1>
										</a>
										<p> Professor</p>
										<p>
											<span className="font-bold">Expertise:</span> Economics
										</p>
										<p>
											<span className="font-bold">Phone:</span>+603-9769 4930 /
											4907
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

							{/* Second news  start here */}

							<div className=" mb-3 p-2 border-b-2 border-gray   ">
								<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
									<img src={male1} className="max-w-sm w-52 px-2 h-44" />
									<div className="lg:-mx-12">
										<h1 className=" font-bold text-sky-700">
											Abdul Rahim Abdul Samad, Ph.D{" "}
										</h1>
										<p>Assc. Professor</p>
										<p>
											<span className="font-bold">Expertise:</span> Natural
											Resource and Environmental Economics
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

							{/* Third news  start here */}

							<div className="mb-3 p-2 border-b-2 border-gray  ">
								<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
									<img
										src={male1}
										className="max-w-sm w-48 lg:w-52 px-2 h-44"
									/>
									<div className="lg:-mx-12">
										<h1 className=" font-bold text-sky-700">
											Suhaimi Ab Rahman, PhD
										</h1>
										<p>Professor</p>
										<p>
											<span className="font-bold">Expertise:</span> Islamic
											Banking and Financial Law, Shariah and Halal Law
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

							{/* Fourth news  start here */}

							<div className=" mb-3 p-2 border-b-2 border-gray ">
								<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 ">
									<img
										src={male1}
										className="max-w-sm w-48 lg:w-52 px-2 h-44 "
									/>
									<div className="lg:-mx-12">
										<h1 className=" font-bold text-sky-700">
											Saifuzzaman Ibrahim, Ph.D
										</h1>
										<p>Associate professor</p>
										<p>
											<span className="font-bold">Expertise:</span> Financial
											Accounting
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

							{/* Fifth news  start here */}

							<div className="mb-3 p-2  border-b-2 border-gray  ">
								<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
									<img
										src={male1}
										className="max-w-sm w-48 lg:w-52 px-2 h-44 "
									/>
									<div className="lg:-mx-12">
										<h1 className=" font-bold text-sky-700">Habib Mahomed</h1>
										<p> professor</p>
										<p>
											<span className="font-bold">Expertise:</span> Financial
											Business
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
							<div className=" mb-3 p-2 border-b-2 border-gray  ">
								<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
									<img
										src={female1}
										className="max-w-sm w-48 lg:w-52 px-2 h-44 "
									/>
									<div className="lg:-mx-12">
										<h1 className="font-bold text-sky-700">
											Norashidah Mohamed Nor, Ph.D
										</h1>

										<p>
											<span className="font-bold">Expertise:</span> Risk
											Management Finance and Islamic Finance
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
							<div className=" mb-3 p-2 border-b-2 border-gray    ">
								<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
									<img
										src={female1}
										className="max-w-sm w-48 lg:w-52 px-2 h-44 "
									/>
									<div className="lg:-mx-12">
										<h1 className="font-bold text-sky-700">Lee Chin, Ph.D</h1>
										<p>Assc. Professor</p>
										<p>
											<span className="font-bold">Expertise:</span>
											Business And financial Management.
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
							<div className="mb-3 p-2 border-b-2 border-gray   ">
								<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3 ">
									<img
										src={male1}
										className="max-w-sm lg:w-52 w-44 px-2 h-44"
									/>
									<div className=" lg:-mx-12">
										<h1 className=" font-bold text-sky-700">
											Mohd Yusof Saari, Ph.D
										</h1>
										<p>Assc. Professor</p>
										<p>
											<span className="font-bold">Expertise:</span>{" "}
											International trade finance
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
							<div className="mb-3 p-2 border-b-2 border-gray   ">
								<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
									<img
										src={male1}
										className="max-w-sm lg:w-52 w-44 px-2 h-44"
									/>
									<div className="lg:-mx-12">
										<h1 className=" font-bold text-sky-700">
											FAUZI BIN ZAINIR
										</h1>
										<p>Senior Lecturer</p>
										<p>
											<span className="font-bold">Expertise:</span> Business and
											Economics
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
							<div className="mb-3 p-2 border-b-2 border-gray   ">
								<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
									<img src={male1} className="max-w-sm w-52 px-2 h-44" />
									<div className="lg:-mx-12">
										<h1 className=" font-bold text-sky-700">Sahbani Saimin</h1>
										<p>Senior Lecturer</p>
										<p>
											<span className="font-bold">Expertise:</span> Financial
											Management, Managerial Finance
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
							<div className="mb-3 p-2 border-b-2 border-gray">
								<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
									<img
										src={male1}
										className="max-w-sm lg:w-52 w-44 px-2 h-44"
									/>
									<div className="lg:-mx-12">
										<h1 className=" font-bold text-sky-700">
											Syamsul Herman Mohammad Afandi, PhD
										</h1>
										<p>Assc. Professor</p>
										<p>
											<span className="font-bold">Expertise:</span> Economics
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
							<div className="mb-3 p-2 border-b-2 border-gray   ">
								<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
									<img
										src={female1}
										className="max-w-sm w-48 lg:w-52 px-2 h-44 "
									/>
									<div className="lg:-mx-12">
										<h1 className=" font-bold text-sky-700">
											Shivee Ranjanee a/p Kaliappan, Ph.D
										</h1>
										<p>Assc. Professor</p>
										<p>
											<span className="font-bold">Expertise:</span>{" "}
											International Trade
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
							<div className="mb-3 p-2 border-b-2 border-gray   ">
								<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
									<img
										src={male1}
										className="max-w-sm lg:w-52 w-44 px-2 h-44"
									/>
									<div className="lg:-mx-12">
										<h1 className=" font-bold text-sky-700">
											Wan Azman Saini Wan Ngah, Ph.D
										</h1>
										<p> Assc. Professor</p>
										<p>
											<span className="font-bold">Expertise:</span> Business And
											Management
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
							<div className="mb-3 p-2 border-b-2 border-gray   ">
								<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
									<img
										src={male1}
										className="max-w-sm lg:w-52 w-44 px-2 h-44"
									/>
									<div className="lg:-mx-12">
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
							<div className="mb-3 p-2 border-b-2 border-gray   ">
								<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
									<img
										src={male1}
										className="max-w-sm lg:w-52 w-44 px-2 h-52"
									/>
									<div className="lg:-mx-12">
										<h1 className=" font-bold text-sky-700">
											Zulkarnain Muhammad Sori
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AcademicTeam;
