import React from "react";
import dean from "../../../../../../../Carosel/Asset/Academic staffs/male-1.png";
import Contact from "./Contact";
import Projects from "./Projects";
import Publication from "./Publication";
import Supervision from "./Supervision";
import Teaching from "./Teaching";
const Dean = () => {
	return (
		<div className="container mx-auto mb-10 ">
			<div class=" p-2  w-full  ">
				{/* News content start here */}
				<div
					class="flex flex-col  lg:flex-row  
                shadow-md lg:mx-[100px] pb-3  "
				>
					<div className="flex flex-col px-2">
						<div className="lg:mx-24 mt-5">
							{/* First news  start here */}

							<div className=" mb-3 p-2 bg-sky-700 text-white  ">
								<h1 className="mx-2 text-xl font-bold mb-3">DEAN</h1>
								<div className="flex gap-10 ">
									<img src={dean} className="  max-w-sm w-52 px-2 h-44 mb-3" />
									<div>
										<h1 className="lg:text-xl font-bold text-sm   ">
											Prof. Dr. Mohd Daud Bakar
										</h1>

										<p>
											<span className="font-bold">Expertise:</span> Shariah
											Leadership & Advisory
										</p>
										<p>
											<span className="font-bold">Phone:</span>+603-9769 4930 /
											4907
										</p>
										<p>
											<span className="font-bold">Email:</span> doud@sibs.edu.au
										</p>
										<p>
											<span className="font-bold">Website:</span>[Google
											Scholar][ResearchGate]
										</p>
									</div>
								</div>
							</div>
							{/* navbar start here */}
							<div className="text-md breadcrumbs md:px-6 bg-sky-700   ">
									<ul className="text-sky-700 ">
									<li class="">
									<a
										class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-1 lg:px-4 text-blue-700 font-semibold"
										href="#biography"
									>
										Biography
									</a>
								</li>
									<li class="-mb-px mr-1">
									<a
										class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-1 lg:px-4 text-blue-700 font-semibold"
										href="#supervisions"
									>
										Supervisions
									</a>
								</li>
									<li class="-mb-px mr-1">
									<a
										class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-1 lg:px-4 text-blue-700 font-semibold"
										href="#teaching"
									>
										Teaching
									</a>
								</li>
									<li class="-mb-px mr-1">
									<a
										class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-1 lg:px-4 text-blue-700 font-semibold"
										href="#projects"
									>
										Projects
									</a>
								</li>
									
									<li class="-mb-px mr-1">
									<a
										class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-1 lg:px-4 text-blue-700 font-semibold"
										href="#publications"
									>
										Publications
									</a>
								</li>
								<li class="-mb-px mr-1">
									<a
										class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-1 lg:px-4 text-blue-700 font-semibold"
										href="#contact"
									>
										Contact
									</a>
								</li>
										
									</ul>
								</div>
							

							{/* Biography start here */}

							<div className="border-2 ">
								<div className="mx-5">
									<div id="biography">
										<h1 className="text-xl  font-bold text-sky-700 my-5">
											Biography
										</h1>
										<p className="my-3 text-justify">
											Datuk Dr. Mohd Daud Bakar has been appointed as the 8th
											President of the International Islamic University Malaysia
											(IIUM) effective from 01st July 2019 until 30th June 2022.
											He is also Founder and Executive Chairman of Amanie Group.
											One of its flagship companies namely Amanie Advisors, is
											operating in few cities globally. He has recently been
											appointed as the Chairman of the Federal Territories
											Islamic Religious Council effective from 15th February
											2021. He also serves as the Chairman of the Shariah
											Advisory Council (SAC) of the Astana International
											Financial Centre (AIFC), Kazakhstan and at the Central
											Bank of Malaysia, the Securities Commission of Malaysia,
											the Labuan Financial Services Authority, the First Abu
											Dhabi Bank, and Permodalan Nasional Berhad.
										</p>

										<p className="text-justify">
											Datuk Dr Daud is also a Shariah board member of various
											global financial institutions, including the National Bank
											of Oman (Oman), Amundi Asset Management (France), Bank of
											London and Middle East (London), BNP Paribas Najma
											(Bahrain), Natixis Bank (Dubai), Oasis Asset Management
											(South Africa), Noor Islamic Bank (Dubai), Morgan Stanley
											(Dubai), Sedco Capital (Saudi and Luxembourg), and Dow
											Jones Islamic Market Index (New York) amongst many others.
										</p>
										<p className="my-3 text-justify">
											In the corporate world, he is a member of the PNB
											Investment Committee. He is also the third Chair Professor
											in Islamic Banking and Finance of Yayasan Tun Ismail
											Mohamed Ali Berdaftar (YTI) PNB at Faculty of Economics
											and Muamalat, Universiti Sains Islam Malaysia (USIM). In
											addition, he is the co-founder of Experts Analytics Centre
											Sdn Bhd and MyFinb.
										</p>

										<p className="my-5 text-justify">
											In 2016, he received the “Award of Excellence for
											Outstanding Contribution for Shariah Leadership &
											Advisory” at London Sukuk Summit Awards and “Shariah
											Adviser Award” at The Asset Triple A Islamic Finance
											Award. In 2014, he received the “Most Outstanding
											Individual” award by His Majesty, the King of Malaysia, in
											conjunction with the national-level Prophet Muhammad’s
											birthday. Under his leadership, Amanie Advisors received
											the “Islamic Economy Knowledge Infrastructure Award” at
											the Global Islamic Economy Summit, Dubai 2015, by His
											Highness Sheikh Mohammed bin Rashid Al Maktoum, Vice
											President and Prime Minister of the UAE and Ruler of
											Dubai, Oct 2015.
										</p>

										<p className="mb-3 text-justify">
											He received his first degree in Shariah from University of
											Kuwait in 1988 and obtained his PhD from University of St.
											Andrews, United Kingdom in 1993. In 2002, he completed his
											external Bachelor of Jurisprudence at University of
											Malaya.
										</p>

										<p className="mb-3 text-justify">
											His first book entitled “Shariah Minds in Islamic Finance:
											An Inside Story of A Shariah Scholar” has won the “Islamic
											Finance Book of the Year 2016” by the Global Islamic
											Finance Award (GIFA) 2016. Then, his book on sukuk
											entitled “An Insightful Journey to Emirates Airline Sukuk:
											Pushing The Boundaries of Islamic Finance” has also won
											the “Best Islamic Finance Case 2017” by the GIFA 2017 in
											Kazakhstan.
										</p>
										<p className="mb-3 text-justify">
											His latest books include Mindset Is Everything (2019), The
											Hard Truth of Islamic Finance (2019), Ratiocination in
											Islamic Legal Theory (2019), and Corporate Matrimony
											(2019). His other books include Mainstreaming Islamic
											Finance (2018), Shariah is Life (2018), I Have 25 Hours A
											Day (2016), Dhuha (Cahaya Pagi yang Terang) (2020) and
											Kembara Ilmu Dari Sg. Kolok ke St. Andrew (2021).
										</p>

										<h1 className="font-bold text-lg">Qualifications</h1>
										<li>
											He received his first degree in Shariah from University of
											Kuwait in 1988
										</li>
										<li>
											PhD from University of St. Andrews, United Kingdom in 1993
										</li>
										<li>
											external Bachelor of Jurisprudence at University of Malaya
											in 2002
										</li>
										<h1 className="font-bold text-lg my-3">
											Professional Memberships
										</h1>
										<li>CPA Australia (2011)</li>
										<li>CPA ASA (2006 - 2011)</li>
										<li>AFAANZ (2009 - 2014)</li>
										<h1 className="font-bold text-lg my-5">
											{" "}
											Research Interests
										</h1>
										<li>Accounting Education</li>
										<li>Strategic Management Accounting</li>
										<li>Work-integrated Learning</li>
									</div>
									<div id="supervisions">
										<h1 className="text-xl  font-bold text-sky-700 my-5">
											{" "}
											Supervision
										</h1>
										<Supervision></Supervision>
									</div>
									<div id="teaching">
										<h1 className="text-xl  font-bold text-sky-700 my-5">
											{" "}
											Teaching
										</h1>
										<Teaching></Teaching>
									</div>
									<div id="projects">
										{" "}
										<h1 className="text-xl  font-bold text-sky-700 my-5">
											{" "}
											Projects
										</h1>
										<Projects></Projects>
									</div>
									<div id="publications">
										<h1 className="text-xl  font-bold text-sky-700 my-5">
											{" "}
											Publications
										</h1>
										<Publication></Publication>
									</div>
									<div id="contact">
										<h1 className="text-xl  font-bold text-sky-700 my-5">
											{" "}
											Contact
										</h1>
										<Contact></Contact>
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

export default Dean;