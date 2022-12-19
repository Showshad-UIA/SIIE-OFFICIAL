import React from "react";
import { useNavigate } from "react-router-dom";

const Study = () => {
	const navigate = useNavigate();
	return (
		<div className="container mx-auto">
			<div>
				<div className="mb-16 lg:mx-28 lg:w-[85%]  md:mx-20 px-3">
					<h1 className="text-2xl font-bold  mb-3 ">LIVING IN SYDNEY</h1>
					{/* background image added */}
					<div
						className="hero lg:h-[500px]   "
						style={{
							backgroundImage: `url("https://i.ibb.co/mrKTwcX/sydney-banner.jpg")`,
						}}
					>
						{/* card added */}
						<div className="hero-overlay bg-opacity-10"></div>
						<div className=" text-center ">
							<div className="max-w-md lg:mt-[270px] bg-white opacity-60 shadow-md pb-10 rounded ">
								<h1 className="mb-3 pt-5 text-4xl font-bold ">
									Life in Sydney
								</h1>
								<p className="mb-5 text-black text-xl ">
									Sydney is popular with international students for many
									reasons.
								</p>
								<button
									onClick={() => navigate("/living")}
									className="bg-sky-700 text-white p-3 rounded-lg "
								>
									Know more
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Study;
