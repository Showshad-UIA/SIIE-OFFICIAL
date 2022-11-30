import React from "react";

const Contact = () => {
	return (
		<div>
			<div className="mx-3">
				<p>
					<span className="font-bold">Email:</span>
					<span className="mx-20">D.Bowyer@Sydney IBS.edu.au</span>{" "}
				</p>
				<p>
					<span className="font-bold">Phone:</span>{" "}
					<span className="mx-[66px]">(02) 4620 3476</span>
				</p>
				<p>
					{" "}
					<span className="font-bold">Location:</span>{" "}
					<span className="mx-[50px]">1A.G.47 Campbelltown</span>
				</p>
				<p className="my-5 text-justify">
					PLEASE NOTE: obtaining information from this Directory must be for the
					legitimate purposes of doing business with and within Sydney IBS , and
					must not be used for unsolicited bulk e-mailing (spamming) or similar
					purposes.
				</p>
			</div>
		</div>
	);
};

export default Contact;
