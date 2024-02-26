'use client';
import Image from 'next/image';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const AdvanceSection = () => {
	return (
		<div className="bg-[#111827] mt-4">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
					<div className="mt-14">
						<h2 className="text-white text-left text-3xl font-bold">
							Advance your career
							<br /> with Jobberman
						</h2>

						<h4 className="text-lg text-gray-400 mt-3">
							Create a free account, complete your profile,
							<br /> and get matched with your dream job.
						</h4>

						<div className="flex gap-4 mt-7">
							<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded">
								Get Started
							</button>
							<button class="inline-flex font-medium items-center text-white">
								Learn More
								<ArrowForwardIcon className="ml-2" />
							</button>
						</div>

						<div className="grid grid-cols-2 gap-2 mt-14">
							<div className="w-20">
								<Image
									width={50}
									height={30}
									src="/accats/rating.png"
									alt="Rating"
									className="text-white bg-gray-500 p-2 rounded"
								/>
								<h3 className="text-white text-base text-left whitespace-nowrap mt2">
									Get seen by employers
								</h3>

								<h6 className="text-gray-400 text-justify w-full">
									With a complete profile.
								</h6>
							</div>

							<div className="w-20">
								<Image
									width={50}
									height={30}
									src="/accats/rating.png"
									alt="Rating"
									className="text-white bg-gray-500 p-2 rounded"
								/>
								<h3 className="text-white text-base text-left whitespace-nowrap mt2">
									Get seen by employers
								</h3>

								<h6 className="text-gray-400 text-justify w-full">
									With a complete profile.
								</h6>
							</div>
						</div>
					</div>

					{/* image */}
					<div className="flex justify-center">
						<Image
							width={700}
							height={500}
							className="py-10"
							src="/accats/bg.png"
							alt="bg "
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdvanceSection;
