import React from 'react';
import PopularSearch from './PopularSearch';

const Banner = () => {
	return (
		<div className="h-[90vh] bg-[#560c9e] flex justify-center items-center flex-col">
			<h2 className="text-4xl mt-5 font-bold text-white">
				Explore and discover <br /> the right job for you!
			</h2>

			<div className="bg-[#7a42b2] w-full mt-5">
				<div className="container mx-auto grid md:grid-cols-5 sm:grid-cols-1">
					<div className="py-4">
						<select
							id="countries_disabled"
							class="bg-gray-50 md:w-[95%] text-gray-900 text-sm rounded-lg block p-2.5 sm:w-full sm:text-center"
						>
							<option selected>Choose a country</option>
							<option value="US">United States</option>
							<option value="CA">Canada</option>
							<option value="FR">France</option>
							<option value="DE">Germany</option>
						</select>
					</div>
					<div className="py-4">
						<select
							id="countries_disabled"
							class="bg-gray-50 md:w-[95%] text-gray-900 text-sm rounded-lg block p-2.5 sm:w-full sm:text-center"
						>
							<option selected>Choose a country</option>
							<option value="US">United States</option>
							<option value="CA">Canada</option>
							<option value="FR">France</option>
							<option value="DE">Germany</option>
						</select>
					</div>
					<div className="py-4">
						<select
							id="countries_disabled"
							class="bg-gray-50 md:w-[95%] text-gray-900 text-sm rounded-lg block p-2.5 sm:w-full sm:text-center"
						>
							<option selected>Choose a country</option>
							<option value="US">United States</option>
							<option value="CA">Canada</option>
							<option value="FR">France</option>
							<option value="DE">Germany</option>
						</select>
					</div>
					<div className="py-4">
						<select
							id="countries_disabled"
							class="bg-gray-50 md:w-[95%] text-gray-900 text-sm rounded-lg block p-2.5 sm:w-full sm:text-center"
						>
							<option selected>Choose a country</option>
							<option value="US">United States</option>
							<option value="CA">Canada</option>
							<option value="FR">France</option>
							<option value="DE">Germany</option>
						</select>
					</div>
					<div className="py-4">
						<button
							type="button"
							class="text-white md:w-[70%] bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 sm:w-full sm:text-center"
						>
							Find a Job
						</button>
					</div>
				</div>
			</div>

			<PopularSearch />
		</div>
	);
};

export default Banner;
