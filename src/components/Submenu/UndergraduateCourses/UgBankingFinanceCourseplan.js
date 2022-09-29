import React from "react";
import UgCourse from "./UgCourse";
import UgCourseYearOne from "./UgCourseYearOne";
import UgCourseYearThree from "./UgCourseYearThree";
import UgCourseYearTwo from "./UgCourseYearTwo";

const UgBankingFinanceCourseplan = () => {
	return (
		<div className=" ">
			<div className="lg:mt-20">
				<h1 className="text-center text-2xl ">
					SYDNEY ISLAMIC BUSINESS SCHOOL
				</h1>
			</div>
			<div className="">
				<UgCourseYearOne></UgCourseYearOne>
			</div>
			<div>
				<UgCourseYearTwo></UgCourseYearTwo>
			</div>
			<div>
				<UgCourseYearThree></UgCourseYearThree>
			</div>
		</div>
	);
};

export default UgBankingFinanceCourseplan;
