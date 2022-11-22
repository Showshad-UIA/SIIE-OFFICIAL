import React, { useState } from 'react';
import "../FAQ/Faq.css";
import Chevron from "../Apply/Chevron.svg";
const Faq = () => {
    
    const [step, setStep] = useState(false);
    const [step1, setStep1] = useState(false);
	const [step2, setStep2] = useState(false);
	const [step3, setStep3] = useState(false);
	const [step4, setStep4] = useState(false);
	const [step5, setStep5] = useState(false);
	const [step6, setStep6] = useState(false);
	const [step7, setStep7] = useState(false);
	const [step8, setStep8] = useState(false);
	const [step9, setStep9] = useState(false);
	const [step10, setStep10] = useState(false);
	const [step11, setStep11] = useState(false);
	const [step12, setStep12] = useState(false);
	const [step13, setStep13] = useState(false);
	const [step14, setStep14] = useState(false);

	return (
		<div className="accordion container mx-auto ">
			<div className="lg:mx-[150px]">
				<div className="mx-4">
					<h1 className="text-2xl font-bold my-3">FAQs- Admission & Scholarships</h1>
					
				</div>

                <button
					onClick={() => setStep(!step)}
					className="accordion-visible  text-sky-700 mb-3 border-t border-gray-500"
				>
					<span>What is a census date?</span>
					<img className={step && "active"} src={Chevron} />
				</button>
				{step && (
					<div
						
					>
						<div aria-hidden={step ? "true" : "false"} className=" mx-4">
                        <p className="mb-5 text-justify">
							The census date for each term is set by SYDNEY IBS in accordance with
							Commonwealth legislation. It is the deadline for:
						</p>

						<div className="mx-3">
							<li className="text-justify mb-3">
								Change of study load (full time / part time)
							</li>
							<li className="text-justify mb-3">Taking program leave</li>
							<li className="text-justify mb-3">
								Withdrawal from a course without financial or academic penalty
							</li>
							<li className="text-justify mb-3">Change of Residency status</li>
						</div>

						
							
						</div>
					</div>
				)}


				<button
					onClick={() => setStep1(!step1)}
					className="accordion-visible  text-sky-700 mb-3 border-t border-gray-500"
				>
					<span>Am I a Domestic or International candidate?</span>
					<img className={step1 && "active"} src={Chevron} />
				</button>
				{step1 && (
					<div
						
					>
						<div aria-hidden={step1 ? "true" : "false"} className=" mx-4">
                        <p className="mb-3">
							Please complete the admission and scholarship application using
							your current residential status. This can be updated when your
							residency status changes.
						</p>
						<p className="mb-3 text-justify">
							International scholarship applicants who receive their Australian
							Permanent Residency before the census date of the term they are
							applying for, will be considered for the equivalent domestic
							scholarship
						</p>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep2(!step2)}
					className="accordion-visible text-sky-700 mb-3 border-t border-gray-500"
				>
					<span>I am in the process of applying for Permanent Residency, should I apply as a Domestic or International candidate?
					</span>
					<img className={step2 && "active"} src={Chevron} />
				</button>
				{step2 && (
					<div
						
					>
						<div aria-hidden={step2 ? "true" : "false"} className="mx-4">
                        <p className="my-3 ">
							All applicants to the University must provide evidence of English
							ability that meets the SYDNEY IBS English language requirements.
						</p>

						<p className="mb-3">
							You must submit your satisfactory proof of English before your
							application can be assessed
						</p>
						<p className="mb-3">
							If you are applying for a SYDNEY IBS Scholarship, this must be prior to
							the scholarship application deadline (for those applying for a
							Waiver, the Waiver must be fully approved by the deadline)
						</p>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep3(!step3)}
					className="accordion-visible text-sky-700 mb-3 border-t border-gray-500"
				>
					<span>I am an International applicant but I don’t have my English test result yet. Will my application still be processed?</span>
					<img className={step3 && "active"} src={Chevron} />
				</button>
				{step3 && (
					<div
						
					>
						<div aria-hidden={step3 ? "true" : "false"} className="mx-4">
						<p className="mb-3">
							Before you apply, prepare your supporting documentation as per the
							<span className="text-sky-700 font-bold cursor-pointer hover:underline"> Document Submission Guidelines</span> .
						</p>
						<p className=" text-justify mb-3">
							Specific scholarship schemes, research programs, or Faculties may
							require additional documents not listed above, and these may be
							requested after the initial application. Visit your Faculty
							website below for guidance.
						</p>
						<p className="text-justify mb-3">
							You may submit scanned copies of your documents with your
							application. Documents may be verified at a later date, either
							with your home institution, or by sighting original documentation.
							You must be prepared to present your original documents to UNSW
							for inspection prior to enrolment if requested, so you will need
							to bring your original documents with you.
						</p>
						<div className="mx-10 mb-10">
							<li className=" mb-2 text-sky-700 cursor-pointer hover:underline">
								Sydney IBS Business School
							</li>
							<li className="mb-2 text-sky-700 cursor-pointer hover:underline">
								Faculty of Arts, Design & Architecture
							</li>
							<li className="mb-2 text-sky-700 cursor-pointer hover:underline">
								Faculty of Engineering
							</li>
							<li className="mb-2 text-sky-700 cursor-pointer hover:underline">
								Faculty of Law & Justice
							</li>
							<li className="mb-2 text-sky-700 cursor-pointer hover:underline">
								Faculty of Medicine & Health
							</li>
							<li className="mb-2 text-sky-700 cursor-pointer hover:underline">
								Faculty of Science
							</li>
							<li className="pb-3 text-sky-700 cursor-pointer hover:underline">
								UNSW Canberra
							</li>
						</div>
						</div>
					</div>
				)}

<button
					onClick={() => setStep4(!step4)}
					className="accordion-visible text-sky-700 mb-3 text-justify border-t border-gray-500"
				>
					<span>I am an international applicant and I have a strong command of the English language, but no IELTS result. How can I prove my English ability?</span>
					<img className={step4 && "active"} src={Chevron} />
				</button>
				{step4 && (
					<div
						
					>
						<div aria-hidden={step4 ? "true" : "false"} className="mx-4">
						<p className="my-3 ">
							Documents that are in a language other than English must be
							translated by an accredited translator before they are submitted
							to UNSW.
						</p>
						<div className="mx-10">
							<li className="mb-3">
								<span className="text-sky-700 font-bold cursor-pointer hover:underline ">NAATI</span> (the National Standards and Accreditation body for
								Translators and Interpreters), or
							</li>
							<li className="mb-3">
								A registered translator in an overseas country considered
								acceptable by the <span className="text-sky-700 font-bold cursor-pointer hover:underline ">Australian diplomatic mission</span> .
							</li>
						</div>

						<p className="mb-3">Each translation must include the following:</p>
						<div className="mx-10">
							<li className="mb-3">Translator’s signature and printed name</li>
							<li className="mb-3">
								Proof of accreditation, including name and membership number
							</li>
							<li className="mb-3">Date that the statement is made</li>
							<li className="mb-3">
								The text “The translated text in this document is an accurate
								and complete translation of the original document”
							</li>
						</div>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep5(!step5)}
					className="accordion-visible text-sky-700 mb-3 border-t border-gray-500"
				>
					<span>How do I submit my documents?</span>
					<img className={step5 && "active"} src={Chevron} />
				</button>
				{step5 && (
					<div
						
					>
						<div aria-hidden={step5 ? "true" : "false"} className="mx-4">
						<p className="my-3">
							All applicants, domestic and international, must meet* <span className="text-sky-700 font-bold cursor-pointer hover:underline">SYDNEY IBS English Language Requirements</span>  before submitting an application.
							Scholarship applicants must do so before the scholarship deadline
							(see Key Dates).
						</p>
						<p className="mb-3">
							You must meet the requirements through the following three
							channels:
						</p>
						<div>
							<div className="mx-10">
								<li className="text-justify mb-3"> <span className="text-sky-700 font-bold cursor-pointer hover:underline">English Language Tests and University English Courses</span>
									. You
									must confirm with your testing authority (e.g. Pearson's) that
									SYDNEY IBS has permission to view and verify your test results.
								</li>

								<li className="mb-3 text-sky-700 font-bold cursor-pointer hover:underline">Prior study in the medium of English</li>
								<li className="mb-3 text-sky-700 font-bold cursor-pointer hover:underline">Other qualifications</li>
							</div>
							<p className="mb-5">
								For full details of the  SYDNEY IBS English Language requirements
								please refer to the <span className="text-sky-700 font-bold cursor-pointer hover:underline">SYDNEY IBS English Language Requirements policy.</span> 
							</p>
							<p className="text-sm mb-3">
								{" "}
								*All English waiver requests must be approved by the scholarship
								deadline. In order to meet the deadline, all waiver requests
								must be submitted at least 6 weeks prior to the due date.
							</p>
						</div>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep6(!step6)}
					className="accordion-visible text-sky-700 mb-3 border-t border-gray-500"
				>
					<span>What are my chances of getting a scholarship?</span>
					<img className={step6 && "active"} src={Chevron} />
				</button>

				{step6 && (
					<div
						
					>
						<div aria-hidden={step6 ? "true" : "false"} className="mx-4">
						<p className="my-3">
							Once you have secured a supervisor, held your interview, developed
							a research description, and prepared your supporting documents,
							you are ready to <span className="text-sky-700 font-bold cursor-pointer hover:underline">lodge your application</span>  . Only full applications
							(i.e. with all required <span className="text-sky-700 font-bold cursor-pointer hover:underline">documents</span> ) will be processed for
							assessment.
						</p>
						<p className="mb-3">
							If you wish to be considered for a scholarship, simply indicate
							this on the application form and select the applicable scholarship
							round for your preferred term start date. For more information on
							applying for a scholarship, please visit  <span className="text-sky-700 font-bold cursor-pointer hover:underline">Graduate Research
							Scholarships.</span> 
						</p>
						<p className="mb-3">
							Your program needs to be within the same school as your
							supervisor. You should confirm the correct program code with your
							supervisor, your <span className="text-sky-700 font-bold cursor-pointer hover:underline">Postgraduate Coordinator </span>  or by referring to the
							 <span className="text-sky-700 font-bold cursor-pointer hover:underline">SYDNEY IBS Handbook</span> .
						</p>
						<p className="mb-3">
							Applicants should only submit <span className="text-black font-bold cursor-pointer hover:underline">one </span> application at a time.
						</p>
						<p className="mb-5">Application deadlines can be found on <span className="text-sky-700 font-bold cursor-pointer hover:underline">this page </span>.</p>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep7(!step7)}
					className="accordion-visible text-sky-700 mb-3 border-t border-gray-500"
				>
					<span>How will my referees be contacted?</span>
					<img className={step7 && "active"} src={Chevron} />
				</button>

				{step7 && (
					<div
						
					>
						<div aria-hidden={step7 ? "true" : "false"} className="mx-4">
						<p className="my-3">
						It will take 4 working days for your application to be processed after you submit it. Once processed, you’ll receive an email confirmation with a UNSW Student ID. If you have any outstanding documentation, these will also be listed in your confirmation email.
						</p>
						<p className="mb-3">
						Once you’ve received your confirmation email, you can upload any outstanding documents through your <span className="text-sky-700 font-bold cursor-pointer hover:underline">SYDNEY IBS Apply Online </span> account. You will be notified of any rejected or outstanding documents within this account so you will need to log in periodically to view. Please allow a week for additional submitted documents to be checked and updated
						</p>
						<h1 className="mb-3 text-lg text-black font-bold">
						Tracking Progress of your Application
						</h1>
						<p className="mb-3">
						If you have applied for Admission and Scholarship, both outcomes will be released after the date outlined on <span className="text-sky-700 font-bold cursor-pointer hover:underline">this page </span>. If you have alternative funding, and have applied for admission only, the outcome would typically take 6-8 weeks to be processed.
						</p>
						<p>
						You can track the progress of your application through your <span className="text-sky-700 font-bold cursor-pointer hover:underline">SYDNEY IBS Apply Online </span> account.
						</p>
						<p className="my-3">
						In addition to updating the overall status of your application, the Graduate Research School will update the status of each document once it has been checked. We recommend that you check this document tracking to ensure that you have submitted all required documentation.
						</p>
						<h1 className="text-black text-lg font-bold">
						Making Changes to your Application
						</h1>
						<p className="my-3">If you wish to make any changes after submitting your application, simply send us an email and we’ll make the changes for you!</p>
						<p className="mb-3">You don’t need to submit a new application. If you want to defer your start term, change programs or be included in the next scholarship round, we can update your existing application. </p>
						<p className=" mb-5">Or if you wish to provide outstanding documents to your submitted application, please upload them through your <span className="text-sky-700 font-bold cursor-pointer hover:underline">SYDNEY IBS Apply Online </span>account.</p>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep8(!step8)}
					className="accordion-visible text-sky-700 mb-3 border-t border-gray-500"
				>
					<span>How do I track the status of my application and check all documents are received?</span>
					<img className={step8 && "active"} src={Chevron} />
				</button>

				{step8 && (
					<div
						
					>
						<div aria-hidden={step8 ? "true" : "false"} className="mx-4">
						<p className="my-3">
							If you have met the requirements, you will receive a letter of
							offer to study at SYDNEY SIBS.
						</p>
						<p className="mb-3">There are two types of offer letters:</p>
						<h1 className="mb-3 text-black font-bold text-lg">
							Conditional Offer
						</h1>
						<p className="mb-3">
							You have met some, but not all, requirements. The conditions that
							you need to meet will be outlined in your offer letter. You will
							not be able to accept a conditional offer, but are required to
							upload your remaining documents through <span className="text-sky-700 text-bold cursor-pointer hover:underline">Apply Online</span> for
							unconditional consideration.
						</p>
						<p>
							New candidates are expected to enrol by the term <span className="font-bold text-sky-700 cursor-pointer hover:underline ">Start Date</span>,
							therefore you must ensure you submit your documents early enough
							to allow time to arrive by that date.
						</p>
						<h1 className="text-black text-lg font-bold">
							Unconditional Offer
						</h1>
						<p className="my-3">
							You have met the admission requirements and conditions for entry.
							You may still be required to meet certain conditions prior to
							enrolment, and these conditions will be outlined in your offer
							letter. Your offer letter will outline how to accept the offer and
							pay any fees required before you can enrol.
						</p>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep9(!step9)}
					className="accordion-visible text-sky-700 mb-3 border-t border-gray-500"
				>
					<span>What is a conditional offer?</span>
					<img className={step9 && "active"} src={Chevron} />
				</button>
				{step9 && (
					<div
						
					>
						<div aria-hidden={step9 ? "true" : "false"} className="mx-4">
						<p className="my-3">
							New candidates are expected to enrol by the term{" "}
							<span className="text-sky-700 font-bold cursor-pointer hover:underline">
								Start Date
							</span>
							, therefore you must ensure you respond to your offer early to
							allow enough time to arrive by that date.
						</p>
						<h1 className="text-sky-700 text-md mb-3">Deferral</h1>
						<p>
							Higher Degree Research (HDR) applicants can request to defer for
							up to one year after the initial offer term. UNSW HDR Scholarship
							offers may be able to be deferred on a case by case basis (check
							your scholarship letter for details). Deferrals are only approved
							where conditions are met, including continuing to meet UNSW entry
							requirements, and availability of supervision and resources.
						</p>
						<h1 className="text-sky-700 my-3">How do I defer?</h1>
						<div>
							<li>
								If you have a conditional offer, please email
								<span>domestic.grs@unsw.edu.au</span> or{" "}
								<span className="text-sky-700 cursor-pointer">
									international.grs@unsw.edu.au
								</span>
								, indicating the new term you wish to start in
							</li>
							<li>
								If you have an unconditional offer, please login to{" "}
								<span className="text-sky-700 cursor-pointer hover:underline">
									Accept Online
								</span>
							</li>
							<p className="mt-3">
								Please ensure you have already submitted any extra required
								documentation prior to requesting deferral.
							</p>
						</div>

						<p className="mb-3 text-black text-md font-bold mt-3">Acceptance</p>
						<p className="mb-3">
							<span className="text-black  font-bold">
								Conditional offers:{" "}
							</span>{" "}
							Conditional admission and/or scholarship offers cannot be accepted
							through Apply Online. Outstanding documentation must be provided
							prior to a full offer being issued.
						</p>
						<p className="mb-3">
							<span className="text-black  font-bold">
								Sponsored applicants:{" "}
							</span>{" "}
							Sponsored applicants must accept their offer by completing and
							emailing the admission offer reply forms, International Sponsored
							Student Agreement form, and financial guarantee from your sponsor
							as per your offer letter
						</p>
						<div>
							<h1 className="mb-3 text-md text-black font-bold">
								Unconditional Offers - Accept Online
							</h1>
							<p>Accepting online is a 2 part-process</p>
							<p className="mb-3 mt-3">
								<span className="text-black font-bold ">Part I:</span> Accept or
								defer your offer of admission and scholarship (if applicable) in
								Accept Online to ensure your place in the program. As part of
								this process, unless accepting an unconditional UNSW tuition
								paying scholarship, international applicants will be required to
								pay a tuition fee deposit.
							</p>
							<p>
								<span className="text-black font-bold ">Part II: </span> Confirm
								your personal details, complete the Financial and Student
								Declaration sections. Part II must only be completed once you
								are ready to arrive and enrol (including for International
								applicants, being granted the student visa and arriving in
								Australia). Acceptance deadlines and procedures vary.
							</p>
						</div>
						<div>
							<h1 className="text-lg text-black font-bold mt-3">Deadline</h1>
							<p>
								Scholarship recipients must accept or defer within 2 weeks of
								receiving their unconditional offers, admission only recipients
								must accept or defer within 1 month of receiving the
								unconditional offer.
							</p>
							<p>
								If you do not accept or defer by the deadline date your offer
								may lapse.
							</p>
							<h1 className="text-lg text-black mt-3 font-bold">
								After acceptance
							</h1>
							<p>
								Once you have provided all requirements for acceptance, a
								Confirmation of Enrolment (CoE) will be issued to you within the
								following fortnight. You will need to use this to apply for a
								visa.{" "}
							</p>
							<p className="mt-3 mb-5">
								Before proceeding with the next steps, you must arrive at your
								study location, and if you are International, must hold on an
								appropriate visa for the full length of study. If you are not
								able to meet these requirements prior to the{" "}
								<span className="text-sky-700 font-bold">Term Start Date</span>,
								you should defer your offer (see “Deferral” above).
							</p>
						</div>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep10(!step10)}
					className="accordion-visible text-sky-700 mb-3 border-t border-gray-500"
				>
					<span>Why did I get an offer but no notification of scholarship success?</span>
					<img className={step10 && "active"} src={Chevron} />
				</button>
				{step10 && (
					<div
						
					>
						<div aria-hidden={step10 ? "true" : "false"} className="mx-4">
						<p className="my-3">
							Planning your relocation to Australia? Sydney IBS international
							travel concierge service can help you plan your trip, including:
						</p>

						<div className="mx-3">
							<li> booking your flights</li>
							<li> organising transport from the airport</li>
							<li> arranging accommodation</li>
							<li> keeping up-to-date with the latest COVID-19 measures</li>
						</div>

						<p className="mt-5 mb-5">
							<span className="text-sky-700 font-bold cursor-pointer hover:underline">
								Click here
							</span>{" "}
							for more information.
						</p>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep11(!step11)}
					className="accordion-visible text-sky-700 mb-3 border-t border-gray-500"
				>
					<span>I have applied for a scholarship - why does my admission letter state I am 'Full Fee-Paying'?</span>
					<img className={step11 && "active"} src={Chevron} />
				</button>

				{step11 && (
					<div
						
					>
						<div aria-hidden={step11 ? "true" : "false"} className="mx-4">
						<p className="my-3">
							Have questions about applying for admission or a scholarship?{" "}
							<span className="text-sky-700 font-bold cursor-pointer hover:underline">
								Visit this page
							</span>{" "}
							for answers to some common questions.
						</p>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep12(!step12)}
					className="accordion-visible text-sky-700 mb-3 border-t border-gray-500"
				>
					<span>When will I receive the outcome of my application?</span>
					<img className={step12 && "active"} src={Chevron} />
				</button>
				{step12 && (
					<div
						
					>
						<div aria-hidden={step12 ? "true" : "false"} className="mx-4">
						<p className="my-3">
							Have questions? Contact the HDR Admissions and Scholarships team
						</p>
						<p className="mb-3">
							<span className="text-black  font-bold">Phone: </span>{" "}
							<a
								href=""
								className="text-sky-700 cursor-pointer hover:underline"
							>
								+61211223344
							</a>
						</p>
						<p className="mb-3">
							<span className="text-black  font-bold">General enquiries:</span>{" "}
							<a
								href=""
								className="text-sky-700 cursor-pointer hover:underline"
							>
								grs@sibs.edu.au
							</a>
						</p>
						<p className="mb-3">
							<span className="text-black  font-bold">
								Domestic applicants:{" "}
							</span>{" "}
							<a
								href=""
								className="text-sky-700 cursor-pointer hover:underline"
							>
								domestic.grs@sibs.edu.au
							</a>
						</p>
						<p>
							<span className="text-black  font-bold">
								International applicants:
							</span>{" "}
							<a
								href=""
								className="text-sky-700 cursor-pointer hover:underline"
							>
								international.grs@sibs.edu.au
							</a>
						</p>
						</div>
					</div>
				)}
				<button
					onClick={() => setStep13(!step13)}
					className="accordion-visible text-sky-700 mb-3 border-t border-gray-500"
				>
					<span>Can I defer my offer?</span>
					<img className={step13 && "active"} src={Chevron} />
				</button>
				{step13 && (
					<div
						
					>
						<div aria-hidden={step13 ? "true" : "false"} className="mx-4">
						<p className="my-3">
							Have questions? Contact the HDR Admissions and Scholarships team
						</p>
						<p className="mb-3">
							<span className="text-black  font-bold">Phone: </span>{" "}
							<a
								href=""
								className="text-sky-700 cursor-pointer hover:underline"
							>
								+61211223344
							</a>
						</p>
						<p className="mb-3">
							<span className="text-black  font-bold">General enquiries:</span>{" "}
							<a
								href=""
								className="text-sky-700 cursor-pointer hover:underline"
							>
								grs@sibs.edu.au
							</a>
						</p>
						<p className="mb-3">
							<span className="text-black  font-bold">
								Domestic applicants:{" "}
							</span>{" "}
							<a
								href=""
								className="text-sky-700 cursor-pointer hover:underline"
							>
								domestic.grs@sibs.edu.au
							</a>
						</p>
						<p>
							<span className="text-black  font-bold">
								International applicants:
							</span>{" "}
							<a
								href=""
								className="text-sky-700 cursor-pointer hover:underline"
							>
								international.grs@sibs.edu.au
							</a>
						</p>
						</div>
					</div>
				)}
				<button
					onClick={() => setStep14(!step14)}
					className="accordion-visible text-justify text-sky-700 mb-3 border-t border-gray-500"
				>
					<span>I submitted my Commencement of Study Form to activate my scholarship payments, but when I log onto MySYDNEY IBS it asks me to pay the tuition fee. What should I do?</span>
					<img className={step14 && "active"} src={Chevron} />
				</button>
				{step14 && (
					<div
						
					>
						<div aria-hidden={step14 ? "true" : "false"} className="mx-4">
						<p className="my-3 text-justify">
							Have questions? Contact the HDR Admissions and Scholarships team
						</p>
						<p className="mb-3">
							<span className="text-black  font-bold">Phone: </span>{" "}
							<a
								href=""
								className="text-sky-700 cursor-pointer hover:underline"
							>
								+61211223344
							</a>
						</p>
						<p className="mb-3">
							<span className="text-black  font-bold">General enquiries:</span>{" "}
							<a
								href=""
								className="text-sky-700 cursor-pointer hover:underline"
							>
								grs@sibs.edu.au
							</a>
						</p>
						<p className="mb-3">
							<span className="text-black  font-bold">
								Domestic applicants:{" "}
							</span>{" "}
							<a
								href=""
								className="text-sky-700 cursor-pointer hover:underline"
							>
								domestic.grs@sibs.edu.au
							</a>
						</p>
						<p>
							<span className="text-black  font-bold">
								International applicants:
							</span>{" "}
							<a
								href=""
								className="text-sky-700 cursor-pointer hover:underline"
							>
								international.grs@sibs.edu.au
							</a>
						</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Faq;