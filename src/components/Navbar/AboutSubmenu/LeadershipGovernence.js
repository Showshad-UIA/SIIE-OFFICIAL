import React from "react";
import Governance from "../../../Carosel/Asset/Governance body.jpg";
import chancellor from "../../../Carosel/Asset/explore-3.png";
import viceChancellor from "../../../Carosel/Asset/explore-2.jpg";
import Chart from "../../../Organazational Chart/Chart";
const LeadershipGovernence = () => {
	return (
		<div className="container mx-auto mt-10">
			{/* <img src={Logo} alt="" /> */}
			<h1 className="text-center text-sm font-bold text-black">
				Sydney Islamic Business School Governance Structure
			</h1>
			{/* <Chart></Chart> */}
			<div className="lg:mx-28 ">
				<img src={Governance} alt="chart" className="" />
			</div>
			<h1 className="text-2xl  font-bold border-b-4 lg:mx-36  border-gray-400">
				Chancellor
			</h1>
			<div className="hero ">
				<div className="hero-content ">
					<div>
						<p className="sm-full lg:w-4/5 lg:mr-20  text-justify ">
							The Chancellor is the Chairman of the Board of Trustees, the peak
							governing body of the University. Professor Peter Shergold AC was
							appointed Chancellor from 1 January 2011 continuing a
							distinguished academic and public service career.
						</p>
					</div>
				</div>
			</div>
			<h1 className="text-2xl  font-bold border-b-4 lg:mx-36  border-gray-400">
				Vice-Chancellor
			</h1>
			<div className="hero ">
				<div className="hero-content ">
					<div>
						<p className="sm-full lg:w-4/5 lg:mr-20  text-justify ">
							The Vice-Chancellor is the University President and CEO,
							responsible for managing all academic and administrative areas of
							the University. Professor Barney Glover AO was appointed
							Vice-Chancellor and President from 1 January 2014.
						</p>
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-2xl font-bold border-b-4 lg:mx-36  border-gray-400">
					Board of Trustees
				</h1>
				<div className="hero ">
					<div className="hero-content ">
						<div>
							<p className="sm-full lg:w-4/5 lg:mr-20  text-justify ">
								The governing authority of the University, the Board manages
								development of broad policies and strategic plans, and is
								informed by a number of standing committees.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-2xl  font-bold border-b-4 lg:mx-36  border-gray-400">
					Academic Senate
				</h1>
				<div className="hero ">
					<div className="hero-content ">
						<div>
							<p className="sm-full lg:w-4/5  text-justify ">
								This is the peak forum in the University for academic debate and
								discourse. The Senate is a standing committee of the board, and
								is responsible for academic standards and values.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-2xl font-bold border-b-4 lg:mx-36  border-gray-400">
					Office of Governance Services
				</h1>
				<div className="hero ">
					<div className="hero-content ">
						<div>
							<p className="sm-full lg:w-4/5  text-justify ">
								The Office of Governance Services provides a wide range of
								support services to the governing bodies of the University, as
								well as managing such issues as complaint resolution and records
								and archives.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-2xl px-2 font-bold border-b-4 lg:mx-36  border-gray-400">
					Governance Diagram
				</h1>
				<div className="hero ">
					<div className="hero-content ">
						<div>
							<p className="sm-full lg:w-4/5  text-justify ">
								The Office of Governance Services provides a wide range of
								support services to the governing bodies of the University, as
								well as managing such issues as complaint resolution and records
								and archives.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default LeadershipGovernence;
