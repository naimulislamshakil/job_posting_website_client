import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UpgradeCV = () => {
	return (
		<div className="container mx-auto mt-6">
			<div className="grid grid-cols-3">
				<div className="flex justify-center items-center">
					<Image src="/accats/cv.png" width={300} height={300} alt="ghasf" />
				</div>

				<div className="flex flex-col col-span-2 justify-center">
					<h3 className="text-3xl font-bold text-[#374151] text-start">
						Ready to level up your CV game?
					</h3>

					<p className="text-[#374151] text-lg">
						Collaborate with a professional cv writer to highlight your skills
						and
						<br /> achievements like never before.
					</p>

					<Link
						href="/"
						class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center w-[200px] mt-3"
					>
						Explore All Jobs
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UpgradeCV;
