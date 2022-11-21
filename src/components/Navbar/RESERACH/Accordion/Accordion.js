import React, { useState, useEffect, useRef } from "react";
import "../Accordion/Accordion.css";
import Chevron from "../Accordion/Chevron.svg";

export default function Accordion() {
	const [step1, setStep1] = useState(false);
	const [step2, setStep2] = useState(false);
	const [step3, setStep3] = useState(false);
	const [step4, setStep4] = useState(false);
	const [step5, setStep5] = useState(false);
	const [step6, setStep6] = useState(false);
	

	
	return (
		<div className="accordion container mx-auto pb-20">
			<div className="lg:mx-[150px]">
				<div>
					<h1 className="text-2xl font-bold my-3">
						Testing phase.....
					</h1>
					<p className="mb-3">
						Ready to apply for a research higher degree program at UNSW? The
						information below outlines the steps you need to follow, including
						where to find the application form for admission and scholarship,
						the supporting documents you need to provide, and the{" "}
						<span className="text-sky-700 font-bold">key dates</span> for your
						application.
					</p>
					<p className="mb-3">
						It is the applicant’s responsibility to ensure that their
						application is submitted in full by the scholarship closing date.
						All correct and satisfactory documents must be fully submitted with
						the application, including English translations, Financial
						Declaration and proof of English. Additional documents can’t be
						added to an application until after the application has been
						reviewed, which may not occur before application deadlines.
					</p>
					<p className="mb-10 text-md">
						Please refer to Step 3 to ensure you have the correct documents
						before submission.
					</p>
				</div>
				<button
					onClick={() => setStep1(!step1)}
					className="accordion-visible text-sky-700 mb-3 border-y-2 border-gray-500"
				>
					<span>Step 1: Determine Your Eligibility</span>
					<img className={step1 && "active"} src={Chevron} />
				</button>
				{step1 && (
					<div
						
						className={step1 ? "accordion-toggle animated " : "accordion-toggle "}
					>
						<div aria-hidden={step1 ? "true" : "false"} className="">
							<p className="mb-5">
								Sydney IBS has three scholarship application rounds per year.
								Applicants need to allow adequate time between the receipt of
								their offer and Term Start Date for pre-departure preparations
								such as the acceptance process, visa processing, travel, and
								enrolment.
							</p>
							<p className="mb-5">
								Applicants who have funding from an alternative source (not
								Sydney IBS scholarship) must submit their application (and all
								required documentation){" "}
								<span className="text-black font-bold">at least</span> eight (8)
								weeks before an offer of admission is required, due to the
								assessment processing timeframe.
							</p>
							<p className="mb-10">
								Applicants who are applying for a scholarship through Sydney IBS
								should submit their application (and all required documentation)
								by the following deadlines:
							</p>
						</div>
					</div>
				)}

				 <button
					onClick={() => setStep2(!step2)}
					className="accordion-visible text-sky-700 mb-3 border-y-2 border-gray-500"
				>
					<span>Step 2: Find a Supervisor and Prepare Your Research Description</span>
					<img className={step2 && "active"} src={Chevron} />
				</button>

				<div
					className={step2 ? "accordion-toggle animated" : "accordion-toggle"}
					
				>
					<div aria-hidden={step2 ? "true" : "false"} className="">
						<p className="mb-5">
							Sydney IBS has three scholarship application rounds per year.
							Applicants need to allow adequate time between the receipt of
							their offer and Term Start Date for pre-departure preparations
							such as the acceptance process, visa processing, travel, and
							enrolment.
						</p>
						<p className="mb-5">
							Applicants who have funding from an alternative source (not Sydney
							IBS scholarship) must submit their application (and all required
							documentation){" "}
							<span className="text-black font-bold">at least</span> eight (8)
							weeks before an offer of admission is required, due to the
							assessment processing timeframe.
						</p>
						<p className="mb-10">
							Applicants who are applying for a scholarship through Sydney IBS
							should submit their application (and all required documentation)
							by the following deadlines:
						</p>
						
					</div>
				</div>
				
				<button
					onClick={() => setStep3(!step3)}
					className="accordion-visible text-sky-700 mb-3 border-y-2 border-gray-500"
				>
					<span>Step 3: Prepare Your Supporting Documentation</span>
					<img className={step3 && "active"} src={Chevron} />
				</button>

				<div
					className={step3 ? "accordion-toggle animated" : "accordion-toggle"}
					
				>
					<div aria-hidden={step3 ? "true" : "false"} className="">
						<p className="mb-5">
							Sydney IBS has three scholarship application rounds per year.
							Applicants need to allow adequate time between the receipt of
							their offer and Term Start Date for pre-departure preparations
							such as the acceptance process, visa processing, travel, and
							enrolment.
						</p>
						<p className="mb-5">
							Applicants who have funding from an alternative source (not Sydney
							IBS scholarship) must submit their application (and all required
							documentation){" "}
							<span className="text-black font-bold">at least</span> eight (8)
							weeks before an offer of admission is required, due to the
							assessment processing timeframe.
						</p>
						<p className="mb-10">
							Applicants who are applying for a scholarship through Sydney IBS
							should submit their application (and all required documentation)
							by the following deadlines:
						</p>
						
					</div>
				</div>
				{/* 
				<button
					onClick={() => setStep2(!step2)}
					className="accordion-visible text-sky-700 mb-3 border-y-2 border-gray-500"
				>
					<span>Step 4: English Translations of Documents</span>
					<img className={toggle && "active"} src={Chevron} />
				</button>

				<div
					className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
					style={{ height: toggle ? `${heightEl}` : "0px" }}
					ref={refHeight}
				>
					<div aria-hidden={toggle ? "true" : "false"} className="">
						<p className="mb-5">
							Sydney IBS has three scholarship application rounds per year.
							Applicants need to allow adequate time between the receipt of
							their offer and Term Start Date for pre-departure preparations
							such as the acceptance process, visa processing, travel, and
							enrolment.
						</p>
						<p className="mb-5">
							Applicants who have funding from an alternative source (not Sydney
							IBS scholarship) must submit their application (and all required
							documentation){" "}
							<span className="text-black font-bold">at least</span> eight (8)
							weeks before an offer of admission is required, due to the
							assessment processing timeframe.
						</p>
						<p className="mb-10">
							Applicants who are applying for a scholarship through Sydney IBS
							should submit their application (and all required documentation)
							by the following deadlines:
						</p>
						
					</div>
				</div>
				<button
					onClick={toggleState}
					className="accordion-visible text-sky-700 mb-3 border-y-2 border-gray-500"
				>
					<span>Step 5: Meet the UNSW English Language Requirements</span>
					<img className={toggle && "active"} src={Chevron} />
				</button>

				<div
					className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
					style={{ height: toggle ? `${heightEl}` : "0px" }}
					ref={refHeight}
				>
					<div aria-hidden={toggle ? "true" : "false"} className="">
						<p className="mb-5">
							Sydney IBS has three scholarship application rounds per year.
							Applicants need to allow adequate time between the receipt of
							their offer and Term Start Date for pre-departure preparations
							such as the acceptance process, visa processing, travel, and
							enrolment.
						</p>
						<p className="mb-5">
							Applicants who have funding from an alternative source (not Sydney
							IBS scholarship) must submit their application (and all required
							documentation){" "}
							<span className="text-black font-bold">at least</span> eight (8)
							weeks before an offer of admission is required, due to the
							assessment processing timeframe.
						</p>
						<p className="mb-10">
							Applicants who are applying for a scholarship through Sydney IBS
							should submit their application (and all required documentation)
							by the following deadlines:
						</p>
						
					</div>
				</div>
				<button
					onClick={toggleState}
					className="accordion-visible text-sky-700 mb-3 border-y-2 border-gray-500"
				>
					<span>Step 6: Submit an Application</span>
					<img className={toggle && "active"} src={Chevron} />
				</button>

				<div
					className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
					style={{ height: toggle ? `${heightEl}` : "0px" }}
					ref={refHeight}
				>
					<div aria-hidden={toggle ? "true" : "false"} className="">
						<p className="mb-5">
							Sydney IBS has three scholarship application rounds per year.
							Applicants need to allow adequate time between the receipt of
							their offer and Term Start Date for pre-departure preparations
							such as the acceptance process, visa processing, travel, and
							enrolment.
						</p>
						<p className="mb-5">
							Applicants who have funding from an alternative source (not Sydney
							IBS scholarship) must submit their application (and all required
							documentation){" "}
							<span className="text-black font-bold">at least</span> eight (8)
							weeks before an offer of admission is required, due to the
							assessment processing timeframe.
						</p>
						<p className="mb-10">
							Applicants who are applying for a scholarship through Sydney IBS
							should submit their application (and all required documentation)
							by the following deadlines:
						</p>
						
					</div>
				</div>
				<button
					onClick={toggleState}
					className="accordion-visible text-sky-700 mb-3 border-y-2 border-gray-500"
				>
					<span>After You Submit an Application</span>
					<img className={toggle && "active"} src={Chevron} />
				</button>

				<div
					className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
					style={{ height: toggle ? `${heightEl}` : "0px" }}
					ref={refHeight}
				>
					<div aria-hidden={toggle ? "true" : "false"} className="">
						<p className="mb-5">
							Sydney IBS has three scholarship application rounds per year.
							Applicants need to allow adequate time between the receipt of
							their offer and Term Start Date for pre-departure preparations
							such as the acceptance process, visa processing, travel, and
							enrolment.
						</p>
						<p className="mb-5">
							Applicants who have funding from an alternative source (not Sydney
							IBS scholarship) must submit their application (and all required
							documentation){" "}
							<span className="text-black font-bold">at least</span> eight (8)
							weeks before an offer of admission is required, due to the
							assessment processing timeframe.
						</p>
						<p className="mb-10">
							Applicants who are applying for a scholarship through Sydney IBS
							should submit their application (and all required documentation)
							by the following deadlines:
						</p>
						
					</div>
				</div>
				<button
					onClick={toggleState}
					className="accordion-visible text-sky-700 mb-3 border-y-2 border-gray-500"
				>
					<span>Receiving an Offer</span>
					<img className={toggle && "active"} src={Chevron} />
				</button>

				<div
					className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
					style={{ height: toggle ? `${heightEl}` : "0px" }}
					ref={refHeight}
				>
					<div aria-hidden={toggle ? "true" : "false"} className="">
						<p className="mb-5">
							Sydney IBS has three scholarship application rounds per year.
							Applicants need to allow adequate time between the receipt of
							their offer and Term Start Date for pre-departure preparations
							such as the acceptance process, visa processing, travel, and
							enrolment.
						</p>
						<p className="mb-5">
							Applicants who have funding from an alternative source (not Sydney
							IBS scholarship) must submit their application (and all required
							documentation){" "}
							<span className="text-black font-bold">at least</span> eight (8)
							weeks before an offer of admission is required, due to the
							assessment processing timeframe.
						</p>
						<p className="mb-10">
							Applicants who are applying for a scholarship through Sydney IBS
							should submit their application (and all required documentation)
							by the following deadlines:
						</p>
						
					</div>
				</div>
				<button
					onClick={toggleState}
					className="accordion-visible text-sky-700 mb-3 border-y-2 border-gray-500"
				>
					<span>Responding to an Offer</span>
					<img className={toggle && "active"} src={Chevron} />
				</button>

				<div
					className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
					style={{ height: toggle ? `${heightEl}` : "0px" }}
					ref={refHeight}
				>
					<div aria-hidden={toggle ? "true" : "false"} className="">
						<p className="mb-5">
							Sydney IBS has three scholarship application rounds per year.
							Applicants need to allow adequate time between the receipt of
							their offer and Term Start Date for pre-departure preparations
							such as the acceptance process, visa processing, travel, and
							enrolment.
						</p>
						<p className="mb-5">
							Applicants who have funding from an alternative source (not Sydney
							IBS scholarship) must submit their application (and all required
							documentation){" "}
							<span className="text-black font-bold">at least</span> eight (8)
							weeks before an offer of admission is required, due to the
							assessment processing timeframe.
						</p>
						<p className="mb-10">
							Applicants who are applying for a scholarship through Sydney IBS
							should submit their application (and all required documentation)
							by the following deadlines:
						</p>

					</div>
				</div>
				<button
					onClick={toggleState}
					className="accordion-visible text-sky-700 mb-3 border-y-2 border-gray-500"
				>
					<span>Travelling to Australia</span>
					<img className={toggle && "active"} src={Chevron} />
				</button>

				<div
					className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
					style={{ height: toggle ? `${heightEl}` : "0px" }}
					ref={refHeight}
				>
					<div aria-hidden={toggle ? "true" : "false"} className="">
						<p className="mb-5">
							Sydney IBS has three scholarship application rounds per year.
							Applicants need to allow adequate time between the receipt of
							their offer and Term Start Date for pre-departure preparations
							such as the acceptance process, visa processing, travel, and
							enrolment.
						</p>
						<p className="mb-5">
							Applicants who have funding from an alternative source (not Sydney
							IBS scholarship) must submit their application (and all required
							documentation){" "}
							<span className="text-black font-bold">at least</span> eight (8)
							weeks before an offer of admission is required, due to the
							assessment processing timeframe.
						</p>
						<p className="mb-10">
							Applicants who are applying for a scholarship through Sydney IBS
							should submit their application (and all required documentation)
							by the following deadlines:
						</p>

					</div>
				</div>
				<button
					onClick={toggleState}
					className="accordion-visible text-sky-700 mb-3 border-y-2 border-gray-500"
				>
					<span>Frequently Asked Questions</span>
					<img className={toggle && "active"} src={Chevron} />
				</button>

				<div
					className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
					style={{ height: toggle ? `${heightEl}` : "0px" }}
					ref={refHeight}
				>
					<div aria-hidden={toggle ? "true" : "false"} className="">
						<p className="mb-5">
							Sydney IBS has three scholarship application rounds per year.
							Applicants need to allow adequate time between the receipt of
							their offer and Term Start Date for pre-departure preparations
							such as the acceptance process, visa processing, travel, and
							enrolment.
						</p>
						<p className="mb-5">
							Applicants who have funding from an alternative source (not Sydney
							IBS scholarship) must submit their application (and all required
							documentation){" "}
							<span className="text-black font-bold">at least</span> eight (8)
							weeks before an offer of admission is required, due to the
							assessment processing timeframe.
						</p>
						<p className="mb-10">
							Applicants who are applying for a scholarship through Sydney IBS
							should submit their application (and all required documentation)
							by the following deadlines:
						</p>
						
					</div>
				</div>
				<button
					onClick={toggleState}
					className="accordion-visible text-sky-700 mb-3 border-y-2 border-gray-500"
				>
					<span>Contact Us</span>
					<img className={toggle && "active"} src={Chevron} />
				</button>

				<div
					className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
					style={{ height: toggle ? `${heightEl}` : "0px" }}
					ref={refHeight}
				>
					<div aria-hidden={toggle ? "true" : "false"} className="">
						<p className="mb-5">
							Sydney IBS has three scholarship application rounds per year.
							Applicants need to allow adequate time between the receipt of
							their offer and Term Start Date for pre-departure preparations
							such as the acceptance process, visa processing, travel, and
							enrolment.
						</p>
						<p className="mb-5">
							Applicants who have funding from an alternative source (not Sydney
							IBS scholarship) must submit their application (and all required
							documentation){" "}
							<span className="text-black font-bold">at least</span> eight (8)
							weeks before an offer of admission is required, due to the
							assessment processing timeframe.
						</p>
						
						
					</div>
				</div> */} 
			</div>
		</div>
	);
}
