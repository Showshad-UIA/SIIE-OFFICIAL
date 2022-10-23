import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProfileSidebar = () => {
    return (
        <div className=' mt-[65px]'>
            <div className=" bg-white mb-10 ">
			<div class="  bg-white ">
				<div className=" bg-gray-200 sm:w-full ">
					<div className="  ">
						<h1 className="text-medium mb-5 text-start font-bold p-2  pr-5 pt-5 pb-3 border-b-4 border-t-4 border-sky-700  font-serif  text-sky-700">
							SEE ALSO
						</h1>
					</div>
					<div className="text-medium font-serif pl-2 pb-3">
						<div>
							<a
								href="#"
								className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
								</div>
								<div>
									<a href="/LeadershipGovernence">
										<p className='font-serif'>Governance Structure </p>
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
									<a href="/AcademicStructure">
										<p className='font-serif'>Academic Structure</p>
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
										<p className='font-serif'>Accreditation</p>
									</a>
								</div>
							</a>
						</div>
						<div className="">
							<a
								href="#"
								className="flex gap-5 mb-3  cursor-pointer hover:text-red-500 "
							>
								<div>
									<FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
								</div>
								<div>
									<a href="#">
										<p className='font-serif'>Our Facilities</p>
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
										<p className='font-serif'>Collaborations</p>
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

export default ProfileSidebar;