import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBusinessTime,
	faCommentsDollar,
	faGears,
	faHandHoldingHand,
	faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Service = () => {
	return (
		<div>
			<h2 className="text-2xl mb-8 mt-5 font-bold text-blue-400  flex-col lg:flex-row-reverse">
				We Offer
				<div className="bg-orange-400 h-[5px] w-16 mx-auto mt-2"></div>
			</h2>
			<div className="text-center mb-6 ">
				<div className=" flex justify-center gap-5 flex-wrap ">
					<div class=" w-96 bg-base-100">
						<figure class="px-10 pt-10">
							<FontAwesomeIcon
								icon={faBusinessTime}
								className="h-[90px] w-[90px] text-green-700"
							></FontAwesomeIcon>
						</figure>

						<div class="card-body items-center text-center">
							<h2 class="card-title">Get your business plan tested</h2>
							<div className="bg-orange-400 h-[5px] w-16 "></div>
							<p className="text-lg">
								Your business plan will be reviewed by a panel of academic and
								industry experts and evaluated on feasibility, financing, market
								potential, market need (actual or perceived) and scalability of
								the business. Once the business plan has been reviewed, targeted
								feedback will be provided so you can implement and adjust your
								business plan accordingly.
							</p>
						</div>
					</div>
					<div class="card w-96 bg-base-100  ">
						<figure class="px-10 pt-10">
							<FontAwesomeIcon
								icon={faHouse}
								className="h-[90px] w-[90px] text-green-700"
							></FontAwesomeIcon>
						</figure>

						<div class="card-body items-center text-center">
							<h2 class="card-title">Prototype</h2>
							<div className="bg-orange-400 h-[5px] w-16"></div>
							<p className="text-lg">
								Prototype your business product/service to something tangible
							</p>
						</div>
					</div>
					<div class="card w-96 bg-base-100">
						<figure class="px-10 pt-10">
							<FontAwesomeIcon
								icon={faCommentsDollar}
								className="h-[90px] w-[90px] text-green-700"
							></FontAwesomeIcon>
						</figure>

						<div class="card-body items-center text-center">
							<h2 class="card-title">Get funding for your business</h2>
							<div className="bg-orange-400 h-[5px] w-16"></div>
							<p className="text-lg">Access to potential investors.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
