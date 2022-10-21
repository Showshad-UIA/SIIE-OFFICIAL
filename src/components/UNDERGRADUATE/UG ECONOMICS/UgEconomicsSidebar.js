import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const UgEconomicsSidebar = () => {
    return (
        <div className="">
        <div className=" bg-white mb-10">
            <div class="  bg-white ">
                <div className="  sm:w-full shadow  ">
                    <div className="  ">
                        <h1 className="text-medium mb-5 text-start font-bold p-2  pr-5 pt-5 pb-3 border-b-4 border-t-4 border-sky-700    text-sky-700">
                            SEE ALSO
                        </h1>
                    </div>
                    <div className="text-medium pl-2 pb-3">
                        <div>
                            <a
                                href="#"
                                className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
                            >
                                <div>
                                    <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <a href="/ugfinance">
                                        <p>Bachelor of Islamic Finance and Banking</p>
                                    </a>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
                            >
                                <div>
                                    <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <a href="/ugbusinesslaw">
                                        <p>Bachelor of Islamic Business Law</p>
                                    </a>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
                            >
                                <div>
                                    <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <a href="/uginsurance">
                                        {" "}
                                        <p>Bachelor of Islamic Insurance </p>
                                    </a>
                                </div>
                            </a>
                        </div>

                        <div className="mb-5">
                            <a
                                href="#"
                                className="flex gap-5   cursor-pointer hover:text-red-500 "
                            >
                                <div>
                                    <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <a href="/ugislamicstudy">
                                        <p>Bachelor of Islamic Studies</p>
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default UgEconomicsSidebar;