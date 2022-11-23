import React, { useState } from 'react';
import "./Deadline.css";
import Chevron from "../Application Deadline/Chevron.svg";
const Deadline = () => {
    
        const [step1, setStep1] = useState(false);
        const [step2, setStep2] = useState(false);
        const [step3, setStep3] = useState(false);
        const [step12, setStep12] = useState(false);
    
        return (
            <div className="accordion container mx-auto ">
                <div className="lg:mx-[150px]">
                <div>
					<h1 className="text-2xl font-bold my-3">Application Deadlines</h1>
					<p className="mb-3">
						Applications must be submitted by the application deadline for the
						intended study period (Term), to ensure the acceptance and enrolment
						processes are completed by the Term Start Dates. Please use the
						toggles below to find out more about key dates for admission and
						scholarships .
					</p>
					<p className="mb-3">
						All mandatory supporting documents listed in the{" "}
						<span className="text-sky-700 cursor-pointer hover:underline">
							Document Submission Guidelines
						</span>{" "}
						are required by the application deadline, including satisfactory
						evidence of having met the{" "}
						<span className="text-sky-700 cursor-pointer hover:underline">
							Sydney IBS English language requirements
						</span>
						.
					</p>
					<p className="mb-10 text-md">
						Looking for information on how to apply? Please visit{" "}
						<span className="text-sky-700 cursor-pointer hover:underline">
							this page
						</span>
						.
					</p>
				</div>
                    <button
                        onClick={() => setStep1(!step1)}
                        className="accordion-visible  text-sky-700 font-bold mb-3 border-t border-gray-500"
                    >
                        <span>International Applicants</span>
                        <img className={step1 && "active"} src={Chevron} />
                    </button>
                    {step1 && (
                        <div
                            
                        >
                            <div aria-hidden={step1 ? "true" : "false"} className=" mx-4">
                          
					
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
						<div>
							<table class=" border-2 border-gray-500 lg:w-[70%] my-5">
								<tr>
									<td class="border border-gray-400 p-2">
										<h1 className="text-black font-bold text-xl -mt-5 mb-5 ">
											2022 November release
										</h1>

										<p>
											You should apply for a scholarship during this round if
											you wish to start your studies in Term 2 or 3 2023
										</p>
									</td>
									<td class="border border-gray-400 p-2">
										<h1 className="text-black font-bold text-xl mt-4 mb-5">
											Now Closed
										</h1>
										<p className="mb-3">
											Offers to be released{" "}
											<span className="text-black font-bold  ">from</span> 25
											November
										</p>
										<p>
											Initial release may take 2 weeks. Further offers will
											continue to be made after 2 weeks
										</p>
									</td>
								</tr>
								<tr>
									<td class="border border-gray-400 p-2">
										<h1 className="text-black font-bold text-xl mb-3 mt-3 ">
											2023 China Scholarship Council (CSC)/Sydney IBS
											scholarships
										</h1>
										<p className="mb-5">
											Only available for Chinese nationals for consideration of
											the{" "}
											<span className="text-sky-700 cursor-pointer hover:underline ">
												China Scholarship Council
											</span>{" "}
											joint scholarship for Term 3 2023 start.
										</p>
										<p className="mb-5">
											Applicants will also be considered for main round
											scholarships.
										</p>
									</td>
									<td class="border border-gray-400 p-2">
										<h1 className="text-black font-bold text-xl mb-5 -mt-5">
											{" "}
											Now Closed
										</h1>
										<p className="mb-3 mt-8">
											Offers to be released{" "}
											<span className="text-black font-bold  ">from</span> 25
											November
										</p>
										<p>
											Initial release may take 2 weeks. Further offers will
											continue to be made after 2 weeks
										</p>
									</td>
								</tr>
								<tr>
									<td class="border border-gray-400 p-2 ">
										<h1 className="text-black font-bold text-xl -mt-10 mb-2">
											2023 March Release
										</h1>
										<p>
											You should apply for a scholarship during this round if
											you wish to start your studies in Term 3 2023
										</p>
									</td>
									<td class="border border-gray-400 p-2">
										<p className="mt-3 mb-5">
											Closes 27 January, midnight Australian time
										</p>
										<p className="mb-5">
											Offers to be released{" "}
											<span className="text-black font-bold  ">from</span> 30
											March
										</p>
										<p className="mb-3">
											Initial release may take 2 weeks. Further offers will
											continue to be made after 2 weeks
										</p>
									</td>
								</tr>
								<tr>
									<td class="border border-gray-400 p-2">
										<h1 className="text-black font-bold text-xl -mt-12 ">
											2023 June Release
										</h1>
										<p className="mt-5">
											You should apply for a scholarship during this round if
											you wish to start your studies in Term 1 2024
										</p>
									</td>
									<td class="border border-gray-400 p-2">
										<p className="mt-3 mb-5">
											Closes 05 May, midnight Australian time
										</p>
										<p className="mb-5">
											Offers to be released{" "}
											<span className="text-black font-bold  ">from</span> 30
											June
										</p>
										<p className="mb-3">
											Initial release may take 2 weeks. Further offers will
											continue to be made after 2 weeks
										</p>
									</td>
								</tr>
							</table>
							<p className="my-3">
								Offers will be released no later than the Term Census Date.
								Unaccepted offers expire 1 month after release, or Term Census
								Date (whichever is earlier)
							</p>
							<p className="mb-5">
								It is the applicant’s responsibility to ensure that their
								application is submitted in full by the scholarship closing
								date. All correct and satisfactory documents must be fully
								submitted with the application, including English translations,
								Financial Declaration and proof of English. Additional documents
								can’t be added to an application until after the application has
								been reviewed, which may not occur before the application
								deadline.
							</p>
							<p className='mb-5'>
								Please refer to the{" "}
								<span className="text-sky-700 cursor-pointer hover:underline">
									application instructions
								</span>{" "}
								and{" "}
								<span className="text-sky-700 cursor-pointer hover:underline">
									Document Submission Guidelines
								</span>{" "}
								to ensure you have the correct documents before submission.{" "}
							</p>
						</div>
					</div>
                            </div>
                      
                    )}
    
                    <button
                        onClick={() => setStep2(!step2)}
                        className="accordion-visible text-sky-700 font-bold mb-3 border-t border-gray-500"
                    >
                        <span>
                        Domestic Applicants
                        </span>
                        <img className={step2 && "active"} src={Chevron} />
                    </button>
                    {step2 && (
                        <div
                            
                        >
                            <div aria-hidden={step2 ? "true" : "false"} className="mx-4">
                            
					<div className="">
						<p className="mb-5">
							If you are not eligible or are not applying for a scholarship
							stipend, you must submit your application (and all required
							documentation){" "}
							<span className="text-black font-bold">at least</span> eight (8)
							weeks before an offer of admission is required, due to time
							required for assessment. Applications received after this date may
							be assessed for a later Term.
						</p>
						<p>
							Applicants who are applying for a scholarship stipend through
							Sydney IBS must submit their application (and all required
							documentation) by the following deadlines:
						</p>
						<div>
							<table class=" border-2 border-gray-500 lg:w-[70%] my-5">
								<tr>
									<td class="border border-gray-400 p-2">
										<h1 className="text-black font-bold text-xl -mt-7">
											2022 November release
										</h1>

										<p className="mt-5">
											You should apply for a scholarship during this round if
											you wish to start your studies in Term 1 2023
										</p>
									</td>
									<td class="border border-gray-400 p-2">
										<h1 className="text-black font-bold text-xl mt-3 mb-7 ">
											Now Closed
										</h1>
										<p className="mb-5">
											Offers to be released{" "}
											<span className="text-black font-bold  ">from</span> 25
											November
										</p>
										<p className="">
											Initial release may take 2 weeks. Further offers will
											continue to be made after 2 weeks
										</p>
									</td>
								</tr>
								<tr>
									<td class="border border-gray-400 p-2">
										<h1 className="text-black font-bold text-xl mb-3 -mt-5 ">
											2023 March Release
										</h1>
										<p>
											You should apply for a scholarship during this round if
											you wish to start your studies in Term 2 2023
										</p>
									</td>
									<td class="border border-gray-400 p-2">
										<p className="mb-5 mt-3">
											Closes 27 January, midnight Australian time
										</p>
										<p className="mb-3">
											Offers to be released{" "}
											<span className="text-black font-bold  ">from</span> 23
											March
										</p>
										<p className="">
											Initial release may take 2 weeks. Further offers will
											continue to be made after 2 weeks
										</p>
									</td>
								</tr>
								<tr>
									<td class="border border-gray-400 p-2">
										<h1 className="text-black font-bold text-xl mb-3 -mt-5">
											2023 June Release
										</h1>
										<p>
											You should apply for a scholarship during this round if
											you wish to start your studies in Term 3 2023
										</p>
									</td>
									<td class="border border-gray-400 p-2">
										<p className="mb-5 mt-3">
											Closes 05 May, midnight Australian time
										</p>
										<p className="mb-3">
											Offers to be released{" "}
											<span className="text-black font-bold  ">from</span> 30
											June
										</p>
										<p>
											Initial release may take 2 weeks. Further offers will
											continue to be made after 2 weeks
										</p>
									</td>
								</tr>
							</table>
							<p className="my-3">
								Offers will be released no later than the Term Census Date.
								Unaccepted offers expire 1 month after release, or Term Census
								Date (whichever is earlier)
							</p>
							<p className="mb-3">
								It is the applicant’s responsibility to ensure that their
								application is submitted in full by the scholarship closing
								date. All correct and satisfactory documents must be fully
								submitted with the application, including English translations,
								Financial Declaration and proof of English. Additional documents
								can’t be added to an application until after the application has
								been reviewed, which may not occur before the application
								deadline.
							</p>
							<p className='mb-5'>
								Please refer to the{" "}
								<span className="text-sky-700 cursor-pointer hover:underline">
									application instructions
								</span>{" "}
								and{" "}
								<span className="text-sky-700 cursor-pointer hover:underline">
									Document Submission Guidelines
								</span>{" "}
								to ensure you have the correct documents before submission.{" "}
							</p>
						</div>
					</div>
                            </div>
                        </div>
                    )}
    
                    <button
                        onClick={() => setStep3(!step3)}
                        className="accordion-visible text-sky-700 font-bold mb-3 border-t border-gray-500"
                    >
                        <span>Enrolment Dates</span>
                        <img className={step3 && "active"} src={Chevron} />
                    </button>
                    {step3 && (
                        <div
                            
                        >
                            <div aria-hidden={step3 ? "true" : "false"} className="mx-4">
                            <p className="mb-3">
							The Sydney IBS HDR Academic Calendar provides a level of
							flexibility for HDR candidates that reflects the ongoing nature of
							a research candidature.
						</p>
						<p className="mb-3">
							The HDR Academic Calendar consists of four terms (Term 1, Term 2,
							Term 3 and Summer Term) of approximately three months each. New
							candidates are expected to enrol by the Term Start Date.
						</p>
						<p className='mb-5'>
							For information on the HDR Academic Calendar, please visit <span className='text-sky-700 cursor-pointer hover:underline'>this
							page</span> .
						</p>
                            </div>
                        </div>
                    )}
    
                    
    
                    <button
                        onClick={() => setStep12(!step12)}
                        className="accordion-visible text-sky-700 font-bold mb-3 border-t border-gray-500"
                    >
                        <span>Contact Us</span>
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
                </div>
            </div>
        );

};

export default Deadline;