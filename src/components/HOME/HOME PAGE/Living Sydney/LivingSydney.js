import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LivingSydney = () => {
	return (
		<>
			<div className="container mx-auto  lg:mb-16 lg:mt-7  ">
				<div className="lg:mx-[110px] shadow ">
					<div className="">
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
											<p className="text-black"> Living in Sydney</p>
										</li>
									</ul>
								</div>
								{/* breadcrumb end */}

								{/* Info of living in Sydney added here*/}

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<h1 className="text-sky-700 text-xl font-bold lg:px-20 px-3 ">
										A Guide to Living in Sydney
									</h1>

									<p className=" lg:px-20 px-3 text-justify mt-3 ">
										Voted the World’s Most Liveable City for seven years in a
										row, Melbourne is popular with international students for
										many reasons.
									</p>
									<p className=" lg:px-20 px-3 text-justify mt-3 ">
										Share A Guide to Living in Sydney Voted the World’s Most
										Liveable City for seven years in a row, Melbourne is popular
										with international students for many reasons. Sydney is
										Australia’s first city, both as the landing spot of the
										First Fleet (1788) and the first incorporated City Council
										(1842). This history is deeply reflected in Sydney’s
										strikingly iconic landmarks - the world-famous Sydney Opera
										House and Sydney Harbour Bridge - both must-see destination
										during your time here.
									</p>
									<p className="text-justify mt-3 lg:px-20 px-3">
										There’s a lot going on in Sydney. From great dining and
										shopping and inspiring arts and culture to amazing
										architecture, Sydney has got you covered.
									</p>
									<p className="text-justify mt-3 lg:px-20 px-3">
										During your time here, you will be able to immerse yourself
										in sporting and cultural events, including the spectacular
										New Year’s Eve celebrations and the biggest Chinese New Year
										celebrations held outside Asia.
									</p>

									{/* additional info */}

									<article className="lg:px-20 mt-5">
										<h1 className="font-bold text-xl my-2 text-sky-700">
											Things to do
										</h1>
										<p className=" font-bold">Walk the Sydney Harbour Bridge</p>
										<p className="text-justify">
											The Sydney Opera House and Sydney Harbour Bridge are two
											well-known landmarks around the globe. Whilst they might
											become a daily sight for you during your time here, you
											should make sure you make the time to walk across the
											legendary bridge at some point during your stay.
										</p>
										<h1 className="font-bold  mt-2">
											Learn about Australia’s history
										</h1>
										<p className="text-justify">
											Sydney is filled with amazing architecture and insights
											into the country’s past. Check out the Australian Museum
											to gain a better understanding of the country’s history,
											but make sure you bring enough time as wandering through
											the many exhibitions may take up most of one day.
										</p>
										<h1 className="font-bold  mt-2">
											Explore amazing national parks
										</h1>
										<p className="text-justify">
											Sydney is surrounded by some of Australia’s most sunning
											bushland and mountain ranges. Go north for some
											white-water rafting or bushwalking at Hawkesbury River and
											the Nymboi-Binderay National Park. Or go south for some
											scuba diving and wandering around rainforests.
										</p>
										<h1 className="font-bold mt-2">Average weekly costs</h1>

										<li> Rent: $165-440</li>
										<li>Food: $100-150</li>
										<li>Electricity/gas: $35-140</li>
										<li>Transport: $20-50</li>
										<li>Internet/phone: $20-55</li>
										<li>Other: $50+</li>
										<li>Total: $370-885</li>

										{/* Transport */}

										<div>
											<h1 className="font-bold text-xl my-2 text-sky-700">
												Transport
											</h1>
											<h1 className="font-bold mt-2">Trains</h1>
											<p className="text-justify">
												Sydney has several train lines from Central that take
												you outwards from the Central Business District (CBD).
												There are plenty of stations along each line, so check
												out the timetable to see if any are close to where you
												live. The train system is an effective choice for
												getting to the outer suburbs and around the CBD quickly.
											</p>
											<h1 className="font-bold mt-2">Buses</h1>
											<p className="text-justify">
												Buses are a great option for getting to and from
												Sydney’s metropolitan areas. With a huge network and
												frequent services, there’s a good chance there’ll be a
												bus stop near you and you won’t have to wait too long
												for the next bus to stop either.
											</p>
											<h1 className="font-bold  mt-2">Ferries</h1>
											<p className="text-justify">
												Ferries cover almost every suburb that’s fronted by
												Sydney Harbour, including Manly, Balmain, Circular Quay
												and even extend as far as Parramatta. The ferry system
												is one of the prettiest ways to get around the city,
												taking advantage of the city’s harbour, port and river
												system. Tickets are a little more expensive but
												definitely worth it for the scenery.
											</p>
											<h1 className="font-bold  mt-2">Taxis</h1>
											<p className="text-justify">
												There are a few taxi ranks located around Sydney where
												you can line up and get a taxi. Otherwise you can try
												hailing one from the side of the road.
											</p>
											<h1 className="font-bold mt-2">Uber</h1>
											<p className="text-justify">
												Uber became legal in Sydney in June 2016 and offers a
												safe and cheap alternative to taxis.
											</p>
										</div>
										<div>
											<h1 className="font-bold text-xl my-2 text-sky-700">
												Sydney’s suburbs
											</h1>
											<h1 className="font-bold  mt-2"> City Centre</h1>
											<p className="text-justify">
												Sydney’s city centre is filled with so much to do that
												you’ll probably end up spending quite a lot of time
												here. Sample the coffee, try some of the fancy
												restaurants and enjoy the stunning views over the
												harbour. The beautiful Hyde Park - the oldest public
												park in Australia - provides an ideal spot for
												relaxation and exploration. If you’re lucky, you’ll
												catch the melodic bell chimes of St Mary’s Cathedral
												nearby.
											</p>
											<h1 className="font-bold  mt-2">
												Ultimo, Haymarket and Glebe
											</h1>
											<p className="text-justify">
												These areas are home to many international students in
												Sydney. There are plenty of international food options
												to choose from with an outstanding food variety in
												Chinatown. Haymarket and Ultimo are located just outside
												of the city, making both very convenient to live and
												visit.
											</p>
											<h1 className="font-bold  mt-2"> Inner East</h1>
											<p className="text-justify">
												The Inner East is known for its diverse residents, arts
												and community scene as well as growing variety of small
												bars and cafes. Come here for coffee or brunch and maybe
												check out one of the many small art galleries
												afterwards.
											</p>
											<h1 className="font-bold  mt-2">Inner West</h1>
											<p className="text-justify">
												The Inner West is often described as cool and
												cosmopolitan. Eat and drink your way through the
												numerous laneway bars and restaurants or find your
												favourite piece of street art.
											</p>
										</div>

										{/* Sydney’s Top 5s added here  */}

										<div>
											<h1 className="font-bold text-xl my-2 text-sky-700">
												Sydney’s Top 5s
											</h1>
											<h1 className="font-bold  mt-2">Mosque</h1>
											<div>
												<li>
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Art Gallery of NSW{" "}
													</a>
												</li>
												<li>
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Museum of Contemporary Art Australia{" "}
													</a>
												</li>
												<li>
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Kate Owen Gallery{" "}
													</a>
												</li>
												<li>
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Carriageworks{" "}
													</a>
												</li>
												<li>
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														White Rabbit Art Gallery{" "}
													</a>
												</li>
											</div>

											{/* Halal Foods */}

											<h1 className="font-bold  mt-2">Halal Foods</h1>
											<div>
												<li>
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Bourke Street Bakery{" "}
													</a>
												</li>
												<li>
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Sonoma Bakery{" "}
													</a>
												</li>
												<li>
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Iggy’s Bread of the World{" "}
													</a>
												</li>
												<li>
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Infinity Bakery{" "}
													</a>
												</li>
												<li>
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Berkelo{" "}
													</a>
												</li>
											</div>

											{/* Markets */}

											<h1 className="font-bold  mt-2">Markets</h1>
											<div>
												<li>
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Chinatown Markets{" "}
													</a>
												</li>
												<li>
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Paddys Markets{" "}
													</a>
												</li>
												<li>
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Carriageworks Farmers Markets{" "}
													</a>
												</li>
												<li>
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Sydney Vegan Market{" "}
													</a>
												</li>
												<li>
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Paddington Markets{" "}
													</a>
												</li>
											</div>

											{/* Cultural Center */}

											<h1 className="font-bold  mt-2">Cultural Center</h1>
											<div>
												<li>
													{" "}
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Metro Theatre
													</a>
												</li>
												<li>
													{" "}
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														The Enmore Theatre{" "}
													</a>
												</li>
												<li>
													{" "}
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Oxford Art Factory{" "}
													</a>
												</li>
												<li>
													{" "}
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Hordern Pavilion{" "}
													</a>
												</li>
												<li>
													{" "}
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														The Factory Theatre{" "}
													</a>
												</li>
											</div>

											{/* Museum */}

											<h1 className="font-bold  mt-2">Museums</h1>

											<div>
												<li>
													{" "}
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														Australian Museum
													</a>
												</li>
												<li>
													{" "}
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Museum of Applied Arts & Sciences
													</a>
												</li>
												<li>
													{" "}
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Australian National Maritime Museum{" "}
													</a>
												</li>
												<li>
													{" "}
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Hyde Park Barracks Museum{" "}
													</a>
												</li>
												<li>
													{" "}
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														Sydney Justice and Police Museum{" "}
													</a>
												</li>
												<li>
													{" "}
													<a
														href=""
														className="cursor-hover hover:text-sky-700"
													>
														{" "}
														The Factory Theatre{" "}
													</a>
												</li>
											</div>
										</div>
									</article>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LivingSydney;
