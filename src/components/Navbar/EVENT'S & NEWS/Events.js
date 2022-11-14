import React from "react";
import finance from "../../../Carosel/Asset/Islamic finance.jpg";
import events1 from "../../../Carosel/Asset/news1.jpg";
import events2 from "../../../Carosel/Asset/news 3.jpg";
import economics from "../../../Carosel/Asset/management.jpg";
import business from "../../../Carosel/Asset/business.jpg";
import Insurance from "../../../Carosel/Asset/insurance.jpg";
import Management from "../../../Carosel/Asset/management.jpg";
import IBusiness from "../../../Carosel/Asset/international-business.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRight,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const Events = () => {
	return (
		<div className="container mx-auto ">
			
			<div class=" p-2  w-full  ">
				<div
					class="flex flex-col  lg:flex-row  lg:divide-x-4 divide-sky-700
                    shadow-md lg:mx-[100px]   "
				>
					{/* <div className=" pb-10 px-5">
					<h1 className="mb-5 text-2xl">News</h1>
					<div  className="mb-5">
					<h1>The sydney IBS would like to invite students, alumni, industry partners and friends to participate in the series of in-person and virtual events in this calendar of activities, including:</h1>
					<p><li>Social and cultural events for current students</li>
					<li>Career and skill development workshops for current students</li>
					<li>Education and research updates from award-winning academics and national research grant</li>
					<li>Seminars hosted by alumni, academics and industry partners.</li>
					
					</p>
					</div>
						<div className="flex bg-sky-700 shadow p-5 mb-5 gap-10 ">
							<div>
								<a href="#">
									<img
										src={finance}
										alt=""
										className="lg:h-28 lg:w-[200px] h-24 w-[300px]"
									/>
								</a>
							</div>
							<div>
								<a href="#" className="text-xl text-white">
								Safety and financial security for women
								</a>
								<a href="#">
									<p className="mb-3 text-white mt-5">
										Islamic banking, Islamic finance, or Sharia-compliant
										finance is banking or financing activity that complies with
										Sharia and its  
									</p>
								</a>
								<p className="text-right  cursor-pointer">
									<a href="#" className="underline text-white">
										Find out more
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-3 w-2 "
										></FontAwesomeIcon>
									</a>
								</p>
							</div>
						</div>
						<div className="flex bg-sky-700 shadow p-5 mb-5 gap-10">
							<div>
								<a href="#">
									<img
										src={economics}
										alt=""
										className="lg:h-28 lg:w-[180px] h-24 w-[300px]"
									/>
								</a>
							</div>
							<div>
								<a href="#">
									<p className="text-xl mb-5 text-white">Journal of Mathematical Economics gains ANU expert</p>

									<p className="mb-3 text-white">
										It tries to promote human brotherhood, socio-economic
										justice and the well-being of all through an integrated role
										
									</p>
								</a>
								<p className="text-right  cursor-pointer text-white">
									<a href="#">Find out more</a>
									<FontAwesomeIcon
										icon={faChevronRight}
										className="h-3 w-2"
									></FontAwesomeIcon>
								</p>
							</div>
						</div>
						<div className="flex bg-sky-700 p-5 mb-5 gap-10">
							<div>
								<a href="#">
									<img
										src={business}
										alt=""
										className="lg:h-28 lg:w-[280px] h-24 w-[300px]"
									/>
								</a>
							</div>
							<div>
								<a href="#">
									<p className="text-xl  mb-5 text-white">
									Journal of Mathematical Economics gains ANU expert
									</p>
									<p className="mb-3 text-white">
										Shariah restrictions on certain financial and trade
										transactions is the raison d’être for the emergence of
										Islamic banking. It is, therefore, important for any 
									</p>
								</a>
								<p className="text-right  cursor-pointer text-white">
									<a href="#">Find out more</a>
									<FontAwesomeIcon
										icon={faChevronRight}
										className="h-3 w-2"
									></FontAwesomeIcon>
								</p>
							</div>
						</div>
						<div className="flex bg-sky-700 p-5 mb-5 gap-10">
							<div>
								<a href="#">
									<img
										src={Insurance}
										alt=""
										className="lg:h-28 lg:w-[280px] h-24 w-[300px]"
									/>
								</a>
							</div>
							<div>
								<a href="#">
									<p className="text-xl text-white mb-5">Blurred lines in auditing</p>
									<p className="mb-3 text-white">
										A Shariah-compliant insurance that can be renewed online.
										DISCOVER. A Shariah-compliant motor insurance plan that can
										
									</p>
								</a>
								<p className="text-right  cursor-pointer text-white">
									<a href="#">Find out more</a>
									<FontAwesomeIcon
										icon={faChevronRight}
										className="h-3 w-2"
									></FontAwesomeIcon>
								</p>
							</div>
						</div>
						
						
					</div> */}

					<div className="flex flex-col px-2">
						<div className="px-3">
							<h1 className=" mb-5 text-2xl mt-5 border-b-2 border-black">News</h1>

							
							
						</div>
						<div className=" mb-3 p-2 border-b-2 border-black ">
							<div className="flex gap-5">
								<img src={Management} className="max-w-sm w-1/5 px-2 h-24" />
								<div>
									<h1 className="text-xl font-bold">
										Lee Sarandopoulos headshot the caravans
									</h1>
									<p className="py-6">
										Provident cupiditate voluptatem et in. Quaerat fugiat ut
										assumenda excepturi exercitationem quasi. In deleniti eaque
										aut repudiandae et a id nisi.
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
						<div className=" mb-3 p-2 border-b-2 border-black ">
							<div className="flex gap-5">
								<img src={finance} className="max-w-sm w-1/5 px-2 h-24" />
								<div>
									<h1 className="text-xl font-bold">
										Safety and financial security for women
									</h1>
									<p className="py-6">
										Provident cupiditate voluptatem et in. Quaerat fugiat ut
										assumenda excepturi exercitationem quasi. In deleniti eaque
										aut repudiandae et a id nisi.
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
						<div className="mb-3 p-2 border-b-2 border-black  ">
							<div className="flex gap-5">
								<img src={Insurance} className="max-w-sm w-1/5 px-2 h-24" />
								<div>
									<h1 className="text-xl font-bold">
										Journal of Mathematical Economics gains ANU expert
									</h1>
									<p className="py-6">
										Provident cupiditate voluptatem et in. Quaerat fugiat ut
										assumenda excepturi exercitationem quasi. In deleniti eaque
										aut repudiandae et a id nisi.
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
						<div className=" mb-3 p-2 border-b-2 border-black ">
							<div className="flex gap-5 ">
								<img src={events1} className="max-w-sm w-1/5 px-2 h-24" />
								<div>
									<h1 className="text-xl font-bold">
										2022 Australasian Actuarial Education and Research Symposium
									</h1>
									<p className="py-6">
										Provident cupiditate voluptatem et in. Quaerat fugiat ut
										assumenda excepturi exercitationem quasi. In deleniti eaque
										aut repudiandae et a id nisi.
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
						<div className="mb-3 p-2 border-b-2 border-black  ">
							<div className="flex gap-5">
								<img src={events2} className="max-w-sm w-1/5 px-2 h-24" />
								<div>
									<h1 className="text-xl font-bold">
										CBE Alumni Networking Event{" "}
									</h1>
									<p className="py-6">
										Provident cupiditate voluptatem et in. Quaerat fugiat ut
										assumenda excepturi exercitationem quasi. In deleniti eaque
										aut repudiandae et a id nisi.
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

					<div className="flex flex-col px-2 mt-5">
						<div className=" px-3">
							<h1 className="mb-5 text-2xl border-b-2 border-black">Events</h1>

							
						</div>
						<div className="mb-3 p-2 border-b-2 border-black  ">
							<div className="flex gap-5">
								<img src={business} className="max-w-sm w-1/5 px-2 h-24" />
								<div>
									<h1 className="text-xl font-bold">
										Innovation presentation series – Dr Winston Dou
									</h1>
									<p className="py-6">
										Provident cupiditate voluptatem et in. Quaerat fugiat ut
										assumenda excepturi exercitationem quasi. In deleniti eaque
										aut repudiandae et a id nisi.
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
						<div className=" mb-3 p-2 border-b-2 border-black">
							<div className="flex gap-5">
								<img src={events2} className="max-w-sm w-1/5 px-2 h-24" />
								<div>
									<h1 className="text-xl font-bold">
										CBE Alumni Networking Event - Singapore
									</h1>
									<p className="py-6">
										Provident cupiditate voluptatem et in. Quaerat fugiat ut
										assumenda excepturi exercitationem quasi. In deleniti eaque
										aut repudiandae et a id nisi.
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
						<div className="mb-3 p-2 border-b-2 border-black  ">
							<div className="flex gap-5">
								<img src={finance} className="max-w-sm w-1/5 px-2 h-24" />
								<div>
									<h1 className="text-xl font-bold">
										Workshop Seminar Series for all – Professor Greta Hsu
									</h1>
									<p className="py-6">
										Provident cupiditate voluptatem et in. Quaerat fugiat ut
										assumenda excepturi exercitationem quasi. In deleniti eaque
										aut repudiandae et a id nisi.
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
						<div className="mb-3 p-2 border-b-2 border-black  ">
							<div className="flex gap-5">
								<img src={Management} className="max-w-sm w-1/5 px-2 h-24" />
								<div>
									<h1 className="text-xl font-bold">
									 Seminar Series assumenda excepturi exercitationem 
									</h1>
									<p className="py-6">
										Provident cupiditate voluptatem et in. Quaerat fugiat ut
										assumenda excepturi exercitationem quasi. In deleniti eaque
										aut repudiandae et a id nisi.
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
						<div className=" mb-3 p-2 border-b-2 border-black ">
							<div className="flex gap-5">
								<img src={IBusiness} className="max-w-sm w-1/5 px-2 h-24" />
								<div>
									<h1 className="text-xl font-bold">
										SIBS Alumni Networking Event
									</h1>
									<p className="py-6">
										Provident cupiditate voluptatem et in. Quaerat fugiat ut
										assumenda excepturi exercitationem quasi. In deleniti eaque
										aut repudiandae et a id nisi.
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
	);
};

export default Events;
