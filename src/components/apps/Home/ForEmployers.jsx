import forEmployers from '@/config/App/Home/ForEmployers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ForEmployers = () => {
	return (
		<div className="container mx-auto bg-[#560c9e] rounded-lg mt-10">
			<div className="grid grid-cols-3 gap-2">
				<div className="col-span-2 p-5">
					<span className=" text-white">{forEmployers?.span}</span>
					<h3 className="text-white font-bold text-3xl mt-5">
						{forEmployers?.h1}
					</h3>
					<p className="text-white text-lg mt-3">{forEmployers?.p}</p>

					<button className="text-blue-500 bg-white font-medium rounded-lg text-sm px-5 py-2.5  text-center mt-10">
						{forEmployers?.buttonText}
					</button>
				</div>

				<div className="flex justify-center items-center">
					<Image
						src="/accats/talent.png"
						width={300}
						height={300}
						alt="talent"
						className="py-7"
					/>
				</div>
			</div>
		</div>
	);
};

export default ForEmployers;
