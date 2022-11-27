import React from "react";
import business from "../../../Carosel/Asset/business.jpg";
import events1 from "../../../Carosel/Asset/news1.jpg";
import events2 from "../../../Carosel/Asset/news 3.jpg";
import Management from "../../../Carosel/Asset/management.jpg";
import IBusiness from "../../../Carosel/Asset/international-business.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const News = () => {
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
									<h1 className="text-sky-700 text-xl font-bold lg:px-20 px-3 ">
										News
									</h1>

									{/* News details start here */}
									<div className="  ">
										<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>

										<p className=" lg:px-20 px-3 text-justify mt-3 ">
											Sydney Islamic Business School (Sydney IBS) offers PhD
											programs across all disciplines within Islamic Business.
											The PhD program consists of two components– coursework and
											research.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* All new's start from here */}

						<div className="lg:mx-24">
							{/* First news  start here */}
							<div className=" mb-3 p-2 border-b-2 border-black   ">
								<div className="flex gap-5 ">
									<img src={Management} className="max-w-sm w-1/5 px-2 h-24" />
									<div>
										<h1 className="text-xl font-bold">
											Lee Sarandopoulos headshot the caravans
										</h1>
										<p className="py-6">
											Provident cupiditate voluptatem et in. Quaerat fugiat ut
											assumenda excepturi exercitationem quasi. In deleniti
											eaque aut repudiandae et a id nisi.
										</p>
									</div>
								</div>
								<p className="text-right  cursor-pointer">
									<a href="#" className=" text-sky-700 hover:underline">
										Find out more
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-3 w-2 "
										></FontAwesomeIcon>
									</a>
								</p>
							</div>

							{/* Second news  start here */}

							<div className=" mb-3 p-2 border-b-2 border-black ">
								<div className="flex gap-5">
									<img src={IBusiness} className="max-w-sm w-1/5 px-2 h-24" />
									<div>
										<h1 className="text-xl font-bold">
											Safety and financial security for women
										</h1>
										<p className="py-6">
											Provident cupiditate voluptatem et in. Quaerat fugiat ut
											assumenda excepturi exercitationem quasi. In deleniti
											eaque aut repudiandae et a id nisi.
										</p>
									</div>
								</div>
								<p className="text-right  cursor-pointer">
									<a href="#" className=" text-sky-700 hover:underline">
										Find out more
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-3 w-2 "
										></FontAwesomeIcon>
									</a>
								</p>
							</div>

							{/* Third news  start here */}

							<div className="mb-3 p-2 border-b-2 border-black  ">
								<div className="flex gap-5">
									<img src={business} className="max-w-sm w-1/5 px-2 h-24" />
									<div>
										<h1 className="text-xl font-bold">
											Journal of Mathematical Economics gains ANU expert
										</h1>
										<p className="py-6">
											Provident cupiditate voluptatem et in. Quaerat fugiat ut
											assumenda excepturi exercitationem quasi. In deleniti
											eaque aut repudiandae et a id nisi.
										</p>
									</div>
								</div>
								<p className="text-right  cursor-pointer">
									<a href="#" className=" text-sky-700 hover:underline">
										Find out more
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-3 w-2 "
										></FontAwesomeIcon>
									</a>
								</p>
							</div>

							{/* Fourth news  start here */}
							
							<div className=" mb-3 p-2 border-b-2 border-black ">
								<div className="flex gap-5 ">
									<img src={events1} className="max-w-sm w-1/5 px-2 h-24" />
									<div>
										<h1 className="text-xl font-bold">
											2022 Australasian Actuarial Education and Research
											Symposium
										</h1>
										<p className="py-6">
											Provident cupiditate voluptatem et in. Quaerat fugiat ut
											assumenda excepturi exercitationem quasi. In deleniti
											eaque aut repudiandae et a id nisi.
										</p>
									</div>
								</div>
								<p className="text-right  cursor-pointer">
									<a href="#" className=" text-sky-700 hover:underline">
										Find out more
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-3 w-2 "
										></FontAwesomeIcon>
									</a>
								</p>
							</div>

							{/* Fifth news  start here */}

							<div className="mb-3 p-2   ">
								<div className="flex gap-5">
									<img src={events2} className="max-w-sm w-1/5 px-2 h-24" />
									<div>
										<h1 className="text-xl font-bold">
											CBE Alumni Networking Event{" "}
										</h1>
										<p className="py-6">
											Provident cupiditate voluptatem et in. Quaerat fugiat ut
											assumenda excepturi exercitationem quasi. In deleniti
											eaque aut repudiandae et a id nisi.
										</p>
									</div>
								</div>
								<p className="text-right  cursor-pointer">
									<a href="#" className=" text-sky-700 hover:underline">
										Find out more
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-3 w-2 "
										></FontAwesomeIcon>
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;
