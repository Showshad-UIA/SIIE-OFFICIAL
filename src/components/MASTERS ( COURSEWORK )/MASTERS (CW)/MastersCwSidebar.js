import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MastersCwSidebar = () => {
    return (
        <div className=''>
		<div className=" bg-white mb-10">
		<div class="  bg-white ">
			<div className="  sm:w-full shadow  ">
				<div className="  ">
					<h1 className="text-medium mb-5 text-start font-bold p-2  pr-5 pt-5 pb-3 border-b-4 border-t-4 border-sky-700    text-sky-700">
						MASTERS ADMISSION
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
								<a href="#">
									<p>Post graduate program</p>
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
								<a href="#">
									<p>Post graduate fees structure</p>
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
								<a href="#">
									{" "}
									<p>Postgraduate scholarship</p>
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
								<a href="#">
									<p>Apply now</p>
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

export default MastersCwSidebar;