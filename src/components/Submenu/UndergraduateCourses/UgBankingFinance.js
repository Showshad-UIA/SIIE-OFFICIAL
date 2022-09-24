import React from "react";
import UgBankingFinnaceMaincontent from "./UgBankingFinnaceMaincontent";
import UgFinanceRightSidebar from "./UgFinanceRightSidebar";

const UgBankingFinance = () => {
	return (
		<div className=" lg:mx-12 sm:w-full">
			<div className="grid text-center lg:mt-[100px] sm:mt-10   lg:grid-cols-2 sm:grid-cols-1">
				<div className=" lg:ml-[200px] text-justify m-2 lg:w-full border-t-2 border-black">
					<div className="">
						<p className="mb-5 mt-3  text-2xl  font-bold cursor-pointer hover:text-red-500  text-blue-500">
							Diploma program
						</p>
					</div>
					<p className="mt-5">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
						similique, nobis explicabo voluptate ab impedit earum dignissimos
						placeat error dolorem repudiandae corrupti quidem nisi expedita eum
						suscipit numquam dolor accusantium! Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Quae, similique, nobis explicabo
						voluptate ab impedit earum dignissimos placeat error dolorem
						repudiandae corrupti quidem nisi expedita{" "}
						<p>
							eum suscipit numquam dolor accusantium! Lorem ipsum dolor sit
							amet, consectetur adipisicing elit. Quae, similique, nobis
							explicabo voluptate ab impedit earum dignissimos placeat error
							dolorem repudiandae corrupti quidem nisi expedita eum suscipit
							numquam dolor accusantium! Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Quae, similique, nobis explicabo voluptate ab
							impedit earum dignissimos placeat error dolorem repudiandae
							corrupti quidem nisi expedita eum suscipit numquam dolor
							accusantium!
						</p>
						<p>
							eum suscipit numquam dolor accusantium! Lorem ipsum dolor sit
							amet, consectetur adipisicing elit. Quae, similique, nobis
							explicabo voluptate ab impedit earum dignissimos placeat error
							dolorem repudiandae corrupti quidem nisi expedita eum suscipit
							numquam dolor accusantium! Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Quae, similique, nobis explicabo voluptate ab
							impedit earum dignissimos placeat error dolorem repudiandae
							corrupti quidem nisi expedita eum suscipit numquam dolor
							accusantium!
						</p>
					</p>
				</div>
				<div className="lg:mx-[200px] lg:ml-[245px] mt-16">
					<UgFinanceRightSidebar></UgFinanceRightSidebar>
				</div>
			</div>
			{/* <div className=" mx-[140px] grid bg-white lg:grid-flow-col gap-4">
            <div class="  col-span-3   text-justify sm:grid-flow-row">
                <div class="rounded-none   card  ">
                    <div className="">
                        <p className="pl-4   text-2xl  font-bold cursor-pointer hover:text-red-500  text-blue-500">
                            UNDERGRADUATE PROGRAM
                        </p>
                    </div>
                    <div className="bg-white  justify-items-center grid  lg:grid-flow-col sm:grid-flow-row  ">
                        <div className=" w-3/5 ml-5">
                            <p className="bg-base-200 p-2 mt-4">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                                harum praesentium laudantium neque vero ratione tempora quidem
                                eos. Eveniet culpa rem ullam blanditiis dolore omnis, autem
                                consectetur nobis dicta officiis! Lorem ipsum dolor sit amet
                                consectetur, adipisicing elit. Ipsa harum praesentium
                                laudantium neque vero ratione tempora quidem eos. Eveniet
                                culpa rem ullam blanditiis dolore omnis, autem consectetur
                                nobis dicta officiis! Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Ipsa Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Ipsa harum praesentium laudantium neque vero
                                ratione tempora quidem eos. Eveniet culpa rem ullam blanditiis
                                dolore omnis, autem consectetur nobis dicta officiis! Lorem
                                ipsum dolor sit amet consectetur, adipisicing elit. Ipsa harum
                                praesentium laudantium neque vero ratione tempora quidem eos.
                                Eveniet culpa rem ullam blanditiis dolore omnis, autem
                                consectetur nobis dicta officiis! Lorem ipsum dolor sit amet
                                consectetur, adipisicing elit. Ipsa
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
			<UgBankingFinnaceMaincontent></UgBankingFinnaceMaincontent>>
		</div>
	);
};

export default UgBankingFinance;
