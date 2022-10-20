import React from "react";
import Governance from "../../../Carosel/Asset/Governance body.jpg";
// import Logo from "../../../images/SydneyIslamicLogo-10-01-01.png";
import chancellor from "../../../Carosel/Asset/explore-3.png";
import viceChancellor from "../../../Carosel/Asset/explore-2.jpg";
import Chart from "../../../Organazational Chart/Chart";
const LeadershipGovernence = () => {
	return (
		<div className="container mx-auto mb-10">
			{/* <div className="py-5">
				<h1 className="text-center text-xl font-bold text-black ">
					Sydney Islamic Business School Governance Structure
				</h1>
			</div> */}
			{/* <Chart></Chart> */}
			<div className="lg:mx-24  ">
				{/* <img src={Logo} alt="" /> */}

				<a href="#">
					<img src={Governance} alt="chart" className="" />
				</a>
			</div>

			<div>
				<h1 className="text-2xl px-3 font-bold border-b-2 lg:mx-36  border-gray-400">
					<a href="#">Board of Trustees</a>
				</h1>
				<p className="lg:mx-36 px-3 text-justify">
					The governing authority of the University, the Board manages
					development of broad policies and strategic plans, and is informed by
					a number of standing committees.
				</p>
				<h1 className="text-2xl px-4  font-bold border-b-2 lg:mx-36  mt-5 border-gray-400">
					<a href="#"> CEO and President</a>
				</h1>
				<p className="lg:mx-36 px-3 text-justify">
					The University President and CEO, responsible for managing all
					academic and administrative areas of the University. Professor Barney
					Glover AO was appointed Vice-Chancellor and President from 1 January
					2022.
				</p>
				<div>
					<h1 className="text-2xl px-4 font-bold border-b-2 lg:mx-36 mt-5 border-gray-400">
						<a href="#">Board of Committee</a>
					</h1>
					<p className="lg:mx-36 px-3 text-justify">
						The governing authority of the University, the Board manages
						development of broad policies and strategic plans, and is informed
						by a number of standing committees.
					</p>
				</div>
				<div>
					<h1 className="text-2xl px-4 font-bold border-b-2 lg:mx-36 mt-5  border-gray-400">
						<a href="#">Academic Senate</a>
					</h1>
					<p className="lg:mx-36 px-3 text-justify">
						This is the peak forum in the University for academic debate and
						discourse. The Senate is a standing committee of the board, and is
						responsible for academic standards and values.
					</p>
				</div>
				<div>
					<h1 className="text-2xl px-4 font-bold border-b-2 lg:mx-36 mt-5  border-gray-400">
						<a href="#">Academic Board</a>
					</h1>
					<p className="lg:mx-36 px-3 text-justify">
						This is the peak forum in the University for academic debate and
						discourse. The Senate is a standing committee of the board, and is
						responsible for academic standards and values.
					</p>
				</div>
				<div>
					<h1 className="text-2xl px-4 font-bold border-b-2 lg:mx-36 mt-5 border-gray-400">
						<a href="#" className="mr-7">
							Administrative Board
						</a>
					</h1>
					<p className="lg:mx-36 px-3 text-justify">
						The Office of Governance Services provides a wide range of support
						services to the governing bodies of the University, as well as
						managing such issues as complaint resolution and records and
						archives.
					</p>
				</div>
			</div>
		</div>
	);
};

export default LeadershipGovernence;
