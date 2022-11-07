import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MastersMain = () => {
    return (
        <div className="lg:mx-auto mt-8">
			<div className="w-50 text-2xl  font-bold cursor-pointer   text-center">
				<button className="bg-sky-700  pr-16 pb-5 pt-5 pl-16">
					<p className=" text-white  ">Course offer</p>
				</button>
			</div>
			<div className="grid lg:grid-cols-2 gap-1  sm:grid-cols-1 m-5 lg:mx-24 mb-11">
				<div class=" hover:bg-sky-300  bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="/financeresearch">
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
								MPhil in Islamic Banking & Finance
								</h2>
							</a>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-300 bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="/economicsresearch">
								{" "}
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
								MPhil in Islamic Economics
								</h2>
							</a>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-300 bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="/businesslawresearch">
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
								MPhil in Islamic Business law
								</h2>
							</a>
						</div>
					</div>
				</div>
				<div class=" hover:bg-sky-300 bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="/insuranceresearch">
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
								MPhil in Islamic Insurance
								</h2>
							</a>
						</div>
					</div>
				</div>
				{/* <div class=" hover:bg-sky-300 bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="#">
								{" "}
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
								MPhil in Islamic Shariah
								</h2>
							</a>
						</div>
					</div>
				</div> */}
{/* MPHIL Islamic studies */}
				{/* <div class=" hover:bg-sky-300 bg-sky-700 p-5">
					<div className="">
						<div className="items-center w-full text-center ">
							<FontAwesomeIcon
								icon={faBookOpen}
								className="text-white"
							></FontAwesomeIcon>
						</div>
						<div className="">
							<a href="/islamicstudyresearch">
								<h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
								MPhil in Islamic studies
								</h2>
							</a>
						</div>
					</div>
				</div> */}
			</div>
		</div>
    );
};

export default MastersMain;