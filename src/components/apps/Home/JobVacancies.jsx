import Link from 'next/link';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const JobVacancies = () => {
	const levels = [
		{
			level: 'Executive level',
			job: '14 Jobs',
			button: 'Explore Jobs',
		},
		{
			level: 'Senior level',
			job: '14 Jobs',
			button: 'Explore Jobs',
		},
		{
			level: 'Mid level',
			job: '14 Jobs',
			button: 'Explore Jobs',
		},
		{
			level: 'Entry level',
			job: '14 Jobs',
			button: 'Explore Jobs',
		},
	];
	return (
		<div className="container mx-auto">
			<h3 className="text-3xl font-bold text-[#374151] text-center mt-10">
				Find the right job vacancies in Ghana
			</h3>

			<h4 className="text-black font-bold text-3xl mt-10">
				Experience-based filtering.
			</h4>
			<h5 className="text-gray-400 mt-5 text-lg">
				Find jobs that suit your experience level
			</h5>

			{/* cards */}

			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mt-2">
				{levels.map((level, i) => (
					<>
						<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center flex-col">
							<Link href="#">
								<h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
									{level.level}
								</h5>
							</Link>
							<p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
								{level.job}
							</p>
							<Link
								href="#"
								class="inline-flex font-medium items-center text-blue-600 hover:underline"
							>
								{level.button}
								<ArrowForwardIcon />
							</Link>
						</div>
					</>
				))}
			</div>

			{/* Button */}
			<div className="flex justify-center mt-10">
				<Link
					href="/"
					class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center"
				>
					Explore All Jobs
				</Link>
			</div>
		</div>
	);
};

export default JobVacancies;
