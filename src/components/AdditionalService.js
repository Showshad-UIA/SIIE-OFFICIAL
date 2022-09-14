import {
	faArrowRight,
	faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AdditionalService = () => {
	return (
		<div className="bg-white mb-5 border-b-2 border-gray-600">
			<div className="mx-auto  flex-wrap flex">
				<div class="card w-96  text-primary-content">
					<div class="card-body">
						<div className="flex border-t-2 ml-[120px]">
							<h2 className="card-title ml-4 mt-6 mb-10 ">Course</h2>
							<figure class="px-10 ml-16">
								<a href="#">
									<FontAwesomeIcon
										className="mt-2 w-[100px] h-[10]"
										icon={faArrowRight}
									></FontAwesomeIcon>
								</a>
							</figure>
						</div>

						<p className="ml-[120px]">
							If a dog chews shoes whose shoes does he choose?
						</p>
					</div>
				</div>
				<div class="card w-96  text-primary-content">
					<div class="card-body">
						<div className="flex border-t-2 ml-[95px]">
							<h2 className="card-title ml-4 mt-6">Research</h2>
							<figure class="px-10 ml-16">
								<a href="#">
									<FontAwesomeIcon
										className="mt-2 w-[100px] h-[10]"
										icon={faArrowRight}
									></FontAwesomeIcon>
								</a>
							</figure>
						</div>

						<p className="ml-[95px]">
							If a dog chews shoes whose shoes does he choose?
						</p>
					</div>
				</div>
				<div class="card w-96  text-primary-content">
					<div class="card-body">
						<div className="flex border-t-2 ml-[95px]">
							<h2 className="card-title mt-6 ml-4">Partnership</h2>
							<figure class="px-10 ml-16">
								<a href="#">
									<FontAwesomeIcon
										className="mt-2 w-[100px] h-[10]"
										icon={faArrowRight}
									></FontAwesomeIcon>
								</a>
							</figure>
						</div>

						<p className="ml-[95px]">
							If a dog chews shoes whose shoes does he choose?
						</p>
					</div>
				</div>
				<div class="card w-96  text-primary-content">
					<div class="card-body">
						<div className="flex border-t-2 ml-[95px]">
							<h2 className="card-title mt-6 ml-4">Event</h2>
							<figure class="px-10 ml-16">
								<FontAwesomeIcon
									icon={faCalendarDays}
									className="h-[25px] w-[25px] text-green-700 ml-[55px] mt-5"
								></FontAwesomeIcon>
							</figure>
						</div>

						<p className="ml-[120px]">
							If a dog chews shoes whose shoes does he choose?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdditionalService;
