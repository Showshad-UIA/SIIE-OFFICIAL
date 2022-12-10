import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import female1 from "../../../../Carosel/Asset/Academic staffs/female-1.jpg";
import male1 from "../../../../Carosel/Asset/Academic staffs/male-1.png";
const LeadershipTeam = () => {
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
								<div className="text-md breadcrumbs md:px-6 lg:mx-[55px] ">
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
											<p className="text-black"> Leadership team</p>
										</li>
									</ul>
								</div>

								{/* News details start here */}

								<div className="lg:mx-20 mx-3">
									<h1 className="mb-3 border-t-4 border-sky-700  mt-2"></h1>
									<h1 className="text-xl font-bold text-sky-700">
										Leadership Team
									</h1>
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
										<div className="lg:-mx-64">
											<a href="">
												<h1 className=" font-bold hover:underline hover:text-blue-500 text-sky-700 cursor-pointer">
													Ganesh G.Thanasegaran, Mr.
												</h1>
											</a>
											<p>Graduate Coordinator</p>
											<p>
												<span className="font-bold">Expertise:</span> Finance
												expert
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
										</div>
									</div>
								</div>

								{/* Second news  start here */}

								<div className=" mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
										<img src={male1} className="max-w-sm w-52 px-2 h-44" />
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Sridar Ramachandran, PhD
											</h1>
											<p> Head Of Accreditation Unit</p>
											<p>
												<span className="font-bold">Expertise:</span>{" "}
												Responsible Tourism and Marketing
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
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Saifuzzaman Ibrahim
											</h1>
											<p>Professor/Head Of Programme</p>
											<p>
												<span className="font-bold">Expertise:</span> Financial
												Economics
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
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Anuar Shah Bali Mahomed, PhD
											</h1>
											<p>Graduate Coordinator</p>
											<p>
												<span className="font-bold">Expertise:</span> Technology
												Adoption, Cultural Studies
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
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Ahmad Fahmi Sheikh Hassan
											</h1>
											<p>Graduate Coordinator</p>
											<p>
												<span className="font-bold">Expertise:</span> Corporate
												Governance, Financial Accounting
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4911
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												Marzuki@sydneyibs.edu.au
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
										<div className="lg:-mx-64">
											<h1 className="font-bold text-sky-700">
												Nor Yasmin Mhd Bani, PhD
											</h1>
											<p> Graduate Coordinator</p>

											<p>
												<span className="font-bold">Expertise:</span>{" "}
												Development Economics Applied Econometrics
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4906
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												Fadzil@sydneyibs.edu.au
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
										<div className="lg:-mx-64">
											<h1 className="font-bold text-sky-700">
												Khadijah Bt. Mohd. Isa
											</h1>
											<p>Associate Professor / Graduate Coordinator</p>
											<p>
												<span className="font-bold">Expertise:</span>{" "}
												International Business Management
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4937
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												Shamsudin@sydneyibs.edu.au
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
										<div className="lg:-mx-64">
											<h1 className="font-bold text-sky-700">
												Ridzwana Mohd Said
											</h1>
											<p> Head Of Programme</p>
											<p>
												<span className="font-bold">Expertise:</span> Corporate
												Social and Environmental Reporting
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4937
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
										<div className="lg:-mx-64">
											<h1 className="font-bold text-sky-700">
												Haslinda Hashim
											</h1>

											<p>
												<span className="font-bold">Expertise:</span> Marketing,
												Consumer Behaviour
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4937
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												Shamsudin@sydneyibs.edu.au
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
										<div className=" lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Ashurov Sharofiddin
											</h1>
											<p>Academic coordinator</p>
											<p>
												<span className="font-bold">Expertise:</span>
												Marketing
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4910
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												sahbani@sydneyibs.edu.au
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
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												anisuzzaman Ibrahim
											</h1>
											<p>Senior Lecturer</p>
											<p>
												<span className="font-bold">Expertise:</span> Business
												and Economics
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4910
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												sahbani@sydneyibs.edu.au
											</p>
										</div>
									</div>
								</div>
								<div className="mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
										<img src={male1} className="max-w-sm w-52 px-2 h-44" />
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												sany Amin Noordin
											</h1>
											<p>Senior Lecturer</p>
											<p>
												<span className="font-bold">Expertise:</span> Managerial
												Finance, Corporate Finance
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4910
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												sani@sydneyibs.edu.au
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
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Sahbani Saimin
											</h1>
											<p>Academic advisor</p>
											<p>
												<span className="font-bold">Expertise:</span> Staff
												management
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4910
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												sahbani@sydneyibs.edu.au
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
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Salina Bt. Kassim
											</h1>
											<p>Coordinator</p>
											<p>
												<span className="font-bold">Expertise:</span> Financial
												and Monetary Economics
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4910
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												sahbani@sydneyibs.edu.au
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
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Hznan Bin kamal
											</h1>
											<p>Senior staff</p>
											<p>
												<span className="font-bold">Expertise:</span> Business
												And Management ~ Islamic Insurance
											</p>
											<p>
												<span className="font-bold">Phone:</span>+603-9769 4910
											</p>
											<p>
												<span className="font-bold">Email:</span>{" "}
												bani@sydneyibs.edu.au
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

export default LeadershipTeam;
