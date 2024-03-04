import step1 from '@/config/App/SingUp/step1';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import Link from 'next/link';
import React from 'react';

const Step1 = () => {
	return (
		<div className="container mx-auto mt-28 mb-5">
			<h3 className="text-center text-3xl">{step1.h3}</h3>

			<div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-10 lg:px-28">
				{/* card 1/ */}

				<div class="w-full  bg-white border border-gray-200 rounded-lg shadow">
					<div class="flex flex-col items-center py-10">
						<div className="w-24 h-24 mb-3 rounded-full shadow-lg bg-[#560c9e] flex justify-center items-center">
							<AccountCircleOutlinedIcon className="icon text-white" />
						</div>
						<h5 class="mb-1 text-xl font-medium text-gray-900">
							{step1.JobSeeker}
						</h5>
						<span class="text-base text-gray-500">{step1.seekerP1}</span>
						<span class="text-base text-gray-500">{step1.seekerP2}</span>
						<div class="flex mt-4 md:mt-6">
							<Link
								href="/sing_up/Seeker"
								class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
							>
								{step1.seekerButton}
							</Link>
						</div>
					</div>
				</div>

				{/* Crad 2 */}
				<div class="w-full  bg-white border border-gray-200 rounded-lg shadow">
					<div class="flex flex-col items-center py-10">
						<div className="w-24 h-24 mb-3 rounded-full shadow-lg bg-[#560c9e] flex justify-center items-center">
							<BusinessCenterOutlinedIcon className="icon text-white" />
						</div>
						<h5 class="mb-1 text-xl font-medium text-gray-900">
							{step1.Employer}
						</h5>
						<span class="text-base text-gray-500">{step1.p1}</span>
						<span class="text-base text-gray-500">{step1.p2}</span>
						<div class="flex mt-4 md:mt-6">
							<Link
								href="/sing_up/Employer"
								class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
							>
								{step1.employerButton}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Step1;
