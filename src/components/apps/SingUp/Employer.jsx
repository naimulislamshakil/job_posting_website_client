'use client';
import employer, {
	employers,
	hearUs,
	industrys,
	positions,
	typeofEmployer,
} from '@/config/App/SingUp/Employer';
import seeker, {
	availability,
	current_job_function,
	highest_qualification,
	jobFunction,
	years_of_experience,
} from '@/config/App/SingUp/Seeker';
import React, { useState } from 'react';
import PasswordStrength from './PasswordStrength';
import Link from 'next/link';

const Employer = () => {
	const [password, setPassword] = useState('');
	return (
		<div className="container mx-auto mt-28">
			<h3 className="text-center text-3xl text-gray-700">{employer?.h4}</h3>
			<p className="text-lg text-center text-gray-500 mt-2">{employer?.p}</p>
			<h2 className="text-center text-2xl text-gray-500 mt-2 font-bold">
				{employer?.step1}
			</h2>

			{/* Create a card for Step 1 */}

			<div className="bg-gray-300 rounded p-5 mt-5 w-full">
				<div className="grid md:grid-cols-4 grid-cols-1 gap-2">
					<div>
						<h4 className="text-lg font-semibold text-gray-700">
							{employer?.company_representative}
						</h4>
						<p className="pr-3 text-lg mt-3 text-gray-700">
							{employer?.companyDetils}
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
											Work Email
										</label>
										<input
											type="email"
											id="email"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="John@company.com"
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
										{employer?.Position_in_Company}
									</label>
									<div class="grid gap-6 mb-6 md:grid-cols-1">
										<div>
											<select
												id="dob"
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											>
												{positions?.map((position, i) => (
													<option key={i} value={position}>
														{position}
													</option>
												))}
											</select>
										</div>
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

			<h2 className="text-center text-2xl text-gray-500 my-4 font-bold">
				{employer?.step2}
			</h2>

			{/* Create a card for step 2 */}

			<div className="bg-gray-300 rounded p-5 mt-5 w-full">
				<div className="grid md:grid-cols-4 grid-cols-1 gap-2">
					<div>
						<h4 className="text-lg font-semibold text-gray-700">
							{employer?.companyInformation}
						</h4>
						<p className="pr-3 text-lg mt-3 text-gray-700">
							{employer?.information}
						</p>
					</div>
					<div className="col-span-3">
						{/* Create a card for from */}

						<div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
							<form>
								{/* company Detials */}
								<div class="grid gap-6 mb-6 md:grid-cols-2">
									<div>
										<label
											for="first_name"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{employer?.company_name}
										</label>
										<input
											type="text"
											id="first_name"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="Webminds"
											required
										/>
									</div>
									<div>
										<label
											for="last_name"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{employer?.industry}
										</label>
										<select
											id="hq"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											{industrys?.map((industry, i) => (
												<option key={i} value={industry}>
													{industry}
												</option>
											))}
										</select>
									</div>
								</div>

								{/* Highest Qualification */}

								<div class="grid gap-6 mb-6 md:grid-cols-2">
									<div>
										<label
											for="hq"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{employer?.number_of_employees}
										</label>
										<select
											id="hq"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											{employers?.map((number, i) => (
												<option key={i} value={number}>
													{number}
												</option>
											))}
										</select>
									</div>
									<div>
										<label
											for="experience"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{employer?.typeofEmployer}
										</label>
										<select
											id="experience"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											{typeofEmployer?.map((type, i) => (
												<option key={i} value={type}>
													{type}
												</option>
											))}
										</select>
									</div>
								</div>

								<div class="grid gap-6 mb-6 md:grid-cols-2">
									<div>
										<label
											for="first_name"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{employer?.company_website}
										</label>
										<input
											type="url"
											id="first_name"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="webmindsit.com"
											required
										/>
									</div>
									<div>
										<label
											for="last_name"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{employer?.hearUs}
										</label>
										<select
											id="hq"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											{hearUs?.map((type, i) => (
												<option key={i} value={type}>
													{type}
												</option>
											))}
										</select>
									</div>
								</div>

								<div class="grid gap-6 mb-6 md:grid-cols-2">
									<div>
										<label
											for="first_name"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{employer?.contactPerson}
										</label>
										<input
											type="text"
											id="first_name"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="Jon"
											required
										/>
									</div>
									<div>
										<label
											for="last_name"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{employer?.notificationEmail}
										</label>
										<input
											type="email"
											id="first_name"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="Jon@gmail.com"
											required
										/>
									</div>
								</div>

								<div>
									<div class="grid gap-6 mb-6 md:grid-cols-3">
										<div>
											<label
												for="dob"
												class="block mb-2 text-sm font-medium text-gray-900"
											>
												{employer?.countryCode}
											</label>
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
											<label
												for="dob"
												class="block mb-2 text-sm font-medium text-gray-900"
											>
												{employer?.phoneNumber}
											</label>
											<input
												type="text"
												id="first_name"
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
												placeholder="9256123567"
												required
											/>
										</div>

										<div>
											<label
												for="dob"
												class="block mb-2 text-sm font-medium text-gray-900"
											>
												{employer?.country}
											</label>
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

								<div>
									<label
										for="dob"
										class="block mb-2 text-sm font-medium text-gray-900"
									>
										{employer?.address}
									</label>
									<textarea
										id="message"
										rows="4"
										class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Write your Address..."
									></textarea>
								</div>

								<div class="flex items-center my-6">
									<input
										id="link-checkbox"
										type="checkbox"
										value=""
										class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label
										for="link-checkbox"
										class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										By clicking "Create Your Account", you agree to our
										<Link
											href="/"
											class="text-blue-600 dark:text-blue-500 hover:underline mx-1"
										>
											terms and conditions
										</Link>
										and
										<Link
											href="/"
											class="text-blue-600 dark:text-blue-500 hover:underline ml-1"
										>
											Privacy Policy
										</Link>
										.
									</label>
								</div>

								<button
									type="submit"
									class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
								>
									Create Your Account
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Employer;
