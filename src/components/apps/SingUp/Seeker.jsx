'use client';
import seeker from '@/config/App/SingUp/Seeker';
import React, { useState } from 'react';
import PasswordStrength from './PasswordStrength';
import Link from 'next/link';

const Seeker = () => {
	const [password, setPassword] = useState('');

	return (
		<div className="container mx-auto mt-28">
			<h3 className="text-center text-3xl text-gray-700">{seeker?.h4}</h3>
			<p className="text-lg text-center text-gray-500 mt-2">{seeker?.p}</p>
			<h2 className="text-center text-2xl text-gray-500 mt-2 font-bold">
				{seeker?.step1}
			</h2>

			{/* Create a card for Step 1 */}

			<div className="bg-gray-300 rounded p-5 mt-5 w-full">
				<div className="grid md:grid-cols-4 grid-cols-1 gap-2">
					<div>
						<h4 className="text-lg font-semibold text-gray-700">
							{seeker?.Personal}
						</h4>
						<p className="pr-3 text-lg mt-3 text-gray-700">
							{seeker?.PersonalDetils}
						</p>
					</div>
					<div className="col-span-3">
						{/* Create a card for from */}

						<div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
							<form>
								<div class="grid gap-6 mb-6 md:grid-cols-2">
									<div>
										<label
											for="first_name"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											First name
										</label>
										<input
											type="text"
											id="first_name"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="John"
											required
										/>
									</div>
									<div>
										<label
											for="last_name"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											Last name
										</label>
										<input
											type="text"
											id="last_name"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="Doe"
											required
										/>
									</div>
								</div>

								{/* Email & Password */}
								<div class="grid gap-6 mb-6 md:grid-cols-2">
									<div>
										<label
											for="email"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="John@gmail.com"
											required
										/>
									</div>
									<div>
										<label
											for="password"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											Password
										</label>
										<input
											type="password"
											id="password"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="********"
											required
											onChange={(e) => setPassword(e.target.value)}
										/>

										{/* Password chacker Bar */}
										<PasswordStrength password={password} />
									</div>
								</div>

								{/* Date of Birth */}

								<div>
									<label
										for="dob"
										class="block mb-2 text-sm font-medium text-gray-900"
									>
										Date Of Birth
									</label>
									<div class="grid gap-6 mb-6 md:grid-cols-3">
										<div>
											<select
												id="dob"
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											>
												<option selected>Day</option>
												<option value="US">United States</option>
												<option value="CA">Canada</option>
												<option value="FR">France</option>
												<option value="DE">Germany</option>
											</select>
										</div>
										<div>
											<select
												id="dob"
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											>
												<option selected>Month</option>
												<option value="US">United States</option>
												<option value="CA">Canada</option>
												<option value="FR">France</option>
												<option value="DE">Germany</option>
											</select>
										</div>

										<div>
											<select
												id="dob"
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											>
												<option selected>Year</option>
												<option value="US">United States</option>
												<option value="CA">Canada</option>
												<option value="FR">France</option>
												<option value="DE">Germany</option>
											</select>
										</div>
									</div>
								</div>

								{/* Nationlity, Gender, Location */}
								<div class="grid gap-6 mb-6 md:grid-cols-3">
									<div>
										<label
											for="gender"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											Gender
										</label>
										<select
											id="gender"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											<option selected value="male">
												Male
											</option>
											<option value="female">Female</option>
										</select>
									</div>
									<div>
										<label
											for="nationality"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											Nationality
										</label>
										<select
											id="nationality"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											<option selected>Choose a country</option>
											<option value="US">United States</option>
											<option value="CA">Canada</option>
											<option value="FR">France</option>
											<option value="DE">Germany</option>
										</select>
									</div>

									<div>
										<label
											for="location"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											Location
										</label>
										<select
											id="location"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											<option selected>Choose a country</option>
											<option value="US">United States</option>
											<option value="CA">Canada</option>
											<option value="FR">France</option>
											<option value="DE">Germany</option>
										</select>
									</div>
								</div>

								{/* Country code & phone number */}

								<div class="grid gap-6 mb-6 md:grid-cols-2">
									<div>
										<label
											for="cc"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											Country Code
										</label>
										<select
											id="cc"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											<option selected>Choose a country</option>
											<option value="US">United States</option>
											<option value="CA">Canada</option>
											<option value="FR">France</option>
											<option value="DE">Germany</option>
										</select>
									</div>
									<div>
										<label
											for="pn"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											Phone Number
										</label>
										<input
											type="text"
											id="pn"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="9754234891"
											required
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
								</div>

								<div className="flex justify-center items-center">
									<h3 className="mr-2">{seeker?.question}</h3>
									<Link href="/login" className="text-blue-600">
										{seeker?.login}
									</Link>
								</div>

								<button
									type="submit"
									class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Seeker;
