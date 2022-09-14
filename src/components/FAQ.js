import React from "react";

const FAQ = () => {
	return (
		<div>
			<h1 className="text-center text-2xl text-bold text-blue-500 mb-5">FAQ</h1>
			<div className="bg-orange-400 h-[5px] mx-auto mb-5 w-16"></div>
			<div
				tabindex="0"
				class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5"
			>
				<div class="collapse-title text-xl font-medium">
					I am not a university student. Can I enrol at SIIE?
				</div>
				<div class="collapse-content">
					<p className="container">
						Yes you can. If you have already developed an innovative business
						idea at a higher education institution you can directly enroll in
						the Venture Funding program. However, if you are in the initial
						stages and still developing your business idea then we would
						recommend you complete the New Venture Creation course prior to
						enrolling in the Venture Funding Program.
					</p>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
