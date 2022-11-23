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
	const [steps, setSteps] = useState(false);
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
					className="accordion-visible  text-sky-700 font-bold mb-3 border-t border-gray-500"
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
					className="accordion-visible  text-sky-700 font-bold mb-3 border-t border-gray-500"
				>
					<span>Am I a Domestic or International candidate?</span>
					<img className={step1 && "active"} src={Chevron} />
				</button>
				{step1 && (
					<div
						
					>
						<div aria-hidden={step1 ? "true" : "false"} className=" mx-4">
						<li className="text-justify mb-3">
							Domestic candidates are: Australian Permanent Residents or
							Citizens, or New Zealand Citizens
						</li>
						<li className="text-justify mb-3">
							International candidates are: New Zealand Permanent Residents, or
							Citizens or Permanent Residents of all other countries
						</li>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep2(!step2)}
					className="accordion-visible text-sky-700 font-bold mb-3 border-t border-gray-500"
				>
					<span>I am in the process of applying for Permanent Residency, should I apply as a Domestic or International candidate?
					</span>
					<img className={step2 && "active"} src={Chevron} />
				</button>
				{step2 && (
					<div
						
					>
						<div aria-hidden={step2 ? "true" : "false"} className="mx-4">
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
					onClick={() => setStep3(!step3)}
					className="accordion-visible text-sky-700 font-bold mb-3 border-t border-gray-500"
				>
					<span>I am an International applicant but I don’t have my English test result yet. Will my application still be processed?</span>
					<img className={step3 && "active"} src={Chevron} />
				</button>
				{step3 && (
					<div
						
					>
						<div aria-hidden={step3 ? "true" : "false"} className="mx-4">
						<p className="my-3 ">
							All applicants to the University must provide evidence of English
							ability that meets the  <span className='text-sky-700 cursor-pointer hover:underline'>SYDNEY IBS
							English language requirements</span>.
						</p>

						<p className="mb-3">
							You must submit your satisfactory proof of English before your
							application can be assessed
						</p>
						<p className="mb-3">
							If you are applying for a SYDNEY IBS Scholarship, this must be prior to
							the   <span className='text-sky-700 cursor-pointer hover:underline'> scholarship application deadline</span>  (for those applying for a
							Waiver, the Waiver must be fully approved by the deadline)
						</p>
						</div>
					</div>
				)}

<button
					onClick={() => setStep4(!step4)}
					className="accordion-visible text-sky-700 font-bold mb-3 text-justify border-t border-gray-500"
				>
					<span>I am an international applicant and I have a strong command of the English language, but no IELTS result. How can I prove my English ability?</span>
					<img className={step4 && "active"} src={Chevron} />
				</button>
				{step4 && (
					<div
						
					>
						<div aria-hidden={step4 ? "true" : "false"} className="mx-4">
						<p className="my-3">
							There are a number of ways to meet the English language
							proficiency requirements for admission to a research higher degree
							at SYDNEY IBS. These include completion of an approved English test and
							gaining scores that meet the SYDNEY IBS English language requirements,
							and completing a recognised qualification at an institution where
							the language that courses are taught in is English. For a detailed
							list of approved ways to meet these requirements, visit <span className='text-sky-700 cursor-pointer hover:underline'>SYDNEY IBS
							English language requirements</span> .
						</p>
						</div>
					</div>
				)}

				<button
					onClick={() => setSteps(!steps)}
					className="accordion-visible text-sky-700 font-bold mb-3 border-t border-gray-500"
				>
					<span>How do I apply for a scholarship?</span>
					<img className={steps && "active"} src={Chevron} />
				</button>
				{steps && (
					<div
						
					>
						<div aria-hidden={steps ? "true" : "false"} className="mx-4">
						<p className="my-3">
						You can apply for a SYDNEY IBS scholarship when you complete your application for admission. 

						</p>
						<p className="mb-3">
						For more on SYDNEY IBS Scholarship information, visit  <span className='text-sky-700 cursor-pointer hover:underline'>Scholarships</span>  . For information on how to submit an application, visit  <span className='text-sky-700 cursor-pointer hover:underline'>How to Apply</span> . 

						</p>

						<p className="mb-3">
						SYDNEY IBS Sydney Postgraduate Research Scholarships are assessed in 3 Rounds throughout the year. These rounds will be open to both International and Domestic applicants.

						</p>

						<p className="mb-3">
						Please check  <span className='text-sky-700 cursor-pointer hover:underline'>this page</span>  for the application dates, and to ensure you are selecting the correct round and the respective application term. Late applications will not be accepted.
.

						</p>

						<p className="mb-3">
						Domestic candidates will automatically be considered for the RTP Fee Offset. If you  <span className='text-black font-bold cursor-pointer hover:underline'>are not</span>   applying for a stipend scholarship, during the online application you must indicate that you are not applying for a scholarship. 


						</p>
						</div>
					</div>
				)}
				<button
					onClick={() => setStep5(!step5)}
					className="accordion-visible text-sky-700 font-bold mb-3 border-t border-gray-500"
				>
					<span>How do I submit my documents?</span>
					<img className={step5 && "active"} src={Chevron} />
				</button>
				{step5 && (
					<div
						
					>
						<div aria-hidden={step5 ? "true" : "false"} className="mx-4">
						<p className="my-3">
							You need to submit scanned copies of your supporting documents
							with your application for admission, so it’s a good idea to
							prepare these documents before completing the online application
							form. All documents must be in English or include a certified
							English translation.
						</p>
						<p className="mb-3">
							It is possible to submit supporting documents after you’ve
							submitted your online application form, however some documents are
							compulsory for your application to be processed. For further
							information, see the Document Submission Guidelines at  <span className='text-sky-700 cursor-pointer hover:underline'>this page</span>  .
						</p>

						<p className="mb-3">
							Documents will be verified at a later date. You must be prepared
							to present your original documents to SYDNEY IBS for inspection prior to
							enrolment if requested, so you will need to bring your original
							documents with you. Additionally, SYDNEY IBS may verify your documents
							with your home institution. If your documents can't be verified,
							you may be required to bring them to the Graduate Research School
							for verification.
						</p>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep6(!step6)}
					className="accordion-visible text-sky-700 font-bold mb-3 border-t border-gray-500"
				>
					<span>What are my chances of getting a scholarship?</span>
					<img className={step6 && "active"} src={Chevron} />
				</button>

				{step6 && (
					<div
						
					>
						<div aria-hidden={step6 ? "true" : "false"} className="mx-4">
						<p className="my-3">
							Scholarships are extremely competitive, particularly for
							Internationals. All applicants must meet minimum eligibility and
							academic requirements as outlined in the <span className='text-sky-700 cursor-pointer hover:underline'>Higher Degree Research
							Scholarships Procedure </span>   . Of these potential applicants only an
							estimated 10% of Internationals are competitive for a main
							scholarship. Therefore if you require a scholarship, it is
							imperative that you secure a supervisor stipend for <span className='text-sky-700 cursor-pointer hover:underline'>TFS
							consideration </span>   .
						</p>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep7(!step7)}
					className="accordion-visible text-sky-700 font-bold mb-3 border-t border-gray-500"
				>
					<span>How will my referees be contacted?</span>
					<img className={step7 && "active"} src={Chevron} />
				</button>

				{step7 && (
					<div
						
					>
						<div aria-hidden={step7 ? "true" : "false"} className="mx-4">
						<p className="my-3">
							You will be required to provide the contact details of two
							referees in your online application. Schools and supervisors may
							contact your referees to gauge an impression of your abilities. If
							this assessment is required, they will contact your referees
							directly.
						</p>

						<p className='mb-5'>
							All Engineering applicants must provide these referee details to
							their proposed supervisor before applying.
						</p>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep8(!step8)}
					className="accordion-visible text-sky-700 font-bold mb-3 border-t border-gray-500"
				>
					<span>How do I track the status of my application and check all documents are received?</span>
					<img className={step8 && "active"} src={Chevron} />
				</button>

				{step8 && (
					<div
						
					>
						<div aria-hidden={step8 ? "true" : "false"} className="mx-4">
						<p className="my-3">
							After you have submitted your application, within one week you
							will be emailed an application receipt letter containing your SYDNEY IBS
							student ID and outstanding documentation.
						</p>

						<p className="mb-5">
							From this point you can provide your outstanding documentation
							and/or track your application by logging in to your SYDNEY IBS Apply
							Online account. If you have not received your application receipt
							letter after one week, please contact the Admissions and
							Scholarships team at the Graduate Research School <span className='text-sky-700 cursor-pointer hover:underline'>domestic.grs@SYDNEY IBS.edu.au </span>  
							 or <span className='text-sky-700 cursor-pointer hover:underline'> international.grs@SYDNEY IBS.edu.au</span>   or for
							Canberra applicants the Admin Research Student Unit: <span className='text-sky-700 cursor-pointer hover:underline'>rsu@adfa.edu.au</span> 
							. If you applied through a SYDNEY IBS agent, please
							provide all the outstanding documentation to your agent.
						</p>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep9(!step9)}
					className="accordion-visible text-sky-700 font-bold mb-3 border-t border-gray-500"
				>
					<span>What is a conditional offer?</span>
					<img className={step9 && "active"} src={Chevron} />
				</button>
				{step9 && (
					<div
						
					>
						<div aria-hidden={step9 ? "true" : "false"} className="mx-4">
						<p className="my-3">
							This means that you are offered admission to a higher degree
							research program on the condition that you meet the requirements
							listed in your offer letter. Once you submit this evidence, and it
							is deemed to meet the requirements, you will receive an
							unconditional offer along with instructions on how to accept..
						</p>
						<p className="mb-5">
							If you do not meet the required conditions, you will not be able
							to accept or enrol in the program. Once the acceptance deadline
							passes, your offer of admission will no longer be valid. If you
							still wish to enrol in a SYDNEY IBS higher degree research program, you
							will need to re-apply during a future application round.
						</p>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep10(!step10)}
					className="accordion-visible text-sky-700 font-bold mb-3 border-t border-gray-500"
				>
					<span>Why did I get an offer but no notification of scholarship success?</span>
					<img className={step10 && "active"} src={Chevron} />
				</button>
				{step10 && (
					<div
						
					>
						<div aria-hidden={step10 ? "true" : "false"} className="mx-4">
						<p className="my-3">
							Scholarship selection is a competitive process. All scholarship
							applications are considered at the same time, as each applicant is
							considered against all other applicants.
						</p>
						<p className="mb-3">
							If you have received an offer of admission to the course but you
							have not been notified of the outcome of your scholarship
							application, this is because the scholarship selection process is
							still taking place.
						</p>
						<p className="mb-3">
							All scholarship outcomes are sent <span className='text-black font-bold cursor-pointer hover:underline'>from</span>  the release date outlined
							on <span className='text-sky-700 cursor-pointer hover:underline'>this page</span> . This process takes several weeks as all applicants
							must be contacted.
						</p>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep11(!step11)}
					className="accordion-visible text-sky-700 font-bold mb-3 border-t border-gray-500"
				>
					<span>I have applied for a scholarship - why does my admission letter state I am 'Full Fee-Paying'?</span>
					<img className={step11 && "active"} src={Chevron} />
				</button>

				{step11 && (
					<div
						
					>
						<div aria-hidden={step11 ? "true" : "false"} className="mx-4">
						<p className="my-3">
								All International candidates are admitted to their research
								higher degree as Full-Fee Paying students.
							</p>
							<p className="mb-3">
								If you have been granted a tuition fee scholarship or
								sponsorship, your tuition fees will be paid by your scholarship
								or sponsor for the duration of the award
							</p>
						</div>
					</div>
				)}

				<button
					onClick={() => setStep12(!step12)}
					className="accordion-visible text-sky-700 font-bold mb-3 border-t border-gray-500"
				>
					<span>When will I receive the outcome of my application?</span>
					<img className={step12 && "active"} src={Chevron} />
				</button>
				{step12 && (
					<div
						
					>
						<div aria-hidden={step12 ? "true" : "false"} className="mx-4">
						<p className="my-3">
								If you have not applied for a SYDNEY IBS scholarship, the admission
								assessment will take around 8 weeks from when you submitted all
								required documentation.
							</p>
							<p className="mb-3">
								Applicants who applied for a SYDNEY IBS scholarship will receive both
								admission and scholarship outcome after the release date
								outlined in <span className='text-sky-700 cursor-pointer hover:underline'> Key Dates</span>. Results cannot be released prior to the
								release date as scholarships are competitive (applicants are
								ranked against all other applicants).
							</p>
							<p className="mb-3">
								Please note that outcomes may be delayed if your academic
								results or required documentation has not been received, you
								have applied for special consideration (eg Transferring in,
								English Waiver).
							</p>
						</div>
					</div>
				)}
				<button
					onClick={() => setStep13(!step13)}
					className="accordion-visible text-sky-700 font-bold mb-3 border-t border-gray-500"
				>
					<span>Can I defer my offer?</span>
					<img className={step13 && "active"} src={Chevron} />
				</button>
				{step13 && (
					<div
						
					>
						<div aria-hidden={step13 ? "true" : "false"} className="mx-4">
						<p className="my-3">
								If you receive an offer to enrol in a Higher Degree Research
								(HDR) program at SYDNEY IBS but you cannot start straight away, you
								can defer or delay starting your degree. HDR admission offers
								can be requested to defer for up to one year after the initial
								offer term. SYDNEY IBS HDR Scholarship offers may be able to be
								deferred on a case by case basis (check your scholarship letter
								for details), however cannot be deferred to a new University
								year (e.g. from Term 3, 2022 to Summer 2023).
							</p>
							<p className="mb-3">
								Deferrals are approved only where conditions are met, including
								continuing to meet SYDNEY IBS entry requirements, and availability of
								supervision and resources. Applicants must check their English
								is still valid before deferring.
							</p>
							<p className="mb-3">
								See 'Responding to an Offer' on <span className='text-sky-700 cursor-pointer hover:underline'>this page</span>  for instructions on
								deferral.
							</p>
						</div>
					</div>
				)}
				<button
					onClick={() => setStep14(!step14)}
					className="accordion-visible text-justify font-bold text-sky-700 mb-3 border-t border-gray-500"
				>
					<span>I submitted my Commencement of Study Form to activate my scholarship payments, but when I log onto MySYDNEY IBS it asks me to pay the tuition fee. What should I do?</span>
					<img className={step14 && "active"} src={Chevron} />
				</button>
				{step14 && (
					<div
						
					>
						<div aria-hidden={step14 ? "true" : "false"} className="mx-4">
						<p className="my-3">
								Commencement Forms may take some time to process. Once your form
								has been processed, you will receive a confirmation email. If
								tuition fees are still outstanding after you have received this
								confirmation, you can discuss payment with us by responding to
								this email.
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Faq;