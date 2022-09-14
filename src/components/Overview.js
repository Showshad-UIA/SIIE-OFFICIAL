import React from "react";
import Image4 from "../images/image-4.png";
const Overview = () => {
	return (
		<div>
			<div class="hero min-h-screen bg-base">
				<div class="hero-content flex-col lg:flex-row">
					<img src={Image4} className=" rounded-lg shadow-2xl" />
					<div>
						<h1 class="text-5xl font-bold">
							Global pandemic therapeutics centre announced in Melbourne
						</h1>
						<p class="py-6">
							Creating a second shield to protect humanity from future pandemics
							is the principal objective of the Cumming Global Centre for
							Pandemic Therapeutics, which will be located in the biomedical
							precinct.
						</p>
						<button>
							<a href="#" className="text-blue-500 text-lg font-bold">
								Read More..
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overview;
