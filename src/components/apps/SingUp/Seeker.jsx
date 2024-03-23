'use client';
import seeker, {
	availability,
	current_job_function,
	highest_qualification,
	jobFunction,
	years_of_experience,
} from '@/config/App/SingUp/Seeker';
import React, { useEffect, useState } from 'react';
import PasswordStrength from './PasswordStrength';
import Link from 'next/link';
import { countryCodes } from '@/config/App/SingUp/Country';
import {
	countries,
	cities,
	getCitiesByCountryCode,
} from 'country-city-location';
import { dobDays, dobMonths, dobyears } from '@/config/App/SingUp/Date';
import { useFormik } from 'formik';
import { seekerSchema } from '@/config/Schema/Seeker';

const initialValue = {
	First_Name: '',
	Last_Name: '',
	Email: '',
	Days: '',
	Months: '',
	Years: '',
	Gender: '',
	Nationality: '',
	Location: '',
	Country_Code: '',
	Phone_Number: '',
	Qualification: '',
	Experience: '',
	Job_Function: '',
	Availability: '',
};

const Seeker = () => {
	const [password, setPassword] = useState('');
	const [nationality, setNationality] = useState('GH');
	const years = dobyears();
	const days = dobDays();
	const job = [];

	const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: initialValue,
			validationSchema: seekerSchema,
			onSubmit: (values) => {
				console.log({ values });
			},
		});

	console.log(errors);

	const add = (cate) => {
		job.push(cate);
		console.log(job.length);
		// console.log(cate);
	};

	const cities = getCitiesByCountryCode(nationality);

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
											name="First_Name"
											value={values.First_Name}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="John"
											required
										/>
										{errors.First_Name && touched.First_Name ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.First_Name}
											</p>
										) : null}
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
											name="Last_Name"
											value={values.Last_Name}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="Doe"
											required
										/>
										{errors.Last_Name && touched.Last_Name ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Last_Name}
											</p>
										) : null}
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
											name="Email"
											value={values.Email}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="John@gmail.com"
											required
										/>
										{errors.Email && touched.Email ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Email}
											</p>
										) : null}
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
												name="Days"
												value={values.Days}
												onChange={handleChange}
												onBlur={handleBlur}
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											>
												<option selected>Day</option>
												{days?.map((day, i) => (
													<option value={day} key={i}>
														{day}
													</option>
												))}
											</select>
											{errors.Days && touched.Days ? (
												<p className="text-red-700 text-xs mt-1">
													{errors.Days}
												</p>
											) : null}
										</div>
										<div>
											<select
												id="dob"
												name="Months"
												value={values.Months}
												onChange={handleChange}
												onBlur={handleBlur}
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											>
												<option selected>Month</option>
												{dobMonths?.map((month, i) => (
													<option value={month} key={i}>
														{month}
													</option>
												))}
											</select>
											{errors.Months && touched.Months ? (
												<p className="text-red-700 text-xs mt-1">
													{errors.Months}
												</p>
											) : null}
										</div>

										<div>
											<select
												id="dob"
												name="Years"
												value={values.Years}
												onChange={handleChange}
												onBlur={handleBlur}
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											>
												<option selected>Year</option>
												{years?.map((year, i) => (
													<option value={year} key={i}>
														{year}
													</option>
												))}
											</select>
											{errors.Years && touched.Years ? (
												<p className="text-red-700 text-xs mt-1">
													{errors.Years}
												</p>
											) : null}
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
											name="Gender"
											value={values.Gender}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											<option selected value="male">
												Male
											</option>
											<option value="female">Female</option>
										</select>
										{errors.Gender && touched.Gender ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Gender}
											</p>
										) : null}
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
											name="Nationality"
											value={values.Nationality}
											// onChange={handleChange}
											// onBlur={handleBlur}
											onChange={(e) => setNationality(e.target.value)}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											required
										>
											{countryCodes?.map((code, i) => (
												<option
													selected={code.name === 'Ghana'}
													value={`${code.code}`}
													key={i}
												>{`${code.name}`}</option>
											))}
										</select>
										{errors.Nationality && touched.Nationality ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Nationality}
											</p>
										) : null}
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
											name="Location"
											value={values.Location}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											{cities.map((code, i) => (
												<option
													value={`${code.name}`}
													key={i}
												>{`${code.name}`}</option>
											))}
										</select>
										{errors.Location && touched.Location ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Location}
											</p>
										) : null}
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
											name="Country_Code"
											value={values.Country_Code}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											{countryCodes?.map((code, i) => (
												<option
													selected={code.name === 'Ghana'}
													value={`${code.name} ${code.dial_code}`}
													key={i}
												>{`${code.name} ${code.dial_code}`}</option>
											))}
										</select>
										{errors.Country_Code && touched.Country_Code ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Country_Code}
											</p>
										) : null}
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
											name="Phone_Number"
											value={values.Phone_Number}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="9754234891"
											required
										/>
										{errors.Phone_Number && touched.Phone_Number ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Phone_Number}
											</p>
										) : null}
									</div>
								</div>

								<div className="flex justify-center items-center">
									<h3 className="mr-2">{seeker?.question}</h3>
									<Link href="/login" className="text-blue-600">
										{seeker?.login}
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			<h2 className="text-center text-2xl text-gray-500 my-4 font-bold">
				{seeker?.step2}
			</h2>

			{/* Create a card for step 2 */}

			<div className="bg-gray-300 rounded p-5 mt-5 w-full">
				<div className="grid md:grid-cols-4 grid-cols-1 gap-2">
					<div>
						<h4 className="text-lg font-semibold text-gray-700">
							{seeker?.work}
						</h4>
						<p className="pr-3 text-lg mt-3 text-gray-700">
							{seeker?.workDetils}
						</p>
					</div>
					<div className="col-span-3">
						{/* Create a card for from */}

						<div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
							<form>
								{/* Highest Qualification */}

								<div class="grid gap-6 mb-6 md:grid-cols-2">
									<div>
										<label
											for="hq"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{seeker?.Highest_Qualification}
										</label>
										<select
											id="hq"
											name="Qualification"
											value={values.Qualification}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											{highest_qualification?.map((edu, i) => (
												<option key={i} value={edu}>
													{edu}
												</option>
											))}
										</select>
										{errors.Qualification && touched.Qualification ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Qualification}
											</p>
										) : null}
									</div>
									<div>
										<label
											for="experience"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{seeker?.years_of_experience}
										</label>
										<select
											id="experience"
											name="Experience"
											value={values.Experience}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											{years_of_experience?.map((years, i) => (
												<option key={i} value={years}>
													{years}
												</option>
											))}
										</select>
										{errors.Experience && touched.Experience ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Experience}
											</p>
										) : null}
									</div>
								</div>

								{/* Nationlity, Gender, Location */}
								<div class="grid gap-6 mb-6 md:grid-cols-2">
									<div>
										<label
											for="current"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{seeker?.current_job_function}
										</label>
										<select
											id="current"
											name="Job_Function"
											value={values.Job_Function}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											required
										>
											{current_job_function?.map((fun, i) => (
												<option key={i} value={fun}>
													{fun}
												</option>
											))}
										</select>
										{errors.Job_Function && touched.Job_Function ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Job_Function}
											</p>
										) : null}
									</div>

									<div>
										<label
											for=""
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											Desired Job Function
										</label>

										{/* dropdown */}

										<button
											id="dropdownSearchButton"
											data-dropdown-toggle="dropdownSearch"
											class="inline-flex justify-between items-center text-sm font-medium text-center bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
											type="button"
										>
											Select 3...
											<svg
												class="w-2.5 h-2.5 ms-2.5"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 10 6"
											>
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="m1 1 4 4 4-4"
												/>
											</svg>
										</button>

										{/* <!-- Dropdown menu --> */}
										<div
											id="dropdownSearch"
											class="z-10 hidden bg-white rounded-lg shadow w-[30%]"
										>
											<div class="p-3">
												<label for="input-group-search" class="sr-only">
													Search
												</label>
												<div class="relative">
													<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
														<svg
															class="w-4 h-4 text-gray-500"
															aria-hidden="true"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 20 20"
														>
															<path
																stroke="currentColor"
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
															/>
														</svg>
													</div>
													<input
														type="text"
														id="input-group-search"
														class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
														placeholder="Search user"
													/>
												</div>
											</div>
											<ul
												class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700"
												aria-labelledby="dropdownSearchButton"
											>
												{jobFunction?.map((cate, i) => (
													<li key={i} onClick={(e) => add(cate)}>
														<div class="flex items-center p-2 rounded hover:bg-gray-100">
															<input
																id="checkbox-item-11"
																type="checkbox"
																value=""
																class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
															/>
															<label
																for="checkbox-item-11"
																class="w-full ms-2 text-sm font-medium text-gray-900 rounded0"
															>
																{cate}
															</label>
														</div>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>

								{/* Availability */}

								<div class="grid gap-6 mb-6 md:grid-cols-1">
									<div>
										<label
											for="availability"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{seeker?.availability}
										</label>
										<select
											id="availability"
											name="Availability"
											value={values.Availability}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											{availability?.map((time, i) => (
												<option key={i} value={time}>
													{time}
												</option>
											))}
										</select>
										{errors.Availability && touched.Availability ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Availability}
											</p>
										) : null}
									</div>
								</div>

								{/* File Upload */}
								<input
									class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 mb-4"
									id="file_input"
									type="file"
								></input>

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

export default Seeker;
