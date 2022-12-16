import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import female1 from "../../../../Carosel/Asset/Academic staffs/female-1.jpg";
import male1 from "../../../../Carosel/Asset/Academic staffs/male-1.png";

const Adminstrative = () => {
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
								{/* Breadcrumb added here */}

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
											<a href="/profile"> Profile</a>
										</li>
										<li>
											<a href="/people"> Our people</a>
										</li>
										<li>
											<p className="text-black"> Administrative team</p>
										</li>
									</ul>
									{/* Breadcrumb ended */}
								</div>

								{/* Administrative team list start here */}

								<div className="lg:mx-20 mx-3">
									<h1 className="mb-3 border-t-4 border-sky-700  mt-2"></h1>
									<h1 className="text-xl font-bold text-sky-700">
										Our Administrative Team
									</h1>
								</div>
							</div>

							<div className="lg:mx-24 -mt-5">
								{/* Profile-1 */}

								<div className=" mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
										<div>
											<img src={female1} className="max-w-sm w-52 px-2 h-44" />
										</div>
										<div className="lg:-mx-64">
											<a href="">
												<h1 className=" font-bold hover:underline hover:text-blue-500 text-sky-700 cursor-pointer">
													Nurulhana Mat Junan, Mdm.
												</h1>
											</a>
											<p> Office Secretary</p>

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

								{/* Profile-2 */}

								<div className=" mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
										<img src={female1} className="max-w-sm w-52 px-2 h-44" />
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Nor Azizah Tamsi, Ms.
											</h1>
											<p> Deputy register</p>

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

								{/* Profile-3 */}

								<div className="mb-3 p-2 border-b-2 border-gray  ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
										<img
											src={male1}
											className="max-w-sm w-48 lg:w-52 px-2 h-44"
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Mohd Firdaus Abd Sakor, Mr.
											</h1>
											<p>Assistant engineer</p>

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

								{/* Profile-4 */}

								<div className=" mb-3 p-2 border-b-2 border-gray ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 ">
										<img
											src={male1}
											className="max-w-sm w-48 lg:w-52 px-2 h-44 "
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Muhammad Almuidzzuddin Zulkaply, Mr.
											</h1>
											<p>General Assistant</p>

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

								{/* Profile-5 */}

								<div className="mb-3 p-2  border-b-2 border-gray  ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
										<img
											src={female1}
											className="max-w-sm w-48 lg:w-52 px-2 h-44 "
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Nur Illiyin Roslan, Mdm.
											</h1>
											<p>Administrative assistant</p>

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

								{/* Profile-6 */}

								<div className=" mb-3 p-2 border-b-2 border-gray  ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
										<img
											src={female1}
											className="max-w-sm w-48 lg:w-52 px-2 h-44 "
										/>
										<div className="lg:-mx-64">
											<h1 className="font-bold text-sky-700">
												Syairinnie Abdul Ghapar, Mdm.
											</h1>
											<p>Senior administrative assistant</p>

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

								{/* Profile-7 */}

								<div className=" mb-3 p-2 border-b-2 border-gray    ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2">
										<img
											src={female1}
											className="max-w-sm w-48 lg:w-52 px-2 h-44 "
										/>
										<div className="lg:-mx-64">
											<h1 className="font-bold text-sky-700">
												Munirra Khairudin, Mdm.
											</h1>
											<p>Assistant engineer</p>

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

								{/* Profile-8 */}

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
											<p>Assistant engineer</p>

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

								{/* Profile-9 */}

								<div className="mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
										<img
											src={male1}
											className="max-w-sm lg:w-52 w-44 px-2 h-44"
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Anuar Abdul, Mr.
											</h1>
											<p>Senior admin</p>

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

								{/* Profile-10 */}

								<div className="mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
										<img src={female1} className="max-w-sm w-52 px-2 h-44" />
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Siti Noor Fariza Mohd Yusoff, Mdm.
											</h1>
											<p>Senior administrative officer</p>

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

								{/* Profile-11 */}

								<div className="mb-3 p-2 border-b-2 border-gray">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
										<img
											src={female1}
											className="max-w-sm lg:w-52 w-44 px-2 h-44"
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Siti Athirah Anuar, Ms.
											</h1>
											<p>Executive officer</p>

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
								{/* Profile-12 */}

								<div className="mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
										<img
											src={female1}
											className="max-w-sm w-48 lg:w-52 px-2 h-44 "
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Norfarah Hanim binti Othman, Mdm.
											</h1>
											<p>Executive officer</p>

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

								{/* Profile-13 */}

								<div className="mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
										<img
											src={male1}
											className="max-w-sm lg:w-52 w-44 px-2 h-44"
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">Aznan Hasan</h1>
											<p>Admin</p>

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
								{/* Profile-14 */}

								<div className="mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
										<img
											src={female1}
											className="max-w-sm lg:w-52 w-44 px-2 h-44"
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Nor Hanisah Shafie, Ms.
											</h1>
											<p>Administrative assistant</p>

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
								{/* Profile-15 */}

								<div className="mb-3 p-2 border-b-2 border-gray   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
										<img
											src={male1}
											className="max-w-sm lg:w-52 w-44 px-2 h-52"
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Azrul Azman, Mr.
											</h1>
											<p>Operation assistant</p>

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

								{/* Profile-16 */}

								<div className="mb-3 p-2   ">
									<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 my-3">
										<img
											src={male1}
											className="max-w-sm lg:w-52 w-44 px-2 h-52 "
										/>
										<div className="lg:-mx-64">
											<h1 className=" font-bold text-sky-700">
												Md Lukma Nul Hakim Saad, Mr.
											</h1>
											<p>Administrative assistant</p>

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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Adminstrative;
