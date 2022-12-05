import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Accreditation from "../../../../../Carosel/Asset/Academic staffs/suhaimiabrahman.jpg";
import Dean from "../../../../../Carosel/Asset/Academic staffs/Dean.jpg";
import Deputy from "../../../../../Carosel/Asset/Academic staffs/Associate dean.jpg";
import register from "../../../../../Carosel/Asset/Academic staffs/register.png";
import schoolManager from "../../../../../Carosel/Asset/Academic staffs/School manager.png";
import female1 from "../../../../../Carosel/Asset/Academic staffs/female-1.jpg";
import female2 from "../../../../../Carosel/Asset/Academic staffs/female-3.jpg";
import female5 from "../../../../../Carosel/Asset/Academic staffs/female-5.jpg";
import graduate from "../../../../../Carosel/Asset/Academic staffs/Graduate.jpg";
import male7 from "../../../../../Carosel/Asset/Academic staffs/ahmadfahmi.jpg";
import male1 from "../../../../../Carosel/Asset/Academic staffs/male-1.png";
import male3 from "../../../../../Carosel/Asset/Academic staffs/male-3.png";
import male5 from "../../../../../Carosel/Asset/Academic staffs/male-5.png";
import male6 from "../../../../../Carosel/Asset/Academic staffs/male-6.png";
import female4 from "../../../../../Carosel/Asset/Academic staffs/female-4.jpg";
import male8 from "../../../../../Carosel/Asset/Academic staffs/male-8.png";
import male9 from "../../../../../Carosel/Asset/Academic staffs/male-9.png";

const Supervisors = () => {
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
								<div className=" bg-base-100 lg:px-8 px-3 py-3 pb-10  ">
									<div className="text-md breadcrumbs md:px-6   lg:mx-[55px] ">
										<ul className="text-sky-700 ">
											<li>
												<p>Graduate Research</p>
											</li>
											<li>
												<a href="/future"> Future students</a>
											</li>
											<li>
												<p className="text-black"> Finding supervisors</p>
											</li>
										</ul>
									</div>

									{/* News details start here */}
									<div className="lg:mx-20 mx-3  ">
										<h1 className="mb-3 border-t-4 border-sky-700  mt-2"></h1>
										<h1 className="text-xl font-bold text-sky-700">
											Academic Team
										</h1>
									</div>
								</div>
							</div>
						</div>

						{/* All new's start from here */}

						<div className="lg:mx-24 -mt-5">
							{/* First news  start here */}

							<div className=" mb-3 p-2 border-b-2 border-gray   ">
								<div className="flex gap-10 ">
									<img src={male1} className="max-w-sm w-52 px-2 h-44" />
									<div>
										<a href="/dean">
											<h1 className=" font-bold hover:underline hover:text-blue-500 text-sky-700 cursor-pointer">
												Mohd Daud Bakar
											</h1>
										</a>
										<p> Professor/ Dean</p>
										<p>
											<span className="font-bold">Expertise:</span> Shariah
											Leadership & Advisory
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
								<div className="flex gap-10 ">
									<img src={male1} className="max-w-sm w-52 px-2 h-44" />
									<div>
										<h1 className=" font-bold text-sky-700">Tang Chor Foon</h1>
										<p> Professor/ Deputy Dean</p>
										<p>
											<span className="font-bold">Expertise:</span> Applied
											Macroeconomics, Economic Growth and Development, Energy
											Economics, Tourism Economics
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
								<div className="flex gap-10">
									<img
										src={male1}
										className="max-w-sm w-48 lg:w-52 px-2 h-44"
									/>
									<div>
										<h1 className=" font-bold text-sky-700">
											Suhaimi Ab Rahman, PhD
										</h1>
										<p>Professor</p>
										<p>
											<span className="font-bold">Expertise:</span> Business
											Law, Islamic Banking and Financial Law, Shariah and Halal
											Law
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
								<div className="flex gap-10 ">
									<img
										src={male1}
										className="max-w-sm w-48 lg:w-52 px-2 h-44 "
									/>
									<div>
										<h1 className=" font-bold text-sky-700">
											Ahmad Fahmi Sheikh Hassan, PhD
										</h1>
										<p>Associate professor</p>
										<p>
											<span className="font-bold">Expertise:</span> Islamic
											Banking, Corporate Governance, Financial Accounting
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
								<div className="flex gap-10">
									<img src={male1} className="max-w-sm w-48 lg:w-52 px-2 h-44 " />
									<div>
										<h1 className=" font-bold text-sky-700">Ziyaad Mahomed</h1>
										<p>Associate professor</p>
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
							<div className=" mb-3 p-2 border-b-2 border-gray  ">
								<div className="flex gap-10">
									<img
										src={female1}
										className="max-w-sm w-48 lg:w-52 px-2 h-44 "
									/>
									<div>
										<h1 className="font-bold text-sky-700">
											Fauziah Mahat, Ph.D
										</h1>

										<p>
											<span className="font-bold">Expertise:</span> Risk
											Management & Insurance, Finance and Islamic Finance
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
								<div className="flex gap-10">
									<img
										src={female1}
										className="max-w-sm w-48 lg:w-52 px-2 h-44 "
									/>
									<div>
										<h1 className="font-bold text-sky-700">
											Khadijah Bt. Mohd. Isa
										</h1>
										<p>Professor</p>
										<p>
											<span className="font-bold">Expertise:</span> Economics,
											Business And Management , ~ Taxation - Tax Compliance and
											Tax Audit for Corporate Taxpayers.
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
								<div className="flex gap-10 my-3 ">
									<img
										src={male1}
										className="max-w-sm lg:w-52 w-44 px-2 h-44"
									/>
									<div className="">
										<h1 className=" font-bold text-sky-700">
											Ashurov Sharofiddin
										</h1>
										<p>Assistant Professor</p>
										<p>
											<span className="font-bold">Expertise:</span> Agricultural
											Marketing
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
								<div className="flex gap-10 my-3">
									<img
										src={male1}
										className="max-w-sm lg:w-52 w-44 px-2 h-44"
									/>
									<div className="">
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
								<div className="flex gap-10 my-3">
									<img src={male1} className="max-w-sm w-60  px-2 h-44" />
									<div className="">
										<h1 className=" font-bold text-sky-700">
											Tuan Hj Sahbani Saimin
										</h1>
										<p>Senior Lecturer</p>
										<p>
											<span className="font-bold">Expertise:</span> Financial
											Management, Managerial Finance, Corporate Finance,
											Advanced Managerial Finance, Principle of Macroeconomic
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
								<div className="flex gap-10 my-3">
									<img
										src={male1}
										className="max-w-sm lg:w-52 w-44 px-2 h-44"
									/>
									<div className="">
										<h1 className=" font-bold text-sky-700">
											Tuan Hj Sahbani Saimin
										</h1>
										<p>Professor</p>
										<p>
											<span className="font-bold">Expertise:</span> Agricultural
											Marketing
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
								<div className="flex gap-10 my-3">
									<img src={female1} className="max-w-sm w-48 lg:w-52 px-2 h-44 " />
									<div className="">
										<h1 className=" font-bold text-sky-700">
											Salina Bt. Kassim
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
							<div className="mb-3 p-2 border-b-2 border-gray   ">
								<div className="flex gap-10 my-3">
									<img
										src={male1}
										className="max-w-sm lg:w-52 w-44 px-2 h-44"
									/>
									<div className="">
										<h1 className=" font-bold text-sky-700">Aznan Bin Hasan</h1>
										<p>Professor</p>
										<p>
											<span className="font-bold">Expertise:</span> Economics,
											Business And Management, Business And Management ~ Islamic
											Insurance - Islamic Insurance
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
								<div className="flex gap-10 my-3">
									<img src={male1} className="max-w-sm w-52  h-44" />
									<div className="">
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
								<div className="flex gap-10 my-3">
									<img
										src={male1}
										className="max-w-sm lg:w-52 w-44 px-2 h-52"
									/>
									<div className="">
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
							<div className="mb-3 p-2   ">
								<div className="flex gap-10 my-3">
									<img
										src={male1}
										className="max-w-sm lg:w-52 w-44 px-2 h-52 "
									/>
									<div className="">
										<h1 className=" font-bold text-sky-700">
											Mansor H.Ibrahim
										</h1>
										<p>Professor</p>

										<p>
											<span className="font-bold">Expertise:</span> Monetary
											economics, money and banking, analysis of financial
											markets and applied econometrics
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

export default Supervisors;
