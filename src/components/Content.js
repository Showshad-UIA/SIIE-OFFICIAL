import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Content = () => {
	return (
		<div>
			<div className="lg:w-4/5  sm:w-4/5 m-auto mx-auto text-justify ">
				<h1 className="text-2xl  mx-auto text-justify text-blue-500 font-bold">
					<p className=" ">
						How will students use the services provided by SIIE?
					</p>
					<p className="m-auto w-full text-justify">
						What value will students gain by working with SIIE to create their
						dream product/service?
					</p>
				</h1>
				<p class="py-3 text-lg text-justify m-auto">
					SIIE will be partnering with Australian education institutions so that
					students can get a step closer to realising their business dreams.
					SIIE with its panel of academic and industry experts will conduct an
					initial assessment and evaluate on feasibility, financing, market
					potential, market need (actual or perceived) and scalability of the
					business. Once the business proposal has been reviewed, targeted
					feedback will be provided so students can implement and adjust their
					business proposal accordingly. SIIE will then arrange for students’
					product/service to develop into a tangible prototype. Finally, if
					successful, SIIE will give access to potential investors so students
					can get funding for their business
				</p>
			</div>
		</div>
	);
};

export default Content;
