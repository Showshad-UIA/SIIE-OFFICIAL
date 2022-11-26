import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import academicStructure from "../../../Carosel/Asset/Presentation6.jpg";
import Governance from "../../../Carosel/Asset/Presentation8.jpg";
const AcademicStructure = () => {
	return (
		<div className="">
			{/* Main content start here */}
			<div className="container mx-auto  lg:mb-16 lg:mt-7 ">
				<div className="lg:mx-[100px] shadow mb-5">
					<div className="">
						<div className=" lg:w-full    ">
							<div className=" bg-base-100 lg:px-8 px-3 py-3 pb-10  ">
								<div className=" flex text-sky-700 text-md font-bold cursor-pointer lg:px-20 px-3 ">
									<div>
										About Us{" "}
										<FontAwesomeIcon
											icon={faChevronRight}
											className="h-4 w-2 px-1 "
										></FontAwesomeIcon>
									</div>
									<div className="px-2">Academic Structure</div>
								</div>

								<div className="  ">
									<h1 className="mb-3 border-t-4 border-sky-700 lg:mx-20 mx-3 mt-2"></h1>
									<img
										src={academicStructure}
										alt=""
										className="lg:px-14 lg:ml-5"
									/>
									<h1 className="text-2xl px-4  font-bold border-b-2 lg:mx-20  mt-5 border-gray-400">
										<a href="#"> Dean</a>
									</h1>
									<p className="lg:mx-20 px-3 text-justify">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quisquam maiores expedita nulla officia qui, cumque
										voluptatibus soluta in, voluptatem, quasi labore.
									</p>
									<div>
										<h1 className="text-2xl px-4 font-bold border-b-2 lg:mx-20 mt-5 border-gray-400">
											<a href="#">Deputy Dean</a>
										</h1>
										<p className="lg:mx-20 px-3 text-justify">
											Lorem ipsum dolor sit amet consectetur, adipisicing elit.
											Esse magnam molestiae quam id mollitia? A dicta incidunt
											quasi laborum? Assumenda, quia. Ipsam numquam iure
											obcaecati dolor quos itaque veniam enim.
										</p>
									</div>
									<div>
										<h1 className="text-2xl px-4 font-bold border-b-2 lg:mx-20 mt-5  border-gray-400">
											<a href="#">Associate Dean, Accreditation Unit</a>
										</h1>
										<p className="lg:mx-20 px-3 text-justify">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Iure neque cupiditate eos ipsum perferendis odit
											temporibus totam quis eum consectetur repellendus labore,
											cumque itaque eveniet quia commodi animi similique
											aperiam!
										</p>
									</div>
									<div>
										<h1 className="text-2xl px-4 font-bold border-b-2 lg:mx-20 mt-5  border-gray-400">
											<a href="#">Associate Dean, Learning and Teaching</a>
										</h1>
										<p className="lg:mx-20 px-3 text-justify">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Iure neque cupiditate eos ipsum perferendis odit
											temporibus totam quis eum consectetur repellendus labore,
											cumque itaque eveniet quia commodi animi similique
											aperiam!
										</p>
									</div>
									<div>
										<h1 className="text-2xl px-4 font-bold border-b-2 lg:mx-20 mt-5  border-gray-400">
											<a href="#">Associate Dean, Graduate Research Studies</a>
										</h1>
										<p className="lg:mx-20 px-3 text-justify">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Iure neque cupiditate eos ipsum perferendis odit
											temporibus totam quis eum consectetur repellendus labore,
											cumque itaque eveniet quia commodi animi similique
											aperiam!
										</p>
									</div>
									<div>
										<h1 className="text-2xl px-4 font-bold border-b-2 lg:mx-20 mt-5  border-gray-400">
											<a href="#">
												Associate Dean, Funding, Industry & Community Engagement
											</a>
										</h1>
										<p className="lg:mx-20 px-3 text-justify">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Iure neque cupiditate eos ipsum perferendis odit
											temporibus totam quis eum consectetur repellendus labore,
											cumque itaque eveniet quia commodi animi similique
											aperiam!
										</p>
									</div>

									<div>
										<h1 className="text-2xl px-4 font-bold border-b-2 lg:mx-20 mt-5  border-gray-400">
											<a href="#">Registrar</a>
										</h1>
										<p className="lg:mx-20 px-3 text-justify">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Iure neque cupiditate eos ipsum perferendis odit
											temporibus totam quis eum consectetur repellendus labore,
											cumque itaque eveniet quia commodi animi similique
											aperiam!
										</p>
									</div>

									<div>
										<h1 className="text-2xl px-4 font-bold border-b-2 lg:mx-20 mt-5  border-gray-400">
											<a href="#">School Manager</a>
										</h1>
										<p className="lg:mx-20 px-3 text-justify">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Iure neque cupiditate eos ipsum perferendis odit
											temporibus totam quis eum consectetur repellendus labore,
											cumque itaque eveniet quia commodi animi similique
											aperiam!
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

export default AcademicStructure;
