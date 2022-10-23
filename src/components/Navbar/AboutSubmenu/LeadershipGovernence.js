import React from "react";
import Governance from "../../../Carosel/Asset/Governance structure (2).jpg";
// import Logo from "../../../images/SydneyIslamicLogo-10-01-01.png";
import chancellor from "../../../Carosel/Asset/explore-3.png";
import viceChancellor from "../../../Carosel/Asset/explore-2.jpg";
import Chart from "../../../Organazational Chart/Chart";
const LeadershipGovernence = () => {
	return (
		<div className="container mx-auto mb-10">
			
			<div className="lg:mx-24  ">
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
					academic and administrative areas of the University. They are informed
					by the University Executive consisting of the Administrative and
					Academic Boards.
				</p>
				<div>
					<h1 className="text-2xl px-4 font-bold border-b-2 lg:mx-36 mt-5 border-gray-400">
						<a href="#">Board Committees</a>
					</h1>
					<p className="lg:mx-36 px-3 text-justify">
						The Board Committees manage development of broad policies and
						strategic plans, and are informed by a number of standing committees.
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
			</div>
		</div>
	);
};

export default LeadershipGovernence;
